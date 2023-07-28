import React from "react";
import { useState, useCallback } from "react";
import {Component1} from "../wallet/index";
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

export const Nav = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

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
        <Link to="/">
          <LogoImg />
        </Link>
        {navItems.map((item, index) => (
          <NavItem key={index}>
            {item.text}
            <Tooltip>
              {item.details.map((detail, index) => (
                <NavItemText key={`${detail.src}_${index}`}>
                  <Link to={detail.src}>{detail.name}</Link>
                </NavItemText>
              ))}
            </Tooltip>
          </NavItem>
        ))}
        <WalletButton onClick = {openPopup}>
          지갑 연동
        </WalletButton>
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
