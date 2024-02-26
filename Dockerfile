FROM node:alpine
WORKDIR /app
COPY . .
EXPOSE 8000
RUN npm i
ENTRYPOINT [ "node","index.js" ]