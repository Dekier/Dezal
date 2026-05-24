# ETAP 1: Budowanie (Builder)
# Używamy Node 24 (pełna wersja Debian), żeby skompilować wszystkie zależności systemowe
FROM node:24 AS builder

# Ustawiamy katalog roboczy
WORKDIR /app

# Włączamy pnpm przez Corepack (jest wbudowany w Node)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Kopiujemy pliki konfiguracyjne
COPY package.json pnpm-lock.yaml ./

# Instalujemy zależności
# --no-frozen-lockfile naprawia konflikty między systemami (Windows/Mac vs Linux)
RUN pnpm install --no-frozen-lockfile --ignore-scripts=false

# Kopiujemy resztę kodu
COPY . .

# Budujemy aplikację
RUN pnpm run build

# ETAP 2: Uruchamianie (Runner)
# Na produkcję bierzemy lżejszą wersję "slim" Node 24
FROM node:24-slim

WORKDIR /app

# Zmienne środowiskowe dla hosta
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Kopiujemy zbudowaną aplikację z etapu 1
COPY --from=builder /app/.output ./.output

# Otwieramy port
EXPOSE 3000

# Startujemy serwer
CMD ["node", ".output/server/index.mjs"]
