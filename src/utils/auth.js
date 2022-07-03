import auth0 from "auth0-js";

const webAuth = new auth0.webAuth({
  domain: "vyyer.us.auth0.com",
  clientId: "LL287gURZWmL2nHgtGtbcvwCKRNAakF7",
  redirectUrl: "",
  responseType: "",
  scope: "openid profile",
});

const login = () => {
  webAuth.authorize();
};

export { login };
