/* eslint-disable no-undef */

let action = false;

$('#authenticate').on('click', () => {
  if (action) {
    oAuth2.begin();
  }
});

chrome.storage.local.get('TILyHub_token', (data) => {
  const token = data.TILyHub_token;
  if (token === null || token === undefined) {
    action = true;
    $('#auth_mode').show();
  }
});
