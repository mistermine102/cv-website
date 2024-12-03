<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'
import BaseAudio from '../base/BaseAudio.vue'

const modalRef = ref()

const toggle = () => {
  modalRef.value.toggle()
}

defineExpose({
  toggle,
})
</script>
<template>
  <Modal ref="modalRef">
    <div class="w-full h-full p-4">
      <h2 class="text-4xl font-bold mb-4 text-primaryLight">Platforma Beatstore</h2>
      <p class="mb-16">Platforma internetowa do udostępniania muzyki.</p>
      <h3 class="text-3xl font-bold mb-4">Użyte technologie i biblioteki</h3>
      <h4 class="text-2xl font-semibold mb-2">Klient</h4>
      <ul class="text-base list-disc ml-8 mb-2">
        <li>Vue</li>
        <li>Vite</li>
        <li>Vuex</li>
        <li>Vue Router</li>
        <li>Vuelidate</li>
        <li>Tailwind Css</li>
      </ul>
      <h4 class="text-2xl font-semibold mb-2">Serwer</h4>
      <ul class="text-base list-disc ml-8 mb-8">
        <li>Node.js</li>
        <li>Express</li>
        <li>Bcrypt</li>
        <li>Json Web Token</li>
        <li>Express Validator</li>
        <li>Mongoose</li>
        <li>Multer</li>
        <li>Aws</li>
        <li>Amazon Web Services (s3)</li>
        <li>Sharp (image processing)</li>
      </ul>
      <h4 class="text-2xl font-semibold mb-2">Beaty</h4>
      <span class="text-base bg-[#93c5fd] text-[#1e40af] px-4 py-1 rounded-full">Beat</span>
      <p class="text-base mb-2 mt-4">
        Odnoszą się do gotowych podkładów muzycznych najczęściej przeznaczonych do wykorzystania przez raperów i stworzenia pełnego utworu.
      </p>
      <iframe class="w-full h-[300px] mb-8 rounded-lg" src="https://www.youtube.com/embed/D7BZLOn7E-w"> </iframe>
      <h4 class="text-2xl font-semibold mb-2">Sample</h4>
      <span class="text-base bg-[#86efac] text-[#166534] px-4 py-1 rounded-full">Sample</span>
      <p class="text-base mb-2 mt-4">Utwory bądź melodie. W kontekście produkcji muzyki wykorzystywane do stworzenia na ich podstawie beatu.</p>
      <iframe class="w-full h-[300px] mb-8 rounded-lg" src="https://www.youtube.com/embed/s6F37L7vtyw"> </iframe>
      <h4 class="text-2xl font-semibold mb-2">Drum Kity</h4>
      <span class="text-base bg-[#fdba74] text-[#9a3412] px-4 py-1 rounded-full">Drum Kit</span>
      <p class="text-base mb-2 mt-4">Paczki krótkich dźwięków przypominających perkusje wykorzystywane do produkcji muzyki</p>
      <div class="flex items-center">
        <p>Kick</p>
        <BaseAudio :volume="0.1" src="/drumkit/kick.wav" />
      </div>
      <div class="flex items-center">
        <p>Clap</p>
        <BaseAudio :volume="0.1" src="/drumkit/clap.wav" />
      </div>
      <div class="flex items-center">
        <p>Snare</p>
        <BaseAudio :volume="0.1" src="/drumkit/snare.wav" />
      </div>
      <div class="flex items-center">
        <p>Hi Hat</p>
        <BaseAudio :volume="0.1" src="/drumkit/hihat.wav" />
      </div>
      <div class="flex items-center">
        <p>808</p>
        <BaseAudio :volume="0.1" src="/drumkit/808.wav" />
      </div>
      <div class="flex items-center">
        <p>Drums</p>
        <BaseAudio :volume="0.1" src="/drums.mp3" />
      </div>
      <p class="mb-2 mt-4">
        Beatstore to miejsce w którym w łatwy sposób można znaleźć każdy z tych trzech niezbędnych do produkcji muzyki komponentów.
      </p>
      <h3 class="text-3xl font-bold mb-4">Funkcjonalności</h3>
      <h4 class="text-2xl font-semibold mb-4">Autentykacja</h4>
      <p class="text-base mb-2">
        Autentykacja użytkowników wykonana jest przy użyciu <span class="text-primaryLight font-semibold">Json Web Token</span>. Użytkownik nie musi
        rejestrować się aby przeglądać udostępnione utwory, lecz w celu przesłania własnych, wymagane jest założenie konta. Aby się zarejestrować
        należy podać email, nazwę użytkownika oraz hasło.
      </p>
      <p class="text-base mb-2">
        Walidacja danych następuję po stronie <span class="text-primaryLight font-semibold">klienta</span> oraz po stronie
        <span class="text-primaryLight font-semibold">serwera</span> (prawidłowy email, nazwa powyżej 3 znaków, hasło powyżej 5 znaków)
      </p>
      <img src="/images/projects/beatstore/rejestracja.png" class="rounded-lg m-auto mt-4 mb-8" alt="" />
    </div>
  </Modal>
</template>
