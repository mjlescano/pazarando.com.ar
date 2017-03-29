FROM yarnpkg/node-yarn:node7

LABEL name="pazarando.com.ar"

MAINTAINER Matías Lescano <mjlescano@protonmail.com>

COPY ["package.json", "yarn.lock", ".yarnclean", "/usr/src/"]

WORKDIR /usr/src

RUN yarn --production

COPY [".", "/usr/src/"]

ENV NODE_ENV=production

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
