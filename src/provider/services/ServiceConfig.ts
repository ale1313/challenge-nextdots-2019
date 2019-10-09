import { settings, apiConnector } from "../base";

const APIConnector = new apiConnector({ timeout: 50000 });

export default class ServiceConfig {
  static get endpoint() {
    return `${settings.apiRestEndpoint}`;
  }

  static get cocktails() {
    return `${ServiceConfig.endpoint}/filter.php?g=Cocktail_glass`;
  }

  static get cocktailsById() {
    return `${ServiceConfig.endpoint}/lookup.php`;
  }

  static get APIConnector() {
    return APIConnector;
  }
}
