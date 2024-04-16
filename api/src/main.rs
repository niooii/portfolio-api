use std::collections::HashMap;
use octocrab::Octocrab;
use dotenvy::dotenv;
mod github_stats;
use github_stats::GithubStats;

#[tokio::main]
async fn main() -> octocrab::Result<()> {
    println!("Hello, world!");
    dotenv().expect(".env file not found");

    let token = std::env::var("GITHUB_TOKEN").expect("GITHUB_TOKEN env variable is required");
    
    let mut gh_stats = GithubStats::new(token).await?;

    let yes = gh_stats.get_total_lang_stats_bytes();
        println!("{:?}", yes);

    Ok(())
}