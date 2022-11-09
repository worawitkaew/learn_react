FROM node

WORKDIR /usr/src/app/my-app

COPY package*.json ./
# COPY . /usr/src/app/my-app
# COPY . ./

RUN npm install
RUN npm install -g npm@8.19.3

#RUN chmod a+rwx /usr/src/app/my-app/node_modules/

CMD ["npm", "start"]
