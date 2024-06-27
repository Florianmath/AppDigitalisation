import * as React from "react";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/react";

function EntrepriseForm({ question, synthese, row }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-default-500 text-small">{question}</h3>
      <div className="flex w-full flex-wrap items-end md::mb-0 gap-4">
        {synthese ? (
          <Textarea
            disabled
            placeholder={synthese}
            className="h-fit"
            minRows={row}
            color="success"
          />
        ) : (
          <Input type="email" label="Réponse" labelPlacement="inside" />
        )}
      </div>
    </div>
  );
}

export default EntrepriseForm;
