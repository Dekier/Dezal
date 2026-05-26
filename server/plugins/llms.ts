import { useStorage } from '#imports';

export default defineNitroPlugin((nitroApp) => {
  // ---------------------------------------------------------
  // 1. PLIK: /llms.txt (Tylko info o firmie i spis linków)
  // ---------------------------------------------------------
  nitroApp.hooks.hook('llms:generate', async (event, options) => {
    // Dodajemy opis firmy (to co wcześniej)
    options.notes = options.notes || [];
    options.notes.push(
      `
# DEŻAL - Rolety Poznań
Jesteśmy małą, rodzinną polską firmą założoną w 1997 roku w Poznaniu. Zaufało nam już ponad 4100 osób. Oferujemy 2 lata gwarancji przy naszym montażu.

## Nasza oferta:
- Plisy, Rolety rzymskie, Rolety materiałowe, Rolety dzień-noc
- Żaluzje drewniane, Żaluzje aluminiowe, Verticale, Moskitiery

## Kontakt:
- Adres: ul. Jaroczyńskiego 41, 60-692 Poznań (Piątkowo)
- Tel: +48 603 630 299
- Email: dezal.rolety@gmail.com
    `.trim()
    );

    const keys = await useStorage('assets:articles').getKeys();

    // Filtrujemy tylko pliki .json (zabezpieczenie na wypadek innych plików)
    const jsonKeys = keys.filter((key) => key.endsWith('.json'));

    const articlesSection = {
      title: 'Baza wiedzy i poradniki',
      description: 'Zbiór naszych poradników.',
      links: [],
    };

    for (const key of jsonKeys) {
      // Jeśli plik to "czyszczenie-poradnik.json", slug to "czyszczenie-poradnik"
      const slug = key.replace('.json', '');

      articlesSection.links.push({
        title: `Artykuł: ${slug.replace(/-/g, ' ')}`,
        url: `/wiedza/${slug}`,
      });
    }

    options.sections = options.sections || [];
    options.sections.push(articlesSection);
  });

  // ---------------------------------------------------------
  // 2. PLIK: /llms-full.txt (Tutaj AI dostaje PEŁNE teksty JSON)
  // ---------------------------------------------------------
  nitroApp.hooks.hook('llms:full:generate', async (event, options) => {
    const storage = useStorage('assets:articles');
    const keys = await storage.getKeys();
    const jsonKeys = keys.filter((key) => key.endsWith('.json'));

    options.sections = options.sections || [];

    for (const key of jsonKeys) {
      // Pobieramy treść. Ponieważ to JSON, Nitro od razu zwraca nam obiekt!
      const articleObject = await storage.getItem(key);
      const slug = key.replace('.json', '');

      options.sections.push({
        title: `Pełny artykuł: ${slug.replace(/-/g, ' ')}`,
        description: `Oryginalne dane z pliku ${key}`,
        // AI doskonale rozumie strukturę JSON, więc po prostu formatujemy
        // obiekt z powrotem na ładny, czytelny tekst z wcięciami (2 spacje)
        content: JSON.stringify(articleObject, null, 2),
      });
    }
  });
});
