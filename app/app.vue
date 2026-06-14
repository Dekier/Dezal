<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/images/logo-rect.png' },
  ],
});

useSchemaOrg([
  // 1. Definicja Twojego fizycznego biznesu (LocalBusiness)
  defineLocalBusiness({
    name: 'DEŻAL Rolety. Plisy. Żaluzje. Poznań',
    url: 'https://dezalroletypoznan.pl/',
    logo: '/images/logo-rect-2.webp',
    telephone: '+48603630299',
    description:
      'DEŻAL to profesjonalny dystrybutor i monter osłon okiennych w Poznaniu. Oferujemy rolety, żaluzje drewniane i aluminiowe, plisy oraz moskitiery na wymiar wraz z precyzyjnym pomiarem i montażem na terenie Poznania i okolic.',
    email: 'dezal.rolety@gmail.com',
    address: {
      streetAddress: 'ul. Jaroczyńskiego 41',
      addressLocality: 'Poznań',
      postalCode: '60-692',
      addressCountry: 'PL',
    },
    contactPoint: [
      {
        telephone: '+48603630299',
        contactType: 'właściciel', // Typ kontaktu (np. obsługa klienta / sprzedaż)
        areaServed: 'PL', // Obszar działania
        availableLanguage: ['Polish'], // Język, w jakim rozmawiacie z klientem
      },
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=100070520647069',
      'https://g.page/r/CaGl8Zq5auyqEBM', // Twój link do opinii / wizytówki
    ],
    openingHours: ['Mo 12:00-18:00', 'Tu-Fr 09:00-17:00'],
  }),
]);
</script>
