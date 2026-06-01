# ETAP 1: Budowanie (Builder) - zostawiamy standardowe node:24
# Zwykły obraz ma wbudowane narzędzia (np. Python, g++), które często
# są pod maską potrzebne do prawidłowego zbudowania niektórych paczek NPM.
FROM node:24 AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# ETAP 2: Uruchamianie (Runner) - tutaj wjeżdża superlekki obraz produkcyjny
FROM node:24-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Kopiujemy TYLKO skompilowaną aplikację z etapu budowania
COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
