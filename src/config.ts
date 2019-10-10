import {
  // @ts-ignore
  STAGING_API_URL,
  // @ts-ignore
  PRODUCTION_API_URL,
  // @ts-ignore
  API_CONNECTOR_LOGS_ACTIVATED
} from "react-native-dotenv";

const isProduction = false;

console.table(
  [
    {
      id: "IS_PRODUCTION_MODE",
      value: isProduction
    },
    {
      id: "API_CONNECTOR_LOGS_ACTIVATED",
      value: API_CONNECTOR_LOGS_ACTIVATED
    }
  ].reduce((acc: any, { id, ...x }) => {
    acc[id] = x;
    return acc;
  }, {})
);

interface Config {
  isDev: boolean;
  API_URL: string;
  API_CONNECTOR_LOGS_ACTIVATED: boolean;
}

const Config = {
  isDev: __DEV__,
  API_URL: isProduction ? PRODUCTION_API_URL : STAGING_API_URL,
  API_CONNECTOR_LOGS_ACTIVATED: API_CONNECTOR_LOGS_ACTIVATED === "true"
};

export default Config;
