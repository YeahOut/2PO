import React from "react";
import { useState, useCallback } from "react";
import { Component1 } from "../wallet/index";
import PortalPopup from "../wallet/PortalPopup";
import { Link } from "react-router-dom";
import {
  Container,
  LogoImg,
  NavItem,
  Tooltip,
  NavItemText,
  Root,
  WalletButton,
} from "./styled";
import navItems from "../../utils/NavUtils";
import { useMemo } from "react";
import { useNavigate } from "react-router";

export const Nav = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const navigate = useNavigate();

  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
  }, []);

  return (
    <>
      <Root>
        <Container>
          <LogoImg onClick={() => navigate("/")} />
          {navItems.map((item, index) => (
            <NavItem key={index}>
              {item.text}
              <Tooltip>
                {item.details.map((detail, index) => (
                  <NavItemText
                    onClick={() => navigate(`/${detail.src}`)}
                    key={`${detail.src}_${index}`}
                  >
                    {detail.name}
                  </NavItemText>
                ))}
              </Tooltip>
            </NavItem>
          ))}
          <WalletButton onClick={openPopup}>지갑 연동</WalletButton>
        </Container>
      </Root>
      {isPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopup}
        >
          <Component1 onClose={closePopup} />
        </PortalPopup>
      )}
    </>
  );
};
