FROM node:latest

WORKDIR /usr/src/jcared.astro-portfolio

COPY . .
RUN npm install

EXPOSE 9000 