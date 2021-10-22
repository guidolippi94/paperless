<template>
  <card>
    <div slot="header" class="row align-items-center">
      <div class="col-8">
        <h3 class="mb-0">Edit profile</h3>
      </div>
    </div>

    <form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">Basic Informations</h6>

      <div class="pl-lg-4">
        <div class="row">
          <div class="col-lg-6">
            <base-input
              type="text"
              label="First Name"
              placeholder="First Name"
              v-model="user.firstName"
            >
            </base-input>
          </div>
          <div class="col-lg-6">
            <base-input
              type="text"
              label="Last Name"
              placeholder="Last Name"
              v-model="user.lastName"
            >
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <base-input
              type="text"
              label="Company"
              placeholder="Company name"
              v-model="user.company"
            >
            </base-input>
          </div>
          <div class="col-lg-6">
            <base-input
              type="text"
              label="Role"
              placeholder="Your Role"
              v-model="user.role"
            >
            </base-input>
          </div>
        </div>
      </div>
      <hr class="my-4" />

      <!-- Contact Info -->
      <h6 class="heading-small text-muted mb-4">Contact information</h6>

      <div class="pl-lg-4">
        <div class="row">
          <div class="col-lg-6">
            <base-input
              type="email"
              label="Email address"
              placeholder="mike@email.com"
              v-model="user.email"
            >
            </base-input>
          </div>
          <div class="col-lg-6">
            <base-input
              type="number"
              label="Phone Number"
              placeholder="333 333 333 333"
              v-model="user.phoneNumber"
            >
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <base-input
              type="text"
              label="Website"
              placeholder="Your website"
              v-model="user.website"
            >
            </base-input>
          </div>
        </div>
      </div>

      <hr class="my-4" />
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">About me</h6>
      <div class="pl-lg-4">
        <div class="form-group">
          <label class="form-control-label">About Me</label>
          <textarea
            rows="4"
            class="form-control"
            placeholder="A few words about you ..."
            v-model="user.description"
          ></textarea>
        </div>
      </div>
      <div class="row pl-4">
        <div class="col-lg-6">
          <label class="form-control-label">Profile Image</label>
          <dropzone-file-upload
            v-model="fileSingle"
            :multiple="false"
          ></dropzone-file-upload>
        </div>
        <div class="col-lg-4" v-if="this.fileSingle.length === 0">
          <img
            slot="image"
            class="card-img-top"
            :src="user.imageUrl"
            alt="Card image cap"
          />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-12">
          <loading-panel v-if="isLoading" />
          <base-button type="primary" @click.prevent="updateProfile()" v-else>
            <i class="ni ni-check-bold mr-2"></i>Update Profile
          </base-button>
        </div>
      </div>
    </form>
  </card>
</template>
<script>
import VCard from "vcard-creator";
import DropzoneFileUpload from "../../argon-core/Inputs/DropzoneFileUpload.vue";
import LoadingPanel from "../../argon-core/LoadingPanel.vue";

export default {
  components: { DropzoneFileUpload, LoadingPanel },
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
      isLoading: false,
      fileSingle: [],
      newImageUrl: null,
      user: {
        company: "",
        email: "",
        firstName: "",
        lastName: "",
        website: "",
        role: "",
        phoneNumber: "",
        description: "",
        imageUrl: "",
      },
    };
  },

  methods: {
    async updateProfile() {
      this.isLoading = true;

      // Upload image if user had changed
      const uid = this.$store.state.authUser.uid;

      if (this.fileSingle.length > 0) {
        const storageRef = await this.$fire.storage
          .ref(`profileImages/${uid}`)
          .put(this.fileSingle[0]);
        this.newImageUrl = await storageRef.ref.getDownloadURL();
        this.user.imageUrl = this.newImageUrl;
      }

      // Update user doc
      try {
        await this.$fire.firestore.doc(`users/${uid}`).set(
          {
            ...this.user,
          },
          { merge: true }
        );
      } catch (e) {
        console.log(`Error in updating user data: ${JSON.stringify(e)}`);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
<style></style>
