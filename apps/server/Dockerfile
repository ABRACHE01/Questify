#  Dockerfile for Node Express Backend

FROM node:18.19.0

# Working directory be app
WORKDIR /apps/server

# Install Dependencies
COPY package.json .

###  Installing dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy app source code
COPY . .

# Exports
EXPOSE 8080

CMD ["pnpm", "--filter", "server", "run", "dev"]