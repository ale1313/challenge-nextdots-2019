import ServiceConfig from "./ServiceConfig";

export default class DrinkService {
  static getDrinks(text: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = `${ServiceConfig.drinks}${text}`;
        const response: any = await ServiceConfig.APIConnector.get(endpoint);
        if (response.__ok) {
          delete response.__ok;
          resolve(response);
        } else reject();
      } catch (error) {
        reject(error);
      }
    });
  }
}
