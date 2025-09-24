<template>
  <div class="settings">
    <div class="form-label">Configure checkout experience per country</div>

    <DropSelectInput
      placeholder="Select country"
      :options="checkoutCountries"
      :pre_select="selected_country"
      @optionSelected="selectCountry($event)"
    />

    <div class="json-preview mgb-20 mgt-20">
      <button
        class="btn btn-sm btn-primary"
        v-if="preview"
        @click="copySettings"
      >
        {{ copied ? "Copied" : "Copy JSON" }}
      </button>
      <span v-else></span>
      <span class="secondary-2-text grey-700">Preview as JSON</span>
      <input type="checkbox" name="json" id="json" v-model="preview" />
    </div>

    <div v-if="preview" class="preview-wrapper">
      <pre class="preview-json">{{ settingsJSON }}</pre>
    </div>

    <template v-else>
      <BasicInput
        label_title="Brand logo"
        input_type="url"
        is_required
        placeholder="https://"
        class="mgt-20"
        :input_value="form.url"
        @getInputState="updateSettings($event, 'url')"
        :error_handler="{
          type: 'url',
          message: 'url is not valid',
        }"
        fixed_error
      />

      <div class="color-selection mgt-20">
        <BasicInput
          label_title="Checkout background"
          input_type="color"
          :input_value="form.bg"
          is_required
          placeholder="Select your checkout background"
          @getInputState="updateSettings($event, 'bg')"
          fixed_error
        />

        <BasicInput
          label_title="Checkout button"
          input_type="color"
          :input_value="form.btn"
          is_required
          placeholder="Select your checkout button color"
          @getInputState="updateSettings($event, 'btn')"
          fixed_error
        />
      </div>

      <div class="form-label mgt-20 mgb-5">Payment options</div>
      <DropSelectInput
        placeholder="Select preferred payment options"
        :multi_options="paymentOptions"
        multi
        @multiSelected="updatePaymentOptions"
        :pre_select_multiple="saved_payment_options"
      />

      <div class="form-label mgt-30">Shipping methods</div>
      <div class="shipping-options">
        <div class="multi-selections-wrapper full">
          <div
            class="secondary-2-text grey-400"
            v-if="!shipping_methods.length"
          >
            Enter and add new shipping method
          </div>
          <div
            class="selection-tag"
            v-for="method in shipping_methods"
            :key="method.name + selected_country.code"
            @click.stop="removeShippingMethod(method)"
          >
            <div class="f-size-13">
              {{ `${method.name} - #${method.amount}  (${method.time})` }}
            </div>
            <div class="icon icon-close"></div>
          </div>
        </div>
        <BasicInput
          label_title="Shipping method name"
          is_required
          placeholder="Home Delivery"
          class="full"
          :input_value="form.shipping_name"
          @getInputState="updateSettings($event, 'shipping_name')"
          :error_handler="{
            type: 'minimum',
            minimum: 3,
            message: 'Name should be at least 3 characters long',
          }"
          fixed_error
        />
        <BasicInput
          label_title="Shipping method price"
          input_type="number"
          is_required
          placeholder="5.00"
          :input_value="form.shipping_price"
          @getInputState="updateSettings($event, 'shipping_price')"
          :error_handler="{
            type: 'required',
            message: 'Shipping price is required',
          }"
          fixed_error
        />
        <BasicInput
          label_title="Delivery duration"
          is_required
          placeholder="4 days"
          :input_value="form.shipping_duration"
          @getInputState="updateSettings($event, 'shipping_duration')"
          :error_handler="{
            type: 'required',
            message: 'Shipping duration is required',
          }"
          fixed_error
        />
        <button
          class="btn btn-md btn-primary mgt-8"
          :disabled="disabledShipping"
          @click="addShippingMethod"
        >
          Add
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import DropSelectInput from "@/shared/components/drop-select-input";
import BasicInput from "@/shared/components/form-comps/basic-input";
import countries from "../constants/mor-countries";

