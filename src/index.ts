import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";
import Logger from "./utils/logger";

async function main() {
  try {
    await AppDataSource.initialize();
    Logger.info("Coonected to Postgresql");
    app.listen(3000, () => {
      Logger.log("port 300 listen");
    });
  } catch (error) {
    Logger.error(error);
  }
}

main();
