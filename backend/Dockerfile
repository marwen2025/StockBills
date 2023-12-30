# Utilisez une image Node.js Alpine légère comme image de base
FROM node:alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste de l'application
COPY . .

# Exposez le port sur lequel l'application Express s'exécute par défaut
EXPOSE 5000

# Commande pour démarrer l'application
CMD ["npm", "start"]
