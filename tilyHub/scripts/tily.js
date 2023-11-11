// 웹 사이트에서 확장 프로그램이 설치되어있는 확인하기 위함.
try {
  document.documentElement.setAttribute('myextension', true);

  const targetElement = document.getElementById('tilyhub');

  // 대상 요소에 새 클래스를 추가합니다.
  targetElement.classList.add('tilytily');
} catch (e) {
  console.log(e);
}

document.addEventListener('크롬익스텐션이벤트', (e) => {
  commitContentToGitHub({
    isPersonal: e.detail.isPersonal,
    roadmapTitle: e.detail.roadmapTitle,
    stepTitle: e.detail.stepTitle,
    content: e.detail.content,
  });
});

const commitContentToGitHub = async ({ isPersonal, roadmapTitle, stepTitle, content }) => {
  const updateData = getGitUploadData({ isPersonal, roadmapTitle, stepTitle, content });
  await beginUpload(updateData);
};

/**
 * 문제의 문제의 업로드할 디렉토리, 커밋 메시지, 리드미 데이터를 반환합니다.
 * @param {Object} 함수의 매개변수를 담고 있는 객체
 * @param {boolean} isPersonal - 개인 로드맵 / 틸리 + 그룹 로드맵인지 여부를 판단하는 변수
 * @param {string} roadmapTitle - 로드맵의 제목
 * @param {string} stepTitle - 단계의 제목
 * @param {string} content - 유저 작성한 학습일지 데이터
 * @returns {Object} { directory, message, readme }
 */
const getGitUploadData = ({ isPersonal, roadmapTitle, stepTitle, content }) => {
  const directory = isPersonal
    ? `개인 로드맵/${roadmapTitle}/${stepTitle}`
    : `틸리 로드맵 + 그룹 로드맵/${roadmapTitle}/${stepTitle}`;
  const message = `Sync TIL to GitHub - ${stepTitle}`;
  const readme = content;
  // prettier-ignore-end
  return {
    directory,
    message,
    readme,
  };
};

/* 파싱 직후 실행되는 함수 */
const beginUpload = async (updateData) => {
  if (isNotEmpty(updateData)) {
    await uploadOnGitHub(updateData);
  }
};
