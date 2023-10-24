// 웹 사이트에서 확장 프로그램이 설치되어있는 확인하기 위함.
document.documentElement.setAttribute('myextension', true);

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

