<template>
  <div>
    <div style="margin-top: 50px" class="container is-fluid">
      <div class="column is-one-quarter">
        <router-link :to="'/'" class="button is-success is-fullwidth">Retour à la liste</router-link>
      </div>
      <div class="center">
      <div class="column is-8">
      <div class="field">
  <label class="label">Titre de ta fonction</label>
  <div class="control">
    <input v-model="title" class="input" type="text" placeholder="retourner null">
  </div>
</div>

<div class="field">
  <label class="label">Ta fonction, n'hésite pas à la commenter !</label>
  <div class="control">
    <textarea v-model="func" class="textarea" placeholder="return null"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-success" @click.prevent="submitFunction">Go !</button>
  </div>
</div>
<div v-if="error" class="notification is-danger">
 Tous les champs sont obligatoires.
</div>
<div v-if="success" class="notification is-success">
 Merci pour ta contribution, elle sera bientôt publiée.
</div>
</div>
</div>
   </div>
    <div class="spacer"></div>
    <Footer/>
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
</style>

<script>
import { mapActions } from "vuex";
import Footer from "@/components/Footer";

export default {
  components: {
    Footer,
  },
  data() {
    return {
    title: null,
    func: null,
    error: null,
    success: null
    };
  },
  mounted: function() {
  
  },

  methods: {
    ...mapActions(["postFunction"]),
    submitFunction() {
    if (this.title && this.func){
        let payload = {
            title: this.title,
            func: this.func
        }
        this.postFunction(payload)
        this.title = '',
        this.func = '',
        this.success = 'success'
        this.error = ''
    }else {
        this.error = 'error'
    }
    }
  },
  computed: {
   
  }
};
</script>
