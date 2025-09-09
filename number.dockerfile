FROM node:22

WORKDIR /app

COPY . .

RUN npm ci

WORKDIR /app/services

CMD ["node", "randomNumber.service.js"]