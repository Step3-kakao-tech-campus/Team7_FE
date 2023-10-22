export const EMAIL_REGEX = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]{2,}$/;
export const NAME_REGEX = /^[^\s]{2,10}$/;
export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[^\s]{8,20}$/;
export const WEBADDRESS_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
