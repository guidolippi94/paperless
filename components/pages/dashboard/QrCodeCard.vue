<template>
  <div class="col-xl-6 col-md-6">
    <div class="card bg-gradient-green border-0">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h5 class="card-title text-uppercase text-muted mb-0 text-white">
              Hey! We've just generated a QR code for your profile!
            </h5>
          </div>
          <div class="col-auto">
            <p class="mt-3 mb-0 text-sm text-white">
              You could save this image, print and use it wherever you want!
              It's yours, forever.
            </p>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col"></div>
          <div class="col">
            <qrcode-vue :value="propUrl" :size="size" level="H" />
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  props: {
    propUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: "https://example.com",
      size: 300,
    };
  },
  components: {
    QrcodeVue,
  },
};
</script>

<style>
</style>