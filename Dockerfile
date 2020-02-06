FROM node

# Create app directory
WORKDIR /usr/src/

# Install app dependencies
# Ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY ./internals/ ./internals/

RUN npm install --no-progress --ignore-optional
# Confirm that the build:dll has completed
RUN npm run build:dll

# We don't copy over any other source files since we're
# using volumes in development (specified in compose file)

EXPOSE 3000
CMD npm run start