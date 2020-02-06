import { appUtils } from "../../utilities/app.utils";

export const production = {
  env: "prod",
  portalUrl: "https://portal.interswitchgroup.com",
  mufasaTemplateUrl: "https://mufasa-qa.interswitchng.com/p/templates",
  xsrfToken: document.getElementById("csrf-token")
    ? document.getElementById("csrf-token").getAttribute("content")
    : appUtils.getCookie("XSRF-TOKEN"),
  xsrfTokenHeader: document.getElementById("csrf-token")
    ? document.getElementById("csrf-header").getAttribute("content")
    : "X-XSRF-TOKEN"
};
