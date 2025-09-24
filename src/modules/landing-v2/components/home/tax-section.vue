<template>
  <div class="tax-section">
    <div class="vesicash-container">
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-md-6 col-lg-5 copy-content">
          <!-- TITLE TEXT -->
          <h2 class="title-text h2-text roobert-700 grey-900 mgb-16">
            Tax Compliance
          </h2>

          <!-- DESCRIPTION TEXT -->
          <div class="description-text h6-text roobert-400 grey-700 mgb-40">
            Experience seamless management of your local tax obligations with
            our expert Merchant of Record Services
          </div>
        </div>

        <!-- IMAGE SECTION -->
        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('tax-display-image.png', 'landing-v2')"
              alt="Tax compliance"
              class="wt-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaxSection",
};
</script>

<style lang="scss" scoped>
.tax-section {
  padding: toRem(120) 0;

  @include breakpoint-down(md) {
    padding: toRem(90) 0;
  }

  @include breakpoint-down(sm) {
    padding: toRem(80) 0;
  }

  .copy-content {
    @include breakpoint-down(lg) {
      padding-right: toRem(30);
    }

    @include breakpoint-down(md) {
      padding-right: toRem(15);
      margin-bottom: toRem(20);
    }

    .title-text {
      @include breakpoint-down(xl) {
        font-size: toRem(34);
      }

      @include breakpoint-down(md) {
        @include font-height(30, 36);
      }

      @include breakpoint-down(sm) {
        @include font-height(28, 34);
      }
    }
  }

  .description-text {
    @include breakpoint-down(xl) {
      @include font-height(21, 28);
    }

    @include breakpoint-down(md) {
      @include font-height(19, 28);
    }
  }
}
</style>
