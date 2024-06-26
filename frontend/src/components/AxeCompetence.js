import * as React from "react";
import { Divider } from "@nextui-org/divider";

import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckBox";

function AxeCompetence() {
  const [groupSelected, setGroupSelected] = React.useState([]);

  return (
    <div
      className="axe entreprise shadow-xl rounded-2xl w-[80vw] px-14 pb-6 mt-6  absolute min-w-[600px] max-w-screen"
      id="AxeCompetence"
    >
      <h1 className="mt-4 font-bold text-4xl left-0"> Axe Competence </h1>
      <div className="flex flex-col gap-4 mt-4 text-black w-full">
        <div className="comp flex flex-row gap-2 h-fit">
          <h3 className="text-default-500 text-lg font-bold">
            Formations pour Apprendre à apprendre, changement de paradigme,
            "être à la page" (au-delà des compétences "justes" nécessaires)
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
                // isReadOnly={true}
                // defaultValue={"2"}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Possibilité de choisir et de suivre des formations 'annexes' au métier et/ou temps dédié pour de la veille ou de l'auto-formation ",
                    avatar:
                      "https://avatars.githubusercontent.com/u/30373425?v=4",
                    username: "jrgarciadev",
                    url: "https://twitter.com/jrgarciadev",
                    role: "2 Points",
                  }}
                  readOnly={true}
                  selected={true}
                />
                <CustomCheckbox
                  value="1"
                  user={{
                    name: "Nombreuses formations métiers dans le plan de formation",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Désintérêt pour l'amélioration de la compétence des équipes",
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
            Le co-développement (outil d'intelligence collective) existe-t-il
            dans l'entreprise ?
          </h3>

          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                value={groupSelected}
                onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Possibilité de choisir et de suivre des formations 'annexes' au métier et/ou temps dédié pour de la veille ou de l'auto-formation ",
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
                    name: "Nombreuses formations métiers dans le plan de formation",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Désintérêt pour l'amélioration de la compétence des équipes",
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
            Les collaborateurs sont-ils amenés à partager leurs compétences et
            sous quelles formes ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                value={groupSelected}
                onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Possibilité de choisir et de suivre des formations 'annexes' au métier et/ou temps dédié pour de la veille ou de l'auto-formation ",
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
                    name: "Nombreuses formations métiers dans le plan de formation",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Désintérêt pour l'amélioration de la compétence des équipes",
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
            Le mentoring (fonctionnement en binôme) existe-t-il pour assurer le
            transfert de compétences ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                value={groupSelected}
                onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Possibilité de choisir et de suivre des formations 'annexes' au métier et/ou temps dédié pour de la veille ou de l'auto-formation ",
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
                    name: "Nombreuses formations métiers dans le plan de formation",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Désintérêt pour l'amélioration de la compétence des équipes",
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
            Les managers sont-ils aussi formateurs sur certains sujet pour
            l'entreprise entière ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                value={groupSelected}
                onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Possibilité de choisir et de suivre des formations 'annexes' au métier et/ou temps dédié pour de la veille ou de l'auto-formation ",
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
                    name: "Nombreuses formations métiers dans le plan de formation",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Désintérêt pour l'amélioration de la compétence des équipes",
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
            L'entreprise favorise-t-elle l'excellence technique ? (Principe 9 du
            Manifeste Agile)
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                value={groupSelected}
                onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Possibilité de choisir et de suivre des formations 'annexes' au métier et/ou temps dédié pour de la veille ou de l'auto-formation ",
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
                    name: "Nombreuses formations métiers dans le plan de formation",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Désintérêt pour l'amélioration de la compétence des équipes",
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
            Déployez vous les pratiques du "Faire Agile", c'est-à-dire une ou
            plusieurs des "méthodes" agiles ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                value={groupSelected}
                onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Possibilité de choisir et de suivre des formations 'annexes' au métier et/ou temps dédié pour de la veille ou de l'auto-formation ",
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
                    name: "Nombreuses formations métiers dans le plan de formation",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Désintérêt pour l'amélioration de la compétence des équipes",
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
            Votre entreprise promeut-elle un "état d'esprit agile" ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                value={groupSelected}
                onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Possibilité de choisir et de suivre des formations 'annexes' au métier et/ou temps dédié pour de la veille ou de l'auto-formation ",
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
                    name: "Nombreuses formations métiers dans le plan de formation",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Désintérêt pour l'amélioration de la compétence des équipes",
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
            Votre entreprise gère-t-elle humainement les compétences ?
          </h3>
          <Divider className="h-auto" orientation="vertical" />
          <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
            <div className="flex gap-1 w-full flex-row ">
              <CheckboxGroup
                label="Reponses"
                value={groupSelected}
                onChange={setGroupSelected}
                orientation="horizontal"
                color="success"
                classNames={{
                  base: "w-full",
                }}
              >
                <CustomCheckbox
                  value="2"
                  user={{
                    name: "Possibilité de choisir et de suivre des formations 'annexes' au métier et/ou temps dédié pour de la veille ou de l'auto-formation ",
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
                    name: "Nombreuses formations métiers dans le plan de formation",
                    avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                    username: "johndoe",
                    url: "#",
                    role: "1 Points",
                  }}
                />
                <CustomCheckbox
                  value="0"
                  user={{
                    name: "Désintérêt pour l'amélioration de la compétence des équipes",
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

export default AxeCompetence;
