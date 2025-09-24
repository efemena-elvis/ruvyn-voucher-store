<template>
  <div class="fund-beneficiaries">
    <div class="title-row">
      <div class="disbursement-title h4-text grey-900">Invite Parties</div>
      <button
        class="btn btn-primary btn-md"
        @click="getTransactionParty === 'single' ? generateRandomUser() : generateRandomCustomUser(getActiveRole)"
      >Auto fill fields</button>
    </div>

    <!-- INSTRUCTION TEXT -->
    <div class="instruction-text grey-900 primary-2-text mgb-12">{{ showInstructionMessage }}</div>

    <!-- FUND USERS TABLE -->
    <div class="wrapper mgb-24">
      <FundUsersTable
        :type="getTransactionParty"
        :dataset="getTransactionBeneficiaries"
        :loading="loading_users"
      />
    </div>

    <!-- ADD BENEFICIARY BLOCK -->
    <div class="wrapper mgb-40">
      <AddBeneficiarySingleBlock
        :random_user="random_user"
        v-if="getTransactionParty === 'single'"
      />
      <AddBeneficiaryMultiBlock v-else :random_user="random_custom_user" />
    </div>

    <!-- CTA ACTION ROW -->
    <div class="action-row mgt-14">
      <button class="btn btn-primary btn-md" @click="nextProgressFlow">Continue</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import countries from "@/utilities/countries.js";
import {
  SINGLE_ROLE_OPTIONS,
  MULTIPLE_ROLE_OPTIONS,
  USER_ACCESS_OPTIONS,
  USER_PAYOUT_OPTIONS,
  RANDOM_USERS,
} from "@/modules/transactions/constants";

