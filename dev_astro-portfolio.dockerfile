FROM node:latest

WORKDIR /usr/src/astro-portfolio

COPY . .
RUN npm install
RUN git init

EXPOSE 5051
EXPOSE 80