<template>
  <v-row>
    <main-part></main-part>

    <dynamic-options></dynamic-options>
  </v-row>
</template>

<script>
import MainPart from "@/components/pageParts/MainPart";
import DynamicOptions from "@/components/pageParts/DynamicOptions";

export default {
  name: "Home",
  components: { DynamicOptions, MainPart },
};
</script>