export default {
  name: "CheckoutConfigurator",

  components: {
    DropSelectInput,
    BasicInput,
  },

  data() {
    return {
      countries,

      selected_country: null,

      copied: false,

      shipping_methods: [],

      saved_payment_options: [],

      preview: false,

      form: {
        url: "",
        bg: "",
        btn: "",
        shipping_name: "",
        shipping_price: "",
        shipping_duration: "",
      },

      validity: {
        url: true,
        bg: true,
        btn: true,
        shipping_name: true,
        shipping_price: true,
        shipping_duration: true,
      },
    };
  },

  computed: {
    ...mapGetters({
      getCountry: "checkout/getCountry",
      getSettings: "checkout/getSettings",
    }),

    savedSettings() {
      const code = this.selected_country?.code;

      return this.getSettings[code]
        ? this.getSettings[code]
        : {
            logo: "",
            background: "#818988",
            button: "#2c9a4b",
            payment_options: ["card"],
            shipping_methods: [
              {
                name: "Office Pickup",
                time: "1 day",
                amount: 0,
                currency_code: this.getCountry.currency,
              },
            ],
          };
    },

    settingsJSON() {
      const saved_settings = this.savedSettings;

      const settings = {
        country_code: this.selected_country.code,
        currency_code:
          this.selected_country?.currency?.short ||
          this.selected_country?.currency,
        amount: 200.0,
        redirect_url: `https://redirect_url`,
        logo_url: saved_settings.logo,
        background_colour: saved_settings.background,
        button_colour: saved_settings.button,
        request_phone_number: true,
        request_country: true,
        request_street_address: true,
        shipping_types: [...saved_settings.shipping_methods],
        product_type: "Clothing",
        description: "Description",
        vat: 5.0,
        payment_methods: saved_settings.payment_options?.length
          ? [...saved_settings.payment_options]
          : ["card"],
      };
      return JSON.stringify(settings, null, 2);
    },

    shippingMethod() {
      return {
        name: this.form.shipping_name,
        time: this.form.shipping_duration,
        amount: Number(this.form.shipping_price),
        currency_code:
          this.selected_country?.currency?.short ||
          this.selected_country?.currency,
      };
    },

    disabledShipping() {
      return (
        this.validity.shipping_duration ||
        this.validity.shipping_name ||
        this.validity.shipping_price
      );
    },

    preSelectedCountry() {
      return {
        ...this.getCountry,
        id: this.getCountry.code,
      };
    },

    checkoutCountries() {
      return this.countries?.map((cc) => ({
        ...cc,
        name: cc.country,
        id: cc.code,
      }));
    },

    paymentOptions() {
      return [
        {
          name: "Card",
          id: "card",
        },
        {
          name: "Bank Transfer",
          id: "banktransfer",
        },
        {
          name: "Mobilemoney (Ghana)",
          id: "mobilemoneyghana",
        },
        {
          name: "Mobilemoney (Rwanda)",
          id: "mobilemoneyrwanda",
        },
        {
          name: "Mobilemoney (Zambia)",
          id: "mobilemoneyzambia",
        },
        {
          name: "Mobilemoney (Uganda)",
          id: "mobilemoneyuganda",
        },
      ];
    },
  },

  mounted() {
    this.selectCountry({ ...this.getCountry });
  },

  methods: {
    ...mapMutations({
      UPDATE_CHECKOUT_SETTINGS: "checkout/UPDATE_CHECKOUT_SETTINGS",
    }),

    async copySettings() {
      if (this.copied) return;
      await navigator.clipboard.writeText(this.settingsJSON);
      this.copied = true;
      setTimeout(() => (this.copied = false), 1200);
    },

    updateSettings(data, field) {
      if (data.validity) return;

      const code = this.selected_country?.code;

      this.updateFormState(data, field);

      switch (field) {
        case "url":
          this.UPDATE_CHECKOUT_SETTINGS({
            code,
            field: "logo",
            data: data.value,
          });
          break;
        case "bg":
          this.UPDATE_CHECKOUT_SETTINGS({
            code,
            field: "background",
            data: data.value,
          });
          break;
        case "btn":
          this.UPDATE_CHECKOUT_SETTINGS({
            code,
            field: "button",
            data: data.value,
          });
          break;
        default:
          break;
      }
    },

    selectCountry(country) {
      this.selected_country = country;
      const code = this.selected_country?.code;
      this.preFill(code);
    },

    preFill(code) {
      const savedSettings = this.getSettings[code]
        ? this.getSettings[code]
        : {
            logo: "",
            background: "#818988",
            button: "#2c9a4b",
            payment_options: ["card"],
            shipping_methods: [
              {
                name: "Office Pickup",
                time: "1 day",
                amount: 0,
                currency_code: this.getCountry.currency || "",
              },
            ],
          };

      this.form.url = savedSettings?.logo;

      this.form.bg = savedSettings?.background;

      this.form.btn = savedSettings?.button;

      this.saved_payment_options = savedSettings.payment_options?.length
        ? [...savedSettings?.payment_options]?.map((i) => ({ name: i, id: i }))
        : [];

      this.shipping_methods = savedSettings?.shipping_methods?.length
        ? savedSettings.shipping_methods
        : [];
    },

    updatePaymentOptions(options) {
      const code = this.selected_country?.code;

      this.UPDATE_CHECKOUT_SETTINGS({
        code,
        field: "payment_options",
        data: options.map((item) => item.id),
      });
    },

    addShippingMethod() {
      const code = this.selected_country?.code;

      this.shipping_methods.push(this.shippingMethod);

      this.UPDATE_CHECKOUT_SETTINGS({
        code,
        field: "shipping_methods",
        data: this.shipping_methods,
      });

      this.form.shipping_name = "";
      this.form.shipping_duration = "";
      this.form.shipping_price = "";
    },

    removeShippingMethod(method) {
      const code = this.selected_country?.code;

      this.shipping_methods = this.shipping_methods.filter(
        (item) => method.name !== item.name
      );

      this.UPDATE_CHECKOUT_SETTINGS({
        code,
        field: "shipping_methods",
        data: this.shipping_methods,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.settings {
  background-color: #fff;
  position: relative;
  padding: toRem(20) toRem(30);
  height: 100%;

  .preview-wrapper {
    max-height: 80%;
    overflow-y: auto;
    .preview-json {
      white-space: pre-wrap;
      overflow-y: auto;
    }
  }

  .json-preview {
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    gap: toRem(0) toRem(6);

    .btn {
      justify-self: flex-start;
    }
  }

  .color-selection {
    @include flex-row-start-nowrap;
    gap: 0 toRem(20);

    div {
      width: 100%;
      cursor: pointer;
    }
  }

  .shipping-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-end;
    gap: toRem(20);

    .multi-selections-wrapper {
      @include flex-row-start-nowrap;
      max-width: 100%;
      padding: toRem(8);
      gap: 0 toRem(5);
      overflow-x: auto;
      border: toRem(0.5) solid getColor("grey-400");
      border-radius: toRem(10);
      min-height: toRem(40);

      &::-webkit-scrollbar {
        height: 0;
      }

      .selection-tag {
        @include flex-row-start-nowrap;
        border-radius: toRem(12);
        background: getColor("neutral-10");
        padding: toRem(4.75) toRem(6) toRem(4.75) toRem(12);
        border: toRem(1) solid getColor("grey-300");
        transition: all ease-in-out 0.25s;
        margin: toRem(2) toRem(4) toRem(2) 0;
        min-width: fit-content;
        width: auto;

        &:hover {
          background: getColor("red-50");
        }

        .icon {
          position: relative;
          top: toRem(1);
          @include draw-shape(24);
          @include flex-column-center;
          border-radius: 50%;
          background: transparent;
          margin-left: toRem(4);
          font-weight: 600;
          color: getColor("grey-500");
          transition: background ease-in-out 0.25s;
          cursor: pointer;

          &:hover {
            background: getColor("red-50");
          }
        }
      }
    }

    .btn {
      grid-column: 2/-1;
    }

    .full {
      grid-column: 1/-1;
    }
  }
}
</style>
