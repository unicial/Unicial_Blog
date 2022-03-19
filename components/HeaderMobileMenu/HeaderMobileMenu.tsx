import { useState } from "react";
import { useTranslation } from "react-i18next";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  ClickAwayListener,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { headerLinkData } from "../../config/constant";

const HeaderMobileMenu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [head_index, setHeaderIndex] = useState();

  const handleModal = () => {
    setOpen(!open);
  };

  const handleHeaderLink = (index: number) => {
    setOpen(false);
    switch (index) {
      case 1:
        window.open("https://marketplace.unicial.org/");
        break;
      case 3:
        window.open("https://doc.unicial.org/");
        break;
      case 6:
        window.open("https://blog.unicial.org/");
        break;
      default:
        window.open("/");
        break;
    }
  };

  return (
    <div className="c-header-mobile-container">
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <div className="c-header-mobile-logo" onClick={handleModal}>
            <img
              src="/images/logo.svg"
              alt="logo"
              className="c-header-logo-img"
            ></img>
            <span className="c-header-logoName">{t("UNICIAL")}</span>
            {open ? (
              <ExpandLess className="c-header-mobile-icon" />
            ) : (
              <ExpandMore className="c-header-mobile-icon" />
            )}
          </div>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            className="c-header-mobile-menu-collapse"
          >
            <List
              component="div"
              disablePadding
              className="c-header-mobile-menu-content"
            >
              <ListItem
                button
                onClick={() => handleHeaderLink(headerLinkData.marketplace)}
                disableRipple
              >
                <ListItemText primary={t("Marketplace")} />
              </ListItem>
              <ListItem
                button
                onClick={() => handleHeaderLink(headerLinkData.documents)}
                disableRipple
              >
                <ListItemText primary={t("Documents")} />
              </ListItem>
              <ListItem
                button
                onClick={() => handleHeaderLink(headerLinkData.blog)}
                className="active-list"
                disableRipple
              >
                <ListItemText primary={t("Blog")} />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </ClickAwayListener>
    </div>
  );
};

export default HeaderMobileMenu;
