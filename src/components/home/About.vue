<script setup>
import BaseButton from '../base/BaseButton.vue'
import BaseTitle from '../base/BaseTitle.vue'
import HospitalIcon from 'vue-material-design-icons/Hospital.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import MailIcon from 'vue-material-design-icons/Email.vue'

document.addEventListener('mousemove', e => {
  const cards = document.querySelectorAll('.information-card')

  let index = 1

  for (const card of cards) {
    const cardBounding = card.getBoundingClientRect()

    const cardCenter = {
      x: (cardBounding.right + cardBounding.left) / 2,
      y: (cardBounding.bottom + cardBounding.top) / 2,
    }

    const distanceX = cardCenter.x - e.clientX
    const distanceY = cardCenter.y - e.clientY // Flip the Y-axis for clockwise rotation

    // Use Math.atan2 and offset by 90° to make "above" equal to 180°
    let degrees = (Math.atan2(distanceY, distanceX) * 180) / Math.PI + 90

    // Normalize to 0-360 degrees
    if (degrees < 0) {
      degrees += 360
    }

    document.documentElement.style.setProperty(`--gradient-angle-${index}`, degrees + 'deg')
    index++
  }
})
</script>

<template>
  <section id="about-section" class="grid grid-cols-2 gap-x-32">
    <div class="z-10">
      <BaseTitle>O MNIE</BaseTitle>
      <p class="font-medium">
        Nazywam się Szymon Jarosz. Moja przygoda z programowaniem zaczęła się w 2019 kiedy to rozpocząłem naukę na kierunku Technik-Programista. Od
        tego czasu przerobiłem dużo kursów i uczęszczałem w wielu szkoleniach. 5 lat okazało się również wystarczającym czasem na znalezienie swojego
        ulubionego języka - javascript
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
    <div class="absolute inset-0 opacity-50 background-image">
      <img src="/images/background.jpg" alt="" />
      <!-- <div class="flex items-center absolute w-[450px] h-[450px] rounded-full top-32 right-16">
        <div class="information-card-bg bubble-1 absolute inset-0 blur-2xl"></div>
        <div class="information-card-bg bubble-1 absolute inset-0"></div>
        <div class="information-card flex flex-col gap-y-4 p-8 bg-background justify-center items-center absolute inset-1 rounded-full"></div>
      </div>
      <div class="flex items-center absolute w-[400px] h-[400px] rounded-full bottom-4 right-[30%]">
        <div class="information-card-bg bubble-2 absolute inset-0 blur-2xl"></div>
        <div class="information-card-bg bubble-2 absolute inset-0"></div>
        <div class="information-card flex flex-col gap-y-4 p-8 bg-background justify-center items-center absolute inset-1 rounded-full"></div>
      </div>
      <div class="flex items-center absolute w-[500px] h-[500px] rounded-full bottom-16 left-16">
        <div class="information-card-bg bubble-3 absolute inset-0 blur-2xl"></div>
        <div class="information-card-bg bubble-3 absolute inset-0"></div>
        <div class="information-card flex flex-col gap-y-4 p-8 bg-background justify-center items-center absolute inset-1 rounded-full"></div>
      </div> -->
    </div>
  </section>
</template>
