<template>
  <div class="contact-page">
    <div class="vesicash-container">
      <div class="section-wrapper">
        <!-- HEADER TEXT -->
        <h1 class="header-text roobert-700 teal-900 text-center">
          We’d love to help you
        </h1>

        <!-- CONTACT DETAILS SECTION -->
        <div class="contact-details-section row mb-5">
          <!-- CONTACT INFO -->
          <div class="contact-info col-12 col-md-6 mb-4 mb-md-0">
            <div class="contact-block">
              <div class="title">Help</div>
              <div class="description">
                Visit our
                <router-link to="/faqs">FAQ page</router-link>
              </div>
            </div>

            <div class="contact-block">
              <div class="title">Support</div>
              <div class="description">
                For customer support please send an email to
                <a href="mailto:support@vesicash.com" class="mgr-10"
                  >support@vesicash.com</a
                >
                <br />
                <a href="mailto:support@vesicash.co.uk"
                  >support@vesicash.co.uk</a
                >
              </div>
            </div>

            <div class="contact-block">
              <div class="title">Technical</div>
              <div class="description">
                For technical support please send an email to
                <a href="mailto:techsupport@vesicash.com"
                  >techsupport@vesicash.com</a
                >
              </div>
            </div>

            <div class="contact-block">
              <div class="title">Partnership</div>
              <div class="description">
                For partnership requests please send an email to

                <a href="mailto:partnership@vesicash.com"
                  >partnership@vesicash.com</a
                >
              </div>
            </div>

            <!-- <div class="contact-block">
              <div class="title">Hotline</div>
              <div class="description">
                <a href="tel:+2347039914767">+234 703 991 4767</a>
              </div>
            </div> -->

            <div class="contact-block d-none d-md-block">
              <!-- SOCIAL ICONS -->
              <div class="social-icons">
                <a
                  href="https://www.instagram.com/vesicash/"
                  class="social-link"
                >
                  <div class="icon icon-instagram"></div>
                </a>

                <a href="https://www.facebook.com/vesicash" class="social-link">
                  <div class="icon icon-facebook"></div>
                </a>

                <a href="https://twitter.com/Vesicash" class="social-link">
                  <div class="icon icon-twitter"></div>
                </a>

                <a
                  href="https://www.linkedin.com/company/vesicash"
                  class="social-link"
                >
                  <div class="icon icon-linkedin"></div>
                </a>
              </div>
            </div>
          </div>

          <!-- CONTACT FORM -->
          <div class="contact-form col-12 col-md-6" v-if="false">
            <div class="title-text h3-text roobert-700 mgb-8">
              Contact Sales
            </div>

            <div class="description grey-600 h7-text roobert-400">
              Do you have a specific question or a custom request? Please fill
              out the form below and you will get back to you within 24 hours.
            </div>

            <div
              class="contact-wrapper rounded-16 neutral-10-bg border-grey-200 mgt-32"
            >
              <form @submit.prevent="submitContactForm">
                <div class="row">
                  <div class="col-12 col-md-6 mgb-24">
                    <!-- FIRSTNAME INPUT FIELD -->
                    <BasicInput
                      label_title="First name"
                      label_id="firstName"
                      :input_value="form.first_name"
                      is_required
                      placeholder="Your first name"
                      @getInputState="updateFormState($event, 'first_name')"
                      :error_handler="{
                        type: 'single',
                        message:
                          'First name should contain at least 2 characters',
                      }"
                    />
                  </div>

                  <!-- LASTNAME INPUT FIELD -->
                  <div class="col-12 col-md-6 mgb-24">
                    <BasicInput
                      label_title="Last name"
                      label_id="lastName"
                      :input_value="form.last_name"
                      is_required
                      placeholder="Your last name"
                      @getInputState="updateFormState($event, 'last_name')"
                      :error_handler="{
                        type: 'single',
                        message:
                          'Last name should contain at least 2 characters',
                      }"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 col-md-6 mgb-24">
                    <!-- EMAIL INPUT FIELD -->
                    <BasicInput
                      label_title="Email address"
                      label_id="emailAddress"
                      input_type="email"
                      :input_value="form.email"
                      is_required
                      placeholder="Enter email address"
                      @getInputState="updateFormState($event, 'email')"
                      :error_handler="{
                        type: 'email',
                        message: 'Email address is not valid',
                      }"
                    />
                  </div>

                  <!-- WEBSITE INPUT FIELD -->
                  <div class="col-12 col-md-6 mgb-24">
                    <BasicInput
                      label_title="Website URL"
                      label_id="websiteURL"
                      input_type="url"
                      :input_value="form.website_url"
                      is_required
                      placeholder="website url"
                      @getInputState="updateFormState($event, 'website_url')"
                      :error_handler="{
                        type: 'single',
                        message:
                          'Website url should contain at least 2 characters',
                      }"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 col-md-6 mgb-24">
                    <!-- BUSINESS TYPE INPUT FIELD -->
                    <BasicInput
                      label_title="Business type"
                      label_id="businessType"
                      :input_value="form.business_type"
                      is_required
                      placeholder="Enter business type"
                      @getInputState="updateFormState($event, 'business_type')"
                      :error_handler="{
                        type: 'single',
                        message:
                          'Business type should contain at least 2 characters',
                      }"
                    />
                  </div>

                  <!-- COUNTRY INPUT FIELD -->
                  <div class="col-12 col-md-6 mgb-24">
                    <BasicInput
                      label_title="Country"
                      label_id="country"
                      :input_value="form.country"
                      is_required
                      placeholder="Enter country"
                      @getInputState="updateFormState($event, 'country')"
                      :error_handler="{
                        type: 'single',
                        message: 'Country should contain at least 2 characters',
                      }"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="form-group mgb-24">
                      <label for="message" class="form-label">Message</label>
                      <textarea
                        v-model="form.message"
                        id="message"
                        class="form-control"
                        rows="5"
                        placeholder="Enter message here..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="message-info roobert-400 grey-600 h7-text mgb-40">
                    This site is protected by reCAPTCHA and the Google
                    <router-link to="/privacy-policy"
                      >Privacy Policy</router-link
                    >
                    and <router-link to="/terms">Terms</router-link> of Service
                    apply.
                  </div>

                  <button
                    class="btn btn-primary btn-lg wt-100"
                    ref="contactBtn"
                    :disabled="isValidState"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="contact-info col-12 col-md-6">
            <div class="contact-block">
              <div class="title">Nigeria Address</div>
              <div class="description">
                16 Alhaji Mudashiru Eletu Way, Osapa Estate, Lekki, Lagos,
                Nigeria
              </div>
            </div>

            <div class="contact-block">
              <div class="title">UK Address</div>
              <div class="description">
                2 Minster Court, London, United Kingdom
              </div>
            </div>

            <div class="contact-block">
              <div class="title">Rwanda Address</div>
              <div class="description">
                Remera, Gasabo, Umujyi wa Kigali, Rwanda
              </div>
            </div>

            <div class="contact-block">
              <div class="title">Egypt Address</div>
              <div class="description">
                24 Al Tayaran Street, Nasr City, Cairo, Egypt
              </div>
            </div>

            <div class="contact-block">
              <div class="title">Ghana Address</div>
              <div class="description">
                The Enterprise Village, 7 Tunemete Street, Accra-Ghana
              </div>
            </div>

            <div class="contact-block">
              <div class="title">Zambia Address</div>
              <div class="description">
                LN2260/27 Off Lilayi Road, Shaft Five, Kafue, Zambia
              </div>
            </div>

            <div class="contact-block d-block d-md-none">
              <!-- SOCIAL ICONS -->
              <div class="social-icons">
                <a
                  href="https://www.instagram.com/vesicash/"
                  class="social-link"
                >
                  <div class="icon icon-instagram"></div>
                </a>

                <a href="https://www.facebook.com/vesicash" class="social-link">
                  <div class="icon icon-facebook"></div>
                </a>

                <a href="https://twitter.com/Vesicash" class="social-link">
                  <div class="icon icon-twitter"></div>
                </a>

                <a
                  href="https://www.linkedin.com/company/vesicash"
                  class="social-link"
                >
                  <div class="icon icon-linkedin"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BasicInput from "@/shared/components/form-comps/basic-input";

