<template>
  <footer class="Footer__main-container">
    <div class="Footer__center-container">
      <div class="Footer__column">
        <!-- <div class="Footer__title">MENU</div> -->
        <img
          src="/icons/logo-grey.svg"
          alt="logo-deżal-grey"
          class="Footer__logo"
        />
        <p class="Footer__text">
          Jesteśmy specjalistyczną firmą zajmującą się montażem nowoczesnych
          żaluzji i rolet, tworząc eleganckie oraz funkcjonalne rozwiązania dla
          Twojego komfortu.
        </p>
        <p class="Footer__text-bold">
          Odkryj wyjątkowy komfort z naszymi żaluzjami i roletami – stwórz
          idealne otoczenie już dziś!
        </p>
        <a
          href="https://www.facebook.com/rolety.dezal.poznan/"
          class="Footer__facebook-link"
        >
          Znajdź nas na:
          <img
            src="/icons/facebook.svg"
            alt="facebook-icon"
            class="Footer__facebook-icon"
          />
        </a>
      </div>
      <div class="Footer__column">
        <div class="Footer__title">OFERTA</div>
        <NuxtLink
          class="Footer__link"
          to="/rolety-dzien-noc"
          @mouseenter="isHoverLink = 'rolety-dzien-noc'"
          @mouseleave="isHoverLink = ''"
        >
          <img
            :src="
              isHoverLink === 'rolety-dzien-noc'
                ? '/icons/dot-yellow.svg'
                : '/icons/dot.svg'
            "
            alt="icon dot"
            class="Footer__dot"
          />
          Rolety Dzień-noc
        </NuxtLink>
        <NuxtLink
          class="Footer__link"
          to="/rolety-materialowe"
          @mouseenter="isHoverLink = 'rolety-materialowe'"
          @mouseleave="isHoverLink = ''"
        >
          <img
            :src="
              isHoverLink === 'rolety-materialowe'
                ? '/icons/dot-yellow.svg'
                : '/icons/dot.svg'
            "
            alt="icon dot"
            class="Footer__dot"
          />
          Rolety Materiałowe
        </NuxtLink>
        <NuxtLink
          class="Footer__link"
          to="/rolety-rzymskie"
          @mouseenter="isHoverLink = 'rolety-rzymskie'"
          @mouseleave="isHoverLink = ''"
        >
          <img
            :src="
              isHoverLink === 'rolety-rzymskie'
                ? '/icons/dot-yellow.svg'
                : '/icons/dot.svg'
            "
            alt="icon dot"
            class="Footer__dot"
          />
          Rolety Rzymskie
        </NuxtLink>
        <NuxtLink
          class="Footer__link"
          to="/plisy"
          @mouseenter="isHoverLink = 'plisy'"
          @mouseleave="isHoverLink = ''"
        >
          <img
            :src="
              isHoverLink === 'plisy'
                ? '/icons/dot-yellow.svg'
                : '/icons/dot.svg'
            "
            alt="icon dot"
            class="Footer__dot"
          />
          Plisy
        </NuxtLink>
        <NuxtLink
          class="Footer__link"
          to="/zaluzje"
          @mouseenter="isHoverLink = 'zaluzje'"
          @mouseleave="isHoverLink = ''"
        >
          <img
            :src="
              isHoverLink === 'zaluzje'
                ? '/icons/dot-yellow.svg'
                : '/icons/dot.svg'
            "
            alt="icon dot"
            class="Footer__dot"
          />
          Żaluzje
        </NuxtLink>
        <NuxtLink
          class="Footer__link"
          to="/verticale"
          @mouseenter="isHoverLink = 'verticale'"
          @mouseleave="isHoverLink = ''"
        >
          <img
            :src="
              isHoverLink === 'verticale'
                ? '/icons/dot-yellow.svg'
                : '/icons/dot.svg'
            "
            alt="icon dot"
            class="Footer__dot"
          />
          Verticale
        </NuxtLink>
        <NuxtLink
          class="Footer__link"
          to="/moskitiery"
          @mouseenter="isHoverLink = 'moskitiery'"
          @mouseleave="isHoverLink = ''"
        >
          <img
            :src="
              isHoverLink === 'moskitiery'
                ? '/icons/dot-yellow.svg'
                : '/icons/dot.svg'
            "
            alt="icon dot"
            class="Footer__dot"
          />
          Moskitiery
        </NuxtLink>
      </div>
      <div class="Footer__column">
        <div class="Footer__title">Kontakt</div>
        <a href="tel:+48603630299" class="Footer__link">
          <img
            src="/icons/phone.svg"
            alt="icon phone"
            class="Footer__link-icon"
          />
          +48 603 630 299
        </a>
        <a href="mailto:dezal.rolety@gmail.com" class="Footer__link">
          <img
            src="/icons/mail.svg"
            alt="icon mail"
            class="Footer__link-icon"
          />
          dezal.rolety@gmail.com
        </a>
        <a
          href="https://maps.app.goo.gl/SWWD7iMgbDCGbCam9"
          class="Footer__link Footer__link-long"
        >
          <img src="/icons/map.svg" alt="icon map" class="Footer__link-icon" />
          Z.P.H.U. DEŻAL Dariusz Dekier<br />
          ul. Jaroczyńskiego 41,<br />
          60-692 Poznań
        </a>

        <div
          href="https://maps.app.goo.gl/SWWD7iMgbDCGbCam9"
          class="Footer__link Footer__link-long Footer__link-no-click"
        >
          <img
            src="/icons/bank.svg"
            alt="icon bank"
            class="Footer__link-icon"
          />
          ING BANK ŚLĄSKI S.A.<br />
          83 1050 1520 1000 0090 6935 0826
        </div>
      </div>
      <div class="Footer__recomended-container">
        <div class="Footer__title">Polecamy</div>
        <a
          href="https://www.pracownia-krawiecka.pl/"
          target="_blank"
          rel="nofollow"
          class="Footer__recomended-link"
        >
          <img
            src="/images/pracownia-krawiecka.png"
            alt="pracownia krawiecka logo"
            class="Footer__recomended-logo"
          />
        </a>
      </div>
    </div>
    <div class="Footer__down-container">
      Copyright &copy; 2025 ZPHU DEŻAL Dariusz Dekier Rolety Poznań | Wszelkie
      prawa zastrzeżone
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isHoverLink = ref('');
</script>

<style lang="scss" scoped>
@use './Footer.scss' as *;
</style>
