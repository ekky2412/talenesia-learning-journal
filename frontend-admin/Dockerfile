FROM node:14-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/frontend-admin

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]