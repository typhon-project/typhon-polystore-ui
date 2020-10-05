# Build
FROM node:12.4.0 as builder

WORKDIR /app

RUN npm config set unsafe-perm true

COPY package.json .
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN ng build --prod

# Runtime
FROM nginx
COPY docker/proxy.conf /etc/nginx/conf.d/proxy.conf
COPY docker/default.conf.template /etc/nginx/templates/default.conf.template
COPY docker/proxy_params.conf /etc/nginx/snippets/proxy_params.conf
COPY --from=builder /app/dist /usr/share/nginx/html
ENV API_HOST=typhon-polystore-service
ENV API_PORT=8080