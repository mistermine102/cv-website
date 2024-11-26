<script setup>
import BaseTitle from '../base/BaseTitle.vue'
import ProjectItem from '../ProjectItem.vue'
</script>

<template>
  <section id="projects-section" class="mx-page mt-16">
    <BaseTitle id="projects-title">MOJE PROJEKTY</BaseTitle>
    <div class="flex flex-col gap-y-16">
      <ProjectItem
        title="APLIKACJA TAXI"
        :image="{ src: '/images/taxi-mockup.png', alt: 'Aplikacja Taxi' }"
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
        :model="{ src: '/models/iphone/scene.gltf' }"
      >
        <p>
          Moim ostatnim projektem jest aplikacja mobilna taxi stworzona przy użyciu <span class="text-primary">React Native</span> oraz
          <span class="text-primary">Node.js</span>
        </p>
      </ProjectItem>
      <ProjectItem
        title="PLATFORMA BEATSTORE"
        :image="{ src: '/images/beatstore-mockup.png', alt: 'Platforma Beatstore' }"
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
        :model="{ src: '/models/macbook/scene.gltf' }"
      >
        <p>
          Beatstore to platforma do dzielenia się swoją muzyką z innymi zaprogramowana w <span class="text-primary">Vue.js</span> oraz
          <span class="text-primary">Node.js</span>
        </p>
      </ProjectItem>
    </div>
  </section>
</template>
