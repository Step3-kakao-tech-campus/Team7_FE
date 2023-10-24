// 웹 사이트에서 확장 프로그램이 설치되어있는 확인하기 위함.
document.documentElement.setAttribute('myextension', true);

document.addEventListener('이벤트', (e) => {
  console.log(e.detail.content);
});
