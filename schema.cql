CREATE KEYSPACE IF NOT EXISTS something WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
   AND durable_writes = true;
CREATE TABLE IF NOT EXISTS something.measurements (
     sensor_id int,
     day int,
     ts timestamp,
     temperature float,
     humidity float,
     PRIMARY KEY ((sensor_id, day), ts)
);