export default {
  name: "FundBeneficiaries",

  components: {
    FundUsersTable: () =>
      import(
        /* webpackChunkName: "transactions-module" */ "@/modules/transactions/components/table-comps/fund-users-table"
      ),
    AddBeneficiarySingleBlock: () =>
      import(
        /* webpackChunkName: "transactions-module" */ "@/modules/transactions/components/add-beneficiary-single-block"
      ),
    AddBeneficiaryMultiBlock: () =>
      import(
        /* webpackChunkName: "transactions-module" */ "@/modules/transactions/components/add-beneficiary-multi-block"
      ),
  },

  computed: {
    ...mapGetters({
      getTransactionBeneficiaries: "transactions/getTransactionBeneficiaries",
    }),

    getActiveRole() {
      const has_buyer = this.getTransactionBeneficiaries.some(
        (data) => data.role.name === "Buyer"
      );
      const has_seller = this.getTransactionBeneficiaries.some(
        (data) => data.role.name === "Seller"
      );

      if (!has_buyer && !has_seller)
        return ["BUYER", "SELLER"][this.generateRandomNumber(2)];
      if (!has_buyer) return "BUYER";
      if (!has_seller) return "SELLER";
      if (has_buyer && has_seller)
        return ["BROKER", "SUB_BROKER"][this.generateRandomNumber(2)];

      return "BROKER";
    },

    // =============================================
    // HANDLE TABLE INSTRUCTION PAGE DESCRIPTION
    // =============================================
    showInstructionMessage() {
      return this.$route.query.party === "single"
        ? "Provide user details"
        : "Provide their details, roles and access levels";
    },

    // =============================================
    // GET THE TRANSACTION PARTY TYPE FROM ROUTE
    // =============================================
    getTransactionParty() {
      return this.$route.query.party ? this.$route.query.party : "single";
    },

    getInvitedParty() {
      const parties = this.getTransactionBeneficiaries.filter(
        (party) => party.account_id !== this.mock_user.account_id
      );
      return parties.length > 1 ? "All" : parties[0].email_address;
    },
  },

  data() {
    return {
      loading_users: true,
      mock_user: {
        id: 1,
        account_id: 12345678,
        email: "elvis@vesicash.com",
        phone: "09131100002",
      },

      random_user: {
        email_address: "",
        phone_number: "",
      },

      random_custom_user: {
        email_address: "",
        phone_number: "",
        access: 0,
        role: 0,
      },
    };
  },

  mounted() {
    this.getTransactionBeneficiaries.length
      ? this.loadAllBeneficiaries()
      : this.loadCurrentUserIntoTable();
  },

  methods: {
    ...mapMutations({
      UPDATE_TRANSACTION_BENEFICIARIES:
        "transactions/UPDATE_TRANSACTION_BENEFICIARIES",
    }),

    generateRandomNumber(range) {
      return Math.floor(Math.random() * range);
    },

    generateRandomAccess(role) {
      // randomly choose user access based on their role
      //BUYER can view or approve
      //SELLER can mark-as-done or view
      //BROKER can do anything
      switch (role) {
        case "BUYER":
          return [USER_ACCESS_OPTIONS[0], USER_ACCESS_OPTIONS[2]][
            this.generateRandomNumber(2)
          ];
        case "SELLER":
          return [USER_ACCESS_OPTIONS[1], USER_ACCESS_OPTIONS[2]][
            this.generateRandomNumber(2)
          ];
        case "BROKER":
          return USER_ACCESS_OPTIONS[this.generateRandomNumber(3)];
        default:
          return USER_ACCESS_OPTIONS[2];
      }
    },

    generateRandomUser() {
      const range = RANDOM_USERS?.length;
      const { email_address, phone_number } =
        RANDOM_USERS[this.generateRandomNumber(range)];

      this.random_user = {
        email_address,
        phone_number,
      };
    },

    generateRandomCustomUser(role) {
      const range = RANDOM_USERS?.length;

      const { email_address, phone_number } =
        RANDOM_USERS[this.generateRandomNumber(range)];

      const access = this.generateRandomAccess(role);

      let user_role = MULTIPLE_ROLE_OPTIONS[0];
      if (role === "SELLER") user_role = MULTIPLE_ROLE_OPTIONS[1];
      if (role === "BROKER") user_role = MULTIPLE_ROLE_OPTIONS[2];
      if (role === "SUB_BROKER") user_role = MULTIPLE_ROLE_OPTIONS[3];

      this.random_custom_user = {
        email_address,
        phone_number,
        role: user_role,
        access,
      };
    },

    nextProgressFlow() {
      if (this.checkValidPartyState())
        this.$router.push({
          name: "TransactionPayoutRules",
          query: {
            type: this.$route.query.type,
            party: this.$route.query.party,
            name: this.$route.query.name,
            parties: this.getInvitedParty,
            pay:
              this.getTransactionBeneficiaries[0].role?.name === "Buyer"
                ? true
                : false,
          },
        });
    },

    // ======================================================
    // CHECK IF PARTIES CONTAINS ONE BUYER AND ONE SELLER
    // ======================================================
    checkValidPartyState() {
      let buyers = [];
      let sellers = [];

      let has_recipient = this.getTransactionBeneficiaries.filter(
        (user) => user.recipient.name === "Yes"
      );

      this.getTransactionBeneficiaries.map((user) => {
        if (user.role.name === "Buyer") buyers.push(user);
      });

      this.getTransactionBeneficiaries.map((user) => {
        if (user.role.name === "Seller") sellers.push(user);
      });

      // CHECK SINGLE PARTY TRANSACTION
      if (this.getTransactionParty === "single") {
        if (!buyers.length) {
          this.pushToast("Transaction is missing a buyer party", "error");
          return false;
        } else if (!sellers.length) {
          this.pushToast("Transaction is missing a seller party", "error");
          return false;
        } else return true;
      }

      // CHECK MULTIPLE PARTY TRANSACTION
      else {
        if (this.getTransactionBeneficiaries.length < 3) {
          this.pushToast(
            "Multiple party transaction should contain at least 3 parties",
            "error"
          );
          return false;
        } else if (!buyers.length) {
          this.pushToast("Transaction is missing a buyer party", "error");
          return false;
        } else if (!sellers.length) {
          this.pushToast("Transaction is missing a seller party", "error");
          return false;
        } else if (buyers.length > 1) {
          this.pushToast(
            "Transaction should contain a single buyer party",
            "error"
          );
          return false;
        } else if (sellers.length > 1) {
          this.pushToast(
            "Transaction should contain a single seller party",
            "error"
          );
          return false;
        } else if (!has_recipient.length) {
          this.pushToast(
            "Transaction should contain at least one recipient party",
            "error"
          );
          return false;
        } else return true;
      }
    },

    // ======================================================
    // GET CURRENT USER DETAILS WITH A DEFAULT BUYER ROLE
    // ======================================================
    loadCurrentUserIntoTable() {
      let user_data = {};

      user_data.id = this.mock_user.id;
      user_data.account_id = this.mock_user.account_id;
      user_data.email_address = this.mock_user.email;
      user_data.phone_number = this.mock_user.phone;

      user_data.country = countries.find(
        (country) => country.code.toUpperCase() == "NG"
      ).country;

      user_data.role =
        this.getTransactionParty === "single"
          ? SINGLE_ROLE_OPTIONS[0]
          : MULTIPLE_ROLE_OPTIONS[0];

      user_data.access = USER_ACCESS_OPTIONS[0];
      user_data.recipient = USER_PAYOUT_OPTIONS[0];
      user_data.amount = 0;
      user_data.status = "Accepted";

      this.UPDATE_TRANSACTION_BENEFICIARIES([user_data]);
      this.loading_users = false;
    },

    // ======================================================
    // LOAD ALL EXISTING BENEFICIARY IN STORE
    // ======================================================
    loadAllBeneficiaries() {
      this.UPDATE_TRANSACTION_BENEFICIARIES([
        ...this.getTransactionBeneficiaries,
      ]);

      this.loading_users = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.fund-beneficiaries {
  .disbursement-title {
    @include breakpoint-down(xl) {
      @include generate-font-type("h5");
    }
  }

  .action-row {
    padding-bottom: toRem(55);

    .btn {
      padding: toRem(9) toRem(24);
      width: toRem(260);

      @include breakpoint-down(xs) {
        width: 100%;
      }
    }
  }
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  max-width: 100%;
  margin-bottom: toRem(32);
}
</style>
