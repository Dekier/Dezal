<template>
  <div class="Contact__main-container">
    <!-- Górna część z informacjami kontaktowymi -->
    <div class="Contact__top-container">
      <!-- Lewa kolumna: dane kontaktowe -->
      <div class="Contact__information-container">
        <div class="Contact__information-dark-background" />
        <div class="Contact__information">
          <div class="Contact__information-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              width="20"
              height="20"
            >
              <path
                d="M240 0C142.798 0 64 78.798 64 176c0 94.576 162.896 292.712 169.832 301.096a8.003 8.003 0 0 0 12.336 0C253.104 468.712 416 270.576 416 176 416 78.798 337.202 0 240 0zm0 459.288C209.896 421.712 80 254.976 80 176c.101-88.324 71.677-159.899 160-160 88.324.101 159.899 71.676 160 160 0 78.96-129.896 245.704-160 283.288z"
                fill="#FFF"
              />
              <path
                d="M348.88 145.664l-104-80a8.001 8.001 0 0 0-9.76 0l-104 80A8 8 0 0 0 136 160h24v88a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8v-88h24a8 8 0 0 0 4.88-14.336zM256 240h-32v-48h32v48zm56-96a8 8 0 0 0-8 8v88h-32v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56h-32v-88a8 8 0 0 0-8-8h-8.48L240 82.096 320.48 144H312z"
                fill="#FFF"
              />
            </svg>
            Adres
          </div>
          <a
            href="https://maps.app.goo.gl/SWWD7iMgbDCGbCam9"
            class="Contact__information-text"
          >
            ul. Jaroczyńskiego 41 <br />
            60-692 Poznań Piątkowo
          </a>
          <div class="Contact__information-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29.731 29.731"
              width="20"
              height="20"
            >
              <path
                d="M23.895 29.731c-1.237 0-2.731-.31-4.374-.93-3.602-1.358-7.521-4.042-11.035-7.556C4.971 17.73 2.287 13.81.928 10.208-.307 6.933-.31 4.245.921 3.015c.177-.177.357-.367.543-.563C2.587 1.271 3.856-.058 5.538.002 6.697.05 7.82.77 8.97 2.201c3.398 4.226 1.866 5.732.093 7.478l-.313.31c-.29.29-.838 1.633 4.26 6.731 1.664 1.664 3.083 2.882 4.217 3.619.714.464 1.991 1.166 2.515.642l.315-.318c1.744-1.769 3.25-3.296 7.473.099 1.431 1.15 2.15 2.272 2.198 3.433.069 1.681-1.27 2.953-2.452 4.075-.195.186-.385.366-.562.542-.611.612-1.588.919-2.819.919zM5.418 1C4.223 1 3.144 2.136 2.189 3.141c-.192.202-.378.398-.561.581-.917.916-.824 3.323.236 6.134 1.31 3.472 3.913 7.266 7.33 10.683 3.416 3.415 7.208 6.018 10.681 7.327 2.811 1.062 5.218 1.152 6.133.237.183-.183.379-.369.581-.56 1.027-.976 2.192-2.082 2.141-3.309-.035-.843-.649-1.75-1.825-2.695-3.519-2.83-4.503-1.831-6.135-.176l-.32.323c-.78.781-2.047.608-3.767-.51-1.193-.776-2.667-2.038-4.379-3.751-4.231-4.23-5.584-6.819-4.26-8.146l.319-.315c1.659-1.632 2.66-2.617-.171-6.138-.947-1.175-1.853-1.789-2.696-1.825L5.418 1z"
                fill="#FFF"
              />
            </svg>
            Telefon
          </div>
          <a href="tel:+48603630299" class="Contact__information-text">
            +48 603 630 299
          </a>
          <div class="Contact__information-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 483.3 483.3"
              width="20"
              height="20"
            >
              <path
                d="M424.3 57.75H59.1c-32.6 0-59.1 26.5-59.1 59.1v249.6c0 32.6 26.5 59.1 59.1 59.1h365.1c32.6 0 59.1-26.5 59.1-59.1v-249.5c.1-32.6-26.4-59.2-59-59.2zm32.1 308.7c0 17.7-14.4 32.1-32.1 32.1H59.1c-17.7 0-32.1-14.4-32.1-32.1v-249.5c0-17.7 14.4-32.1 32.1-32.1h365.1c17.7 0 32.1 14.4 32.1 32.1v249.5h.1z"
                fill="#FFF"
              />
              <path
                d="M304.8 238.55l118.2-106c5.5-5 6-13.5 1-19.1-5-5.5-13.5-6-19.1-1l-163 146.3-31.8-28.4c-.1-.1-.2-.2-.2-.3-.7-.7-1.4-1.3-2.2-1.9L78.3 112.35c-5.6-5-14.1-4.5-19.1 1.1-5 5.6-4.5 14.1 1.1 19.1l119.6 106.9-119.1 111.5c-5.4 5.1-5.7 13.6-.6 19.1 2.7 2.8 6.3 4.3 9.9 4.3 3.3 0 6.6-1.2 9.2-3.6l120.9-113.1 32.8 29.3c2.6 2.3 5.8 3.4 9 3.4s6.5-1.2 9-3.5l33.7-30.2 120.2 114.2c2.6 2.5 6 3.7 9.3 3.7 3.6 0 7.1-1.4 9.8-4.2 5.1-5.4 4.9-14-.5-19.1l-118.7-112.7z"
                fill="#FFF"
              />
            </svg>
            Email
          </div>
          <a
            href="mailto:dezal.rolety@gmail.com"
            class="Contact__information-text"
          >
            dezal.rolety@gmail.com
          </a>
          <div class="Contact__information-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 372.96 372.96"
              width="20"
              height="20"
            >
              <path
                d="M186.48 0C83.49 0 0 83.49 0 186.48s83.49 186.48 186.48 186.48 186.48-83.49 186.48-186.48C372.828 83.545 289.415.132 186.48 0zm8 356.56v-32.8a8 8 0 0 0-16 0v32.8C90.759 352.372 20.588 282.201 16.4 194.48h32.8a8 8 0 0 0 0-16H16.4C20.588 90.759 90.759 20.588 178.48 16.4v32.8a8 8 0 0 0 16 0V16.4c87.721 4.188 157.892 74.359 162.08 162.08h-32.8a8 8 0 0 0 0 16H356.64c-4.191 87.75-74.408 157.932-162.16 162.08z"
                fill="#FFF"
              />
              <path
                d="M270.88 260.88l-76.4-77.68v-80.72a8 8 0 0 0-16 0v84a8 8 0 0 0 2.32 5.6l78.64 80a8.005 8.005 0 1 0 11.44-11.2z"
                fill="#FFF"
              />
            </svg>
            Godziny Otwarcia
          </div>
          <span class="Contact__information-text">
            pon. : 12:00 - 18:00 <br />
            wt.-pt. : 09:00 - 17:00
          </span>
          <div class="Contact__information-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 478.2 478.2"
              width="20"
              height="20"
            >
              <path
                d="M457.575 325.1c9.8-12.5 14.5-25.9 13.9-39.7-.6-15.2-7.4-27.1-13-34.4 6.5-16.2 9-41.7-12.7-61.5-15.9-14.5-42.9-21-80.3-19.2-26.3 1.2-48.3 6.1-49.2 6.3h-.1c-5 .9-10.3 2-15.7 3.2-.4-6.4.7-22.3 12.5-58.1 14-42.6 13.2-75.2-2.6-97-16.6-22.9-43.1-24.7-50.9-24.7-7.5 0-14.4 3.1-19.3 8.8-11.1 12.9-9.8 36.7-8.4 47.7-13.2 35.4-50.2 122.2-81.5 146.3-.6.4-1.1.9-1.6 1.4-9.2 9.7-15.4 20.2-19.6 29.4-5.9-3.2-12.6-5-19.8-5h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c8.9 0 17.2-2.8 24-7.6l23.5 2.8c3.6.5 67.6 8.6 133.3 7.3 11.9.9 23.1 1.4 33.5 1.4 17.9 0 33.5-1.4 46.5-4.2 30.6-6.5 51.5-19.5 62.1-38.6 8.1-14.6 8.1-29.1 6.8-38.3 19.9-18 23.4-37.9 22.7-51.9-.4-8.1-2.2-15-4.1-20.1zm-409.3 122.2c-8.1 0-14.6-6.6-14.6-14.6V270.1c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.6 14.6-14.6 14.6h-61v.1zm383.7-133.9c-4.2 4.4-5 11.1-1.8 16.3 0 .1 4.1 7.1 4.6 16.7.7 13.1-5.6 24.7-18.8 34.6-4.7 3.6-6.6 9.8-4.6 15.4 0 .1 4.3 13.3-2.7 25.8-6.7 12-21.6 20.6-44.2 25.4-18.1 3.9-42.7 4.6-72.9 2.2h-1.4c-64.3 1.4-129.3-7-130-7.1h-.1l-10.1-1.2c.6-2.8.9-5.8.9-8.8V270.1c0-4.3-.7-8.5-1.9-12.4 1.8-6.7 6.8-21.6 18.6-34.3 44.9-35.6 88.8-155.7 90.7-160.9.8-2.1 1-4.4.6-6.7-1.7-11.2-1.1-24.9 1.3-29 5.3.1 19.6 1.6 28.2 13.5 10.2 14.1 9.8 39.3-1.2 72.7-16.8 50.9-18.2 77.7-4.9 89.5 6.6 5.9 15.4 6.2 21.8 3.9 6.1-1.4 11.9-2.6 17.4-3.5.4-.1.9-.2 1.3-.3 30.7-6.7 85.7-10.8 104.8 6.6 16.2 14.8 4.7 34.4 3.4 36.5-3.7 5.6-2.6 12.9 2.4 17.4.1.1 10.6 10 11.1 23.3.4 8.9-3.8 18-12.5 27z"
                fill="#FFF"
              />
            </svg>
            Polub nas na
          </div>
          <a
            href="https://www.facebook.com/rolety.dezal.poznan/"
            target="_blank"
            class="Contact__informatioNuxtLink"
          >
            Facebook
          </a>
          <div class="Contact__information-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 490.1 490.1"
            >
              <path
                fill="#fff"
                d="M385.9 14.2H104.3c-28.2 0-51.1 22.9-51.1 51.1v233.1l-32.3-32.3c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l53.3 53.3c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l53.3-53.3c4.8-4.8 4.8-12.5 0-17.3-4.8-4.8-12.5-4.8-17.3 0l-32.4 32.4V65.3c0-14.7 11.9-26.6 26.6-26.6H386c14.7 0 26.6 11.9 26.6 26.6v34c0 6.8 5.5 12.3 12.3 12.3s12.3-5.5 12.3-12.3v-34c-.3-28.1-23.2-51.1-51.3-51.1zM416 153.5l-53.3 53.3c-4.8 4.8-4.8 12.5 0 17.3 2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l32.4-32.4v233.1c0 14.7-11.9 26.6-26.6 26.6H104.3c-14.7 0-26.6-11.9-26.6-26.6v-34c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v34c0 28.2 22.9 51.1 51.1 51.1h281.5c28.2 0 51.1-22.9 51.1-51.1V191.7l32.4 32.4c4.8 4.8 12.5 4.8 17.3 0s4.8-12.5 0-17.3l-53.3-53.3c-4.4-4.6-12.6-4.6-17.2 0z"
              />
              <path
                fill="#fff"
                d="M245.1 136.7c-6.8 0-12.3 5.5-12.3 12.3v18.8h-1.6c-23.4 0-42.5 20.1-42.5 44.7s19.1 44.7 42.5 44.7h27.6c9.9 0 18 9.1 18 20.2 0 11.2-8.1 20.2-18 20.2h-49.6c-6.8 0-12.3 5.5-12.3 12.3s5.5 12.3 12.3 12.3h23.6v19.1c0 6.8 5.5 12.3 12.3 12.3s12.3-5.5 12.3-12.3v-19.2h2.1c23.2-.3 41.9-20.3 41.9-44.7 0-24.7-19.1-44.7-42.5-44.7h-27.6c-9.9 0-18-9.1-18-20.2s8.1-20.2 18-20.2H280c6.8 0 12.3-5.5 12.3-12.3s-5.5-12.3-12.3-12.3h-22.6v-18.8c-.1-6.7-5.5-12.2-12.3-12.2z"
              />
            </svg>
            Dane do przelewu
          </div>
          <span class="Contact__information-text">
            Z.P.H.U. DEŻAL Dariusz Dekier <br />
            ul. Jaroczyńskiego 41, 60-692 Poznań<br />
            ING BANK ŚLĄSKI S.A. 83 1050 1520 1000 0090 6935 0826
          </span>
        </div>
      </div>

      <!-- Prawa kolumna: formularz -->
      <div class="Contact__form-container">
        <form class="Contact__form" method="post" enctype="text/plain">
          <div class="Contact__form-title">Wyślij wiadomość</div>
          <label class="Contact__label"> IMIĘ I NAZWISKO * </label>
          <div class="Contact__row">
            <input
              class="Contact__input-half"
              v-model="formData.name"
              type="text"
              placeholder="Imię"
            />
            <input
              class="Contact__input-half"
              v-model="formData.surname"
              type="text"
              placeholder="Nazwisko"
            />
          </div>
          <label class="Contact__label"> TWÓJ EMAIL * </label>
          <input
            class="Contact__input"
            type="email"
            placeholder="Email"
            v-model="formData.email"
          />
          <label class="Contact__label"> TWÓJ NUMER </label>
          <input
            class="Contact__input"
            type="text"
            v-model="formData.number"
            placeholder="Numer"
          />
          <label class="Contact__label"> TWOJA WIADOMOŚĆ </label>
          <textarea
            class="Contact__textarea"
            v-model="formData.text"
            placeholder="Wiadomość"
          />
          <a :href="mailtoHref" class="Contact__submit"> WYŚLIJ </a>
        </form>
      </div>
    </div>

    <!-- Dolna część: mapa -->
    <div class="Contact__bottom-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.4076146342704!2d16.903375316488017!3d52.45364497980178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47044341d3556dc5%3A0xaaec6ab99af1a5a1!2sDE%C5%BBAL+Rolety.+Plisy.+%C5%BBaluzje.!5e0!3m2!1spl!2spl!4v1548082800699"
        frameborder="0"
        style="border: 0"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Formularz
const formData = ref({
  name: '',
  surname: '',
  email: '',
  number: '',
  text: '',
});

// Mailto href
const mailtoHref = computed(() => {
  return `mailto:dezal.rolety@gmail.com?subject=Zapytanie klienta z strony&body=Nazywam się: ${formData.value.name} ${formData.value.surname}%0A%0AMój nr telefonu to: ${formData.value.number} %0A%0AMoja wiadomość: %0A${formData.value.text}`;
});

// Meta tagi
useHead({
  title: 'Kontakt | Deżal – Rolety i Żaluzje Poznań',
  meta: [
    {
      name: 'description',
      content:
        'Masz pytania? Skontaktuj się z nami – DEŻAL Poznań. Oferujemy rolety, żaluzje, plisy i inne osłony okienne z montażem. Szybka wycena i profesjonalne doradztwo.',
    },
    {
      name: 'keywords',
      content:
        'kontakt deżal, rolety poznań kontakt, żaluzje poznań, wycena rolet, pomiar okien poznań, osłony okienne kontakt',
    },
  ],
});
</script>

<style scoped lang="scss">
@use './index.scss' as *;
</style>
