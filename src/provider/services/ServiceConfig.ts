import { APIConnector } from "..";
import config from "../../config";
import { DrinksList } from "../../screens/";

const apiConnector = new APIConnector({ timeout: 50000 });

export default class ServiceConfig {
  static props: any;
  static get endpoint(): string {
    return `${config.API_URL}`;
  }

  static get drinks(): string {
    return `${ServiceConfig.endpoint}/search.php?s=`;
  }

  static get APIConnector(): APIConnector {
    return apiConnector;
  }
}
