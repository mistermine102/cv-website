<script setup>
import BaseButton from '../base/BaseButton.vue'
import BaseTitle from '../base/BaseTitle.vue'
import HospitalIcon from 'vue-material-design-icons/Hospital.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import MailIcon from 'vue-material-design-icons/Email.vue'
import TheHeader from '../layout/TheHeader.vue'
</script>

<template>
  <section id="about-section" class="relative min-h-screen">
    <img id="about-section-image" src="/images/background.jpg" alt="" class="absolute w-full h-full object-cover opacity-50" />
    <TheHeader />
    <div class="grid grid-cols-2 gap-x-32 mx-page pb-16">
      <div class="z-10">
        <BaseTitle>O MNIE</BaseTitle>
        <p class="font-medium">
          Nazywam się Szymon Jarosz. Moja przygoda z programowaniem zaczęła się w 2019 kiedy to rozpocząłem naukę na kierunku Technik-Programista. Od
          tego czasu przerobiłem dużo kursów i uczęszczałem w wielu szkoleniach. 5 lat okazało się również wystarczającym czasem na znalezienie
          swojego ulubionego języka - javascript
        </p>
        <div class="flex justify-center mt-8">
          <BaseButton>Skontaktuj się ze mną</BaseButton>
        </div>
      </div>
      <div class="w-full h-full z-10 px-8 py-16 flex flex-col justify-between font-semibold">
        <div class="flex items-center gap-x-4">
          <MailIcon :size="32" />
          <p>szymonjarosz102@gmail.com</p>
        </div>
        <div class="flex items-center gap-x-2">
          <PhoneIcon :size="32" />
          <p>+48532395944</p>
        </div>
        <div class="flex items-center gap-x-2">
          <HomeIcon :size="32" />
          <p>Ostrzeszów</p>
        </div>
        <div class="flex items-center gap-x-2">
          <HospitalIcon :size="32" />
          <p>08.11.2004</p>
        </div>
      </div>
    </div>
  </section>
</template>
