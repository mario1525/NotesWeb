FROM node:18


COPY ["package.json","package-lock.json", "/usr/src/"]

WORKDIR /usr/src/

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 5173

CMD ["npm", "run", "dev"]
