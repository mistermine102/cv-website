<script setup>
import BaseButton from "../base/BaseButton.vue";
import BaseTitle from "../base/BaseTitle.vue";
import HospitalIcon from "vue-material-design-icons/Hospital.vue";
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import HomeIcon from "vue-material-design-icons/Home.vue";
import MailIcon from "vue-material-design-icons/Email.vue";
import TheHeader from "../layout/TheHeader.vue";

document.addEventListener("mousemove", (e) => {
  const cards = document.querySelectorAll(".information-card");

  let index = 1;

  for (const card of cards) {
    const cardBounding = card.getBoundingClientRect();

    const cardCenter = {
      x: (cardBounding.right + cardBounding.left) / 2,
      y: (cardBounding.bottom + cardBounding.top) / 2,
    };

    const distanceX = cardCenter.x - e.clientX;
    const distanceY = cardCenter.y - e.clientY; // Flip the Y-axis for clockwise rotation

    // Use Math.atan2 and offset by 90° to make "above" equal to 180°
    let degrees = (Math.atan2(distanceY, distanceX) * 180) / Math.PI + 90;

    // Normalize to 0-360 degrees
    if (degrees < 0) {
      degrees += 360;
    }

    document.documentElement.style.setProperty(
      `--gradient-angle-${index}`,
      degrees + "deg"
    );
    index++;
  }
});
</script>

<template>
  <section class="relative">
    <img
      src="/images/background.jpg"
      alt=""
      class="absolute w-full h-full object-cover opacity-50"
    />
    <TheHeader />
    <div id="about-section" class="grid grid-cols-2 gap-x-32 mx-page">
      <div class="z-10">
        <BaseTitle>O MNIE</BaseTitle>
        <p class="font-medium">
          Nazywam się Szymon Jarosz. Moja przygoda z programowaniem zaczęła się
          w 2019 kiedy to rozpocząłem naukę na kierunku Technik-Programista. Od
          tego czasu przerobiłem dużo kursów i uczęszczałem w wielu szkoleniach.
          5 lat okazało się również wystarczającym czasem na znalezienie swojego
          ulubionego języka - javascript
        </p>
        <div class="flex justify-center mt-8">
          <BaseButton>Skontaktuj się ze mną</BaseButton>
        </div>
      </div>
      <div
        class="w-full h-full z-10 px-8 py-16 flex flex-col justify-between font-semibold"
      >
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
