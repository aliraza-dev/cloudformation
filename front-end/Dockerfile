FROM node:18-alpine as base

ENV NODE_ENV development

WORKDIR /react-app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM base as dev
EXPOSE 3000
CMD ["npm", "start"]

FROM nginx:latest
COPY --from=base /react-app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon", "off"]