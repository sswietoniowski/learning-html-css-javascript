FROM node:21.6-alpine3.18

RUN apk --no-cache add curl

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
