<template>
  <div class="business-section teal-50-bg">
    <div class="vesicash-container">
      <div class="row justify-content-between align-items-center">
        <!-- IMAGE SECTION -->
        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('business-inc-image.png', 'landing-v2')"
              alt="Business incorporation"
              class="wt-100"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-5 copy-content">
          <!-- TITLE TEXT -->
          <h2 class="title-text h2-text roobert-700 grey-900 mgb-16">
            Business Incorporation
          </h2>

          <!-- DESCRIPTION TEXT -->
          <div class="description-text h6-text roobert-400 grey-700 mgb-40">
            Get your business set up in a new country with ease
          </div>

          <a
            class="btn btn-lg btn-primary roobert-500"
            href="https://app.vesicash.com/register-lander"
            target="_blank"
            >Create an account</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessIncorporationSection",
};
</script>

<style lang="scss" scoped>
.business-section {
  padding: toRem(120) 0;

  @include breakpoint-down(md) {
    padding: toRem(90) 0;
  }

  @include breakpoint-down(sm) {
    padding: toRem(60) 0 toRem(80);
  }

  .copy-content {
    @include breakpoint-down(lg) {
      padding-left: toRem(30);
    }

    @include breakpoint-down(md) {
      padding-left: toRem(15);
      margin-top: toRem(50);
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

  .btn {
    padding: toRem(13) toRem(42);
    width: max-content;
  }
}
</style>
