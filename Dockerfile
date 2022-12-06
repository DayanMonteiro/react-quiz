FROM node:18

ENV NODE_ENV development

WORKDIR /app

COPY package.json ./

RUN yarn install --frozen-lockfile

COPY . .
EXPOSE 3000

CMD [ "yarn", "start" ]