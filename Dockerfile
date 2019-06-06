FROM node:10.15.3

WORKDIR /Bookstore

ENV PATH /Bookstore/node_modules/.bin:$PATH

COPY package.json /Bookstore/package.json
RUN npm install --silent
RUN npm start