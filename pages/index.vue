<template>
  <div>
    <!--Header-->
    <div class="header bg-success pt-5 pb-7">
      <div class="container">
        <div class="header-body">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="pr-5">
                <h1 class="display-2 text-white font-weight-bold mb-0">
                  PaperLess
                </h1>
                <h2 class="display-4 text-white font-weight-light">
                  A digital business card, for a smarter and more green future.
                </h2>
                <p class="text-white mt-4">
                  PaperLess allow you to create a digital business card and
                  share it with peoople you will meet in person or remotly.
                </p>
                <div class="mt-5">
                  <nuxt-link to="/dashboard" class="btn btn-neutral my-2"
                    >Go to Dashboard</nuxt-link
                  >
                  <a href="/register" class="btn btn-default my-2"
                    >Register Now</a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row pt-5">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="
                          icon icon-shape
                          bg-gradient-red
                          text-white
                          rounded-circle
                          shadow
                          mb-4
                        "
                      >
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Base infos</h5>
                      <p>
                        You can insert your basic contact info, such as name,
                        email and phone
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="
                          icon icon-shape
                          bg-gradient-info
                          text-white
                          rounded-circle
                          shadow
                          mb-4
                        "
                      >
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Enhanced Business Card</h5>
                      <p>
                        In addition you can link you website, add a profile
                        image and much more.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 pt-lg-5 pt-4">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div
                        class="
                          icon icon-shape
                          bg-gradient-success
                          text-white
                          rounded-circle
                          shadow
                          mb-4
                        "
                      >
                        <i class="ni ni-active-40"></i>
                      </div>
                      <h5 class="h3">Coming soon</h5>
                      <p>
                        Social links and cover image will be available soon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <section class="py-6 pb-9 bg-default">
      <div class="row justify-content-center text-center">
        <div class="col-md-6">
          <h2 class="display-3 text-white">How it works</h2>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 mt--7">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div
                      class="
                        icon icon-shape
                        bg-gradient-primary
                        text-white
                        rounded-circle
                        mb-4
                      "
                    >
                      <i class="ni ni-check-bold"></i>
                    </div>
                    <h4 class="h3 text-primary text-uppercase">
                      Create an account
                    </h4>
                    <p class="description mt-3">
                      Create a new account is super easy!
                      <a href="/register">Try now </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div
                      class="
                        icon icon-shape
                        bg-gradient-success
                        text-white
                        rounded-circle
                        mb-4
                      "
                    >
                      <i class="ni ni-istanbul"></i>
                    </div>
                    <h4 class="h3 text-success text-uppercase">
                      Complete your profile
                    </h4>
                    <p class="description mt-3">
                      Insert infos you want to share with you future clients
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div
                      class="
                        icon icon-shape
                        bg-gradient-warning
                        text-white
                        rounded-circle
                        mb-4
                      "
                    >
                      <i class="ni ni-planet"></i>
                    </div>
                    <h4 class="h3 text-warning text-uppercase">
                      Share you card
                    </h4>
                    <p class="description mt-3">
                      Share your card by copy/pasting the link or via QR-code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Tooltip } from "element-ui";
export default {
  layout: "AuthLayout",
  name: "home-page",
  components: {
    [Tooltip.name]: Tooltip,
  },
};
</script>
