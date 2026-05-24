# ETAP 1: Budowanie (Builder)
FROM node:24 AS builder

WORKDIR /app

# Włączamy pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# KOPIUJEMY TYLKO PLIKI KONFIGURACYJNE (to kluczowe dla czystej instalacji)
COPY package.json pnpm-lock.yaml ./

# Instalujemy zależności bez rygorystycznego sprawdzania lockfile i z wymuszonym uruchomieniem skryptów
# (flaga config.ignore-scripts jest jedyną w 100% działającą w pnpm v11 w tym scenariuszu)
RUN pnpm config set ignore-scripts false && pnpm install --no-frozen-lockfile

# Kopiujemy resztę kodu (w tym folder 'app' dla Nuxt 4)
COPY . .

# Budujemy aplikację
RUN pnpm run build

# ETAP 2: Uruchamianie (Runner)
FROM node:24-slim

WORKDIR /app

# Zmienne środowiskowe dla środowiska produkcyjnego
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Kopiujemy TYLKO skompilowaną aplikację z folderu .output
COPY --from=builder /app/.output ./.output

# Otwieramy port
EXPOSE 3000

# Startujemy serwer Nitro
CMD ["node", ".output/server/index.mjs"]
