FROM node:slim

MAINTAINER Matías Lescano <mjlescano@protonmail.com>

RUN npm set progress=false && \
    npm install -g --progress=false yarn

COPY ["package.json", "/usr/src/"]

WORKDIR /usr/src

RUN yarn --production

COPY [".", "/usr/src/"]

ENV NODE_ENV=production

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
