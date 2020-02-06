import { dev } from "./environments/dev";
import { production } from "./environments/prod";

let config;

switch (process.env.REACT_APP_STAGE) {
  case "dev":
    config = dev;
    break;
  case "prod":
    config = production;
    break;
  default:
    config = dev;
}

export const appConfig = {
  ...config,
  appName: "CAC VERIFICATION SERVICE",
  apiBaseURL: '/cac-verification-service',
  apiVersion: "/api/v1"
};
