FROM node:8.16.0-alpine

WORKDIR /app

COPY . .

RUN npm install

# Or if you're using Yarn
# ADD package.json yarn.lock /app/
# RUN yarn install
ENTRYPOINT  5000

CMD  node server.js