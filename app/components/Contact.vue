<template>
  <div class="Contact__main-container">
    <div class="Contact__center-container">
      <div v-if="isActiveInfoBox" class="Contact__info-container-box">
        <div class="Contact__info-container">
          <button
            type="button"
            @click="closeInfoBox"
            class="Contact__info-button-close"
          >
            <img
              src="/icons/exit.svg"
              class="Contact__info-button-close-icon"
              alt="icon exit"
              width="48px"
              height="48px"
            />
          </button>
          <div class="Contact__info-title">Szanowni klienci</div>
          <div class="Contact__info-description">
            Ze względu na mobilny charakter naszej pracy (pomiary i montaże), w
            godzinach otwarcia biura możemy przebywać poza firmą. Aby
            zagwarantować, że będziemy na miejscu i w pełni dyspozycyjni,
            prosimy o wcześniejsze telefoniczne potwierdzenie wizyty lub
            umówienie się na konkretną godzinę.
          </div>
          <button
            type="button"
            class="Contact__info-button"
            @click="closeInfoBox"
          >
            Rozumiem
          </button>
        </div>
      </div>

      <div class="Contact__top-container">
        <div class="Contact__information-container">
          <h3 class="Contact__title">
            <img
              loading="lazy"
              src="/icons/subtract.svg"
              alt="icon subtract"
              class="Contact__form-container-icon-left"
              width="75px"
              height="133px"
            />
            Skontaktuj się
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
              width="20px"
              height="20px"
            />
            <img
              loading="lazy"
              src="/icons/dot-yellow-border.svg"
              alt="icon dot yellow border"
              class="Contact__information-dot-yellow-border-2"
              width="20px"
              height="20px"
            />
            <a href="tel:+48603630299" class="Contact__information-text">
              <img
                loading="lazy"
                src="/icons/phone.svg"
                alt="icon phone"
                class="Contact__information-icon"
                width="24px"
                height="24px"
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
                width="24px"
                height="24px"
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
                width="24px"
                height="24px"
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
                width="24px"
                height="24px"
              />
              pon. 09:00 - 18:00 <br />
              wt. 08:00 - 17:00 <br />
              śr. 08:00 - 17:00 <br />
              czw. 09:00 - 18:00 <br />
              pt. Zamknięte (realizacje u klientów)
            </span>

            <span
              class="Contact__information-text Contact__information-text--no-hover"
            >
              <img
                loading="lazy"
                src="/icons/bank.svg"
                alt="icon bank"
                class="Contact__information-icon"
                width="24px"
                height="24px"
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
        <!-- <img
          src="/images/landing/dzien-noc-1.webp"
          alt="Roleta dzień noc - nowoczesne systemy osłonowe Deżal"
          class="Contact__image-middle"
        /> -->
        <NuxtImg
          src="/images/landing/dzien-noc-1.webp"
          alt="Roleta dzień noc - nowoczesne systemy osłonowe Deżal"
          width="375"
          height="660"
          class="Contact__image-middle"
          loading="lazy"
          format="avif,webp"
          sizes="sm:0 md:50vw lg:375px"
        />

        <div class="Contact__form-container">
          <img
            loading="lazy"
            src="/icons/subtract.svg"
            alt="icon subtract"
            class="Contact__form-container-icon"
            width="75px"
            height="133px"
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
      <ContactMap />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import emailjs from '@emailjs/browser';
import ContactMap from './Contact-map.vue';

// Obsługa okienka informacyjnego
const isActiveInfoBox = ref(false);

const closeInfoBox = () => {
  isActiveInfoBox.value = false;
  localStorage.setItem('dezal_info_box_hidden', 'true');
};

onMounted(() => {
  // 1. Obsługa okienka info
  const isHidden = localStorage.getItem('dezal_info_box_hidden');
  if (!isHidden) {
    isActiveInfoBox.value = true;
  }
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

const isActiveSubmit = computed(() => {
  return validateForm();
});

const SERVICE_ID = 'service_a0kq1wc';
const TEMPLATE_ID = 'template_x5sbr5s';
const PUBLIC_KEY = 'C6CmW10OJxlDJlnl-';

const sendForm = async () => {
  if (!validateForm() || submitText.value === 'Wysyłanie...') return;
  submitText.value = 'Wysyłanie...';

  // Wyciągamy bezpieczną funkcję gtag z modułu Nuxt Scripts

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
