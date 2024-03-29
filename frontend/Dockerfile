
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/react-app

COPY package.json .

COPY vite.config.js .
RUN npm install

COPY . .

EXPOSE 5137

CMD [ "npm", "run", "dev" ]
