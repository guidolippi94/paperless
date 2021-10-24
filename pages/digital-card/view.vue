<template>
  <div>
    <div class="header pb-6 d-flex align-items-center profile-header">
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Hello</h1>
            <p class="text-white mt-0 mb-5">
              This is your profile page. You can see the progress you've made
              with profile customization and also see how you appear to other
              user when they reach your digital card.
            </p>
            <a href="/digital-card/edit" class="btn btn-neutral"
              >Edit profile</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-2 order-xl-2"></div>
        <div class="col-xl-8 order-xl-2">
          <user-card :user-prop="user"></user-card>
          <!-- <progress-track-list></progress-track-list> -->
        </div>
        <div class="col-xl-2 order-xl-2"></div>
        <!-- <div class="col-xl-8 order-xl-1">
          <div class="row">
            <div class="col-lg-6">

              <card gradient="info" class="border-0">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-uppercase text-muted mb-0 text-white">Total traffic</h5>
                    <span class="h2 font-weight-bold mb-0 text-white">350,897</span>
                  </div>
                  <div class="col-auto">
                    <div class="icon icon-shape bg-white text-dark rounded-circle shadow">
                      <i class="ni ni-active-40"></i>
                    </div>
                  </div>
                </div>
                <p class="mt-3 mb-0 text-sm">
                  <span class="text-white mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                  <span class="text-nowrap text-light">Since last month</span>
                </p>
              </card>

            </div>
            <div class="col-lg-6">

              <card gradient="danger" class="border-0">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-uppercase text-muted mb-0 text-white">Performance</h5>
                    <span class="h2 font-weight-bold mb-0 text-white">49,65%</span>
                  </div>
                  <div class="col-auto">
                    <div class="icon icon-shape bg-white text-dark rounded-circle shadow">
                      <i class="ni ni-spaceship"></i>
                    </div>
                  </div>
                </div>
                <p class="mt-3 mb-0 text-sm">
                  <span class="text-white mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                  <span class="text-nowrap text-light">Since last month</span>
                </p>
              </card>

            </div>
          </div>
          <edit-profile-form></edit-profile-form>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "~/components/pages/UserProfile/EditProfileForm.vue";
import UserCard from "~/components/pages/UserProfile/UserCard.vue";
import ProgressTrackList from "~/components/widgets/ProgressTrackList.vue";

export default {
  layout: "DashboardLayout",
  components: {
    EditProfileForm,
    UserCard,
    ProgressTrackList,
  },
  async fetch() {
    const uid = this.$store.state.authUser.uid;
    const doc = await this.$fire.firestore.doc(`users/${uid}`).get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      console.log("Document data:", doc.data());
      this.user = doc.data();
    }
  },
  data() {
    return {
      middleware: "authenticated",
      user: {
        imageUrl: "",
        firstName: "FirstName",
        lastName: "LastName",
        email: "email@eamil.it",
        phoneNumber: "342432424243",
        website: "test.com",
        description:
          "lorem ipsum asdklasjljs sdflkjsdflsdjfl sdlfkjsdlfkjslf sdlkfjsdlkfjslfjs sdflkjsdfldsjflsd",
        role: "CTO",
      },
    };
  },
};
</script>
<style>
.profile-header {
  background-image: url(/~/static/img/theme/profile-cover.jpg);
  background-size: cover;
  background-position: center top;
  min-height: 500px;
}
</style>
