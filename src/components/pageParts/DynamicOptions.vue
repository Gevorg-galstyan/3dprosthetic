<template>
  <v-col
    v-if="activeClass"
    md="3"
    cols="12"
    class="px-0 py-0 border-left vh-100 overflow-y-auto"
  >
    <div class="border-bottom">
      <v-toolbar flat color="white">
        <v-toolbar-title class="toolbar-head text-capitalize">
          {{ activePageItems.title }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon class="settings-buttons" @click="changeComponent('dec')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-btn icon class="settings-buttons" @click="changeComponent('inc')">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-toolbar>
    </div>

    <component :is="activePage" v-model="selected[activePage]"></component>

    <v-footer
      v-if="isMobile"
      bottom
      fixed
      flat
      app
      color="white"
      class="border-top"
    >
      <v-toolbar-title class="toolbar-head text-capitalize">
        <v-btn class="ma-2 default-rounded" outlined rounded>
          Reset settings
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="ma-2 default-rounded" outlined fab @click="changeView">
        <img src="/logo-footer.svg" alt="" />
      </v-btn>
    </v-footer>
  </v-col>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DynamicOptions",
  components: {
    Settings: () =>
      import(/* webpackPrefetch: true */ "../settingsComponents/Settings.vue"),
    Design: () =>
      import(/* webpackPrefetch: true */ "../settingsComponents/Design.vue"),
    MainColor: () =>
      import(/* webpackPrefetch: true */ "../settingsComponents/MainColor.vue"),
    Models: () =>
      import(/* webpackPrefetch: true */ "../settingsComponents/Models.vue"),
    StrapColor: () =>
      import(
        /* webpackPrefetch: true */ "../settingsComponents/StrapColor.vue"
      ),
  },
  data: () => ({
    pageIndex: 0,
    dynamicComponents: [
      "models",
      "design",
      "mainColor",
      "strapColor",
      "settings",
    ],
    pages: [
      {
        title: "settings",
        name: "settings",
        items: [
          {
            id: 1,
            name: "Main Color",
          },
          {
            id: 1,
            name: "Strap Color",
          },
          {
            id: 1,
            name: "Detail Color",
          },
          {
            id: 1,
            name: "Finish",
          },
        ],
      },
      {
        title: "design",
        name: "design",
      },
      {
        title: "main color",
        name: "mainColor",
      },
      {
        title: "models",
        name: "models",
      },
      {
        title: "strap color",
        name: "strapColor",
      },
    ],
  }),
  computed: {
    ...mapState({
      selected: (state) => state.selected,
      isMobile: (state) => state.isMobile,
      viewMode: (state) => state.viewMode,
    }),
    activePage() {
      return this.dynamicComponents[this.pageIndex];
    },
    activePageItems() {
      return this.pages.find(
        (item) => item.name.toLowerCase() === this.activePage.toLowerCase()
      );
    },
    activeClass() {
      if (!this.isMobile) {
        return true;
      }

      return this.viewMode === "settings";
    },
  },
  methods: {
    changeComponent(type) {
      if (
        type === "inc" &&
        this.pageIndex < this.dynamicComponents.length - 1
      ) {
        this.pageIndex++;
      } else if (type === "dec" && this.pageIndex !== 0) {
        this.pageIndex--;
      }
    },
    changeView() {
      this.$store.commit("setView", "main");
    },
  },
};
</script>

<style scoped>
.settings-buttons {
  background: #f6f6f6;
  color: #101010 !important;
  margin-left: 8px;
}

.settings-buttons:hover {
  background: #101010;
  color: #fff !important;
}

.toolbar-head {
  font-weight: bold;
  font-size: 16px;
}
</style>
