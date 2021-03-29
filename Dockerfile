FROM node:latest

COPY package-lock.json .
COPY package.json .
RUN npm install
ENV NODE_ENV production

CMD node src/index.js
USER node