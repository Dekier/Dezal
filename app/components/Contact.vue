<template>
  <div class="Contact__main-container">
    <div class="Contact__center-container">
      <div class="Contact__top-container">
        <div class="Contact__information-container">
          <h3 class="Contact__title">
            <img
              loading="lazy"
              src="/icons/subtract.svg"
              alt="icon subtract"
              class="Contact__form-container-icon-left"
            />Skontaktuj się
          </h3>
          <p class="Contact__description">
            Chętnie doradzimy i pomożemy w wyborze najlepszego rozwiązania.
          </p>

          <div class="Contact__yellow-container">
            <img
              loading="lazy"
              src="/icons/dot-yellow-border.svg"
              alt="icon dot yellow border"
              class="Contact__information-dot-yellow-border-1"
            />
            <img
              loading="lazy"
              src="/icons/dot-yellow-border.svg"
              alt="icon dot yellow border"
              class="Contact__information-dot-yellow-border-2"
            />
            <a href="tel:+48603630299" class="Contact__information-text">
              <img
                loading="lazy"
                src="/icons/phone.svg"
                alt="icon phone"
                class="Contact__information-icon"
              />+48 603 630 299
            </a>
            <a
              href="mailto:dezal.rolety@gmail.com"
              class="Contact__information-text"
            >
              <img
                loading="lazy"
                src="/icons/mail.svg"
                alt="icon mail"
                class="Contact__information-icon"
              />dezal.rolety@gmail.com
            </a>
          </div>
          <div class="Contact__informations">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=52.45362985985779,16.905527873339654"
              class="Contact__information-text"
            >
              <img
                loading="lazy"
                src="/icons/map.svg"
                alt="icon map"
                class="Contact__information-icon"
              />
              ul. Jaroczyńskiego 41 <br />
              60-692 Poznań Piątkowo
            </a>
            <span
              class="Contact__information-text Contact__information-text--no-hover"
            >
              <img
                loading="lazy"
                src="/icons/alarm.svg"
                alt="icon alarm"
                class="Contact__information-icon"
              />
              pon. : 12:00 - 18:00 <br />
              wt.-pt. : 09:00 - 17:00
            </span>

            <span
              class="Contact__information-text Contact__information-text--no-hover"
            >
              <img
                loading="lazy"
                src="/icons/bank.svg"
                alt="icon bank"
                class="Contact__information-icon"
              />
              Z.H.U. DEŻAL Dariusz Dekier <br />
              ul. Jaroczyńskiego 41, 60-692 Poznań<br />
              ING BANK ŚLĄSKI S.A. <br />
              83 1050 1520 1000 0090 6935 0826
            </span>
          </div>
        </div>

        <!-- <img
          loading="lazy"
          src="/images/landing/dzien-noc-1.webp"
          alt="roleta dzien noc"
          width="375"
          height="660"
          class="Contact__image-middle"
          preload
        /> -->
        <NuxtImg
          src="/images/landing/dzien-noc-1.webp"
          alt="Roleta dzień noc - nowoczesne systemy osłonowe Deżal"
          width="375"
          height="660"
          class="Contact__image-middle"
          loading="lazy"
          format="avif,webp"
          sizes="sm:100vw md:50vw lg:375px"
        />

        <div class="Contact__form-container">
          <img
            loading="lazy"
            src="/icons/subtract.svg"
            alt="icon subtract"
            class="Contact__form-container-icon"
          />
          <div class="Contact__form-title">Zapytaj nas...</div>

          <label class="Contact__label" for="name">Twoje imię</label>
          <input
            id="name"
            class="Contact__input"
            v-model="formData.name"
            type="text"
            placeholder="Kowalski Marcin"
            :aria-describedby="errors.name ? 'error-name' : null"
          />
          <!-- <span
      v-if="errors.name"
      id="error-name"
      class="Contact__error"
      role="alert"
    >
      {{ errors.name }}
    </span> -->

          <label class="Contact__label" for="email">E-mail</label>
          <input
            id="email"
            class="Contact__input"
            type="email"
            placeholder="twoj@email.pl"
            v-model="formData.email"
            :aria-describedby="errors.email ? 'error-email' : null"
          />
          <!-- <span
      v-if="errors.email"
      id="error-email"
      class="Contact__error"
      role="alert"
    >
      {{ errors.email }}
    </span> -->

          <label class="Contact__label" for="text">Wiadomość</label>
          <textarea
            id="text"
            class="Contact__textarea"
            v-model="formData.text"
            placeholder="Proszę o szczegółowe informacje dotyczące..."
            :aria-describedby="errors.text ? 'error-text' : null"
          ></textarea>
          <!-- <span
      v-if="errors.text"
      id="error-text"
      class="Contact__error"
      role="alert"
    >
      {{ errors.text }}
    </span> -->

          <button
            type="button"
            class="Contact__submit"
            :class="{
              'Contact__submit--active':
                isActiveSubmit || submitText === 'Wysyłanie...',
            }"
            @click="sendForm"
          >
            {{ submitText }}
          </button>

          <div class="Contact__form-info">
            Wysyłając wiadomość wyrażasz zgodę na <br />
            <a
              href="/policy.pdf"
              target="_blank"
              class="Contact__form-info-link"
              >przetwarzanie danych osobowych.</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="Contact__bottom-container">
      <!-- <ClientOnly>
        <iframe
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.4076146342704!2d16.903375316488017!3d52.45364497980178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47044341d3556dc5%3A0xaaec6ab99af1a5a1!2sDE%C5%BBAL+Rolety.+Plisy.+%C5%BBaluzje.!5e0!3m2!1spl!2spl!4v1548082800699"
          frameborder="0"
          style="border: 0"
          allowfullscreen
          title="Mapa lokalizacji firmy DEŻAL Rolety, Plisy, Żaluzje"
          aria-label="Mapa lokalizacji firmy DEŻAL Rolety, Plisy, Żaluzje"
        />
      </ClientOnly> -->
      <ClientOnly>
        <div
          id="map"
          style="width: 100%; height: 100%; min-height: 450px"
        ></div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, createApp } from 'vue';
