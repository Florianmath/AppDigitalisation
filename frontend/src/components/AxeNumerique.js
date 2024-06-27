import * as React from "react";
import { Divider } from "@nextui-org/divider";

import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckBox";

function AxeNumerique() {
  const [groupSelected, setGroupSelected] = React.useState([]);

  return (
    <div
      className="axe entreprise shadow-xl rounded-2xl w-[80vw] px-14 pb-12 mt-28  absolute min-w-[600px] max-w-screen"
      id="AxeNumerique"
    >
      <h1 className="mt-4 font-bold text-4xl left-0"> Axe Numérique </h1>
      <div className="flex flex-col gap-4 mt-4 text-black w-full">
        <div className="comp flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Votre entreprise dégage t-elle une part de CA par des produits ou
            services en ligne
          </h3>

          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Oui environ 30%",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Oui environ 20%",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Moins de 10%",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            La mise en place d’outils numériques a-t-elle permis d'optimiser les
            coûts, les délais et la qualité ?
          </h3>

          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Oui pour tous les critères ",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Oui mais pas pour tous les critères",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Aucun",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Comment les outils sont-ils intégrés dans les process de
            l’entreprise ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "A part entière, il existe des procédures et formations aux outils, ces outils sont intituitifs et adaptés à l'activité",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "En partie, les outils ne sont pas toujours adaptés à l'activité et pas toujours rattachés à des procédures, sans entraver ses principales fonctions",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Absence d'outils ou de procédures, manque d'utilité",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Comment partagez-vous les données numériques avec les parties
            prenantes (clients, fournisseurs,…) ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "En mode avancé : des plateformes dédiées (type extranet, applications) sont intégrées au mode de partage permanent ",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "En mode collaboratif : quelques aménagements (type sharepoint, drive) pour des sujets plutôt ponctuels",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "En mode novice : au mieux par mail ou via le site internet",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Mesurez-vous les impacts du numérique sur votre entreprise ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Oui des outils de mesure sont en place",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Oui et non on observe sans mesurer",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Non",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Quel est l’impact du numérique sur la démarche RSE de l’entreprise ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Le numérique est un sujet totalement rattaché à la démarche RSE",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "C'est un sujet observé de loin, on traite les questions d'obligation légales sans aller plus loin",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Absence de démarche RSE",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Existe-t-il des freins (stratégiques, financiers,…) à l’
            investissement dans les outils numériques ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Non des budgets sont alloués et l'entreprise a bien compris cette nécessité dans sa stratégie",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Oui l'entreprise est plutôt frileuse, on ne dépense que le strict nécessaire pour que les outils fonctionnent sans recherche de performance",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Oui la statégie de l'entreprise n'est pas orientée en faveur du numérique, elle n'investit pas",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            L’entreprise dispose-t-elle : d’un site internet, d’un compte
            LinkedIn, d’une page Facebook, d’un compte Twitter,... ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Oui la présence de l'entreprise sur les réseaux est visible, elle correspond au secteur d'activité",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Oui mais seulement sur le site internet = 1 point",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Non le site/la page réseau sont inexistants ou inactifs",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Comment utilisez-vous le numérique dans la relation client ?
            (nouveau modèle de vente, nouveau modèle d’échanges avec les
            clients, communauté, story, chat,...)
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Plusieurs modes d'utilisation sont possibles pour échanger avec l'externe, ils sont performants et adaptés avec l'activité de l'entreprise",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Des accès dédiés pour les échanges entre le client et l'entreprise sont existent, le suivi des contacts n'est pas optimal",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Absence de plateforme de contact",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            L’entreprise dispose-t-elle d’un community manager ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Oui",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Non mais une personne se charge de l'animation des réseaux sociaux parmi ses autres tâches",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Non aucune personne n'est dédiée ",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Certains de vos collaborateurs sont-ils actifs sur les réseaux
            sociaux au nom de l’entreprise ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Oui avec des incitations de l'entreprise pour le faire",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Oui sans incitation",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Non ou rarement",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Comment mesurez-vous et exploitez-vous les données issues du site de
            votre entreprise ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Des indicateurs sont mis en place afin de mesurer l'efficacité et l'impact du site sur les réseaux, une recherche de performance est en place pour toucher toujours plus et mieux",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Des indicateurs sont en place mais plutôt de façon passive, ils servent à mesurer ",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Absence de suivi",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Avez-vous observé chez vos concurrents des pratiques innovantes ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Oui elles servent comme base de reflexion et de développement pour notre propre entreprise. On peut être rivaliser !",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Oui ils ont quelques belles idées, si seulement on pouvait faire aussi bien qu'eux",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Oui ils sont tellement performants et en avance que nous pourrions perdre des marchés",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Vos collaborateurs sont-ils équipés de nouveaux équipements
            numériques de travail (PC portable, tablette, smartphone,…) ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Les processus de travail s'appuient sur des outils numériques quand ceux-ci sont possibles. L'ensemble des fonctions de l'entreprise sont équipées pour pouvoir réaliser le travail à distance quand celui-ci est possible",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Les processus s'appuient rarement sur la numérisation des données et les outils numériques. Le potentiel ne semble pas pleinement exploité. ",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Les fonctions supports ne sont pas amenées à être équipé pour le travail à distance. L'entreprise fonctionne majoritairement sur le mode papier.",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            L’arrivée des outils digitaux a-t-elle eu un impact sur les
            pratiques et la culture de l’entreprise ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Oui gain de temps, facilité, économies et fiabilité",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Oui dans l'ensemble toutefois nous rencontrons parfois des contraintes (pratiques, techniques,…)",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Non au contraire, peu de monde y adhère",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Comment vous êtes-vous approprié et comment avez-vous accompagné ces
            évolutions?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Tout est en place pour faciliter la compréhension et l'adhésion aux nouveaux outils/pratiques",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "La communication n'est pas parfaite, les personnes qui peuvent se sentir en difficultés avec les nouvelles pratiques ne sont pas forcémment considérées. ",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Absence de communication et d'accompagnement",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Les nouvelles possibilités technologiques ont-elles fait évoluer le
            modèle d’organisation de l’entreprise et/ou votre management, vers
            plus de collaboration avec des acteurs internes ou externes ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Oui on sort complétement du mode silot et on favorise le mode projet",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Oui quelques évolutions s'opèrent pour travailler en inter-service ou avec l'externe, toutefois le potentiel n'est pas pleinement exploité",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "L'organisation est en silot, absence de projets transversaux et d'interactions avec les autres sites",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Mobilisez-vous des outils de veille et mettez-vous en œuvre des
            modalités de curation et de partage de l’ information ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Oui l'entreprise est en capacité de mesurer sa performance et de réagir rapidement pour se mettre à jour",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Il y a un peu de benchmark toutefois les décisions d'évolutions sont un peu tardive (quand il n y a plus le choix)",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Absence de veille",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Les fonctionnalités des outils sont-elles augmentées par la pratique
            de vos collaborateurs ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Oui totalement les outils s'adaptent au terrain quotidiennement",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Oui mais les outils sont vieillissants, il y a des freins pour les faire évoluer",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Absence de prise en compte des pratiques terrain",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Comment accompagnez-vous vos collaborateurs dans la transition
            numérique ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                // value={groupSelected}
                // onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "L'entreprise est pro-active par la promotion des innovations et des outils numériques. J'adgère",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "L'entreprise accompagne en faisant de son mieux pour faire adhérer les autres, il y a parfois quelques blocages. J'aimerais parfois être moi-même accompagné",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Absence d'accompagnement",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                    username: "zoeylang",
                    url: "#",
                    role: "0 Points",
                  }}
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AxeNumerique;
