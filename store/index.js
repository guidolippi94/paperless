const state = () => ({
  authUser: {
    uid: null,
    email: null,
    emailVerified: null,
    isAdmin: null
  }
});

const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
    if (authUser) {
      const { uid, email, emailVerified } = authUser;

      state.authUser = {
        uid,
        email,
        emailVerified,
        isAdmin: claims.custom_claim
      };
    }
  }
};

const actions = {
  async nuxtServerInit({ dispatch, commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const {
        allClaims: claims,
        idToken: token,
        ...authUser
      } = res.locals.user;

      //   await dispatch("onAuthStateChangedAction", {
      //     authUser,
      //     claims,
      //     token
      //   });

      // or

      commit("ON_AUTH_STATE_CHANGED_MUTATION", { authUser, claims, token });
    }
  },
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
