FROM node:16.18.0-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod
CMD ["npm", "start"]