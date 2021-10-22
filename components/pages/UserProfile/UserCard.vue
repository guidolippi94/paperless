<template>
  <div class="card card-profile">
    <img
      src="img/theme/img-1-1000x600.jpg"
      alt="Image placeholder"
      class="card-img-top"
    />

    <div class="row justify-content-center">
      <div class="col-lg-3 order-lg-2">
        <div class="card-profile-image">
          <img :src="userProp.imageUrl" class="rounded-circle round-image" />
        </div>
      </div>
    </div>

    <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
      <div class="d-flex justify-content-between">
        <a class="btn btn-sm btn-info mr-4" @click="downloadVcard()"
          >Save contact</a
        >
        <a :href="emailLink" class="btn btn-sm btn-default float-right"
          >Send Email</a
        >
      </div>
    </div>

    <div class="card-body pt-0">
      <!-- <div class="row">
        <div class="col">
          <div class="card-profile-stats d-flex justify-content-center">
            <div>
              <span class="heading">22</span>
              <span class="description">Friends</span>
            </div>
            <div>
              <span class="heading">10</span>
              <span class="description">Photos</span>
            </div>
            <div>
              <span class="heading">89</span>
              <span class="description">Comments</span>
            </div>
          </div>
        </div>
      </div> -->
      <div class="text-center">
        <h5 class="h3">{{ userProp.firstName }} {{ userProp.lastName }}</h5>
        <div class="h5 font-weight-300">
          <i class="ni ni-badge mr-2"></i>{{ userProp.role }} |
          {{ userProp.company }}
        </div>
        <div class="row mt-5">
          <div class="col" v-if="userProp.email">
            <div><i class="ni ni-email-83"></i></div>
            <div>{{ userProp.email }}</div>
          </div>
          <div class="col" v-if="userProp.phoneNumber">
            <div><i class="ni ni-mobile-button"></i></div>
            <div>{{ userProp.phoneNumber }}</div>
          </div>
          <div class="col" v-if="userProp.website">
            <div><i class="ni ni-world-2"></i></div>
            <div>{{ userProp.website }}</div>
          </div>
        </div>
        <div class="h5 mt-4">
          <p>
            {{ userProp.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VCard from "vcard-creator";

export default {
  props: {
    userProp: {
      type: Object,
      required: true,
    },
  },
  computed: {
    emailLink() {
      return `mailto:${this.userProp.email}`;
    },
  },
  methods: {
    downloadVcard() {
      const vCard = new VCard();
      vCard
        .addName(this.userProp.lastName, this.userProp.firstName)
        .addRole(this.userProp.role)
        .addEmail(this.userProp.email)
        .addPhoneNumber(this.userProp.phoneNumber, "WORK")
        .addURL(this.userProp.website);

      console.log(`Generated vcard: ${vCard}`);
      const url = window.URL.createObjectURL(new Blob([vCard]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "blob.vcf");
      document.body.appendChild(link);
      link.click();
    },
  },
};
</script>
<style>
.round-image {
  object-fit: cover;
}
</style>
