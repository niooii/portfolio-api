CREATE KEYSPACE IF NOT EXISTS misc
   WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
   AND durable_writes = true;

CREATE TABLE IF NOT EXISTS misc.messages (
     author varchar,
     day int,
     ts timestamp,
     temperature float,
     humidity float,
     PRIMARY KEY ((sensor_id, day), ts)
);