import CustomMapMarker from '~/components/Custom-map-marker.vue'; // <-- Import naszego komponentu
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';
import emailjs from '@emailjs/browser';

const initGoogleMap = async () => {
  setOptions({
    key: 'AIzaSyCCzurmr3FtjmHaiBfPzDx3IAdgsTaOogY',
    version: 'weekly',
  } as any);

  try {
    // 1. Dodajemy import 'Polygon' z biblioteki 'maps'
    const { Map, Polygon } = await importLibrary('maps') as any;
    const { AdvancedMarkerElement } = await importLibrary('marker') as any;

    const position = { lat: 52.45362985985779, lng: 16.905527873339654 };
    const currentZoom = window.innerWidth < 600 ? 16 : 18;
    const map = new Map(document.getElementById('map'), {
      center: position,
      zoom: currentZoom, // Dałem zoom 18, żeby od razu było widać z bliska ładny obrys
      mapId: 'a93ae4d0d1b19b722f6d451b',
      disableDefaultUI: true,
      zoomControl: true,
      fullscreenControl: false,
      streetViewControl: false,
      gestureHandling: 'cooperative',
    });

    // --- NOWOŚĆ: RYSOWANIE GEOGRAFICZNEGO OBRYSU BUDYNKU ---
    // Tutaj podajemy współrzędne rogów dachu (zgodnie ze wskazówkami zegara)
    const buildingCorners = [
      { lat: 52.45360, lng: 16.90550 }, // Lewy górny róg
      { lat: 52.45359, lng: 16.90565 }, // Prawy górny róg
      { lat: 52.45348, lng: 16.90563 }, // Prawy dolny róg
      { lat: 52.45349, lng: 16.90548 }, // Lewy dolny róg
    ];

    // Tworzymy żółty wielokąt
    const buildingHighlight = new Polygon({
      paths: buildingCorners,
      strokeColor: '#ffe003', // Żółta ramka
      strokeOpacity: 1.0,
      strokeWeight: 3,        // Grubość ramki
      fillColor: '#ffe003',   // Żółte wypełnienie
      fillOpacity: 0.4,       // 40% widoczności
    });

    // Nakładamy wielokąt na mapę!
    buildingHighlight.setMap(map);
    // -------------------------------------------------------

    // --- STRZAŁKA I PRZYCISK (Nasz marker z Vue) ---
    const markerContainer = document.createElement('div');
    createApp(CustomMapMarker).mount(markerContainer);
const centerOfBuilding = { lat: 52.45354, lng: 16.90556 };
    new AdvancedMarkerElement({
      map: map,
      position: centerOfBuilding,
      content: markerContainer,
      title: 'DEŻAL Rolety Poznań',
    });

  } catch (error) {
    console.error('Błąd ładowania mapy:', error);
  }
};

onMounted(() => {
  initGoogleMap();
});

// Dane formularza
const formData = ref({
  name: '',
  email: '',
  text: '',
});

// Walidacja pól
const errors = ref({
  name: '',
  email: '',
  text: '',
});
const submitText = ref('Wyślij zapytanie');

const validateForm = () => {
  errors.value = { name: '', email: '', text: '' };
  let isValid = true;

  if (formData.value.name.trim().length < 3) {
    errors.value.name = 'Imię musi mieć co najmniej 3 znaki.';
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(formData.value.email.trim())) {
    errors.value.email = 'Podaj poprawny adres e-mail.';
    isValid = false;
  }

  if (formData.value.text.trim().length < 10) {
    errors.value.text = 'Wiadomość musi mieć co najmniej 10 znaków.';
    isValid = false;
  }

  return isValid;
};

// Przycisk aktywny?
const isActiveSubmit = computed(() => {
  return validateForm();
});

// EmailJS config (podmień danymi swoimi)
const SERVICE_ID = 'service_a0kq1wc';
const TEMPLATE_ID = 'template_x5sbr5s';
const PUBLIC_KEY = 'C6CmW10OJxlDJlnl-';

const sendForm = async () => {
  if (!validateForm() || submitText.value === 'Wysyłanie...') return;
  submitText.value = 'Wysyłanie...';

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.text,
        title: `${formData.value.name} - Nowa wiadomość ze strony DEŻAL `,
      },
      PUBLIC_KEY
    );

    formData.value = { name: '', email: '', text: '' };
    submitText.value = 'Wiadomość wysłana!';
    setTimeout(() => {
      submitText.value = 'Wyślij zapytanie';
    }, 3000);
  } catch (error) {
    console.error('Błąd wysyłania:', error);
  }
};
</script>

<style scoped lang="scss">
@use './Contact.scss' as *;
</style>
