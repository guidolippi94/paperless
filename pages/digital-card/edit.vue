<template>
  <div>
    <div class="header pb-6 d-flex align-items-center profile-header">
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Hello Jesse</h1>
            <p class="text-white mt-0 mb-5">
              This is your profile page. You can see the progress you've made
              with your work and manage your projects or assigned tasks
            </p>
            <a href="#!" class="btn btn-neutral">Edit profile</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-2 order-xl-1"></div>
        <div class="col-xl-8 order-xl-1">
          <edit-profile-form></edit-profile-form>
        </div>
        <div class="col-xl-2 order-xl-1"></div>
      </div>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "~/components/pages/UserProfile/EditProfileForm.vue";
import UserCard from "~/components/pages/UserProfile/UserCard.vue";
import ProgressTrackList from "~/components/widgets/ProgressTrackList.vue";

export default {
  middleware: "authenticated",
  layout: "DashboardLayout",
  components: {
    EditProfileForm,
    UserCard,
    ProgressTrackList,
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
