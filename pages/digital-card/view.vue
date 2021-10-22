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
        imageUrl:
          "data:image/jpeg;base64,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",
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
