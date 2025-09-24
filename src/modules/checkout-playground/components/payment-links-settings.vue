<template>
  <div class="pd-25 neutral-10-bg">
    <div class="h5-text mgb-2">Payment Link</div>
    <div class="tertiary-2-text mgb-20">
      Must have created a payment module to use this feature
    </div>

    <div class="form-group" v-for="(sub, i) in getSubs" :key="sub.name + i">
      <label :for="sub.name + i" class="tertiary-2-text"
        >{{ sub.name }} payment link</label
      >
      <input
        type="text"
        class="form-control"
        :placeholder="`Enter payment link`"
        v-model="links[sub.name]"
      />
    </div>

    <div class="btn-row">
      <button class="btn btn-md btn-primary" @click="save">Save</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "PaymentSettings",

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapGetters({ getSubs: "checkout/getSubs" }),
  },

  data() {
    return {
      links: {},
    };
  },

  watch: {
    open: {
      handler(data) {
        if (data) {
          const subs = [...this.getSubs];
          subs.forEach((sub) => {
            this.links = { ...this.links, [sub.name]: sub.link };
          });
        }
      },
      immediate: true,
    },
  },

  methods: {
    ...mapMutations({ updateLink: "checkout/UPDATE_SUB_LINK" }),

    save() {
      Object.entries(this.links)?.map(([name, link]) => {
        this.updateLink({ name, link });
      });
      this.$emit("saved");
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-row {
  display: flex;
  justify-content: flex-end;
}
</style>
