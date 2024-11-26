<script setup>
import TimelineItem from '../TimelineItem.vue'
import TimelineEdge from '../TimelineEdge.vue'
import BaseTitle from '../base/BaseTitle.vue'
</script>

<template>
  <div>
    <BaseTitle id="experience-title">DOŚWIADCZENIE</BaseTitle>
    <div>
      <TimelineEdge />
      <TimelineItem title="Freelancer" timeframe="01.2024 - Obecnie">
        <p>
          Współpraca z klientami, tworzenie stron, sklepów, aplikacji internetowych jak i moblinych przy użyciu technologii takich jak: WordPress,
          WooCommerce, Vue.js, Node.js, React Native
        </p></TimelineItem
      >
      <TimelineItem title="Complaia Systems" timeframe="02.2023 - 09.2023" :isLast="true">
        <p>
          Praca na stanowisku <span class="font-semibold">Junior Fullstack Developer</span> . Programowanie aplikacji internetowych w Vue.js oraz
          Node.js, moja rola przy tworzeniu projektów polegała na wprowadzaniu nowych funkcjonalności oraz naprawianiu błędów.
        </p></TimelineItem
      >
    </div>
  </div>
</template>
