# Stage 1: Build the application
FROM node:22.1 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env.prod .env
RUN npm run build

# Stage 2: Serve the application build
FROM node:22.1 as production-stage
RUN npm install -g serve
WORKDIR /app
COPY --from=build-stage /app/dist /app
EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]