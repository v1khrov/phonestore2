FROM node:6.9.1

RUN mkdir -p /usr/src/phonestore2

COPY dist /usr/src/phonestore2/app

COPY authMiddleware.js /usr/src/phonestore2/
COPY data.js /usr/src/phonestore2/
COPY deploy-server.js /usr/src/phonestore2/server.js
COPY deploy-package.json /usr/src/phonestore2/package.json

WORKDIR /usr/src/phonestore2

RUN npm install

EXPOSE 3000
EXPOSE 3500

CMD ["npm", "start"]
