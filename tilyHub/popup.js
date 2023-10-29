/* eslint-disable no-undef */

let action = false;

$('#authenticate').on('click', () => {
  if (action) {
    oAuth2.begin();
  }
});

/* Get URL for welcome page */
// SetUpHook 버튼을 누를때 온보딩 페이지로 이동하는 링크 속성
// runtime.id가 바뀌기 떄문에 동적으로 할당함.
$('#welcome_URL').attr('href', `chrome-extension://${chrome.runtime.id}/welcome.html`);
$('#hook_URL').attr('href', `chrome-extension://${chrome.runtime.id}/welcome.html`);

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
              document.getElementById('commit_toggle').style.display = 'inherit';
              $('#commit_mode').show();
              /* Get problem stats and repo link */
              chrome.storage.local.get(['TILyHub_hook'], (data3) => {
                const BaekjoonHubHook = data3.TILyHub_hook;
                if (BaekjoonHubHook) {
                  $('#repo_url').html(
                    `Your Repo: <a target="blank" style="color: cadetblue !important;" href="https://github.com/${BaekjoonHubHook}">${BaekjoonHubHook}</a>`,
                  );
                }
              });
            } else {
              document.getElementById('commit_toggle').style.display = 'none';
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

/*
  초기에 활성화 데이터가 존재하는지 확인, 없으면 새로 생성, 있으면 있는 데이터에 맞게 버튼 조정
 */
chrome.storage.local.get('TILyEnable', (data4) => {
  if (data4.TILyEnable === undefined) {
    $('#onffbox').prop('checked', true);
    chrome.storage.local.set({ TILyEnable: $('#onffbox').is(':checked') }, () => {});
  } else {
    $('#onffbox').prop('checked', data4.TILyEnable);
    chrome.storage.local.set({ TILyEnable: $('#onffbox').is(':checked') }, () => {});
  }
});
/*
    활성화 버튼 클릭 시 storage에 활성 여부 데이터를 저장.
   */
$('#onffbox').on('click', () => {
  chrome.storage.local.set({ TILyEnable: $('#onffbox').is(':checked') }, () => {});
});
