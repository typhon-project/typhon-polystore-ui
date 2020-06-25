# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN apk add --no-cache libc6-compat
RUN apk --no-cache add git

# install and cache app dependencies
COPY ["package.json", "/app/package.json"]
RUN npm install && npm install -g @angular/cli@7.3.9
		
# add app
COPY [".","/app"]

COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN ln -s usr/local/bin/docker-entrypoint.sh /
ENTRYPOINT ["docker-entrypoint.sh"]

# start app
CMD ["ng","serve","--disableHostCheck=true","--prod=true","--host","0.0.0.0"]
