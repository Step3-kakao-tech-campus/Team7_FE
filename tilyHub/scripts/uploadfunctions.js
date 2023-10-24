 * 파라미터는 아래와 같습니다.
 * @param {string} readme - 업로드하는 README 내용
 * @param {string} directory - 적용될 폴더 구조
 * @param {string} message - 커밋 메시지
 * @param {function} cb - 콜백 함수 (ex. 업로드 후 로딩 아이콘 처리 등)
 * @returns {Promise<void>}
 */
const uploadOnGitHub = async (updateData, cb) => {
  const token = await getToken();
  const hook = await getHook();
  if (isNull(token) || isNull(hook)) {
    console.error('token or hook is null', token, hook);
    return;
  }
  return upload(token, hook, updateData.readme, updateData.directory, updateData.message, cb);
};