export default {
  name: "ContactPage",

  metaInfo: {
    title: "Contact Us",
  },

  components: {
    BasicInput,
  },

  computed: {
    // CHECK FORM BUTTON VALIDITY STATE
    isValidState() {
      return Object.values(this.validity).every((valid) => !valid) &&
        this.form.message
        ? false
        : true;
    },
  },

  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        website_url: "",
        business_type: "",
        country: "",
        message: "",
      },

      validity: {
        first_name: true,
        last_name: true,
        email: true,
        website_url: true,
        business_type: true,
        country: true,
      },
    };
  },

  methods: {
    ...mapActions({ handleContactUs: "general/handleContactUs" }),

    submitContactForm() {
      this.handleClick("contactBtn");

      this.handleContactUs(this.form)
        .then((response) => {
          if (response.code === 200) {
            this.pushToast("Message has been sent!", "success");
            this.handleClick("contactBtn", "Send Message", false);

            Object.keys(this.form).map((key) => (this.form[key] = ""));
          }

          // HANDLE NON 200 RESPONSE
          else this.handleContactError(response.message);
        })
        .catch(() => {
          this.handleContactError("Unable to send message!");
        });
    },

    // ============================
    // HANDLE USER CONTACT ERROR
    // ============================
    handleContactError(message) {
      this.pushToast(message, "error");
      this.handleClick("contactBtn", "Send Message", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-page {
  .section-wrapper {
    margin-bottom: toRem(170) !important;

    @include breakpoint-down(md) {
      margin-bottom: toRem(120) !important;
    }

    .header-text {
      @include font-height(72, 82);
      margin: toRem(200) auto toRem(120);

      @include breakpoint-down(xl) {
        @include font-height(64, 72);
      }

      @include breakpoint-down(lg) {
        margin: toRem(180) auto toRem(60);
      }

      @include breakpoint-down(md) {
        margin: toRem(140) auto toRem(40);
        @include font-height(40, 48);
      }
    }

    .contact-info {
      .contact-block {
        width: 80%;
        margin-bottom: toRem(60);

        .title {
          font-family: "Roobert-Bold", sans-serif;
          @include generate-font-type("h7");
          color: getColor("grey-900");
          margin-bottom: toRem(8);
          // font-size: toRem(18);

          @include breakpoint-down(md) {
            @include font-height(18, 26);
          }
        }

        .description,
        a {
          font-family: "Roobert-Regular", sans-serif;
          @include generate-font-type("h7");
          color: getColor("grey-700");

          @include breakpoint-down(md) {
            @include font-height(18, 26);
          }

          a {
            color: getColor("green-500");
            @include transition(0.6s);
          }
        }

        .social-icons {
          @include flex-row-start-nowrap;

          .social-link {
            border: toRem(1) solid getColor("grey-100");
            @include transition(0.4s);
            border-radius: toRem(40);
            margin-right: toRem(22);
            @include draw-shape(48);
            position: relative;

            .icon {
              color: getColor("teal-900");
              @include center-placement;
              @include transition(0.4s);
              font-size: toRem(22);
            }

            &:last-of-type {
              margin-right: 0;
            }

            &:hover {
              background: getColor("grey-50");

              .icon {
                color: getColor("green-600");
              }
            }
          }
        }
      }
    }

    .contact-form {
      .title-text {
        @include breakpoint-down(md) {
          @include font-height(30, 42);
        }
      }

      .description {
        width: 95%;

        @include breakpoint-down(lg) {
          width: 100%;
        }

        @include breakpoint-down(md) {
          @include font-height(18, 26);
        }
      }

      .contact-wrapper {
        padding: toRem(24);

        @include breakpoint-down(md) {
          padding: toRem(20);
        }

        @include breakpoint-down(sm) {
          padding: toRem(16);
        }

        .message-info,
        a {
          font-size: toRem(16);
        }
      }
    }
  }
}
</style>
