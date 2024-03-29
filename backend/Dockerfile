
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/express-app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
