import { Button } from "@material-ui/core";
import { useState } from "react";
import { toptabLinkData } from "../../config/constant";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import AuthorsMenuBar from "../AuthorsMenuBar/AuthorsMenuBar";
import { authorsData } from "../../config/constant";

export default function TopTab() {
  const { t } = useTranslation();
  const [toptabActive, setToptabActive] = useState(toptabLinkData.allArticles);
  const handleToptabLink = (index: number) => {
    setToptabActive(index);
  };

  return (
    <div className="c-toptab-root">
      <div className="c-toptab-container">
        <div className="c-toptab-linksContainer">
          <Button
            className={clsx("c-toptab-nav", {
              ["c-toptab-nav-active"]:
                toptabActive === toptabLinkData.allArticles,
            })}
            disableRipple
            onClick={() => handleToptabLink(toptabLinkData.allArticles)}
          >
            <span></span>
            <span className="c-toptab-linkletter">{t("All articles")}</span>
            <span
              className={clsx("none-border", {
                ["active-border"]: toptabActive === toptabLinkData.allArticles,
              })}
            ></span>
          </Button>
          <Button
            className={clsx("c-toptab-nav", {
              ["c-toptab-nav-active"]:
                toptabActive === toptabLinkData.announcements,
            })}
            disableRipple
            onClick={() => handleToptabLink(toptabLinkData.announcements)}
          >
            <span></span>
            <span className="c-toptab-linkletter">{t("Announcements")}</span>
            <span
              className={clsx("none-border", {
                ["active-border"]:
                  toptabActive === toptabLinkData.announcements,
              })}
            ></span>
          </Button>
          <Button
            className={clsx("c-toptab-nav", {
              ["c-toptab-nav-active"]:
                toptabActive === toptabLinkData.projectUpdates,
            })}
            disableRipple
            onClick={() => handleToptabLink(toptabLinkData.projectUpdates)}
          >
            <span></span>
            <span className="c-toptab-linkletter">{t("Project Updates")}</span>
            <span
              className={clsx("none-border", {
                ["active-border"]:
                  toptabActive === toptabLinkData.projectUpdates,
              })}
            ></span>
          </Button>
          <Button
            className={clsx("c-toptab-nav", {
              ["c-toptab-nav-active"]: toptabActive === toptabLinkData.platform,
            })}
            disableRipple
            onClick={() => handleToptabLink(toptabLinkData.platform)}
          >
            <span></span>
            <span className="c-toptab-linkletter">{t("Platform")}</span>
            <span
              className={clsx("none-border", {
                ["active-border"]: toptabActive === toptabLinkData.platform,
              })}
            ></span>
          </Button>
          <Button
            className={clsx("c-toptab-nav", {
              ["c-toptab-nav-active"]:
                toptabActive === toptabLinkData.technology,
            })}
            disableRipple
            onClick={() => handleToptabLink(toptabLinkData.technology)}
          >
            <span></span>
            <span className="c-toptab-linkletter">{t("Technology")}</span>
            <span
              className={clsx("none-border", {
                ["active-border"]: toptabActive === toptabLinkData.technology,
              })}
            ></span>
          </Button>
          <Button
            className={clsx("c-toptab-nav", {
              ["c-toptab-nav-active"]:
                toptabActive === toptabLinkData.tutorials,
            })}
            disableRipple
            onClick={() => handleToptabLink(toptabLinkData.tutorials)}
          >
            <span></span>
            <span className="c-toptab-linkletter">{t("Tutorials")}</span>
            <span
              className={clsx("none-border", {
                ["active-border"]: toptabActive === toptabLinkData.tutorials,
              })}
            ></span>
          </Button>
        </div>
        <div className="c-toptab-authorsContainer">
          <AuthorsMenuBar data={authorsData} />
        </div>
      </div>
    </div>
  );
}