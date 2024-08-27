<template>
  <form v-on:submit.prevent="signIn">
    <div class="mb-3">
      <h5>{{ $t("Sign In") }}</h5>
    </div>
    <div class="form-group">
      <div class="inner-addon left-addon">
        <i class="fa fa-user"></i>
        <input
          id="email"
          class="form-control"
          name="username"
          type="email"
          autocapitalize="none"
          v-bind:placeholder="$t('Email')"
          required
          v-model="email"
        />
      </div>
    </div>
    <div class="form-group mb-1">
      <master-password
        v-model="password"
        v-bind:label="$t('Master Password')"
      ></master-password>
    </div>
    <div class="form-group text-right">
      <button
        id="login__forgot-password-btn"
        type="button"
        class="btn btn-link btn-sm p-0"
        v-on:click="$router.push({ name: 'passwordReset' })"
      >
        <small>{{ $t("ForgotPassword", "Forgot your password?") }}</small>
      </button>
    </div>
    <div class="form-group">
      <button id="signInButton" class="btn btn-primary btn-block">
        {{ $t("Sign In") }}
      </button>
    </div>
    <div class="form-group text-danger">
      LessPass Database server was turned off on March 1th, 2023.
      <a
        href="https://blog.lesspass.com/2022-12-29/decommissioning-lesspass-database"
        target="_blank"
        rel="noopener noreferrer"
        >See announcement</a
      >. Sign in to export your passwords.
    </div>
  </form>
</template>
<script>
import User from "../api/user";
import MasterPassword from "../components/MasterPassword.vue";
import message from "../services/message";
import { encryptPassword } from "../services/encryption";
import { mapState } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: mapState(["settings"]),
  components: {
    MasterPassword,
  },
  methods: {
    formIsValid() {
      if (!this.email || !this.password) {
        message.error(
          this.$t("LoginFormInvalid", "Email and password are mandatory")
        );
        return false;
      }
      return true;
    },
    signIn() {
      if (this.formIsValid()) {
        encryptPassword(this.email, this.password).then((encryptedPassword) => {
          const password = this.settings.encryptMasterPassword
            ? encryptedPassword
            : this.password;
          User.login({ email: this.email, password })
            .then((response) => {
              this.$store.dispatch("login", response.data);
              this.$router.push({ name: "home" });
            })
            .catch((err) => {
              if (err.response && err.response.status === 401) {
                message.error(
                  this.$t(
                    "LoginIncorrectError",
                    "The email and password you entered did not match our records. Please double-check and try again."
                  )
                );
              } else {
                message.displayGenericError();
              }
            });
        });
      }
    },
  },
};
</script>
