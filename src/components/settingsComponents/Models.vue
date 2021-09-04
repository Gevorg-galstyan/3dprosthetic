<template>
  <div class="d-flex flex-wrap text-center">
    <v-col cols="6" class="param-item">
      <div class="param-block">
        <img src="/assets/img/exp/6.png" alt="" />
      </div>

      <div class="param-name">
        <span>Allens</span>
      </div>

      <label class="param-radio-label">
        <input
          type="radio"
          name="param"
          class="d-none"
          checked
          @input="select('/assets/img/exp/6.png', 'Allens')"
        />
        <span class="checkmark"></span>
      </label>
    </v-col>

    <v-col cols="6" class="param-item">
      <div class="param-block">
        <img src="/assets/img/exp/5.png" alt="" />
      </div>

      <div class="param-name">
        <span>Stealth</span>
      </div>

      <label class="param-radio-label">
        <input
          type="radio"
          name="param"
          class="d-none"
          @input="select('/assets/img/exp/5.png', 'Stealth')"
        />
        <span class="checkmark"></span>
      </label>
    </v-col>

    <v-col cols="6" class="param-item">
      <div class="param-block">
        <img src="/assets/img/exp/1.png" alt="" width="100%" />
      </div>

      <div class="param-name">
        <span>Apollo</span>
      </div>

      <label class="param-radio-label">
        <input
          type="radio"
          name="param"
          class="d-none"
          @input="select('/assets/img/exp/1.png', 'Apollo')"
        />
        <span class="checkmark"></span>
      </label>
    </v-col>

    <v-col cols="6" class="param-item">
      <div class="param-block">
        <img src="/assets/img/exp/2.png" alt="" width="100%" />
      </div>

      <div class="param-name">
        <span>Baller</span>
      </div>

      <label class="param-radio-label">
        <input
          type="radio"
          name="param"
          class="d-none"
          @input="select('/assets/img/exp/2.png', 'Baller')"
        />
        <span class="checkmark"></span>
      </label>
    </v-col>

    <v-col cols="6" class="param-item">
      <div class="param-block">
        <img src="/assets/img/exp/3.png" alt="" />
      </div>

      <div class="param-name">
        <span>Bloom</span>
      </div>

      <label class="param-radio-label">
        <input
          type="radio"
          name="param"
          class="d-none"
          @input="select('/assets/img/exp/3.png', 'Bloom')"
        />
        <span class="checkmark"></span>
      </label>
    </v-col>

    <v-col cols="6" class="param-item">
      <div class="param-block">
        <img src="/assets/img/exp/4.png" alt="" />
      </div>

      <div class="param-name">
        <span>Deco</span>
      </div>

      <label class="param-radio-label">
        <input
          type="radio"
          name="param"
          class="d-none"
          @input="select('/assets/img/exp/4.png', 'Deco')"
        />
        <span class="checkmark"></span>
      </label>
    </v-col>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Models",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState({
      models: (state) => state.selected.models || "",
    }),
  },
  async mounted() {
    if (!this.models) {
      await this.$store.commit("setSelected", {
        name: "models",
        value: "Allens",
      });
      await this.$store.commit("setImage", "/assets/img/exp/6.png");
    }
  },
  methods: {
    async select(img, model) {
      await this.$store.commit("setSelected", { name: "models", value: model });
      await this.$store.commit("setImage", img);
    },
  },
};
</script>
