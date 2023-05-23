FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run api-libraries

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start"]



