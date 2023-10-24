/* eslint-disable no-undef */
/**
 * @author https://gist.github.com/sumitpore/47439fcd86696a71bf083ede8bbd5466
 * Chrome의 Local StorageArea에서 개체 가져오기
 * @param {string} key
 */
const getObjectFromLocalStorage = async (key) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(key, function (value) {
        resolve(value[key]);
      });
    } catch (ex) {
      reject(ex);
    }
  });
};

const getHook = async () => {
  return await getObjectFromLocalStorage('TILyHub_hook');
};

const getToken = async () => {
  return await getObjectFromLocalStorage('TILyHub_token');
};
