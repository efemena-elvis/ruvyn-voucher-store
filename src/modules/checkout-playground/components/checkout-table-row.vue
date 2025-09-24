<template>
  <tr>
    <td class="body-data" :class="`${table_name}-1`">
      <div class="text mgb-6 text-no-wrap">{{ index }}</div>
    </td>

    <td class="body-data" :class="`${table_name}-2`">
      <div class="text mgb-6 text-no-wrap">{{ data.date }}</div>
    </td>

    <td class="body-data" :class="`${table_name}-3`">
      {{ data.customer_name }}
    </td>

    <td class="body-data text-capitalize" :class="`${table_name}-4`">
      <div class="primary-2-text">{{ data.cost }}</div>
      <div>
        <span class="grey-500">Method: </span> {{ data.payment_method }}
      </div>
    </td>

    <td
      class="body-data text-capitalize secondary-2-text"
      :class="`${table_name}-5`"
    >
      {{ data.tax }}
    </td>

    <td class="body-data" :class="`${table_name}-6`">
      <TagCard
        :title="data.status"
        :card_text="data.status"
        :card_type="data.status === 'successful' ? 'success' : 'progress'"
      />
    </td>
  </tr>
</template>

<script>
import TagCard from "@/shared/components/card-comps/tag-card";

export default {
  name: "CheckoutTableRow",

  components: {
    TagCard,
  },

  props: {
    table_name: {
      type: String,
      default: "",
    },

    index: {
      type: [Number, String],
      default: 1,
    },

    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style></style>
