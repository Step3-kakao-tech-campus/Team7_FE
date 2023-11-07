const REGEX = {
  email: () => /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]{2,}$/,
  name: () => /^[^\s]{2,10}$/,
  password: () => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[^\s]{8,20}$/,
  webAddress: () => /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/,
};

export default REGEX;
