FROM node:13.12.0-alpine3.11

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

# commenting out for demo purposes
# COPY package*.json ./

# commenting out for demo purposes
# RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "client.js" ]