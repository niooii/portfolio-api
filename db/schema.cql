CREATE KEYSPACE IF NOT EXISTS test
   WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}
   AND durable_writes = true;

CREATE TABLE IF NOT EXISTS test.measurements (
     sensor_id int,
     day int,
     ts timestamp,
     temperature float,
     humidity float,
     PRIMARY KEY ((sensor_id, day), ts)
);