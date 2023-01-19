<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts" setup>
  // Store locale in cookie manually
  // const cookieLocale = useCookie('locale', { maxAge: 365 * 24 * 60 * 60 /* 1 year */ })
  // const { locale } = useLocale()
  //
  // watch(locale, (value) => {
  //   cookieLocale.value = value
  // }, { immediate: true })
</script>
