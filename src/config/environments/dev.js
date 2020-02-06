import { appUtils } from "../../utilities/app.utils";

export const dev = {
  env: "dev",
  mufasaTemplateUrl: "https://mufasa-qa.interswitchng.com/p/templates",
  portalUrl: "https://isw-portal-v2-uat.k8.isw.la",
  xsrfToken: document.getElementById("csrf-token")
    ? document.getElementById("csrf-token").getAttribute("content")
    : appUtils.getCookie("XSRF-TOKEN"),
  xsrfTokenHeader: document.getElementById("csrf-token")
    ? document.getElementById("csrf-header").getAttribute("content")
    : "X-XSRF-TOKEN"
};
