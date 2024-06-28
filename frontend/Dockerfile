
FROM node:21

WORKDIR /var/www/html
COPY . .
RUN npm config set legacy-peer-deps true
RUN npm install

CMD [ "npm", "start" ]
