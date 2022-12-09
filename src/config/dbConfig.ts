import { DataSource } from "typeorm";

const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1qazxsw2@",
  database: "csv_test",
  entities: ["src/entity/*.ts"],
  logging: true,
  synchronize: true,
});

export { myDataSource };
