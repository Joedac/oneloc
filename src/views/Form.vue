<template>
  <div>
    <div style="margin-top: 50px" class="container is-fluid">
      <GoBackButton />
      <div class="center">
        <div class="column is-8">
          <InputText
            id="pseudo"
            placeholder="@DacJoe"
            label="Ton pseudo"
            @receivingText="setAuthor"
            v-model="author"
          />
          <InputText
            :error="error"
            id="title"
            placeholder="retourner null"
            label="Titre de ta fonction"
            @receivingText="setTitle"
            v-model="title"
          />
          <InputTextArea
            :error="error"
            id="function"
            placeholder="return null"
            label="Ta fonction, n'hésite pas à la commenter !"
            @receivingTextArea="setFunction"
            v-model="func"
          />
          <div class="field is-grouped">
            <div class="control">
              <button
                class="button is-rounded submit-button"
                @click.prevent="submitFunction"
              >
                Go !
              </button>
            </div>
          </div>
          <div v-if="error" class="notification is-danger">
            <button @click="closeError" class="delete"></button>
            Les champs titre et fonction sont obligatoires.
          </div>
          <div v-if="success" class="notification is-success">
            Merci pour ta contribution, elle sera bientôt publiée.
          </div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <Footer />
  </div>
</template>

<style scoped>
.title {
  margin-top: 20px;
}
.show {
  color: #00d1b2;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.spacer {
  min-height: 60px;
}
.submit-button {
  background-color: #616161 !important;
  color: white;
}
</style>

<script>
import { mapActions } from "vuex";
import Footer from "@/components/Footer";
import GoBackButton from "../components/GoBackButton";
import InputText from "../components/InputText";
import InputTextArea from "../components/InputTextArea";

export default {
  components: {
    Footer,
    GoBackButton,
    InputText,
    InputTextArea,
  },
  data() {
    return {
      author: null,
      title: null,
      func: null,
      error: null,
      success: null,
    };
  },
  mounted: function () {},

  methods: {
    ...mapActions(["postFunction"]),

    setAuthor(text) {
      this.author = text;
    },

    setTitle(text) {
      this.title = text;
    },
    setFunction(text) {
      this.func = text;
    },

    submitFunction() {
      if (this.title && this.func) {
        let payload = {
          author: this.author,
          title: this.title,
          func: this.func,
        };
        this.postFunction(payload);
        (document.getElementById("pseudo").value = ""),
          (document.getElementById("title").value = ""),
          (document.getElementById("function").value = ""),
          (this.author = null),
          (this.title = null),
          (this.func = null),
          (this.success = "success");
        this.error = "";
      } else {
        this.error = "error";
      }
    },
    closeError() {
      this.error = "";
    },
  },
  computed: {},
};
</script>
