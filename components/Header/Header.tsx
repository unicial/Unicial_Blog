import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import clsx from "clsx";
import HeaderMobileMenu from "../HeaderMobileMenu/HeaderMobileMenu";
import { headerLinkData } from "../../config/constant";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";

interface Props {
  scrolltotop: boolean;
}

function ScrollTop({ scrolltotop }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className={scrolltotop ? "c-scroll-top" : "c-scroll-top-disable"}>
      <span onClick={handleClick} role="presentation">
        <i className="fas fa-chevron-up c-scroll-top-icon"></i>
      </span>
    </div>
  );
}

export default function Header() {
  const { t } = useTranslation();
  const [headerActive, setHeaderActive] = useState(6);

  const [scrolltotop, setScrolltotop] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 65) {
      setScrolltotop(true);
    } else if (window.scrollY < 90) {
      setScrolltotop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

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
            <Link href="https://unicial.org/">
              <a className="c-header-logoContainer ">
                <img
                  src="/images/logo.svg"
                  alt="logo"
                  className="c-header-logo"
                />
                <span className="c-header-logoName">Unicial</span>
              </a>
            </Link>
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
          <SearchBar />
        </div>
      </div>
      <div id="back-to-top-anchor" />
      <ScrollTop scrolltotop={scrolltotop} />
    </>
  );
}
