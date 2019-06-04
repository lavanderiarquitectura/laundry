FROM node:12
WORKDIR /lavanderia
# add `/app/node_modules/.bin` to $PATH
ENV PATH /lavanderia/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /lavanderia/package.json
RUN npm install
RUN npm install react-scripts -g

