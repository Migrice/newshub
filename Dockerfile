FROM node:23-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

FROM node:23-alpine AS runner

RUN corepack enable && corepack prepare pnpm@latest --activate

# Définir le dossier pour les binaires globaux
ENV PNPM_HOME="/pnpm-global"
ENV PATH="$PNPM_HOME:$PATH"

# Créer le dossier et l'ajouter au PATH
RUN mkdir -p $PNPM_HOME

RUN pnpm add -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
