/** 업로드 함수
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
    const detail = {
      message: '업로드할 깃허브 레포를 지정해주세요.',
    };
    const event = new CustomEvent('크롬익스텐션에러', { detail });
    document.dispatchEvent(event);

    console.error('token or hook is null', token, hook);
    return;
  }
  return upload(token, hook, updateData.readme, updateData.directory, updateData.message, cb);
};

/** Github api를 사용하여 업로드를 합니다.
 * @param {string} token - github api 토큰
 * @param {string} hook - github api hook
 * @param {string} sourceText - 업로드할 소스코드
 * @param {string} readmeText - 업로드할 readme
 * @param {string} directory - 업로드할 파일의 경로
 * @param {string} filename - 업로드할 파일명
 * @param {string} commitMessage - 커밋 메시지
 * @param {function} cb - 콜백 함수 (ex. 업로드 후 로딩 아이콘 처리 등)
 */
const upload = async (token, hook, readmeText, directory, commitMessage, cb) => {
  /* 업로드 후 커밋 */
  const githubIcon = document.getElementById('github_extenstion');
  githubIcon.classList.add('swing');

  const git = new GitHub(hook, token);
  const { refSHA, ref } = await git.getReference();
  const readme = await git.createBlob(readmeText, `${directory}/README.md`); // readme 파일
  const treeSHA = await git.createTree(refSHA, [readme]);
  const commitSHA = await git.createCommit(commitMessage, treeSHA, refSHA);
  await git.updateHead(ref, commitSHA);
  githubIcon.classList.remove('swing');

  // 콜백 함수 실행
  if (typeof cb === 'function') cb();
};
