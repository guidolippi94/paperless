const state = () => ({
  user: {
    uid: "",
    email: "",
    emailVerified: false,
    isLoggedIn: false
  }
});

const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (!authUser) {
      claims = null;
      state.user.uid = "";
      state.user.email = "";
      state.user.emailVerified = false;
      state.user.isLoggedIn = false;
    } else {
      const { uid, email, emailVerified } = authUser;
      state.user = { uid, email, emailVerified, isLoggedIn: true };
    }
  }
};

const actions = {
  onAuthStateChangedAction(state, { authUser, claims }) {
    // if (authUser === null) {
    //   const emptyUser = {
    //     uid: "",
    //     email: "",
    //     emailVerified: false
    //   };
    //   const { uid, email, emailVerified } = emptyUser;
    //   state.user = { uid, email, emailVerified };
    //   // redirect from here
    //   //   this.$router.push({
    //   //     path: "/login"
    //   //   });
    // } else {
    //   // Fetch user data from firestore
    //   state.commit("ON_AUTH_STATE_CHANGED_MUTATION", authUser);
    // }
  }
};

const getters = {
  getUser(state) {
    return state.user;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
