const RedirectAuth = {
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
   * Parses Access Code
   *
   * @param url The url containing the access code.
   */
  parseAccessCode(url) {
    if (url.match(/\?error=(.+)/)) {
      chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.remove(tab.id, function () {});
      });
    } else {
      // eslint-disable-next-line
      const accessCode = url.match(/\?code=([\w\/\-]+)/);
      if (accessCode) {
        this.requestToken(accessCode[1]);
      }
    }
  },

RedirectAuth.init();
const link = window.location.href;

/* Check for open pipe */
if (window.location.host === 'github.com') {
  chrome.storage.local.get('pipe_TILyHub', (data) => {
    if (data && data.pipe_baekjoonhub) {
      RedirectAuth.parseAccessCode(link);
    }
  });
}
