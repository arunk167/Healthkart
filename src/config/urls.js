const API_BASE_URL = 'https://api.talktier.com';
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const LOGIN = getApiUrl('/user/v1/loginSignupOtp'); 
export const SIGNUP=getApiUrl('/user/registerUser')
export const UPLOADIMAGE=getApiUrl('/common/uploadFile')
export const OTPVERIFY=getApiUrl('/user/v1/verifyOtp')
