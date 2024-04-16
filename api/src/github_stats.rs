use std::{collections::HashMap, hash::Hash};
use octocrab::Octocrab;

#[derive(Debug)]
pub struct GithubStats {
    octocrab: Octocrab,
    pub repos: Vec<Repo>,
}

impl GithubStats {
    pub async fn new(gh_token: String) -> Result<Self, octocrab::Error> {
        let mut gh_stats = Self {
            octocrab: Octocrab::builder().personal_token(gh_token).build()?,
            repos: Vec::new()
        };

        gh_stats.refresh().await?;

        Ok(gh_stats)
    }
    pub async fn refresh(&mut self) -> Result<(), octocrab::Error> {
        let repos = self.octocrab
        .current()
        .list_repos_for_authenticated_user()
        .affiliation("owner")
        .per_page(100)
        .send()
        .await?
        .into_iter()
        .filter(|repo| repo.fork.unwrap() == false && repo.size.unwrap() != 0)
        .collect::<Vec<_>>();


        let futures = repos.into_iter().map(|repo| {
            let octocrab_clone = self.octocrab.clone();
            async move {
                let owner_login = repo.owner.unwrap().login;
                let repo_name = repo.name.clone();
                let is_public = repo.visibility.as_deref().unwrap() == "public";
                let url = repo.url;
                let langs = octocrab_clone
                    .repos(&owner_login, &repo_name)
                    .list_languages().await?;
                Ok::<_, octocrab::Error>((repo_name, langs, is_public, url))
            }        
        });

        let results: Vec<_> = futures::future::join_all(futures).await;
        // let results: Vec<HashMap<_, _>> = results.into_iter().filter(|r| r.is_ok()).map(|r| r.unwrap()).collect();
        
        let mut repo_info = HashMap::new();

        for result in results {
            match result {
                Ok((repo_name, languages, is_public, url)) => {
                    let mut filtered_languages = languages.clone();
                    if filtered_languages.contains_key("Dart") {
                        filtered_languages.retain(|k, _v| k == "Dart");
                    }
                    repo_info.insert(
                        repo_name, 
                        (filtered_languages.into_iter()
                        .map(|(name, bytes)| LanguageInfo{name, bytes})
                        .collect::<Vec<_>>(),
                        is_public,
                        url)
                    );
                }
                Err(err) => {
                    eprintln!("Error processing repository: {:?}", err);
                }
            }
        }

        self.repos = repo_info.into_iter().map(|(repo_name, (langs, is_public, url))| {
            Repo::new(repo_name, langs, is_public, url.to_string())
        }).collect();

        Ok(())
    }

    // actual interesting stuff 
    pub fn get_total_lang_stats_bytes(&self) -> HashMap<String, i64> {
        let mut lang_map = HashMap::new();

        for repo in &self.repos {
            for lang_info in repo.languages() {
                let count = lang_map.entry(lang_info.name.clone()).or_insert(0);
                *count += lang_info.bytes;
                // println!("repo {} contributed {} bytes of {}", repo.name, lang_info.bytes, lang_info.name);
            }
        }

        lang_map
    }

    pub fn get_total_lang_stats_percentage(&self) -> HashMap<String, f32> {
        
        let lang_stats_bytes = self.get_total_lang_stats_bytes();
        let total_bytes: i64 = lang_stats_bytes.iter()
        .map(|(name, bytes)| *bytes)
        .sum();
    
        let lang_stats_percent = lang_stats_bytes.into_iter()
        .map(|(name, bytes)| (name, bytes as f32 / total_bytes as f32)) 
        .collect();
        
        lang_stats_percent
    }
}

#[derive(Debug)]
pub struct Repo {
    name: String,
    languages: Vec<LanguageInfo>,
    is_public: bool,
    url: String,
}

impl Repo {
    pub fn new(name: String, languages: Vec<LanguageInfo>, is_public: bool, url: String) -> Self {
        Self {
            name,
            languages,
            is_public,
            url,
        }
    }
    pub fn name(&self) -> &String {
        &self.name
    }
    pub fn languages(&self) -> &Vec<LanguageInfo> {
        &self.languages
    }
    pub fn is_public(&self) -> bool {
        self.is_public
    }
    pub fn url(&self) -> &String {
        &self.url
    }
}

#[derive(Debug)]
pub struct LanguageInfo {
    pub name: String,
    pub bytes: i64
}