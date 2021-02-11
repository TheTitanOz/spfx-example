FROM node:10.23.2-buster
WORKDIR /usr/app/spfx
COPY package*.json ./
RUN npm install gulp -g
RUN npm install
COPY . .

EXPOSE 5432 4321 35729
#RUN gulp trust-dev-cert
CMD ["gulp", "serve", "--nobrowser"]
#RUN gulp serve --nobrowser