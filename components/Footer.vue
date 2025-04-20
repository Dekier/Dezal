<template>
  <footer class="Footer__main-container">
    <div class="Footer__center-container">
      <div class="Footer__links-container">
        <NuxtLink class="Footer__link Footer__link-title" to="/">
          MENU
        </NuxtLink>
        <NuxtLink class="Footer__link" to="/"> Strona Główna </NuxtLink>
        <NuxtLink class="Footer__link" to="/"> O Nas </NuxtLink>
        <NuxtLink class="Footer__link" to="/realizacje"> Realizacja </NuxtLink>
        <NuxtLink class="Footer__link" to="/kontakt"> Kontakt </NuxtLink>
      </div>
      <div class="Footer__offer-container">
        <NuxtLink class="Footer__link Footer__link-title" to="/">
          OFERTA
        </NuxtLink>
        <NuxtLink class="Footer__link" to="/rolety-dzien-noc">
          Rolety Dzień-noc
        </NuxtLink>
        <NuxtLink class="Footer__link" to="/rolety-materialowe">
          Rolety Materiałowe
        </NuxtLink>
        <NuxtLink class="Footer__link" to="/rolety-rzymskie">
          Rolety Rzymskie
        </NuxtLink>
        <NuxtLink class="Footer__link" to="/plisy"> Plisy </NuxtLink>
        <NuxtLink class="Footer__link" to="/zaluzje"> Żaluzje </NuxtLink>
        <NuxtLink class="Footer__link" to="/verticale"> Verticale </NuxtLink>
        <NuxtLink class="Footer__link" to="/moskitiery"> Moskitiery </NuxtLink>
      </div>
      <div class="Footer__open-hours-container">
        <span class="Footer__open-hours Footer__open-hours-title"> ADRES </span>
        <a
          href="https://maps.app.goo.gl/SWWD7iMgbDCGbCam9"
          class="Footer__open-hours"
        >
          ul. Jaroczyńskiego 41
        </a>
        <a
          href="https://maps.app.goo.gl/SWWD7iMgbDCGbCam9"
          class="Footer__open-hours"
        >
          60-692 Poznań Piątkowo
        </a>
        <span class="Footer__open-hours Footer__open-hours-title">
          GODZINY OTWARCIA
        </span>
        <span class="Footer__open-hours"> pon.: 12:00-18:00 </span>
        <span class="Footer__open-hours"> wt.-pt.: 9:00-17:00 </span>
        <span class="Footer__open-hours Footer__open-hours-title">
          TELEFON
        </span>
        <a href="tel:+48603630299" class="Footer__open-hours">
          +48 603 630 299
        </a>
      </div>
      <div class="Footer__recomended-container">
        <div class="Footer__recomended-title">POLECAMY</div>
        <a
          href="https://www.pracownia-krawiecka.pl/"
          target="_blank"
          rel="nofollow"
          class="Footer__recomended-link"
        >
          <div class="Footer__recomended-text">Pracownia Krawiecka</div>
          <div class="Footer__recomended-logo" />
        </a>
      </div>
    </div>
    <div class="Footer__down-container">
      Copyright &copy; 2025 ZPHU DEŻAL Dariusz Dekier Rolety Poznań | Wszelkie
      prawa zastrzeżone
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use './Footer.scss' as *;
</style>
