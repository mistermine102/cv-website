<script setup>
import BaseButton from '../base/BaseButton.vue'
import BaseTitle from '../base/BaseTitle.vue'
</script>

<template>
  <section class="grid grid-cols-2 gap-x-32 mx-[250px] mt-16">
    <div>
      <BaseTitle>O MNIE</BaseTitle>
      <p class="mt-8 font-medium">
        Nazywam się Szymon Jarosz. Moja przygoda z programowaniem zaczęła się w 2019 kiedy to rozpocząłem naukę na kierunku Technik-Programista. Od
        tego czasu przerobiłem dużo kursów i uczęszczałem w wielu szkoleniach. 5 lat okazało się również wystarczającym czasem na znalezienie swojego
        ulubionego języka - javascript
      </p>
      <div class="flex justify-center mt-8">
        <BaseButton>Skontaktuj się ze mną</BaseButton>
      </div>
    </div>
    <div class="flex items-center py-4">
      <div class="w-full h-full bg-primary shadow-lg rounded-lg flex flex-col p-4 justify-between text-lg font-semibold">
        <span>szymonjarosz102@gmail.com</span>
        <span>+48532395944</span>
        <span>Ostrzeszów</span>
        <span>08.11.2004</span>
      </div>
    </div>
  </section>
</template>
