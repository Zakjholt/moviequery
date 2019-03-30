FROM alpine/node

WORKDIR home

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY serve.json serve.json
COPY src src

CMD npm run start