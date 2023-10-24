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
  } else {
    // To validate user, load user object from GitHub.
    const AUTHENTICATION_URL = 'https://api.github.com/user';

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          /* Show MAIN FEATURES */
          chrome.storage.local.get('mode_type', (data2) => {
            if (data2 && data2.mode_type === 'commit') {
              $('#commit_mode').show();
              /* Get problem stats and repo link */
              chrome.storage.local.get(['stats', 'TILyHub_hook'], (data3) => {
                const BaekjoonHubHook = data3.TILyHub_hook;
                if (BaekjoonHubHook) {
                  $('#repo_url').html(
                    `Your Repo: <a target="blank" style="color: cadetblue !important;" href="https://github.com/${BaekjoonHubHook}">${BaekjoonHubHook}</a>`,
                  );
                }
              });
            } else {
              $('#hook_mode').show();
            }
          });
        } else if (xhr.status === 401) {
          // bad oAuth
          // reset token and redirect to authorization process again!
          chrome.storage.local.set({ TILyHub_token: null }, () => {
            console.log('BAD oAuth!!! Redirecting back to oAuth process');
            action = true;
            $('#auth_mode').show();
          });
        }
      }
    });
    xhr.open('GET', AUTHENTICATION_URL, true);
    xhr.setRequestHeader('Authorization', `token ${token}`);
    xhr.send();
  }
});
