/* eslint-disable no-undef */
function handleMessage(request, sender, sendResponse) {
  if (request && request.closeWebPage === true && request.isSuccess === true) {
    /* Set username */
    chrome.storage.local.set({ TILyHub_username: request.username });

    /* Set token */
    chrome.storage.local.set({ TILyHub_token: request.token });

    /* Close pipe */
    chrome.storage.local.set({ pipe_TILyHub: false });

    /* Go to onboarding for UX */
    const urlOnboarding = `chrome-extension://${chrome.runtime.id}/welcome.html`;
    chrome.tabs.create({ url: urlOnboarding, selected: true }); // creates new tab
  } else if (request && request.closeWebPage === true && request.isSuccess === false) {
    alert('Something went wrong while trying to authenticate your profile!');
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.remove(tab.id);
    });
  }
}

chrome.runtime.onMessage.addListener(handleMessage);
