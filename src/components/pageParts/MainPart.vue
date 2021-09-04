<template>
  <v-col
    v-if="activeClass"
    md="9"
    cols="12"
    class="position-relative vh-100 main-part py-0"
  >
    <v-app-bar v-if="!isMobile" col dense flat class="px-0">
      <v-breadcrumbs
        :items="items"
        class="px-0 breadcrumbs-color"
      ></v-breadcrumbs>
    </v-app-bar>

    <div class="image-part">
      <img :src="image" alt="" class="big-img ima" />
    </div>

    <v-footer col absolute class="p-16" :class="{ white: isMobile }">
      <v-row v-if="!isMobile" align="center">
        <v-col cols="4" class="text-left">
          <v-btn class="ma-2 default-rounded" outlined rounded> AR-Mode </v-btn>
        </v-col>

        <v-col cols="4" class="text-center">
          <button class="animate-mode">
            <img src="../../assets/img/ar.png" alt="" width="50px" />
          </button>
        </v-col>

        <v-col cols="4" class="text-right">
          <v-btn class="ma-2 default-rounded" outlined rounded> Help </v-btn>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12"> </v-col>

        <v-col
          cols="12"
          class="
            px-0
            d-flex
            flex-wrap
            align-content-center
            justify-space-between
          "
        >
          <div>
            <v-btn class="ma-2 default-circle" small outlined fab>
              <img src="/menu.svg" alt="" />
            </v-btn>

            <v-btn
              class="ma-2 default-rounded"
              outlined
              rounded
              @click="changeView"
            >
              Go to list
            </v-btn>
          </div>

          <div>
            <v-btn
              icon
              outlined
              class="ma-1 default-circle"
              @click="changeItem('dec')"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <v-btn
              icon
              outlined
              class="ma-1 default-circle"
              @click="changeItem('inc')"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-col>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MainPart",
  computed: {
    ...mapState({
      image: (state) => state.activeImage,
      selected: (state) => state.selected,
      isMobile: (state) => state.isMobile,
      viewMode: (state) => state.viewMode,
    }),
    items() {
      const breadcrumb = [];

      Object.keys(this.selected).forEach((item) => {
        if (this.selected[item]) {
          breadcrumb.push({
            text: this.selected[item],
            disabled: true,
          });
        }
      });

      return breadcrumb;
    },
    activeClass() {
      if (!this.isMobile) {
        return true;
      }

      return this.viewMode === "main";
    },
  },
  methods: {
    changeView() {
      this.$store.commit("setView", "settings");
    },
    changeItem() {
      console.log(1);
    },
  },
};
</script>

<style scoped>
.main-part {
  background: #f6f6f6;
}

.image-part {
  text-align: center;
  max-height: 80%;
  height: 100%;
}

.big-img {
  height: 100%;
}

.animate-mode {
  background-color: transparent;
  border: none;
}
</style>
