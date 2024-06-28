# Documentation de Déploiement

## Introduction

Cette documentation décrit le processus de déploiement de notre application Docker sur nos serveurs Debian.

## Prérequis

- Docker installé sur les serveurs Debian
- Accès SSH aux serveurs Debian
- Accès administratif aux instances PfSense pour la configuration réseau
- Accès au registre Docker pour stocker et récupérer les images Docker

## Étapes de Déploiement

### 1. Construire l'image Docker
### Installer Docker (si non déjà installé)

Sur votre machine locale, construisez l'image Docker :

'docker build -t mon-application:latest .'

### 2. Pousser l'image vers le registre Docker
    Si vous utilisez un registre Docker privé, taggez et poussez l'image :

    "docker tag mon-application:latest mon-registre/mon-application:latest"
    "docker push mon-registre/mon-application:latest"


### 3. Déployer sur les serveurs Debian

    Lien d'installation pour les VMs Debian : https://www.it-connect.frinstallation-debian-10-buster-pas-a-pas/

    Serveur 1 
        Se connecter au serveur Debian 1 : 

        "ssh utilisateur@debian1" 

    2. Tirer et exécuter l'image Docker :

        docker pull mon-registre/mon-application:latest
        docker run -d -p 80:80 mon-registre/mon-application:latest
    
    Serveur 2

        1. Se connecter au serveur Debian2

            ssh utilisateur@debian2
        
        2. Tirer et exécuter l'image Docker :

        docker pull mon-registre/mon-application:latest
        docker run -d -p 80:80 mon-registre/mon-application:latest

### 4. Installer/Configurer PfSense

Lien d'installation de PfSense : https://www.it-connect.fr/installation-de-pfsense%EF%BB%BF/

Accéder à l'interface web de PfSense.

Configurer les règles de pare-feu pour autoriser le trafic HTTP/HTTPS vers les serveurs Debian.

Configurer le NAT (Network Address Translation) si nécessaire pour rediriger le trafic externe vers les serveurs internes.

Remarques: 
- Vérifiez les logs des conteneurs Docker pour tout problème après le déploiement.
- Utilisez des outils de monitoring pour surveiller les performances et la disponibilité de l'application.

### 5. Installer/configurer Kuma 

Lien d'installationn de Kuma : https://www.cachem.fr/uptime-kuma/

### 6. Vérification et tests

Vérifier que l'application est accessible :
- Ouvrez un navigateur web et accédez à l'URL publique de votre application pour vous assurer qu'elle      fonctionne correctement.

Vérifier les logs des conteneurs Docker :

docker logs mon-application

- Effectuer des tests de performance et de charge :
Utilisez des outils comme Apache JMeter ou locust pour effectuer des tests de performance et de charge afin de garantir que l'application peut gérer le trafic prévu.

Attention il y a 3 points importants : 

Sécurité : Il faut s'assurer que toutes les communications entre les composants de l'infrastructure sont sécurisées.
Monitoring : Il faut implémenter des solutions de monitoring pour surveiller la performance et la disponibilité de l'application.
Backups : Il faut s'assurer que des solutions de sauvegarde sont en place pour les données critiques.