<template>
  <div>
    <base-header class="pb-6" type="">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 d-inline-block mb-0">Dashboard</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <ol class="breadcrumb breadcrumb-links">
              <li class="breadcrumb-item">
                <nuxt-link to="/"><i class="fas fa-home"></i></nuxt-link>
              </li>
              <li class="breadcrumb-item"><a href="#">Dashboards</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Alternative
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <!-- Card 1 -->
        <div class="col-xl-3 col-md-6">
          <div class="card bg-gradient-primary border-0">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5
                    class="card-title text-uppercase text-muted mb-0 text-white"
                  >
                    edit your digital card
                  </h5>
                </div>
                <div class="col-auto">
                  <p class="mt-3 mb-0 text-sm text-white">
                    Here you can edit your digital profile and decide what other
                    can see of your digital ID
                  </p>
                </div>
              </div>
              <div class="mt-3">
                <base-button
                  tag="a"
                  type="primary"
                  size="lg"
                  href="/digital-card/edit"
                  class="active"
                  role="button"
                  aria-pressed="true"
                  ><i class="ni ni-ruler-pencil"></i> Edit now</base-button
                >
              </div>
            </div>
          </div>
        </div>
        <!-- End card 1 -->
        <!-- Card 2 -->
        <div class="col-xl-3 col-md-6">
          <div class="card bg-gradient-green border-0">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5
                    class="card-title text-uppercase text-muted mb-0 text-white"
                  >
                    See how you looks like
                  </h5>
                </div>
                <div class="col-auto">
                  <p class="mt-3 mb-0 text-sm text-white">
                    Here you can see how your public business card looks like.
                    It's all based on your profile infos.
                  </p>
                </div>
              </div>
              <div class="mt-3">
                <base-button
                  tag="a"
                  type="primary"
                  size="lg"
                  href="/digital-card/view"
                  class="active"
                  role="button"
                  aria-pressed="true"
                  ><i class="ni ni-satisfied"></i> Take a look</base-button
                >
              </div>
            </div>
          </div>
        </div>
        <!-- End Card 2 -->
        <!-- Public Link -->
      </div>
      <div class="row">
        <div class="col-xl-6 col-md-6">
          <base-alert type="primary">
            <strong
              >This is you public link! Share with your new contacts</strong
            >
            <a :href="publicProfileUrl">
              {{ publicProfileUrl }}
            </a>
          </base-alert>
        </div>
        <!-- Card QR code -->
        <qr-code-card :propUrl="publicProfileUrl" />
      </div>
    </base-header>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/argon-core/Charts/config";
import LineChart from "@/components/argon-core/Charts/LineChart";
import BarChart from "@/components/argon-core/Charts/BarChart";

// Components
import BaseHeader from "@/components/argon-core/BaseHeader";
import BaseProgress from "@/components/argon-core/BaseProgress";
import RouteBreadCrumb from "@/components/argon-core/Breadcrumb/RouteBreadcrumb";
import StatsCard from "@/components/argon-core/Cards/StatsCard";

// Lists
import ProgressTrackList from "~/components/pages/dashboard/ProgressTrackList";
import MembersCard from "~/components/widgets/MembersCard";
import TaskList from "~/components/widgets/TaskList";

// Tables
import LightTable from "~/components/pages/dashboard/LightTable";
import VectorMapCard from "~/components/widgets/VectorMapCard";
import QrCodeCard from "../components/pages/dashboard/QrCodeCard.vue";

export default {
  layout: "DashboardLayout",
  components: {
    LineChart,
    BarChart,
    BaseHeader,
    BaseProgress,
    RouteBreadCrumb,
    StatsCard,
    TaskList,
    VectorMapCard,
    LightTable,
    ProgressTrackList,
    MembersCard,
    QrCodeCard,
  },
  data() {
    return {
      baseUrl: "https://paperless.appsalad.it/digital-card/public/",
    };
  },
  computed: {
    publicProfileUrl() {
      return this.baseUrl + this.$store.state.authUser.uid;
    },
  },
};
</script>
<style></style>
