<script setup>
import BaseTitle from '../base/BaseTitle.vue'
import ProjectItem from '../projects/ProjectItem.vue'
</script>

<template>
  <section class="mx-[250px] mt-32">
    <BaseTitle>MOJE PROJEKTY</BaseTitle>
    <ProjectItem
      title="APLIKACJA TAXI"
      description="Moim ostatnim projektem jest aplikacja mobilna taxi stworzona przy użyciu ***React Native*** oraz ***Node.js***"
    />
    <div class="grid grid-cols-2 mt-8">
      <div>
        <h3 class="text-primary font-bold text-3xl">PLATFORMA BEATSTORE</h3>
        <p class="mt-8 text-xl">
          Beatstore to platforma do dzielenia się swoją muzyką z innymi zaprogramowana w <span class="text-primary">Vue.js</span> oraz
          <span class="text-primary">Node.js</span>
        </p>
        <ul class="list-disc ml-4 mt-4">
          <li>Możliwość założenia konta przez użytkowników. Wysyłanie linków weryfikacyjnych na adres email.</li>
          <li>Możliwość zamówienia przejazdu poprzez podanie adresu początkowego oraz końcowego lub zaznaczenia miejsca na mapie.</li>
        </ul>
      </div>
      <div class="ml-16">
        <img src="/beatstore-mockup.png" width="1500px" alt="" />
      </div>
    </div>
  </section>
</template>
