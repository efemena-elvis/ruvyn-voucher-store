<template>
  <div class="escrow-value-section two-column-section">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('escrow-img-one.png', 'landing-v2')"
              alt="Escrow"
              class="wt-100"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 copy-content">
          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            {{ section.title }}
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            {{ section.description }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EscrowValueSection",

  computed: {
    ...mapGetters({ getEscrowPage: "cms/getEscrowPage" }),

    section() {
      return this.getEscrowPage?.secondary_hero_section;
    },
  },
};
</script>

<style lang="scss" scoped>
.escrow-value-section {
  .content-wrapper {
    .copy-content {
      padding-left: toRem(60);

      @include breakpoint-down(md) {
        padding-left: toRem(15);
        margin-bottom: 0;
      }
    }

    .image-section {
      @include breakpoint-down(md) {
        margin-bottom: toRem(60);
      }
    }
  }
}
</style>
