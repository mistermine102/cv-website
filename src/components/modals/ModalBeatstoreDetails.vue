<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'

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
      <img src="/images/projects/beatstore/rejestracja.png" class="rounded-lg m-auto mt-4 mb-16" alt="" />
      <h4 class="text-2xl font-semibold mb-4">Przeglądanie utworów</h4>
      <p class="text-base mb-2">
        Użytkownik ma możliwość przeglądania, słuchania oraz polubiania utworów opublikowanych przez innych użytkowników. Utwory posiadają
        <span class="text-primaryLight font-semibold">licznik polubień</span> oraz
        <span class="text-primaryLight font-semibold">licznik odsłuchań</span> (drum kity posiadają jedynie licznik polubień)
      </p>
      <img src="/images/projects/beatstore/przegladanie.png" class="rounded-lg m-auto mt-4 mb-16" alt="" />
      <h4 class="text-2xl font-semibold mb-4">Przesyłanie utworów</h4>
      <p class="text-base mb-2">
        Aby przesłać utwór należy być użytkownikiem zarejestrowanym oraz zalogowanym na konto. Najpierw należy wybrać co chcemy przesłać.
      </p>
      <img src="/images/projects/beatstore/przesylanie_wybor.png" class="rounded-lg m-auto mt-4 mb-8" alt="" />
      <p class="text-base mb-2">
        Następnie do do formularza wprowadzamy wymagane dane: nazwę utworu, bpm, skalę oraz gatunek (brak w przypadku sampla) oraz oczywiście sam plik
        dźwiękowy. Nie może on przekraczać <span class="text-primaryLight font-semibold">25MB</span>.
      </p>
      <p class="text-base mb-2">Opcjonalnie do utworu można dodać <span class="text-primaryLight font-semibold">zdjęcie</span>.</p>
      <img src="/images/projects/beatstore/przesylanie.png" class="rounded-lg m-auto mt-4 mb-16" alt="" />
      <h4 class="text-2xl font-semibold mb-4">Kreator Drum kit'ów</h4>
      <p class="text-base mb-2">
        Użytkownik ma możliwość stworzenia swojego drum kit'a za pomocą kreatora drum kit'ów. Kreator pozwala stworzyć własną
        <span class="text-primaryLight font-semibold">strukturę folderów</span> , dodać obiekty i przypisać im pliki dźwiękowe, kategorie i nazwę.
      </p>
      <p class="text-base mb-2">
        Tak samo jak do utworów, do drum kit'a można dodać <span class="text-primaryLight font-semibold">zdjęcie</span> i
        <span class="text-primaryLight font-semibold">cenę</span>.
      </p>
      <img src="/images/projects/beatstore/drumkit_kreator.png" class="rounded-lg m-auto mt-4 mb-16" alt="" />
      <h4 class="text-2xl font-semibold mb-4">Profile</h4>
      <p class="text-base mb-2">
        Każdy zarejestrowany użytkownik posiada swój profil na którym znaleźć można opublikowane przez niego utwory i drum kit'y. Na profilu widnieje
        również informacja o ilości przesłanych elementów, liczbie obserwujących oraz specyfikacji.
      </p>
      <img src="/images/projects/beatstore/profil.png" class="rounded-lg m-auto mt-4 pb-16" alt="" />
    </div>
  </Modal>
</template>
