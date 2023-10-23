/* eslint-disable no-undef */

let action = false;

$('#authenticate').on('click', () => {
  if (action) {
    oAuth2.begin();
  }
});

chrome.storage.local.get('BaekjoonHub_token', (data) => {
  const token = data.BaekjoonHub_token;
  if (token === null || token === undefined) {
    action = true;
    $('#auth_mode').show();
  }
});
