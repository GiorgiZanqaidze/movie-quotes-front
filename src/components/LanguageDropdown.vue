<template>
  <select v-model="$i18n.locale" class="text-white bg-gray text-sm sm:text-lg">
    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
      {{ $t(`landing.${locale}`) }}
    </option>
  </select>
</template>
