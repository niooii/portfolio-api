use std::collections::HashMap;
use octocrab::Octocrab;
use dotenvy::dotenv;
mod github_stats;
use github_stats::GithubStats;
use actix_web::{web, App, HttpResponse, HttpServer, Responder};

#[actix_web::main]
async fn main() -> anyhow::Result<()> {

    println!("Hello, world!");
    dotenv().expect(".env file not found");

    let token = std::env::var("GITHUB_TOKEN").expect("GITHUB_TOKEN env variable is required");
    
    let mut gh_stats = GithubStats::new(token).await?;

    let yes = gh_stats.get_total_lang_stats_percentage();
        println!("{:?}", yes);

    let total_percent: f32 = yes.iter().map(|(_name, percent)| *percent).sum();
    println!("{total_percent}");

    HttpServer::new(|| {
        App::new().service(
            web::scope("/api")
                .route("/stats/languages", web::get().to(language_stats))
        )
    })
    .bind(("127.0.0.1", 8080))?
    .run().await?;
//a
    Ok(())
}

async fn language_stats() -> impl Responder {
    "HI"
}

trait async_trait_test {
    async fn test();
}