<template>
  <div>
    <div class="mb-3">
      <h5>{{ $t("What is new ?") }}</h5>
    </div>
    <p>LessPass version: {{ version }}</p>
    <p>
      {{
        $t(
          "New20221231",
          "LessPass Database server was turned off on March 1th, 2023. The static version of LessPass, the web extension and the mobile versions remain in place."
        )
      }}
      <router-link class="" :to="{ name: 'export' }" v-if="isAuthenticated">
        Export your passwords
      </router-link>
    </p>
    <a
      href="https://blog.lesspass.com/2022-12-29/decommissioning-lesspass-database"
    >
      {{ $t("ReadMoreAboutDecommissioning", "See announcement") }}
    </a>
    <p v-if="isGuest">
      If you want to export your password, please
      <router-link class="" :to="{ name: 'login' }"> sign in </router-link>
    </p>
  </div>
</template>
<script>
import { version } from "../../package.json";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      version,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "isGuest"]),
  },
};
</script>
