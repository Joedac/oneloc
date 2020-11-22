<template>
  <div>
    <div class="column" v-bind:key="i" v-for="(func, i) in functionsList">
      <div v-if="checkCat === func.category">
        <p>{{ func.name }} <br> <i class="fas fa-user-edit"></i>&nbsp;<span class="tag is-rounded tag-author">{{ func.author }}</span></p>
        <b-collapse
          :open="false"
          position="is-bottom"
          aria-id="contentIdForA11y1"
        >
          <a
            class="show"
            slot="trigger"
            slot-scope="props"
            aria-controls="contentIdForA11y1"
          >
            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
            {{ !props.open ? "Show me the code !" : "Hide" }}
          </a>
          <vue-simple-markdown :id="i" :source="func.function"></vue-simple-markdown
          >
          <CopyButton :id="'button_'+i" @copyPush="copy(i)" />
          Catégorie :
          <span class="tag is-rounded tag-category">{{ func.category }}</span>
        </b-collapse>
        <hr />
      </div>
      <div v-else>
        <section>
          <article class="media" v-for="i in media" :key="i">
            <figure class="media-left">
              <p class="image is-64x64">
                <b-skeleton circle width="64px" height="64px"></b-skeleton>
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <b-skeleton active></b-skeleton>
                  <b-skeleton height="80px"></b-skeleton>
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item">
                    <span class="icon is-small">
                      <b-skeleton></b-skeleton>
                    </span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small">
                      <b-skeleton></b-skeleton>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.show {
  color: #8e8e8e;
}
.tag-author {
  background-color: #8e8e8e !important;
  color: white;
}
.tag-category {
  background-color: #616161 !important;
  color: white;
}
.tag-copy {
  background-color: #cfd8dc !important;
  color: white;
}
</style>

<script>
import CopyButton from "@/components/CopyButton";

export default {
  components:{
    CopyButton
  },
  props: {
    functionsList: Array,
    checkCat: String,
    media: Number,
  },
   methods: {
    copy(i) {
      let copiedText = document.getElementById(i).innerText;
      navigator.permissions
        .query({ name: "clipboard-write" })
        .then((result) => {
          if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(copiedText).then(
              function () {
                /* clipboard successfully set */
              },
              function () {
                /* clipboard write failed */
              }
            );
          }
        });
      document.getElementById('button_'+i).innerText = 'copied !';
    },
  },
};
</script>
