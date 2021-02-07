const initialState = {
  name : "noa",
  age : 27,
  password : '1234',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_NICKNAME' : 
    return {
      ...state,
      name : action.data,
    };
  }
};

export default rootReducer;