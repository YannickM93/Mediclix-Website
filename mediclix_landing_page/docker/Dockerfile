FROM node:20-alpine as builder

WORKDIR /usr/src/app

ENV PATH /usr/src/node_modules/.bin:$PATH

COPY pnpm-lock.yaml package.json ./

RUN npm install -g pnpm && pnpm install

COPY . ./

ARG PUBLIC_LOGIN=""
ENV PUBLIC_LOGIN=${PUBLIC_LOGIN}

RUN pnpm run build

FROM nginx:latest as prod

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]