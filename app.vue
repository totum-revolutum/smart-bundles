<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@use "@/assets/main.scss" as *;
@use "@/assets/_variables.scss" as *;

.app {
  margin-inline: 53px;
  color: $primary-color;
}
</style>
