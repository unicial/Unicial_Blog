import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import clsx from "clsx";
import HeaderSignInBtn from "../HeaderSignInBtn/HeaderSignInBtn";
import HeaderMobileMenu from "../HeaderMobileMenu/HeaderMobileMenu";
import { headerLinkData } from "../../config/constant";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  const { t } = useTranslation();
  const loginAddress = false;
  const [headerActive, setHeaderActive] = useState(6);
  const handleHeaderLink = (index: number) => {
    setHeaderActive(index);
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
    <>
      <div className="c-header-root">
        <div className="c-header-container">
          <div className="c-header-menucontainer">
            {/* <div className="c-header-logoContainer "> */}
            <Link href="/">
              <a className="c-header-logoContainer ">
                <img
                  src="/images/logo.svg"
                  alt="logo"
                  className="c-header-logo"
                />
                <span className="c-header-logoName">Unicial</span>
              </a>
            </Link>
            {/* </div> */}
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
                  headerActive === headerLinkData.documents,
              })}
              disableRipple
              onClick={() => handleHeaderLink(headerLinkData.documents)}
            >
              <span></span>
              <span>{t("Documents")}</span>
              <span
                className={clsx("none-border", {
                  ["active-border"]: headerActive === headerLinkData.documents,
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
          {/* {loginAddress ? <div>Already logged</div> : <HeaderSignInBtn />} */}
          <SearchBar />
        </div>
      </div>
    </>
  );
}
