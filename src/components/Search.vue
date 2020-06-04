
 <template>
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-one-quarter">
        <div class="field">
          <div class="control">
            <p class="control has-icons-left">
              <input
                class="input is-rounded is-primary"
                type="text"
                v-model="searchWord"
                placeholder="Recherche"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-search"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

    <script>
export default {
 props: {
      Search: String
      },
       computed: {
    searchWord: {
      get() { return this.search },
      set(val) { this.$emit('receivingSelfSearch', val) }
    }
  }
 }

 
</script>