const REGEX = {
  email: () => /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  name: () => /^[^\s]{2,10}$/,
  password: () => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[^\s]{8,20}$/,
  webAddress: () => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
  yotubueAddress: () => /<iframe.*?src="([^"]+)".*?<\/iframe>/,
};

export default REGEX;

// 이메일 정규표현식 https://velog.io/@fall031/%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D
