<template>
  <figure class="Contact__map" aria-label="Lokalizacja firmy DEŻAL">
    <svg
      ref="mapDrawing"
      class="Contact__map-drawing"
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-labelledby="contact-map-title contact-map-description"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="contact-map-title">
        Mapa dojazdu do DEŻAL przy Jaroczyńskiego 41
      </title>
      <desc id="contact-map-description">
        Układ ulic w Poznaniu-Piątkowie. Firma DEŻAL znajduje się przy ulicy
        Jaroczyńskiego, w pobliżu skrzyżowania ze Stróżyńskiego. Przycisk „Pokaż
        trasę” otwiera wskazówki dojazdu w Google Maps.
      </desc>
      <g v-if="isMapVisible" aria-hidden="true">
        <use
          class="Contact__map-buildings"
          href="/images/contact-map.svg#contact-map-buildings"
        />
        <use
          class="Contact__map-road Contact__map-road--access"
          href="/images/contact-map.svg#contact-map-access-roads"
        />
        <use
          class="Contact__map-road Contact__map-road--local"
          href="/images/contact-map.svg#contact-map-local-roads"
        />
        <use
          class="Contact__map-road Contact__map-road--outline"
          href="/images/contact-map.svg#contact-map-main-roads"
        />
        <use
          class="Contact__map-road Contact__map-road--main"
          href="/images/contact-map.svg#contact-map-main-roads"
        />
        <use
          class="Contact__map-street"
          href="/images/contact-map.svg#contact-map-streets"
        />
        <use
          class="Contact__map-street Contact__map-street--nearby"
          href="/images/contact-map.svg#contact-map-nearby-streets"
        />
      </g>
    </svg>

    <figcaption class="Contact__map-marker">
      <span class="Contact__map-label">
        <span class="Contact__map-name">DEŻAL<br />Rolety Poznań</span>
        <span class="Contact__map-address">ul. Jaroczyńskiego 41, Poznań</span>
      </span>
      <svg class="Contact__map-pin" viewBox="0 0 30 42" aria-hidden="true">
        <path
          d="M15 0A15 15 0 0 0 0 15c0 11 15 27 15 27s15-16 15-27A15 15 0 0 0 15 0Z M20 15a5 5 0 1 0-10 0a5 5 0 1 0 10 0Z"
        />
      </svg>
    </figcaption>

    <div class="Contact__map-footer">
      <a
        class="Contact__map-route"
        href="https://www.google.com/maps/dir/?api=1&amp;destination=52.45354%2C16.90556"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pokaż trasę do firmy DEŻAL w Google Maps (otwiera nową kartę)"
      >
        Pokaż trasę
        <svg
          class="Contact__map-route-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M5 19 19 5M5 5h14v14" />
        </svg>
      </a>
      <a
        class="Contact__map-attribution"
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Dane mapy: autorzy OpenStreetMap, licencja ODbL (otwiera nową kartę)"
      >
        © OpenStreetMap
      </a>
    </div>
  </figure>
</template>

<script setup lang="ts">
const mapDrawing = ref<SVGSVGElement | null>(null);
const isMapVisible = ref(false);
let visibilityObserver: IntersectionObserver | undefined;

onMounted(() => {
  if (!mapDrawing.value) return;
  if (typeof IntersectionObserver === 'undefined') {
    isMapVisible.value = true;
    return;
  }
  visibilityObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        isMapVisible.value = true;
        visibilityObserver?.disconnect();
      }
    },
    { rootMargin: '300px' }
  );
  visibilityObserver.observe(mapDrawing.value);
});

onBeforeUnmount(() => visibilityObserver?.disconnect());
</script>
<style scoped lang="scss">
@use './Contact-map.scss' as *;
</style>
