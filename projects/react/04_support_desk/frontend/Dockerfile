FROM node:alpine

RUN apk --no-cache add curl

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
