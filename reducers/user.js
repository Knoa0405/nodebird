export const initialState = {
  isLoggingIn : false, // 로그인 시도중
  isLoggedIn : false,
  isLoggingOut : false, // 로그아웃 시도중
  me :null,
  signUpData : {},
  logInData : {},
};

export const logInRequestAction = (data) => {
  return {
    type : "LOG_IN_REQUEST",
    data
  };
};

export const logOutRequestAction = () => {
  return {
    type : "LOG_OUT_REQUEST",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'LOG_IN_REQUEST' : 
    return {
      ...state,
      isLoggingIn : true,
    };
  case 'LOG_IN_SUCCESS' : 
    return {
      ...state,
      isLoggingIn : false,
      isLoggedIn : true,
      me : {...action.data, nickname: "knoa"},
    };
  case 'LOG_IN_FAILURE' : 
    return {
      ...state,
      isLoggingIn : false,
    };
  case 'LOG_OUT_REQUEST' : 
    return {
      ...state,
      isLoggingOut : true,
    };
  case 'LOG_OUT_SUCCESS' : 
    return {
      ...state,
      isLoggingOut : false,
      isLoggedIn : false,
      me : null,
    };
  case 'LOG_OUT_FAILURE' : 
    return {
      ...state,
      isLoggingOut : false,
      me : null,
    };
  default:
    return state;
  }
};

export default reducer;