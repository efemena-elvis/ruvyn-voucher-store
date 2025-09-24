<template>
  <div class="status-page">
    <div class="vesicash-container">
      <div class="row">
        <div class="col-8 mx-auto">
          <!-- TOP ROW -->
          <div class="top-row">
            <router-link :to="{ name: 'VesicashHome' }" class="brand-logo">
              <VesicashBrandLogo />
            </router-link>

            <a href="" class="btn btn-primary btn-lg roobert-500"
              >Subscribe for updates</a
            >
          </div>

          <!-- ALERT ROW -->
          <div
            class="
              alert-row
              green-500-bg
              neutral-10
              roobert-400
              text-center
              tertiary-1-text
            "
            v-if="servers_up"
          >
            All of our services are online. {{ getCurrentDateTime }}
          </div>

          <!-- STATUS CONTAINER -->
          <div class="status-container">
            <StatusCard
              v-for="(status, index) in status_list"
              :key="index"
              :status="status"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER SECTION -->
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VesicashBrandLogo from "@/shared/components/icon-comps/vesicash-brand-logo";
import Footer from "@/modules/landing/components/footer";
import StatusCard from "@/modules/landing/components/status/status-card";

export default {
  name: "Status",

  components: {
    VesicashBrandLogo,
    StatusCard,
    Footer,
  },

  computed: {
    getCurrentDateTime() {
      let { d3, m3, y1, h01, b2, a0 } = this.$date
        .formatDate(this.setupDateTime())
        .getAll();

      return `${m3} ${d3} ${y1}, ${h01}:${b2} ${a0.toUpperCase()}`;
    },
  },

  watch: {
    status_list: {
      handler(value) {
        this.servers_up = value.every(
          (status) => status.status === "Operational"
        );
      },
      immediate: true,
      deep: true,
    },
  },

  data() {
    return {
      servers_up: false,

      status_list: [
        {
          title: "Auth",
          status: "-",
        },
        {
          title: "Notifications",
          status: "-",
        },
        {
          title: "Payment",
          status: "-",
        },
        {
          title: "Referral",
          status: "-",
        },
        {
          title: "Transactions",
          status: "-",
        },
        {
          title: "Upload",
          status: "-",
        },
        {
          title: "Verification",
          status: "-",
        },
        {
          title: "Widget",
          status: "-",
        },
        {
          title: "Admin",
          status: "-",
        },
      ],
    };
  },

  mounted() {
    this.$color.setPageBackgroundColor("#ffffff");
    this.fetchServiceState();
  },

  methods: {
    ...mapActions({ getServiceStatus: "general/getServiceStatus" }),

    setupDateTime() {
      let date = new Date();
      let year = date.getFullYear(),
        month =
          date.getMonth() + 1 > 9
            ? date.getMonth() + 1
            : `0${date.getMonth() + 1}`,
        day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`,
        hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`,
        minutes =
          date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;

      return `${year}-${month}-${day}T${hours}:${minutes}:00Z`;
    },

    fetchServiceState() {
      this.status_list.map((status, index) => {
        this.getServiceStatus(status.title.toLowerCase())
          .then((response) => {
            this.status_list[index].status =
              response.message === "Server is up" ? "Operational" : "Down";
          })
          .catch((err) => console.log(err));
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.status-page {
  padding-top: toRem(100);

  .top-row {
    @include flex-row-between-nowrap;
    margin-bottom: toRem(60);
    align-items: center;

    .brand-logo {
      svg {
        width: toRem(280);
        height: auto;
      }
    }
  }

  .alert-row {
    margin-bottom: toRem(76);
    padding: toRem(12);
  }

  .status-container {
    margin-bottom: toRem(100);
  }
}
</style>