import React from "react";
import { Checkbox, Link, User, Chip, cn } from "@nextui-org/react";

export const CustomCheckbox = ({ user, statusColor, value }) => {
  return (
    <Checkbox
      aria-label={user.name}
      classNames={{
        base: cn(
          "inline-flex w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
          "max-w-full",
        ),
        label: "w-full",
      }}
      value={value}
    >
      <div className="w-full flex justify-between gap-3">
        <h2>{user.name}</h2>
        <div className="flex flex-col items-end gap-1">
          <span className="w-11 text-tiny text-default-500">{user.role}</span>
        </div>
      </div>
    </Checkbox>
  );
};
