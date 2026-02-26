# Etapa 1: Build (Construcción)
FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa 2: Serve (Servidor ligero de producción)
FROM node:20-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Arrancamos el servidor estático
CMD ["serve", "-s", "dist", "-p", "3000"]
