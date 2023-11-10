FROM node:18 
# a mi computadora virtual se instala node 18

WORKDIR /app
# aquí guardo todos lo archivos que ocupo

COPY package*.json ./
# copio el archivo package*.json(agrega a cualquier archivo que sea asi) y lo hace en la carpeta app "./"

RUN npm install
# dentro de la computadora hace un npm install

COPY . .
# copio + fuente(todo lo que tengo en la carpeta que estoy trabajando) + destino (en app)

EXPOSE 3000
# puerto en el que corre/expone/abre para levantar mi proyecto

CMD [ "npm", "start" ]
# es para iniciar/levantar mi proyecto