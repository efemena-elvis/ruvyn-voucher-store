<template>
  <div class="coming-soon-section">
    <div class="vesicash-container">
      <!-- HEADER TEXT -->
      <div class="header-text mgb-24 roobert-700 teal-900 text-center">
        Coming Soon
      </div>

      <!-- DESCRIPTION TEXT -->
      <div
        class="
          description-text
          grey-700
          h6-text
          roobert-400
          d-flex
          justify-content-center
        "
      >
        <div class="text-content text-center">
          We are working hard to give you the best experience. Enter your email
          to get notified when page is up
        </div>
      </div>

      <!-- EMAIL REMINDER -->
      <div class="email-reminder-row rounded-8 border-grey-300 mx-auto">
        <input
          type="email"
          class="form-control"
          placeholder="Enter email address"
        />
        <button class="btn btn-lg btn-primary text-nowrap">Notify me</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComingSoon",

  metaInfo: {
    title: "Coming Soon",
  },
};
</script>

<style lang="scss" scoped>
.coming-soon-section {
  .header-text {
    @include font-height(72, 82);
    margin-top: toRem(200);

    @include breakpoint-down(xl) {
      @include font-height(64, 70);
    }

    @include breakpoint-down(lg) {
      margin-top: toRem(180);
      @include font-height(50, 60);
    }

    @include breakpoint-down(md) {
      margin-top: toRem(150);
    }

    @include breakpoint-down(sm) {
      @include font-height(40, 44);
    }
  }

  .description-text {
    @include flex-row-end-nowrap;
    margin-bottom: toRem(40);
    width: 100%;

    .text-content {
      width: 60%;

      @include breakpoint-down(md) {
        width: 80%;
      }

      @include breakpoint-down(sm) {
        width: 100%;
      }
    }

    @include breakpoint-down(lg) {
      font-size: toRem(20);
    }

    @include breakpoint-down(xs) {
      font-size: toRem(18);
    }
  }

  .email-reminder-row {
    @include flex-row-center-nowrap;
    padding: toRem(6) toRem(8);
    margin-bottom: toRem(140);
    gap: toRem(16);
    width: 42%;

    @include breakpoint-down(lg) {
      width: 60%;
    }

    @include breakpoint-down(md) {
      margin-bottom: toRem(110);
      width: 80%;
    }

    @include breakpoint-down(sm) {
      width: 100%;
    }

    @include breakpoint-down(xs) {
      @include flex-column-start-start;
      border: 0;
    }

    input {
      font-size: toRem(15);
      padding: 0;
      border-width: 0;

      @include breakpoint-down(sm) {
        font-size: toRem(14.5);
      }

      @include breakpoint-down(xs) {
        border: toRem(1) solid getColor("grey-300");
        @include generate-font-type("tertiary-2");
        padding: toRem(12) toRem(16);
      }

      &::placeholder {
        font-size: toRem(15);

        @include breakpoint-down(sm) {
          font-size: toRem(14.5);
        }

        @include breakpoint-down(xs) {
          @include generate-font-type("tertiary-2");
        }
      }
    }

    .btn-lg {
      padding: toRem(13) toRem(37);

      @include breakpoint-down(sm) {
        padding: toRem(12) toRem(26);
        font-size: toRem(14);
      }

      @include breakpoint-down(xs) {
        width: 100%;
      }
    }
  }
}
</style>