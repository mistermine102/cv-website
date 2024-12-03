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
      <h2 class="text-4xl font-bold mb-4 text-primaryLight">Aplikacja Taxi</h2>
      <p class="mb-16">Aplikacja mobilna wykonana w React Native oraz Node.js służąca do zamawiania przejadów taxi.</p>
      <h3 class="text-3xl font-bold mb-4">Użyte technologie i biblioteki</h3>
      <h4 class="text-2xl font-semibold mb-2">Klient</h4>
      <ul class="text-base list-disc ml-8 mb-2">
        <li>React Native</li>
        <li>Expo</li>
        <li>Expo Location</li>
        <li>Expo Task Manager</li>
        <li>Native Wind</li>
        <li>React Native Maps</li>
        <li>React Native Maps Directions</li>
        <li>React Native Toast Message</li>
        <li>React Native Reanimated</li>
        <li>Socket.io</li>
        <li>React Native Async Storage</li>
      </ul>
      <h4 class="text-2xl font-semibold mb-2">Serwer</h4>
      <ul class="text-base list-disc ml-8 mb-8">
        <li>Node.js</li>
        <li>Express</li>
        <li>Mongoose</li>
        <li>Bcrypt</li>
        <li>Ejs (renderowanie template do maila)</li>
        <li>Express Validator</li>
        <li>Json Web Token</li>
        <li>Nodemailer</li>
        <li>Socket.io</li>
        <li>Google Distance Matrix Api</li>
      </ul>
      <h3 class="text-3xl font-bold mb-4">Funkcjonalności</h3>
      <h4 class="text-2xl font-semibold mb-4">Autentykacja</h4>
      <p class="text-base mb-2">
        Aby korzystać z aplikacji użytkownik musi się zarejestrować podając swój email, numer telefonu oraz hasło. Aplikacja wykorzystuje
        <span class="text-primaryLight font-semibold">Json Web Token</span> w celu autentykacji użytkowników.
      </p>
      <img src="/images/projects/taxi/rejestracja.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <p class="text-base mb-2">
        Walidacja danych która obejmuje sprawdzenie długości hasła (powyżej 5 znaków) , poprawność adresu email oraz numeru telefonu następuje zarówno
        po stronie <span class="text-primaryLight font-semibold">klienta</span> jaki po stronie
        <span class="text-primaryLight font-semibold">serwera</span> . Dodatkowo serwer sprawdza czy adres email nie jest zajęty przez innego
        użytkownika.
      </p>
      <img src="/images/projects/taxi/rejestracja_error.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <p class="text-base mb-2">
        Po wysłaniu formularza użytkownik proszony jest o weryfikacje adresu email. Aby dokonać weryfikacji należy kliknąć w przycisk zawarty w mailu
        wysłanym na podany wcześniej adres. Niezweryfikowani użytkownicy dodawani są do osobnej kolekcji oraz usuwani po
        <span class="text-primaryLight font-semibold">24h</span> za pomocą <span class="text-primaryLight font-semibold">indeksu TTL</span> . Gdy
        użytkownik zweryfikuje konto jego dane przenoszone są do kolekcji zweryfikowanych użytkowników.
      </p>
      <img src="/images/projects/taxi/email_weryfikacyjny.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />

      <p class="text-base mb-16">
        Token jwt użytkownika zapisywany jest w <span class="text-primaryLight font-semibold">Async Storage</span> , czyli pamięci lokalnej
        urządzenia, dzięki czemu nie jest konieczne logowanie się za każdym razem gdy uruchamiana jest aplikacja. W ustawieniach konta możliwe jest
        wylogowanie co skutkuje usunięciem tokenu z pamięci.
      </p>
      <h4 class="text-2xl font-semibold mb-4">Role</h4>
      <p class="text-base mb-8">
        Użytkownik aplikacji może posiadać trzy role: <span class="text-primaryLight font-semibold">client</span> ,
        <span class="text-primaryLight font-semibold">driver</span> oraz <span class="text-primaryLight font-semibold">admin</span>. Możliwe jest
        posiadanie kilku roli jednocześnie np. Admin może być rownież Kierowcą. Aplikacja oferuje różne funcjonalności w zależności od roli.
      </p>
      <div class="flex mt-4 mb-16 w-full justify-between gap-x-4">
        <div class="w-1/3">
          <img src="/images/projects/taxi/ekran_klient.png" class="rounded-lg" alt="" />
        </div>
        <div class="w-1/3">
          <img src="/images/projects/taxi/ekran_kierowca.png" class="rounded-lg" alt="" />
        </div>
        <div class="w-1/3">
          <img src="/images/projects/taxi/ekran_admin.png" class="rounded-lg" alt="" />
        </div>
      </div>
      <h4 class="text-2xl font-semibold mb-4">Funkcjonalności klienta</h4>
      <p class="text-base mb-2">
        W zakładce <span class="text-primaryLight font-semibold">Zamów</span> klient ma możliwość zamówienia przejazdu. Może on wybrać na mapie
        miejsce z którego chce zostać odebrany. Do tego celu może użyć mapy i samodzielnie znaleźc miejsce oraz je zaznaczyć lub wpisać adres bądź
        nazwę obiektu w pole tekstowe. Aplikacja znajdzie obiekt za pomocą <span class="text-primaryLight font-semibold">Google Places Api</span> i
        sama zaznaczy go na mapie.
      </p>
      <img src="/images/projects/taxi/autocomplete.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <p class="text-base mb-2">
        Klient w podobny sposób wybiera punkt docelowy. Po wybraniu punktu docelowego na mapie ukażę się trasa z punktu startowego do punktu
        docelowego obliczona za pomocą
        <span class="text-primaryLight font-semibold">Google Directions Api</span>.
      </p>
      <p class="text-base mb-2">
        Zakres wyboru miejsca jest ograniczony do okręgu o promieniu <span class="text-primaryLight font-semibold">30km</span>. Odległość od punktu
        który chce wybrać użytkownik a środkiem okręgu obliczana jest za pomocą wzoru <span class="text-primaryLight font-semibold">Haversine</span>,
        który bierze pod uwagę krzywiznę planety. Walidacja obejmuje miejsca podpowiadane przez Google Places Api (ustalony zakres o promieniu 30km)
        oraz odległość wybranego punktu od środka okręgu (po stronie klienta oraz serwera).
      </p>
      <img src="/images/projects/taxi/zakres.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <p class="text-base mb-2">
        Następnie do przejazdu dobierany jest kierowca który jest obecnie dostępny oraz którego odległość do punktu startowego jest najmniejsza (z
        dostępnych kierowców).
      </p>
      <p class="text-base">Na końcu wyświetlane jest <span class="text-primaryLight font-semibold">podsumowanie</span> przejazdu które zawiera:</p>
      <ul class="text-base list-disc ml-8 mb-2">
        <li>punkt startowy</li>
        <li>punkt końcowy</li>
        <li>imię kierowcy</li>
        <li>planowy czas oczekiwania</li>
        <li>planowy czas przejazdu</li>
        <li>dystans</li>
        <li>cena</li>
      </ul>
      <img src="/images/projects/taxi/podsumowanie.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <p class="text-base mb-8">
        Po zaakceptowaniu regulaminu oraz klinięciu przycisku <span class="text-primaryLight font-semibold">Przejdź do płatności</span> klient ma
        możliwość wyboru metody płatności - w aplikacji lub w taksówce. Następnie po kliknięciu przycisku
        <span class="text-primaryLight font-semibold">Zapłać</span> przejazd zostaje utworzony. (Obecnie aplikacja nie ma intergracji z żadnym
        serwisem do obłsugi płatności)
      </p>

      <p class="text-base mb-2">
        W zakładce <span class="text-primaryLight font-semibold">Śledź kierowcę</span> klient ma możliwość wyświetlenia informacji o przejeździe np.
        numer rejestracyjny pojazdu, imię kierowcy, status.
      </p>
      <p class="text-base mb-2">Można również zobaczyć obecną lokalizację kierowcy, która aktualizowana jest co 30 sekund.</p>
      <img src="/images/projects/taxi/sledz_kierowce.png" class="h-[600px] rounded-lg m-auto mt-4 mb-16" alt="" />
      <h4 class="text-2xl font-semibold mb-4">Funkcjonalności kierowcy</h4>
      <p class="text-base mb-2">
        Kierowca ma możliwość wyświetlenia aktywnego przejazdu w zakładace przejazdy. Może on zmienić status trasy (gdy np. dotrze do klienta) lub
        anulować trasę na żądanie klienta.
      </p>
      <img src="/images/projects/taxi/przejazdy_kierowcy.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <p class="text-base mb-2">
        Kierowca ma również możliwość uruchomienia aplikacji <span class="text-primaryLight font-semibold">Google Maps</span> z automatycznie
        wyznaczoną nawigacją z jego punktu obecnej lokalizacji do miejsca startowego do miejsca docelowego po kliknięciu przycisku
        <span class="text-primaryLight font-semibold">Nawigacja</span> .
      </p>
      <img src="/images/projects/taxi/nawigacja.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <p class="text-base mb-16">
        Kierowca może włączyć lub wyłączyć śledzenie jego lokalizacji w tle. Włączenie śledzenia powoduje zarejestrowanie procesu na urządzeniu który
        automatycznie pobiera lokalizacje z urządzenia oraz wysyła ją do serwera co 30 sek bądź kilkanaście metrów.
      </p>
      <h4 class="text-2xl font-semibold mb-4">Funkcjonalności admina</h4>
      <p class="text-base mb-2">Admin ma możliwość wyświetlenia wszystkich aktywnych przejazdów i zobaczenia lokalizacji wszystkich kierowców.</p>
      <img src="/images/projects/taxi/admin_trasy.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <p class="text-base mb-2">
        Admin może również dodać nowy przejazd na podstawie <span class="text-primaryLight font-semibold">numeru telefonu klienta</span>, adresu
        początkowego oraz adresu końcowego.
      </p>
      <img src="/images/projects/taxi/admin_dodaj.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <h4 class="text-2xl font-semibold mb-4">Historia przejazdów</h4>
      <p class="text-base mb-2">
        Użytkownik ma możliwość wyświetlenia swojej <span class="text-primaryLight font-semibold">historii przejazdów</span>. Może zobaczyć datę
        przejazdu, miejsce początkowe oraz docelowe jak i cenę przejazdu.
      </p>
      <img src="/images/projects/taxi/historia.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <h4 class="text-2xl font-semibold mb-4">Anulowanie przejazdu</h4>
      <p class="text-base mb-2">
        Aby anulować przejazd klient powinien kliknąć w 3 kropki obok statusu przejazdu a następnie w przycisk
        <span class="text-primaryLight font-semibold">Anuluj przejazd</span>. Na ekranie wyświetli się komunikat aby zadzwonić do kierowcy w celu
        anulowania przejazdu wraz z przyskiem <span class="text-primaryLight font-semibold">Zadzwoń</span> .
      </p>
      <img src="/images/projects/taxi/anuluj_klient.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <p class="text-base mb-2">
        Następnie kierowca może anulować przejazd klikając w 3 kropki oraz przycisk
        <span class="text-primaryLight font-semibold">Anuluj przejazd</span>
      </p>
      <img src="/images/projects/taxi/anuluj_kierowca.png" class="h-[600px] rounded-lg m-auto mt-4 mb-8" alt="" />
      <h4 class="text-2xl font-semibold mb-4">Statusy przejazdu</h4>
      <p class="text-base mb-4">
        Zmiana statusu trasy następuję w klinięcie przez kierowcę przycisku z odpowiednią akcją np.
        <span class="text-primaryLight font-semibold">dotarłem po klienta</span>. Informacja o zmianie statusu przesyłana jest przez websocket dzięki
        czemu klient widzi zmianę w <span class="text-primaryLight font-semibold">czasie rzeczywistym</span>, bez odświeżania aplikacji.
      </p>
      <div class="flex flex-wrap gap-x-8 gap-y-4 pb-16">
        <span class="text-base bg-[#fef08a] text-[#ca8a04] py-1 px-4 rounded-full">Oczekuje</span>
        <span class="text-base bg-[#bfdbfe] text-[#0284c7] py-1 px-4 rounded-full">Przyjęta</span>
        <span class="text-base bg-[#c7d2fe] text-[#4f46e5] py-1 px-4 rounded-full">Odebrano</span>
        <span class="text-base bg-[#e9d5ff] text-[#9333ea] py-1 px-4 rounded-full">Dostarczono</span>
        <span class="text-base bg-[#bbf7d0] text-[#16a34a] py-1 px-4 rounded-full">Zakończona</span>
        <span class="text-base bg-[#fecaca] text-[#dc2626] py-1 px-4 rounded-full">Anulowana</span>
      </div>
    </div>
  </Modal>
</template>
