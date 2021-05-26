FROM node:12-stretch
LABEL name="rzc-reezoshop-app"

WORKDIR /app

COPY ./package*.json yarn.lock ./

RUN yarn install

ENV NODE_ENV=production

COPY . .
CMD bash -c "yarn build && yarn dev"
