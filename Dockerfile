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
COPY default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=builder /app/dist /usr/share/nginx/html