import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import clsx from "clsx";
import HeaderSignInBtn from "../HeaderSignInBtn/HeaderSignInBtn";
import HeaderMobileMenu from "../HeaderMobileMenu/HeaderMobileMenu";
import { headerLinkData } from "../../config/constant";

export default function Header() {
  const { t } = useTranslation();
  const loginAddress = false;
  const [headerActive, setHeaderActive] = useState(6);
  const handleHeaderLink = (index: number) => {
    setHeaderActive(index);
  };
  return (
    <>
      <div className="c-header-root">
        <div className="c-header-container">
          <div className="c-header-menucontainer">
            <a href="/" className="c-header-logoContainer ">
              <img
                src="/images/logo.svg"
                alt="logo"
                className="c-header-logo"
              />
              <span className="c-header-logoName">Unicial</span>
            </a>
            <Button
              className="c-header-nav"
              disableRipple
              onClick={() => handleHeaderLink(headerLinkData.marketplace)}
            >
              <span></span>
              <span>{t("Marketplace")}</span>
              <span
                className={clsx("none-border", {
                  ["active-border"]:
                    headerActive === headerLinkData.marketplace,
                })}
              ></span>
            </Button>
            <Button
              className={clsx("c-header-nav", {
                ["c-header-nav-active"]:
                  headerActive === headerLinkData.builder,
              })}
              disableRipple
              onClick={() => handleHeaderLink(headerLinkData.builder)}
            >
              <span></span>
              <span>{t("Builder")}</span>
              <span
                className={clsx("none-border", {
                  ["active-border"]: headerActive === headerLinkData.builder,
                })}
              ></span>
            </Button>
            <Button
              className={clsx("c-header-nav", {
                ["c-header-nav-active"]: headerActive === headerLinkData.docs,
              })}
              disableRipple
              onClick={() => handleHeaderLink(headerLinkData.docs)}
            >
              <span></span>
              <span>{t("Docs")}</span>
              <span
                className={clsx("none-border", {
                  ["active-border"]: headerActive === headerLinkData.docs,
                })}
              ></span>
            </Button>
            <Button
              className={clsx("c-header-nav", {
                ["c-header-nav-active"]: headerActive === headerLinkData.events,
              })}
              disableRipple
              onClick={() => handleHeaderLink(headerLinkData.events)}
            >
              <span></span>
              <span>{t("Events")}</span>
              <span
                className={clsx("none-border", {
                  ["active-border"]: headerActive === headerLinkData.events,
                })}
              ></span>
            </Button>
            <Button
              className={clsx("c-header-nav", {
                ["c-header-nav-active"]: headerActive === headerLinkData.dao,
              })}
              disableRipple
              onClick={() => handleHeaderLink(headerLinkData.dao)}
            >
              <span></span>
              <span>{t("DAO")}</span>
              <span
                className={clsx("none-border", {
                  ["active-border"]: headerActive === headerLinkData.dao,
                })}
              ></span>
            </Button>
            <Button
              className={clsx("c-header-nav", {
                ["c-header-nav-active"]: headerActive === headerLinkData.blog,
              })}
              disableRipple
              onClick={() => handleHeaderLink(headerLinkData.blog)}
            >
              <span></span>
              <span>{t("Blog")}</span>
              <span
                className={clsx("none-border", {
                  ["active-border"]: headerActive === headerLinkData.blog,
                })}
              ></span>
            </Button>
          </div>
          <HeaderMobileMenu />
          {loginAddress ? <div>Already logged</div> : <HeaderSignInBtn />}
        </div>
      </div>
    </>
  );
}
