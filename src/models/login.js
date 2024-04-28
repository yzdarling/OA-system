export default {
  namespace: 'login',
  state: {
    userinfo: localStorage.getItem('userinfo')
      ? JSON.parse(localStorage.getItem('userinfo'))
      : null,
  },
  reducers: {
    /**
     * 更新用户信息
     *  */
    updateUser(state) {
      return {
        ...state,
      };
    },
  },
  effects: {
    *Login(_, { call, put }) {
      yield call();
      yield put({
        type: 'updateUser',
      });
    },
  },
};
