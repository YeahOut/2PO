import React from "react";
import { LoveShareTrustSection } from "./components";
import { InformationSection } from "./components";
import { Root } from "./styled";

export const Footer = () => {
  return (
    <Root>
      <LoveShareTrustSection />
      <InformationSection />
    </Root>
  );
};
