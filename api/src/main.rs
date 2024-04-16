use std::collections::HashMap;
use octocrab::Octocrab;
use dotenvy::dotenv;
use futures::stream::StreamExt;

#[tokio::main]
async fn main() -> octocrab::Result<()> {
    println!("Hello, world!");
    dotenv().expect(".env file not found");

    let token = std::env::var("GITHUB_TOKEN").expect("GITHUB_TOKEN env variable is required");
    let octocrab = Octocrab::builder().personal_token(token).build()?;

    let repos = octocrab
        .current()
        .list_repos_for_authenticated_user()
        .affiliation("owner,collaborator")
        .per_page(100)
        .send()
        .await?
        .into_iter()
        .filter(|repo| repo.fork.unwrap() == false && repo.size.unwrap() != 0)
        .collect::<Vec<_>>();

    let mut lang_maps = HashMap::new();

    let futures = repos.into_iter().map(|repo| {
        let octocrab_clone = octocrab.clone();
        let owner_login = repo.owner.unwrap().login;
            let repo_name = repo.name.clone();
            octocrab_clone
                .repos(&owner_login, &repo_name)
                .list_languages()
    });

    let results: Vec<_> = futures::future::join_all(futures).await;
    let results: HashMap<_, _> = results.into_iter().filter(|r| r.is_ok()).map(|r| r.unwrap()).collect();

    for result in results {
        match result {
            Ok((repo_name, languages)) => {
                let mut filtered_languages = languages.clone(); 
                if filtered_languages.contains_key("Dart") {
                    filtered_languages.retain(|k, _v| k == "Dart");
                }
                lang_maps.insert(repo_name, filtered_languages);
            }
            Err(err) => {
                eprintln!("Error processing repository: {:?}", err);
            }
        }
    }

    println!("{:?}", lang_maps);

    Ok(())
}