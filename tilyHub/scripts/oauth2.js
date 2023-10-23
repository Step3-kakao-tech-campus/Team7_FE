/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
const oAuth2 = {
  /**
   * Initialize
   */
  init() {
    this.KEY = 'TILyHub_token';
    this.ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';
    this.AUTHORIZATION_URL = 'https://github.com/login/oauth/authorize';
    this.CLIENT_ID = '8d5b1ccf732a48a5cdd3';
    this.CLIENT_SECRET = 'c0879c62b8e9c9accc1bd72fb822145e72d181a2';
    this.REDIRECT_URL = 'https://github.com/'; // for example, https://github.com
    this.SCOPES = ['repo'];
  },

  /**
   * Begin
   */
  begin() {
    this.init(); // secure token params.

    let url = `${this.AUTHORIZATION_URL}?client_id=${this.CLIENT_ID}&redirect_uri${this.REDIRECT_URL}&scope=`;

    for (let i = 0; i < this.SCOPES.length; i += 1) {
      url += this.SCOPES[i];
    }

    chrome.storage.local.set({ pipe_TILyHub: true }, () => {
      // opening pipe temporarily
      chrome.tabs.create({ url, selected: true }, function () {
        window.close();
        chrome.tabs.getCurrent(function (tab) {
          chrome.tabs.remove(tab.id, function () {});
        });
      });
    });
  },
};
