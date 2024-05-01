CREATE KEYSPACE IF NOT EXISTS misc
   WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
   AND durable_writes = true;

CREATE TABLE IF NOT EXISTS misc.messages (
     author varchar,
     msg varchar,
     time_posted timestamp,
     zero_key tinyint,
     PRIMARY KEY (zero_key, time_posted)
);