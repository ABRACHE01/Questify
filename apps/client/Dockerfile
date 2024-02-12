# Dockerfile for React client

FROM node:18.19.0

# Working directory be app
WORKDIR /apps/client

# Install Dependencies
COPY package.json .

# Installing dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy local files to app folder
COPY . .

# Expose port
EXPOSE 3000

# Run the development server
CMD ["pnpm", "--filter", "client", "run", "dev"]