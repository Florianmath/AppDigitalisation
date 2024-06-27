import * as React from "react";
import { Divider } from "@nextui-org/divider";

import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckBox";

function AxeReactiviteSynthese({ entreprises }) {
  return (
    <div
      className="axe entreprise shadow-xl rounded-2xl w-[80vw] px-14 pb-6 mt-28 absolute min-w-[600px] max-w-screen"
      id="AxeReactivite"
    >
      {entreprises ? (
        <div>
          {console.log(
            entreprises["categorie"]["Réactivité"]["reponses"][0][
              "choix_valeur"
            ],
          )}
          <h1 className="mt-4 font-bold text-4xl left-0"> Axe Réactivité </h1>
          <div className="flex flex-col gap-4 mt-4 text-black w-full">
            <div className="comp flex flex-row gap-2 h-fit">
              <h3 className="text-default-500 text-lg font-bold">
                Valeur supérieure utilisable livrée plus tôt (Fonction
                principale utilisable dès les premières versions)
              </h3>

              <Divider className="h-auto" orientation="vertical" />
              <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
                <div className="flex gap-1 w-full flex-row ">
                  <CheckboxGroup
                    label="Reponses"
                    orientation="horizontal"
                    color="success"
                    classNames={{
                      base: "w-full",
                    }}
                    isReadOnly={true}
                    defaultValue={[
                      entreprises["categorie"]["Réactivité"]["reponses"][0][
                        "choix_valeur"
                      ],
                    ]}
                  >
                    <CustomCheckbox
                      value={2}
                      user={{
                        name: "Principe du MVP respecté : Minimum Viable Product / la version d'un produit qui permet d'obtenir un maximum de retours client avec un minimum d'effort",
                        avatar:
                          "https://avatars.githubusercontent.com/u/30373425?v=4",
                        username: "jrgarciadev",
                        url: "https://twitter.com/jrgarciadev",
                        role: "2 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={1}
                      user={{
                        name: "Prototype fonctionnel intermédiaire livré au client",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                        username: "johndoe",
                        url: "#",
                        role: "1 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={0}
                      user={{
                        name: "Pas de phase de validation intermédiaire",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026704d",
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
                Réactivité face aux impératifs prépondérants
              </h3>

              <Divider className="h-auto" orientation="vertical" />
              <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
                <div className="flex gap-1 w-full flex-row ">
                  <CheckboxGroup
                    label="Reponses"
                    orientation="horizontal"
                    color="success"
                    classNames={{
                      base: "w-full",
                    }}
                    isReadOnly={true}
                    defaultValue={[
                      entreprises["categorie"]["Réactivité"]["reponses"][1][
                        "choix_valeur"
                      ],
                    ]}
                  >
                    <CustomCheckbox
                      value={2}
                      user={{
                        name: "L'équipe de conception s'adapte en cas de modification en cours de conception",
                        avatar:
                          "https://avatars.githubusercontent.com/u/30373425?v=4",
                        username: "jrgarciadev",
                        url: "https://twitter.com/jrgarciadev",
                        role: "2 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={1}
                      user={{
                        name: "Modifications en cours de conception engendrant alors du retard",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                        username: "johndoe",
                        url: "#",
                        role: "1 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={0}
                      user={{
                        name: "Pas de modification possible en cours de conception",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026704d",
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
                Mesure de la vélocité de l'équipe (indicateur de suivi du
                travail d'une équipe de conception)
              </h3>
              <Divider className="h-auto" orientation="vertical" />
              <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
                <div className="flex gap-1 w-full flex-row ">
                  <CheckboxGroup
                    label="Reponses"
                    orientation="horizontal"
                    color="success"
                    classNames={{
                      base: "w-full",
                    }}
                    isReadOnly={true}
                    defaultValue={[
                      entreprises["categorie"]["Réactivité"]["reponses"][2][
                        "choix_valeur"
                      ],
                    ]}
                  >
                    <CustomCheckbox
                      value={2}
                      user={{
                        name: "Mesure de la vélocité",
                        avatar:
                          "https://avatars.githubusercontent.com/u/30373425?v=4",
                        username: "jrgarciadev",
                        url: "https://twitter.com/jrgarciadev",
                        role: "2 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={1}
                      user={{
                        name: "Suivi des tâches",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                        username: "johndoe",
                        url: "#",
                        role: "1 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={0}
                      user={{
                        name: "Jamais",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026704d",
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
                Les installations techniques et de gestion sont modernes
                (TIC/ERP/CRM)
              </h3>
              <Divider className="h-auto" orientation="vertical" />
              <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
                <div className="flex gap-1 w-full flex-row ">
                  <CheckboxGroup
                    label="Reponses"
                    orientation="horizontal"
                    color="success"
                    classNames={{
                      base: "w-full",
                    }}
                    isReadOnly={true}
                    defaultValue={[
                      entreprises["categorie"]["Réactivité"]["reponses"][3][
                        "choix_valeur"
                      ],
                    ]}
                  >
                    <CustomCheckbox
                      value={2}
                      user={{
                        name: "En cas de besoin, le système d'information favorise la réactivité",
                        avatar:
                          "https://avatars.githubusercontent.com/u/30373425?v=4",
                        username: "jrgarciadev",
                        url: "https://twitter.com/jrgarciadev",
                        role: "2 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={1}
                      user={{
                        name: "Le système d'information permet avec quelques difficultés d'avoir de la réactivité",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                        username: "johndoe",
                        url: "#",
                        role: "1 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={0}
                      user={{
                        name: "Le système d'information freine toute tentative de réagir rapidement",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026704d",
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
                Les équipes sont en capacité d'autonomiser une partie de leurs
                tâches
              </h3>
              <Divider className="h-auto" orientation="vertical" />
              <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
                <div className="flex gap-1 w-full flex-row ">
                  <CheckboxGroup
                    label="Reponses"
                    orientation="horizontal"
                    color="success"
                    classNames={{
                      base: "w-full",
                    }}
                    isReadOnly={true}
                    defaultValue={[
                      entreprises["categorie"]["Réactivité"]["reponses"][4][
                        "choix_valeur"
                      ],
                    ]}
                  >
                    <CustomCheckbox
                      value={2}
                      user={{
                        name: "L'entreprise équipe et forme ses équipes à la création de site web ou app via des outils no-code",
                        avatar:
                          "https://avatars.githubusercontent.com/u/30373425?v=4",
                        username: "jrgarciadev",
                        url: "https://twitter.com/jrgarciadev",
                        role: "2 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={1}
                      user={{
                        name: "On laisse la possibilité de créer quelques macros Excel/VBA",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                        username: "johndoe",
                        url: "#",
                        role: "1 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={0}
                      user={{
                        name: "Jamais",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026704d",
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
                Les équipes s’inscrivent dans un cadre Agile Lean
              </h3>
              <Divider className="h-auto" orientation="vertical" />
              <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
                <div className="flex gap-1 w-full flex-row ">
                  <CheckboxGroup
                    label="Reponses"
                    orientation="horizontal"
                    color="success"
                    classNames={{
                      base: "w-full",
                    }}
                    isReadOnly={true}
                    defaultValue={[
                      entreprises["categorie"]["Réactivité"]["reponses"][5][
                        "choix_valeur"
                      ],
                    ]}
                  >
                    <CustomCheckbox
                      value={2}
                      user={{
                        name: "Les concepts Agile/Lean sont inscrits dans l'ADN de l'entreprise : Satisfaction du client avec des livraisons au plu tôt et régulières, accepter les changements, lisser les activités, collaboration quotidienne avec les parties prenantes, proximité terrain, autonomie des équipes dans la résolution de problèmes, amélioration continue...",
                        avatar:
                          "https://avatars.githubusercontent.com/u/30373425?v=4",
                        username: "jrgarciadev",
                        url: "https://twitter.com/jrgarciadev",
                        role: "2 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={1}
                      user={{
                        name: "Plusieurs concepts Agile/Lean sont mis en œuvre dans l'entreprise",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                        username: "johndoe",
                        url: "#",
                        role: "1 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={0}
                      user={{
                        name: "Pas de démarche Agile/Lean initiée dans l'entreprise",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026704d",
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
                Les mécanismes de livraison et de synchronisation sont matures
              </h3>
              <Divider className="h-auto" orientation="vertical" />
              <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
                <div className="flex gap-1 w-full flex-row ">
                  <CheckboxGroup
                    label="Reponses"
                    orientation="horizontal"
                    color="success"
                    classNames={{
                      base: "w-full",
                    }}
                    isReadOnly={true}
                    defaultValue={[
                      entreprises["categorie"]["Réactivité"]["reponses"][6][
                        "choix_valeur"
                      ],
                    ]}
                  >
                    <CustomCheckbox
                      value={2}
                      user={{
                        name: "Concepts du juste à temps maîtrisés (production rythmée par la demande client, peu d'en-cours)",
                        avatar:
                          "https://avatars.githubusercontent.com/u/30373425?v=4",
                        username: "jrgarciadev",
                        url: "https://twitter.com/jrgarciadev",
                        role: "2 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={1}
                      user={{
                        name: "Quelques concepts du juste à temps sont mis en œuvre pour tendre le flux",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                        username: "johndoe",
                        url: "#",
                        role: "1 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={0}
                      user={{
                        name: "Pas de démarche de tension des flux",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026704d",
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
                Les innovations produit tiennent compte de l'urgence climatique
              </h3>
              <Divider className="h-auto" orientation="vertical" />
              <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
                <div className="flex gap-1 w-full flex-row ">
                  <CheckboxGroup
                    label="Reponses"
                    orientation="horizontal"
                    color="success"
                    classNames={{
                      base: "w-full",
                    }}
                    isReadOnly={true}
                    defaultValue={[
                      entreprises["categorie"]["Réactivité"]["reponses"][7][
                        "choix_valeur"
                      ],
                    ]}
                  >
                    <CustomCheckbox
                      value={2}
                      user={{
                        name: "Systématiquement",
                        avatar:
                          "https://avatars.githubusercontent.com/u/30373425?v=4",
                        username: "jrgarciadev",
                        url: "https://twitter.com/jrgarciadev",
                        role: "2 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={1}
                      user={{
                        name: "Des premières initiatives ont été lancées",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                        username: "johndoe",
                        url: "#",
                        role: "1 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={0}
                      user={{
                        name: "Auxune réflexion sur cet axe",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026704d",
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
                Les processus internes sont remis en cause pour diminuer leur
                impact environnemental
              </h3>
              <Divider className="h-auto" orientation="vertical" />
              <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
                <div className="flex gap-1 w-full flex-row ">
                  <CheckboxGroup
                    label="Reponses"
                    orientation="horizontal"
                    color="success"
                    classNames={{
                      base: "w-full",
                    }}
                    isReadOnly={true}
                    defaultValue={[
                      entreprises["categorie"]["Réactivité"]["reponses"][8][
                        "choix_valeur"
                      ],
                    ]}
                  >
                    <CustomCheckbox
                      value={2}
                      user={{
                        name: "Systématiquement",
                        avatar:
                          "https://avatars.githubusercontent.com/u/30373425?v=4",
                        username: "jrgarciadev",
                        url: "https://twitter.com/jrgarciadev",
                        role: "2 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={1}
                      user={{
                        name: "Des premières initiatives ont été lancées",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                        username: "johndoe",
                        url: "#",
                        role: "1 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={0}
                      user={{
                        name: "Auxune réflexion sur cet axe",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026704d",
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
                Les parties prenantes sont sélectionnées en fonction de leur
                éthique vis-à-vis du développement durable
              </h3>
              <Divider className="h-auto" orientation="vertical" />
              <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
                <div className="flex gap-1 w-full flex-row ">
                  <CheckboxGroup
                    label="Reponses"
                    orientation="horizontal"
                    color="success"
                    classNames={{
                      base: "w-full",
                    }}
                    isReadOnly={true}
                    defaultValue={[
                      entreprises["categorie"]["Réactivité"]["reponses"][9][
                        "choix_valeur"
                      ],
                    ]}
                  >
                    <CustomCheckbox
                      value={2}
                      user={{
                        name: "Systématiquement",
                        avatar:
                          "https://avatars.githubusercontent.com/u/30373425?v=4",
                        username: "jrgarciadev",
                        url: "https://twitter.com/jrgarciadev",
                        role: "2 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={1}
                      user={{
                        name: "Des premières initiatives ont été lancées",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                        username: "johndoe",
                        url: "#",
                        role: "1 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={0}
                      user={{
                        name: "Auxune réflexion sur cet axe",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026704d",
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
                Veille stratégique
              </h3>
              <Divider className="h-auto" orientation="vertical" />
              <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
                <div className="flex gap-1 w-full flex-row ">
                  <CheckboxGroup
                    label="Reponses"
                    orientation="horizontal"
                    color="success"
                    classNames={{
                      base: "w-full",
                    }}
                    isReadOnly={true}
                    defaultValue={[
                      entreprises["categorie"]["Numérique"]["reponses"][10][
                        "choix_valeur"
                      ],
                    ]}
                  >
                    <CustomCheckbox
                      value={2}
                      user={{
                        name: "La veille stratégique de l'entreprise permet d'anticiper les disruptions nécessaires",
                        avatar:
                          "https://avatars.githubusercontent.com/u/30373425?v=4",
                        username: "jrgarciadev",
                        url: "https://twitter.com/jrgarciadev",
                        role: "2 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={1}
                      user={{
                        name: "La veille stratégique de l'entreprise permet d'anticiper les évolutions et les innovations",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                        username: "johndoe",
                        url: "#",
                        role: "1 Points",
                      }}
                    />
                    <CustomCheckbox
                      value={0}
                      user={{
                        name: "Pas de veille",
                        avatar:
                          "https://i.pravatar.cc/300?u=a042581f4e29026704d",
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
      ) : (
        "loading"
      )}
    </div>
  );
}

export default AxeReactiviteSynthese;
