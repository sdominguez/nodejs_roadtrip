
FROM node:19-alpine3.16

#expose ports 8085 para nodejs
EXPOSE 8085

COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]