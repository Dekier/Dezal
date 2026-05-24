# ETAP 1: Budowanie (Builder) - używamy standardowego NPM do uniknięcia problemów z pnpm lock
FROM node:24 AS builder

WORKDIR /app

# Kopiujemy całą zawartość (ignorując pliki wymienione w .dockerignore)
COPY . .

# Używamy npm do czystej instalacji pakietów (zignoruje pnpm-lock.yaml i zainstaluje wszystko stabilnie z package.json)
RUN npm install

# Budujemy aplikację Nuxt
RUN npm run build

# ETAP 2: Uruchamianie (Runner) - lżejszy obraz produkcyjny
FROM node:24-slim

WORKDIR /app

# Zmienne środowiskowe dla środowiska produkcyjnego
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Kopiujemy TYLKO skompilowaną aplikację z etapu budowania
COPY --from=builder /app/.output ./.output

# Otwieramy port
EXPOSE 3000

# Startujemy serwer
CMD ["node", ".output/server/index.mjs"]
