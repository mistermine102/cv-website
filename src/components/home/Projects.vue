<script setup>
import BaseTitle from '../base/BaseTitle.vue'
import ProjectItem from '../ProjectItem.vue'
import ModalTaxiDetails from '../modals/ModalTaxiDetails.vue'
import ModalBeatstoreDetails from '../modals/ModalBeatstoreDetails.vue'
</script>

<template>
  <section id="projects-section" class="mx-page mt-16">
    <BaseTitle id="projects-title">MOJE PROJEKTY</BaseTitle>
    <div class="flex flex-col gap-y-16">
      <ProjectItem
        title="APLIKACJA TAXI"
        :features="[
          'Możliwość założenia konta przez użytkowników. Wysyłanie linków weryfikacyjnych na adres email',
          'Możliwość zamówienia przejazdu poprzez podanie adresu początkowego oraz końcowego lub zaznaczenia miejsca na mapie',
          'Możliwość śledzenia lokalizacji zamówionego kierowcy na mapie',
        ]"
        :technologies="[
          { name: 'React Native', icon: '/icons/react.svg' },
          { name: 'NodeJS', icon: '/icons/nodejs.svg' },
          { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        ]"
        :model="{ src: '/models/iphone/scene.gltf', zoom: 8 }"
        :mockups="[{ src: '/images/mockups/taxi-mockup-1.png' }, { src: '/images/mockups/taxi-mockup-2.png' }]"
        :detailsModal="ModalTaxiDetails"
      >
        <template #description>
          <p>
            Moim ostatnim projektem jest aplikacja mobilna taxi stworzona przy użyciu <span class="text-primary">React Native</span> oraz
            <span class="text-primary">Node.js</span>
          </p>
        </template>
      </ProjectItem>
      <ProjectItem
        title="PLATFORMA BEATSTORE"
        :features="[
          'Możliwość założenia swojego konta',
          'Możliwość przeglądania oraz polubiania utworów innych użytkowników',
          'Możliwość opublikowania własnych podkładów lub utworów',
        ]"
        :technologies="[
          { name: 'Vue', icon: '/icons/vue.svg' },
          { name: 'NodeJS', icon: '/icons/nodejs.svg' },
          { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        ]"
        :model="{ src: '/models/macbook/scene.gltf', zoom: 16 }"
        :mockups="[
          { src: '/images/mockups/beatstore-mockup-1.png' },
          { src: '/images/mockups/beatstore-mockup-2.png' },
          { src: '/images/mockups/beatstore-mockup-3.png' },
        ]"
        :detailsModal="ModalBeatstoreDetails"
      >
        <template #description>
          <p>
            Beatstore to platforma do dzielenia się swoją muzyką z innymi zaprogramowana w <span class="text-primary">Vue.js</span> oraz
            <span class="text-primary">Node.js</span>
          </p>
        </template>
      </ProjectItem>
    </div>
  </section>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
