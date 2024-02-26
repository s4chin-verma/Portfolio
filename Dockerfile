FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 2003

CMD [ "npm", "run", "dev" ]