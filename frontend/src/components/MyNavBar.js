import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ReactComponent as Logo } from "../Logo.svg";

export default function MyNavBar() {
  return (
    <div className="flex flex-row w-full">
      <Navbar shouldHideOnScroll className="h-20 w-full">
        <NavbarBrand>
          <a href="/" className="h-12 ">
            <Logo />
            <p className="font-bold text-inherit">TOPO</p>
          </a>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="success" href="/synthese" variant="flat">
              Syntheses
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <p className="right-0 text-center flex items-center font-bold">v1.0.2</p>
    </div>
  );
}
