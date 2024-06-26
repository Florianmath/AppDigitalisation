            insert into categorie(cat_nom, cat_description) values ('Compétence', 'il est recommandé de proposer des formations et coachings techniques, de consacrer du temps à la veille et à l apprentissage, d inciter à la mise à jour des compétences des équipes internes et externes, de créer des communautés de pratiques et des guildes, de mettre en place un mentorat interne, de réaliser des revues d amélioration continue, et d organiser des hackathons ou événements.');
            insert into categorie(cat_nom, cat_description) values ('Réactivité', 'Pour améliorer la vélocité des équipes, proposez des MVP, traitez les aléas, mesurez la vélocité et formez les équipes aux outils de gestion du temps dans un monde VUCA.');

            insert into categorie(cat_nom, cat_description) values ('Numérique', 'Pour améliorer le modèle économique, explorez de nouvelles sources de revenus, optimisez les coûts et diversifiez vos offres.');

            


            insert into entreprise(ent_nom, secteur, ent_nbr_salarie, lieu, gouvernance, centralise, clientel, projet) values ('Witt group france', 'vente', 65000, 'france', 'gouvernance', 'centralise', 'ager', 'projet bien');
            insert into entreprise(ent_nom, secteur, ent_nbr_salarie, lieu, gouvernance, centralise, clientel, projet) values ('Alcatel', 'vente', 3000, 'france', 'gouvernance', 'centralise', 'ager', 'projet bien');
            insert into entreprise(ent_nom, secteur, ent_nbr_salarie, lieu, gouvernance, centralise, clientel, projet) values ('Synovo', 'vente', 90, 'france', 'gouvernance', 'centralise', 'ager', 'projet bien');
            insert into entreprise(ent_nom, secteur, ent_nbr_salarie, lieu, gouvernance, centralise, clientel, projet) values ('actimage', 'vente', 49, 'france', 'gouvernance', 'centralise', 'ager', 'projet bien');
            insert into entreprise(ent_nom, secteur, ent_nbr_salarie, lieu, gouvernance, centralise, clientel, projet) values ('Atheo ingenierie', 'vente', 130, 'france', 'gouvernance', 'centralise', 'ager', 'projet bien');

            

            insert into question(que_enonce, que_fk_categorie) values ('Formations pour Apprendre à apprendre, changement de paradigme, être à la page (au-delà des compétences justes nécessaires)', 1);
            insert into question(que_enonce, que_fk_categorie) values ('Le co-développement (outil d intelligence collective) existe-t-il dans l entreprise ?', 1);
            insert into question(que_enonce, que_fk_categorie) values ('Les collaborateurs sont-ils amenés à partager leurs compétences et sous quelles formes ?', 1);
            insert into question(que_enonce, que_fk_categorie) values ('Le mentoring (fonctionnement en binôme) existe-t-il pour assurer le transfert de compétences ?', 1);
            insert into question(que_enonce, que_fk_categorie) values ('Les managers sont-ils aussi formateurs sur certains sujet pour l entreprise entière ?', 1);
            insert into question(que_enonce, que_fk_categorie) values ('L entreprise favorise-t-elle l excellence technique ? (Principe 9 du Manifeste Agile)', 1);
            insert into question(que_enonce, que_fk_categorie) values ('Déployez vous les pratiques du Faire Agile, c est-à-dire une ou plusieurs des méthodes agiles ?', 1);
            insert into question(que_enonce, que_fk_categorie) values ('Votre entreprise promeut-elle un état d esprit agile ?', 1);
            insert into question(que_enonce, que_fk_categorie) values ('Votre entreprise gère-t-elle humainement les compétences ?', 1);

            insert into question(que_enonce, que_fk_categorie) values ('Valeur supérieure utilisable livrée plus tôt (Fonction principale utilisable dès les premières versions)', 2);
            insert into question(que_enonce, que_fk_categorie) values ('Réactivité face aux impératifs prépondérants', 2);
            insert into question(que_enonce, que_fk_categorie) values ('Mesure de la vélocité de l équipe (indicateur de suivi du travail d une équipe de conception)', 2);
            insert into question(que_enonce, que_fk_categorie) values ('Les installations techniques et de gestion sont modernes (TIC/ERP/CRM)', 2);
            insert into question(que_enonce, que_fk_categorie) values ('Les équipes sont en capacité d autonomiser une partie de leurs tâches', 2);
            insert into question(que_enonce, que_fk_categorie) values ('Les équipes s inscrivent dans un cadre Agile Lean', 2);
            insert into question(que_enonce, que_fk_categorie) values ('Les mécanismes de livraison et de synchronisation sont matures', 2);
            insert into question(que_enonce, que_fk_categorie) values ('Les innovations produit tiennent compte de l urgence climatique', 2);
            insert into question(que_enonce, que_fk_categorie) values ('Les processus internes sont remis en cause pour diminuer leur impact environnemental', 2);
            insert into question(que_enonce, que_fk_categorie) values ('Les parties prenantes sont sélectionnées en fonction de leur éthique vis-à-vis du développement durable', 2);
            insert into question(que_enonce, que_fk_categorie) values ('Veille stratégique', 2);

            insert into question(que_enonce, que_fk_categorie) values ('Votre entreprise dégage t-elle une part de CA  par des produits ou services en ligne', 3);
            insert into question(que_enonce, que_fk_categorie) values ('La mise en place d outils numériques a-t-elle permis d optimiser les coûts, les délais et la qualité ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Comment les outils sont-ils intégrés dans les process de l entreprise ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Comment partagez-vous les données numériques avec les parties prenantes (clients, fournisseurs,…) ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Mesurez-vous les impacts du numérique sur votre entreprise ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Quel est l impact du numérique sur la démarche RSE de l entreprise ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Existe-t-il des freins (stratégiques, financiers,…) à l investissement dans les outils numériques ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('L entreprise dispose-t-elle : d un site internet, d un compte LinkedIn, d une page Facebook, d un compte Twitter,... ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Comment utilisez-vous le numérique dans la relation client ? (nouveau modèle de vente, nouveau modèle d échanges avec les clients, communauté, story, chat,...)', 3);
            insert into question(que_enonce, que_fk_categorie) values ('L entreprise dispose-t-elle d un community manager ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Certains de vos collaborateurs sont-ils actifs sur les réseaux sociaux au nom de l entreprise ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Comment mesurez-vous et exploitez-vous les données issues du site de votre entreprise ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Avez-vous observé chez vos concurrents des pratiques innovantes ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Vos collaborateurs sont-ils équipés de nouveaux équipements numériques de travail (PC portable, tablette, smartphone,…) ? ', 3);
            insert into question(que_enonce, que_fk_categorie) values ('L arrivée des outils digitaux a-t-elle eu un impact sur les pratiques et la culture de l entreprise ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Comment vous êtes-vous approprié et comment avez-vous accompagné ces évolutions?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Les nouvelles possibilités technologiques ont-elles fait évoluer le modèle d organisation de l entreprise et/ou votre management, vers plus de collaboration avec des acteurs internes ou externes ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Mobilisez-vous des outils de veille et mettez-vous en œuvre des modalités de curation et de partage de l information ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Les fonctionnalités des outils sont-elles augmentées par la pratique de vos collaborateurs ?', 3);
            insert into question(que_enonce, que_fk_categorie) values ('Comment accompagnez-vous vos collaborateurs dans la transition numérique ?', 3);




            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Désintérêt pour l amélioration de la compétence des équipes', 0, 1);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Nombreuses formations métiers dans le plan de formation', 1, 1);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Possibilité de choisir et de suivre des formations annexes au métier et/ou temps dédié pour de la veille ou de l auto-formation ', 2, 1);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Pas du tout', 0, 2);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Quelques initiatives', 1, 2);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Démarche instaurée et pratiquée régulièrement', 2, 2);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Aucune initiative', 0, 3);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Capitalisation d un certain nombre de savoirs', 1, 3);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Véritable communauté de pratiques mise en place', 2, 3);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Aucune initiative', 0, 4);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Quelques initiatives', 1, 4);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Systématiquement lors d une prise de poste', 2, 4);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Non', 0, 5);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Quelques fois', 1, 5);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Quasi systématiquement', 2, 5);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Pas du tout', 0, 6);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui un peu', 1, 6);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui', 2, 6);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('NON, nous les projets sont tous en cycle en V / cascade', 0, 7);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Quelques projets pilotes', 1, 7);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Déploiement systématique d une ou plusieurs méthodes', 2, 7);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Non', 0, 8);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Quelques valeurs agiles promues', 1, 8);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui', 2, 8);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Non', 0, 9);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Un peu', 1, 9);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui', 2, 9);


            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Pas de phase de validation intermédiaire', 0, 10);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Prototype fonctionnel intermédiaire livré au client', 1, 10);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Principe du MVP respecté : Minimum Viable Product / la version d un produit qui permet d obtenir un maximum de retours client avec un minimum d effort', 2, 10);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Pas de modification possible en cours de conception', 0, 11);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Modifications en cours de conception engendrant alors du retard', 1, 11);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('L équipe de conception s adapte en cas de modification en cours de conception', 2, 11);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Jamais', 0, 12);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Suivi des tâches', 1, 12);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Mesure de la vélocité', 2, 12);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Le système d information freine toute tentative de réagir rapidement', 0, 13);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Le système d information permet avec quelques difficultés d avoir de la réactivité', 1, 13);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('En cas de besoin, le système d information favorise la réactivité', 2, 13);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Jamais', 0, 14);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('On laisse la possibilité de créer quelques macros Excel/VBA', 1, 14);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('L entreprise équipe et forme ses équipes à la création de site web ou app via des outils no-code', 2, 14);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Pas de démarche Agile/Lean initiée dans l entreprise', 0, 15);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Plusieurs concepts Agile/Lean sont mis en œuvre dans l entreprise', 1, 15);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Les concepts Agile/Lean sont inscrits dans l ADN de l entreprise : Satisfaction du client avec des livraisons au plu tôt et régulières, accepter les changements, lisser les activités, collaboration quotidienne avec les parties prenantes, proximité terrain, autonomie des équipes dans la résolution de problèmes, amélioration continue...', 2, 15);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Pas de démarche de tension des flux', 0, 16);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Quelques concepts du juste à temps sont mis en œuvre pour tendre le flux', 1, 16);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Concepts du juste à temps maîtrisés (production rythmée par la demande client, peu d en-cours)', 2, 16);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Aucune réflexion sur cet axe', 0, 17);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Des premières initiatives ont été lancées', 1, 17);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Systématiquement', 2, 17);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Aucune réflexion sur cet axe', 0, 18);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Des premières initiatives ont été lancées', 1, 18);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Systématiquement', 2, 18);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Aucune réflexion sur cet axe', 0, 19);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Des premières initiatives ont été lancées', 1, 19);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Systématiquement', 2, 19);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Pas de veille', 0, 20);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('La veille stratégique de l entreprise permet d anticiper les évolutions et les innovations', 1, 20);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('La veille stratégique de l entreprise permet d anticiper les disruptions nécessaires', 2, 20);


            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Moins de 10%', 0, 21);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui environ 20%', 1, 21);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui environ 30%', 2, 21);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Aucun', 0, 22);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui mais pas pour tous les critères', 1, 22);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui pour tous les critères', 2, 22);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Absence d outils ou de procédures, manque d utilité', 0, 23);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('En partie, les outils ne sont pas toujours adaptés à l activité et pas toujours rattachés à des procédures, sans entraver ses principales fonctions', 1, 23);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('A part entière, il existe des procédures et formations aux outils, ces outils sont intituitifs et adaptés à l activité', 2, 23);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('En mode novice : au mieux par mail ou via le site internet', 0, 24);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('En mode collaboratif : quelques aménagements (type sharepoint, drive) pour des sujets plutôt ponctuels', 1, 24);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('En mode avancé : des plateformes dédiées (type extranet, applications) sont intégrées au mode de partage permanent ', 2, 24);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Non', 0, 25);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui et non on observe sans mesurer', 1, 25);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui des outils de mesure sont en place', 2, 25);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Absence de démarche RSE', 0, 26);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('C est un sujet observé de loin, on traite les questions d obligation légales sans aller plus loin', 1, 26);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Le numérique est un sujet totalement rattaché à la démarche RSE', 2, 26);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui la statégie de l entreprise n est pas orientée en faveur du numérique, elle n investit pas', 0, 27);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui l entreprise est plutôt frileuse, on ne dépense que le strict nécessaire pour que les outils fonctionnent sans recherche de performance', 1, 27);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Non des budgets sont alloués et l entreprise a bien compris cette nécessité dans sa stratégie', 2, 27);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Non le site/la page réseau sont inexistants ou inactifs', 0, 28);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui mais seulement sur le site internet = 1 point', 1, 28);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui la présence de l entreprise sur les réseaux est visible, elle correspond au secteur d activité', 2, 28);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Absence de plateforme de contact', 0, 29);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Des accès dédiés pour les échanges entre le client et l entreprise sont existent, le suivi des contacts n est pas optimal', 1, 29);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Plusieurs modes d utilisation sont possibles pour échanger avec l externe, ils sont performants et adaptés avec l activité de l entreprise', 2, 29);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Non aucune personne n est dédiée ', 0, 30);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Non mais une personne se charge de l animation des réseaux sociaux parmi ses autres tâches', 1, 30);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui', 2, 30);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Non ou rarement', 0, 31);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui sans incitation', 1, 31);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui avec des incitations de l entreprise pour le faire', 2, 31);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Absence de suivi', 0, 32);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Des indicateurs sont en place mais plutôt de façon passive, ils servent à mesurer ', 1, 32);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Des indicateurs sont mis en place afin de mesurer l efficacité et l impact du site sur les réseaux, une recherche de performance est en place pour toucher toujours plus et mieux', 2, 32);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui ils sont tellement performants et en avance que nous pourrions perdre des marchés', 0, 33);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui ils ont quelques belles idées, si seulement on pouvait faire aussi bien qu eux', 1, 33);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui elles servent comme base de reflexion et de développement pour notre propre entreprise. On peut être rivaliser !', 2, 33);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Les fonctions supports ne sont pas amenées à être équipé pour le travail à distance. L entreprise fonctionne majoritairement sur le mode papier.', 0, 34);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Les processus s appuient rarement sur la numérisation des données et les outils numériques. Le potentiel ne semble pas pleinement exploité. ', 1, 34);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Les processus de travail s appuient sur des outils numériques quand ceux-ci sont possibles. L ensemble des fonctions de l entreprise sont équipées pour pouvoir réaliser le travail à distance quand celui-ci est possible', 2, 34);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Non au contraire, peu de monde y adhère', 0, 35);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui dans l ensemble toutefois nous rencontrons parfois des contraintes (pratiques, techniques,…)', 1, 35);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui gain de temps, facilité, économies et fiabilité', 2, 35);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Absence de communication et d accompagnement', 0, 36);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('La communication n est pas parfaite, les personnes qui peuvent se sentir en difficultés avec les nouvelles pratiques ne sont pas forcémment considérées. ', 1, 36);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Tout est en place pour faciliter la compréhension et l adhésion aux nouveaux outils/pratiques', 2, 36);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('L organisation est en silot, absence de projets transversaux et d interactions avec les autres sites', 0, 37);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui quelques évolutions s opèrent pour travailler en inter-service ou avec l externe, toutefois le potentiel n est pas pleinement exploité', 1, 37);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui on sort complétement du mode silot et on favorise le mode projet', 2, 37);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Absence de veille', 0, 38);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Il y a un peu de benchmark toutefois les décisions d évolutions sont un peu tardive (quand il n y a plus le choix)', 1, 38);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui l entreprise est en capacité de mesurer sa performance et de réagir rapidement pour se mettre à jour', 2, 38);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Absence de prise en compte des pratiques terrain', 0, 39);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui mais les outils sont vieillissants, il y a des freins pour les faire évoluer', 1, 39);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Oui totalement les outils s adaptent au terrain quotidiennement', 2, 39);

            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('Absence d accompagnement', 0, 40);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('L entreprise accompagne en faisant de son mieux pour faire adhérer les autres, il y a parfois quelques blocages. J aimerais parfois être moi-même accompagné', 1, 40);
            insert into choix_possible(cho_nom, cho_valeur, cho_fk_question) values ('L entreprise est pro-active par la promotion des innovations et des outils numériques.', 2, 40);





            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 1, '2024-06-25T14:22:29.978245', 1, 'accompagnement régulier avec la mise en place d e-learning en interne sur des sujets transverses (Eurofins academy)');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 2, '2024-06-25T14:22:29.978245', 2, 'mis en place grâce aux daily meeting ou créneaux de training partagés');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 3, '2024-06-25T14:22:29.978245', 2, 'wiki trainings planifiés sur la spécialité de chacun régulièrement (1 fois par semaine sur la partie amiante)');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 4, '2024-06-25T14:22:29.978245', 2, 'Systématique aux laboratoires. En IT, c est moins vrai compte tenu de la disparité des postes et de la pluralité des projets');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 5, '2024-06-25T14:22:29.978245', 1, 'Les managers font des trainings planifiés au même titre que n importe quel collaborateur (sujets plus globaux)');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 6, '2024-06-25T14:22:29.978245', 1, 'de manière hétérogène (différent selon les services)');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 7, '2024-06-25T14:22:29.978245', 1, 'difficile à appliquer à tous les projets. CauMET est un des projets pilotes pour lequel un developpement agile est mis en place');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 8, '2024-06-25T14:22:29.978245', 2, 'Pour la partie IT : Accompagnement systématique des clients (internes à l entreprise => les labo) avec un suivi support (ticketing, etc). Communication facilitée entre l équipe IT et les labos. Le Fail Fast est mis en place grace au ticketing');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 9, '2024-06-25T14:22:29.978245', 2, 'Besoin en formation listé à la suite des entretiens annuels. Les filières distinctes d évolution citées sont présentes.');

            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 10, '2024-06-25T14:22:29.978245', 2, 'CauMET v1 - surtout une amélioration de l ergonomie, puis run 1 => fonctions d automatisation, en prévision, run 2 - amélioration de l éxistant');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 11, '2024-06-25T14:22:29.978245', 2, 'CauMET - Recettages réguliers à chaque fin de sprints (2 semaines) et adaptation en conséquence');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 12, '2024-06-25T14:22:29.978245', 2, 'CauMET - comparaison du temps estimé et réel pour une tâche pour pouvoir prévoir lorganisation des sprints suivants');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 13, '2024-06-25T14:22:29.978245', 2, 'Présence dun lims maison / utilisation de Teams comme axe de communication privilégié');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 14, '2024-06-25T14:22:29.978245', 2, 'Pas d exemple concret mais possibilité dans des situations spécifiques');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 15, '2024-06-25T14:22:29.978245', 2, 'Tout à fait en accord avec la notation de 2 points');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 16, '2024-06-25T14:22:29.978245', 1, 'fait au niveau des labos. La partie IT est un peu hors sujet à mon avis');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 17, '2024-06-25T14:22:29.978245', 1, 'Changement de la flotte de véhicules pour le prélèvement');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 18, '2024-06-25T14:22:29.978245', 1, 'Télétravail autorisé pour diminuer l empreinte carbone');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 19, '2024-06-25T14:22:29.978245', 1, 'Mise en place de panneaux photovoltaiques pour diminuer l empreinte energétique prévue');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 20, '2024-06-25T14:22:29.978245', 2, 'C est la volonté  d eurofins d être innovant (surtout au niveau des laboratoires) pour rester compétitif');

            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 21, '2024-06-25T14:22:29.978245', 0, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 22, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 23, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 24, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 25, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 26, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 27, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 28, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 29, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 30, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 31, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 32, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 33, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 34, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 35, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 36, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 37, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 38, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 39, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (1 , 40, '2024-06-25T14:22:29.978245', 2, '');


            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 1, '2024-06-25T14:22:29.978245', 2, 'Des formations sont disponible pour chacun tout au long de l année ');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 2, '2024-06-25T14:22:29.978245', 2, 'Travail en équipe et point hebdomadaire pour centralisé les informations');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 3, '2024-06-25T14:22:29.978245', 2, 'travail en équipe et point hebdomadaire pour centralisé les informations');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 4, '2024-06-25T14:22:29.978245', 2, 'Travail en binome complémentaire constent');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 5, '2024-06-25T14:22:29.978245', 2, 'suis des formations et fait ruisselé les connaissances');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 6, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 7, '2024-06-25T14:22:29.978245', 2, 'RAS');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 8, '2024-06-25T14:22:29.978245', 2, 'RAS');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 9, '2024-06-25T14:22:29.978245', 2, 'les valeurs de l entreprise sont : passion. ambition et humanité');

            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 10, '2024-06-25T14:22:29.978245', 2, 'RAS');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 11, '2024-06-25T14:22:29.978245', 2, 'RAS');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 12, '2024-06-25T14:22:29.978245', 1, 'RAS');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 13, '2024-06-25T14:22:29.978245', 2, 'RAS');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 14, '2024-06-25T14:22:29.978245', 2, 'Les issues sur github étant catégorisé par nécessité chacun peut faire ce qui lui semble le plus important');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 15, '2024-06-25T14:22:29.978245', 1, 'RAS');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 16, '2024-06-25T14:22:29.978245', 2, 'RAS');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 17, '2024-06-25T14:22:29.978245', 2, 'RAS coté informatique');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 18, '2024-06-25T14:22:29.978245', 2, 'RAS coté informatique');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 19, '2024-06-25T14:22:29.978245', 2, 'RAS coté informatique');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 20, '2024-06-25T14:22:29.978245', 2, 'RAS');

            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 21, '2024-06-25T14:22:29.978245', 0, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 22, '2024-06-25T14:22:29.978245', 0, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 23, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 24, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 25, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 26, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 27, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 28, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 29, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 30, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 31, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 32, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 33, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 34, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 35, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 36, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 37, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 38, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 39, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (2 , 40, '2024-06-25T14:22:29.978245', 2, '');


            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 1, '2024-06-25T14:22:29.978245', 2, 'Point equipe pour veilles et nouveautés / auto-formation encouragé');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 2, '2024-06-25T14:22:29.978245', 1, 'interactions entre services présent');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 3, '2024-06-25T14:22:29.978245', 2, 'Lors de réunion d equipe');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 4, '2024-06-25T14:22:29.978245', 1, 'Dépend des jours et des personnes');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 5, '2024-06-25T14:22:29.978245', 0, 'Pas de manager');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 6, '2024-06-25T14:22:29.978245', 2, 'en la prioriasant même sur la rentabilité');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 7, '2024-06-25T14:22:29.978245', 1, 'Généralement mais cela dépend du projet et du client');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 8, '2024-06-25T14:22:29.978245', 0, 'd aucune manière, c est à la libre charge du chef de projet');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 9, '2024-06-25T14:22:29.978245', 0, 'non');

            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 10, '2024-06-25T14:22:29.978245', 1, 'Pas certain d avoir compris la question');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 11, '2024-06-25T14:22:29.978245', 2, 'Via un outil de ticketing');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 12, '2024-06-25T14:22:29.978245', 0, 'Pas de suivi');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 13, '2024-06-25T14:22:29.978245', 2, 'outil de ticketing');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 14, '2024-06-25T14:22:29.978245', 1, 'Cependant aucune incitation');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 15, '2024-06-25T14:22:29.978245', 0, 'Pas initié de l entreprise');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 16, '2024-06-25T14:22:29.978245', 0, 'NA');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 17, '2024-06-25T14:22:29.978245', 0, 'Aucune réfléxion sur le sujet');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 18, '2024-06-25T14:22:29.978245', 1, 'oui mais priorité à la sécurité et donc à l inverse l impacte à plutôt tendance à s emplifier');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 19, '2024-06-25T14:22:29.978245', 0, 'Aucune réfléxion sur le sujet');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 20, '2024-06-25T14:22:29.978245', 0, 'Aucune réfléxion sur le sujet');

            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 21, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 22, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 23, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 24, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 25, '2024-06-25T14:22:29.978245', 0, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 26, '2024-06-25T14:22:29.978245', 0, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 27, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 28, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 29, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 30, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 31, '2024-06-25T14:22:29.978245', 0, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 32, '2024-06-25T14:22:29.978245', 0, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 33, '2024-06-25T14:22:29.978245', 0, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 34, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 35, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 36, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 37, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 38, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 39, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (3 , 40, '2024-06-25T14:22:29.978245', 2, '');


            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 1, '2024-06-25T14:22:29.978245', 1, 'formations sur les nouveaux outils intégrés (PowerBL, Sage X3 V12)');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 2, '2024-06-25T14:22:29.978245', 0, 'non');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 3, '2024-06-25T14:22:29.978245', 1, 'au sein des services mais ne collaborent pas entre eux sur ce plan là');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 4, '2024-06-25T14:22:29.978245', 2, 'oui, par exemple lors de la venue du nouveau responsable informatique');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 5, '2024-06-25T14:22:29.978245', 2, 'oui, pour les méthodes de leur service');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 6, '2024-06-25T14:22:29.978245', 0, 'aucune idée');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 7, '2024-06-25T14:22:29.978245', 0, 'les projets ne sont pas gérés de manière agiles ');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 8, '2024-06-25T14:22:29.978245', 0, 'non');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 9, '2024-06-25T14:22:29.978245', 2, 'oui à travers diveress formatons si nécessaires');

            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 10, '2024-06-25T14:22:29.978245', 0, 'non');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 11, '2024-06-25T14:22:29.978245', 2, 'oui');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 12, '2024-06-25T14:22:29.978245', 1, 'oui');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 13, '2024-06-25T14:22:29.978245', 2, 'nouvel erp, crm');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 14, '2024-06-25T14:22:29.978245', 1, 'oui');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 15, '2024-06-25T14:22:29.978245', 1, 'aucune idée, ne pense pas');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 16, '2024-06-25T14:22:29.978245', 2, 'oui');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 17, '2024-06-25T14:22:29.978245', 2, 'produit fait à partir de matières recyclables');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 18, '2024-06-25T14:22:29.978245', 2, 'oui');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 19, '2024-06-25T14:22:29.978245', 2, 'oui');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 20, '2024-06-25T14:22:29.978245', 1, 'oui');

            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 21, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 22, '2024-06-25T14:22:29.978245', 0, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 23, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 24, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 25, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 26, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 27, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 28, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 29, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 30, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 31, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 32, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 33, '2024-06-25T14:22:29.978245', 0, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 34, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 35, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 36, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 37, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 38, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 39, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (4 , 40, '2024-06-25T14:22:29.978245', 2, '');


            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 1, '2024-06-25T14:22:29.978245', 2, 'Prosposition de formation sur différents thème tout au long de l année');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 2, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 3, '2024-06-25T14:22:29.978245', 2, 'Documentation');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 4, '2024-06-25T14:22:29.978245', 2, 'Première prise de poste');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 5, '2024-06-25T14:22:29.978245', 1, 'Durant les formations');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 6, '2024-06-25T14:22:29.978245', 2, 'La méthode Agile est utilisé systématiquement');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 7, '2024-06-25T14:22:29.978245', 2, 'La méthode Agile est utilisé systématiquement');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 8, '2024-06-25T14:22:29.978245', 2, 'Gestion de projet et fonctionnement de la société');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 9, '2024-06-25T14:22:29.978245', 2, '');

            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 10, '2024-06-25T14:22:29.978245', 2, 'Conception des projet en direct avec le client');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 11, '2024-06-25T14:22:29.978245', 2, 'Conception des projet en direct avec le client');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 12, '2024-06-25T14:22:29.978245', 1, 'Conception des projet en direct avec le client');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 13, '2024-06-25T14:22:29.978245', 2, 'ERP développé en interne');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 14, '2024-06-25T14:22:29.978245', 0, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 15, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 16, '2024-06-25T14:22:29.978245', 2, 'Conception des projet en direct avec le client');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 17, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 18, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 19, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 20, '2024-06-25T14:22:29.978245', 2, '');

            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 21, '2024-06-25T14:22:29.978245', 1, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 22, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 23, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 24, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 25, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 26, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 27, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 28, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 29, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 30, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 31, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 32, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 33, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 34, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 35, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 36, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 37, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 38, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 39, '2024-06-25T14:22:29.978245', 2, '');
            insert into reponse(rep_fk_entreprise, rep_fk_question, rep_date, rep_choix, rep_commentaire) values (5 , 40, '2024-06-25T14:22:29.978245', 2, '');
