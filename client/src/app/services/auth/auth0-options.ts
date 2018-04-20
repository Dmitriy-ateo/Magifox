interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '56Z56YACaL3OXWspROLr6pP678fXRjH6',
  domain: 'near.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
