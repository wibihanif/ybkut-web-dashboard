FROM node:18-alpine

RUN mkdir /app

COPY package*.json /app

WORKDIR /app

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]