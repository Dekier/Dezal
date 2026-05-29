import fs from 'node:fs';
import path from 'node:path';

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

    // Czytamy pliki z dysku do listy linków
    const articlesDir = path.resolve(
      process.cwd(),
      'app/assets/content/articles'
    );

    if (fs.existsSync(articlesDir)) {
      const files = fs.readdirSync(articlesDir);
      const jsonFiles = files.filter((f) => f.endsWith('.json'));

      const articlesSection = {
        title: 'Baza wiedzy i poradniki',
        description: 'Zbiór naszych poradników i artykułów na temat rolet.',
        links: [] as { title: string; url: string }[],
      };

      for (const file of jsonFiles) {
        const slug = file.replace('.json', '');
        articlesSection.links.push({
          title: `Artykuł: ${slug.replace(/-/g, ' ')}`,
          url: `/wiedza/${slug}`,
        });
      }

      options.sections = options.sections || [];
      options.sections.push(articlesSection);
    }
  });

  // ---------------------------------------------------------
  // 2. PLIK: /llms-full.txt (Teraz PANCERNE WERSJA Z DYSKU)
  // ---------------------------------------------------------
  const generateFullContent = (event, options, contents) => {
    const articlesDir = path.resolve(
      process.cwd(),
      'app/assets/content/articles'
    );

    // Bezpiecznik: Jeśli ścieżka z jakiegoś powodu nie istnieje
    if (!fs.existsSync(articlesDir)) {
      contents.push(
        `⚠️ BŁĄD KRYTYCZNY: Nie znaleziono folderu na dysku pod adresem:\n${articlesDir}`
      );
      return;
    }

    const files = fs.readdirSync(articlesDir);
    const jsonFiles = files.filter((f) => f.endsWith('.json'));

    if (jsonFiles.length === 0) {
      contents.push(
        '⚠️ W folderze app/assets/content/articles nie znaleziono żadnych plików .json.'
      );
      return;
    }

    for (const file of jsonFiles) {
      const filePath = path.join(articlesDir, file);
      // Czytamy surowy tekst prosto z pliku JSON na dysku
      const rawData = fs.readFileSync(filePath, 'utf-8');

      try {
        const articleObject = JSON.parse(rawData);
        const slug = file.replace('.json', '');

        const markdownSection = `
## Pełny artykuł: ${slug.replace(/-/g, ' ')}
Oryginalne dane z pliku ${file}:

\`\`\`json
${JSON.stringify(articleObject, null, 2)}
\`\`\`
        `.trim();

        contents.push(markdownSection);
      } catch (error) {
        contents.push(
          `⚠️ Błąd parsowania pliku ${file}: Plik nie ma poprawnej struktury JSON.`
        );
      }
    }
  };

  // Podpinamy pancerną funkcję
  nitroApp.hooks.hook('llms:generate:llms-full', generateFullContent);
  nitroApp.hooks.hook('llms:generate:full', generateFullContent);
});
