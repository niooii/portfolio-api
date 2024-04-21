use scylla::cql_to_rust;
use scylla::frame::value::CqlDate;
use scylla::frame::value::CqlTimestamp;
use scylla::FromRow;
use scylla::IntoTypedRows;
use scylla::Session;
use chrono::prelude::*;

#[derive(Debug, FromRow)]
pub struct GlobalMessage {
    author: String,
    msg: String,
    time_posted_ms: CqlTimestamp
}

pub async fn get_amount(session: &Session, amount: i32) -> anyhow::Result<Vec<GlobalMessage>> {
    let query_result = session.query(
        "SELECT author, msg, time_posted FROM misc.messages WHERE zero_key = 0 ORDER BY time_posted desc limit ?", 
        (amount,)
    ).await;

    query_result?.rows.map_or(Ok(Vec::new()), |rows| {
        Ok(
            rows.into_iter().map(|row| 
                row.into_typed::<GlobalMessage>().unwrap()
            ).collect()
        )
    })
}

pub async fn insert_new(session: &Session, author: &String, message: &String) -> anyhow::Result<()> {
    Ok(
        session.query(
        "INSERT INTO misc.messages (author, msg, time_posted, zero_key) VALUES (?, ?, ?, 0)", 
        (author, message, CqlTimestamp(Utc::now().timestamp_millis()))).await.map(|query_result| ()
        )?
    )
}