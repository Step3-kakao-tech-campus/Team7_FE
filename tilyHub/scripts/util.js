/**
 * 해당 값이 null 또는 undefined인지 체크합니다.
 * @param {any} value - 체크할 값
 * @returns {boolean} - null이면 true, null이 아니면 false
 */
const isNull = (value) => {
  return value === null || value === undefined;
};

/**
 * 해당 값이 비어있거나 빈 문자열인지 체크합니다.
 * @param {any} value - 체크할 값
 * @returns {boolean} - 비어있으면 true, 비어있지 않으면 false
 */
const isEmpty = (value) => {
  return isNull(value) || (Object.prototype.hasOwnProperty.call(value, 'length') && value.length === 0);
};

/** 객체 또는 배열의 모든 요소를 재귀적으로 순회하여 값이 비어있지 않은지 체크합니다.
 * 자기 자신의 null값이거나 빈 문자열, 빈 배열, 빈 객체인 경우이거나, 요소 중 하나라도 값이 비어있으면 false를 반환합니다.
 * @param {any} obj - 체크할 객체 또는 배열
 * @returns {boolean} - 비어있지 않으면 true, 비어있으면 false
 */
const isNotEmpty = (obj) => {
  if (isEmpty(obj)) return false;
  if (typeof obj !== 'object') return true;
  if (obj.length === 0) return false;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (!isNotEmpty(obj[key])) return false;
    }
  }
  return true;
};

/**
 * base64로 문자열을 base64로 인코딩하여 반환합니다.
 * @param {string} str - base64로 인코딩할 문자열
 * @returns {string} - base64로 인코딩된 문자열
 */
const b64EncodeUnicode = (str) => {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode(`0x${p1}`);
    }),
  );
};
