import LanguageMenuBar from "../LanguageMenuBar/LanguageMenuBar";
import { languageData } from "../../config/constant";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="c-footer-root">
        <div className="c-footer-container">
          <div className="c-footer-leftPart">
            <div className="c-footer-languageMenubarContainer">
              <LanguageMenuBar data={languageData} />
            </div>
            <div className="c-footer-middleDivide"></div>
            <div className="c-footer-description">© 2022 Unicial</div>
          </div>
          <div className="c-footer-rightPart-root">
            <div className="c-footer-rightPart-container">
              <div className="c-footer-commonLinkRoot">
                <div className="c-footer-commonLinkContainer">
                  <Link href="/">
                    <a className="c-footer-commonLink">Home</a>
                  </Link>
                </div>
              </div>
              <div className="c-footer-socialLinkRoot">
                <div className="c-footer-socialLinkContainer">
                  <Link href="https://discord.gg/JEPcm4YD">
                    <a className="c-footer-socialIcon-container">
                      <i className="fab fa-discord c-footer-socialIcon"></i>
                    </a>
                  </Link>
                  <Link href=" https://www.reddit.com/r/ZilionixxBlockchain/">
                    <a className="c-footer-socialIcon-container">
                      <i className="fab fa-reddit-alien c-footer-socialIcon"></i>
                    </a>
                  </Link>
                  <Link href="https://github.com/unicial/">
                    <a className="c-footer-socialIcon-container">
                      <i className="fab fa-github c-footer-socialIcon"></i>
                    </a>
                  </Link>
                  <Link href="https://twitter.com/zilionixx">
                    <a className="c-footer-socialIcon-container">
                      <i className="fab fa-twitter c-footer-socialIcon"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
