<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>

<script>
import MainLayout from "@/components/layout/MainLayout";

import "./assets/css/main.css";

export default {
  components: { MainLayout },
};
</script>
