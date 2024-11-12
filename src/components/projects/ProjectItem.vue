<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  title: String,
  description: String,
})

//code responsible for generating custom (colores or bolded) text when it encounters three stars in a row
//for example text "I love ***Vue.js***" will get converted to "<span>I love </span><span class='some classes...'>Vue.js</span>"
let starsInRow = 0

const descriptionElements = []
let isSpecialElement = false
let currentElement = document.createElement('span')

for (const char of props.description) {
  currentElement.innerText += char

  if (char === '*') {
    starsInRow++
  } else {
    starsInRow = 0
  }

  if (starsInRow === 3) {
    //remove 3 last chars (they are the stars)
    currentElement.innerText.slice(0, currentElement.innerText.length - 3)

    //don't add an element if it's empty
    if (!currentElement.innerText.length) {
      continue
    }

    if (isSpecialElement) {
      currentElement.classList.add('text-primary')
    }

    //append it to description elements
    descriptionElements.push(currentElement)

    currentElement = document.createElement('span')
    isSpecialElement = !isSpecialElement
  }
}

const descriptionRef = ref()

onMounted(() => {
  console.log(descriptionRef.value)
})

console.log(descriptionElements)
</script>

<template>
  <div class="grid grid-cols-2 mt-16">
    <div class="ml-16">
      <img src="/taxi-mockup.png" width="300px" alt="" />
    </div>
    <div>
      <h3 class="text-primary font-bold text-3xl">{{ title }}</h3>
      <p ref="descriptionRef" class="mt-8 text-xl"></p>
      <ul class="list-disc ml-4 mt-4">
        <li>Możliwość założenia konta przez użytkowników. Wysyłanie linków weryfikacyjnych na adres email.</li>
        <li>Możliwość zamówienia przejazdu poprzez podanie adresu początkowego oraz końcowego lub zaznaczenia miejsca na mapie.</li>
      </ul>
    </div>
  </div>
</template>
