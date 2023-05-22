<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<template>
  <component :is="$route.meta.layout">
    <router-view />
  </component>
</template>
