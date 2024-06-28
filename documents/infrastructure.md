# Documentation de l'Infrastructure

## Table des matières
1. [Introduction](#introduction)
2. [Architecture](#architecture)
3. [Serveurs Web](#serveurs-web)
4. [Sécurité et Redondance](#sécurité-et-redondance)
5. [Conteneurisation avec Docker](#conteneurisation-avec-docker)
6. [Monitoring](#monitoring)

## Introduction
Cette documentation décrit l'infrastructure mise en place pour notre application web de diagnostic de maturité des entreprises. L'infrastructure est conçue pour être résiliente, sécurisée et facilement déployable.

## Architecture
L'architecture de l'infrastructure se compose des éléments suivants :
- Deux machines virtuelles (VM) Debian 12 pour la partie serveur web.
- Deux instances pfSense configurées avec CARP pour la sécurité et la redondance.
- Docker pour la gestion des conteneurs de développement et de base de données.

## Serveurs Web
### Configuration des VM Debian 12
Les deux VM Debian 12 hébergent les composants principaux de notre application web. Chaque VM est configurée avec les services suivants :
- Serveur web (Apache)
- Conteneurs Docker pour les différentes parties de l'application (base de données, backend, frontend).

### Déploiement de l'application
L'application est déployée en utilisant un pipeline CI/CD qui automatise les étapes de build, test et déploiement. Les étapes incluent :
- Mise en place versioning lors de la création d'une PR TEST -> PROD
- Etablissement d'un workflow pour création d'une PR TEST -> PROD automatique

## Sécurité et Redondance
### Configuration de pfSense avec CARP
Les deux instances pfSense sont configurées en utilisant CARP (Common Address Redundancy Protocol) pour assurer la redondance. Cette configuration permet d'avoir une haute disponibilité pour les services réseau, avec un basculement automatique en cas de panne d'une des instances.

#### Fonctionnalités de sécurité de pfSense
- Pare-feu pour filtrer le trafic entrant et sortant.

## Conteneurisation avec Docker
### Installation de Docker
Docker est installé sur les deux VM Debian 12. Les conteneurs sont utilisés pour isoler les différentes parties de l'application, ce qui facilite le déploiement et la gestion des dépendances.

### Gestion des conteneurs
Les conteneurs sont définis dans des fichiers `Dockerfile` et orchestrés avec `docker-compose`. Les services suivants sont conteneurisés :
- Base de données (PostGre)
- Backend de l'application
- Frontend de l'application

### Volumes et Réseaux
Les volumes Docker sont utilisés pour persister les données de la base de données. Les réseaux Docker sont configurés pour isoler les différents conteneurs et sécuriser les communications internes.

## Monitoring
### Outils de Monitoring
Une solution de monitoring est mise en place pour surveiller l'état de l'infrastructure. Les outils de monitoring utilisés incluent :
- Uptime Kuma : Pour monitorer la disponibilité des services.

### Notifications
Le monitoring est configuré pour envoyer des notifications en cas d'incidents via plusieurs canaux :
- E-mail
- SMS

### Indicateurs de Performance
Les indicateurs de performance suivants sont surveillés :
- Utilisation CPU, mémoire et disque des VM.
- Temps de réponse et disponibilité des services web.
- Statut des conteneurs Docker et des bases de données.

## Conclusion
Cette documentation présente l'infrastructure mise en place pour notre application de diagnostic de maturité. Elle décrit les différents composants, leur configuration et les mesures prises pour assurer la sécurité, la résilience et la performance de l'application.
