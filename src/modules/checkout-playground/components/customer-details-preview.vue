<template>
  <div class="customer-preview neutral-10-bg rounded-8">
    <!-- TITLE TEXT -->
    <div class="title-text primary-1-text grey-900 mgb-24">
      CUSTOMER INFORMATION
    </div>

    <div class="form-group">
      <BasicInput
        label_title="Email address"
        input_type="email"
        :input_value="form.email"
        is_required
        placeholder="Enter email address"
        :custom_style="{ group_wrapper_style: 'input-field input-field-email' }"
        @getInputState="updateFormState($event, 'email')"
        :error_handler="{
          type: 'email',
          message: 'Email address is not valid',
        }"
      />
    </div>

    <div class="col-12">
      <div class="form-group">
        <BasicInput
          label_title="Phone number"
          input_type="phone"
          :input_value="form.phone"
          is_required
          placeholder="Enter your phone number"
          @getInputState="updateFormState($event, 'phone')"
          :error_handler="{
            type: 'phone',
            message: 'Phone is not valid',
          }"
        />
      </div>
    </div>

    <div class="row mgb-24 border-bottom-grey-200">
      <div class="col-12 col-sm-6">
        <div class="form-group">
          <BasicInput
            label_title="First name"
            :input_value="form.first_name"
            is_required
            placeholder="Enter your first name"
            @getInputState="updateFormState($event, 'first_name')"
            :error_handler="{
              type: 'required',
              message: 'Enter your first name',
            }"
          />
        </div>
      </div>

      <div class="col-12 col-sm-6">
        <div class="form-group">
          <BasicInput
            label_title="Last name"
            :input_value="form.last_name"
            is_required
            placeholder="Enter your last name"
            @getInputState="updateFormState($event, 'last_name')"
            :error_handler="{
              type: 'required',
              message: 'Enter your last name',
            }"
          />
        </div>
      </div>

      <div class="col-12 col-sm-6">
        <div class="form-group">
          <div class="form-label">Country</div>
          <DropSelectInput
            placeholder="Select country"
            :options="checkoutCountries"
          />
        </div>
      </div>

      <div class="col-12 col-sm-6">
        <div class="form-group">
          <BasicInput
            label_title="Street address"
            :input_value="form.street_address"
            is_required
            placeholder="Enter your street address"
            @getInputState="updateFormState($event, 'street_address')"
            :error_handler="{
              type: 'required',
              message: 'Enter your street address',
            }"
          />
        </div>
      </div>

      <div class="col-12 col-sm-6" v-if="false">
        <div class="form-group">
          <BasicInput
            :input_value="form.city"
            is_required
            placeholder="Enter your city"
            @getInputState="updateFormState($event, 'city')"
            :error_handler="{
              type: 'required',
              message: 'Enter your city',
            }"
          />
        </div>
      </div>
    </div>

    <div>
      <!-- TITLE TEXT -->
      <div class="title-text primary-1-text grey-900 mgb-24">
        SHIPPING TYPES
      </div>

      <div class="shipping-type">
        <label class="shipping-type-item pointer" for="shipping-info">
          <input type="checkbox" name="shipping-info" id="shipping-info" />
          <div class="secondary-2-text grey-700">Office pickup (5 days)</div>
          <div class="primary-2-text">$60</div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInput from "@/shared/components/form-comps/basic-input";
import DropSelectInput from "@/shared/components/drop-select-input";
import countries from "../constants/mor-countries";

export default {
  name: "CustomerPreview",

  components: {
    BasicInput,
    DropSelectInput,
  },

  data() {
    return {
      countries,

      form: {
        email: "",
        phone: "",
        first_name: "",
        last_name: "",
        street_address: "",
      },

      validity: {
        email: false,
        phone: false,
        first_name: false,
        last_name: false,
        street_address: false,
      },
    };
  },

  computed: {
    checkoutCountries() {
      return this.countries?.map((cc) => ({
        ...cc,
        name: cc.country,
        id: cc.code,
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
.customer-preview {
  padding: toRem(24);

  .shipping-type {
    display: grid;
    gap: toRem(15) 0;

    .shipping-type-item {
      display: grid;
      align-items: center;
      grid-template-columns: auto 1fr auto;
      gap: 0 toRem(8);
      border: toRem(1) solid getColor("grey-200");
      border-radius: toRem(10);
      padding: toRem(10) toRem(12);
    }
  }

  .btn {
    background: getColor("teal-800");
    color: getColor("neutral-10");

    &:hover {
      background: darken(getColor("teal-800"), 6%);
    }
  }
}
</style>
