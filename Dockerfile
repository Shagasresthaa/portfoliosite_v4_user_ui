FROM node:22.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "serve"]
