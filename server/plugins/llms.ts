import articles from '../../app/assets/content/articles.json';
import type { ArticleData } from '#shared/types/article';

export default defineNitroPlugin((nitroApp) => {
  // ---------------------------------------------------------
  // 1. PLIK: /llms.txt (Działa, generuje wizytówkę i listę linków)
  // ---------------------------------------------------------
  nitroApp.hooks.hook('llms:generate', (event, options) => {
    options.notes = options.notes || [];
    options.notes.push(
      `
# DEŻAL - Rolety Poznań
Jesteśmy małą, rodzinną firmą założoną w 1997 roku w Poznaniu. Specjalizujemy się w profesjonalnym doradztwie, sprzedaży i montażu osłon okiennych od sprawdzonych dostawców. Zaufało nam już ponad 4100 osób. Oferujemy 2 lata gwarancji przy naszym montażu.

## Nasza oferta:
- Plisy, Rolety rzymskie, Rolety materiałowe, Rolety dzień-noc
- Żaluzje drewniane, Żaluzje aluminiowe, Verticale, Moskitiery

## Kontakt:
- Adres: ul. Jaroczyńskiego 41, 60-692 Poznań (Piątkowo)
- Tel: +48 603 630 299
- Email: dezal.rolety@gmail.com
      `.trim()
    );

    const siteUrl = useRuntimeConfig(event).public.siteUrl;
    options.sections = options.sections || [];
    options.sections.push({
      title: 'Baza wiedzy i poradniki',
      description: 'Poradniki dotyczące wyboru i pielęgnacji osłon okiennych.',
      links: articles.map((article) => ({
        title: article.title,
        href: new URL(`/wiedza/${article.slug}`, siteUrl).href,
        description: article.description,
      })),
    });
  });

  // ---------------------------------------------------------
  // 2. PLIK: /llms-full.txt (treści z zasobów dołączanych do serwera)
  // ---------------------------------------------------------
  nitroApp.hooks.hook('llms:generate:full', async (event, _options, contents) => {
    const storage = useStorage('assets:articles');
    const siteUrl = useRuntimeConfig(event).public.siteUrl;

    for (const entry of articles) {
      const article = await storage.getItem<ArticleData>(`${entry.slug}.json`);
      if (!article) {
        throw new Error(`Nie znaleziono treści artykułu: ${entry.slug}`);
      }

      contents.push(
        `## ${article.title}\n\nŹródło: ${new URL(`/wiedza/${entry.slug}`, siteUrl).href}\n\n\`\`\`json\n${JSON.stringify(article, null, 2)}\n\`\`\``
      );
    }
  });
});
