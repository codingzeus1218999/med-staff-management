<template>
  <div>
    <header class="w-full bg-slate-600">
      <div class="container flex mx-auto">
        <router-link to="/doctors" class="alex-nav-item">Doctors</router-link>
        <router-link to="/nurses" class="alex-nav-item">Nurses</router-link>
      </div>
    </header>
    <main class="container mx-auto py-10">
      <h1 class="alex-page-title">{{ props.title }}</h1>
      <div class="mt-10">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<style scoped lang="scss"></style>
