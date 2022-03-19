import LanguageMenuBar from "../LanguageMenuBar/LanguageMenuBar";
import { languageData } from "../../config/constant";
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
                  <a className="c-footer-commonLink" href="/">
                    Home
                  </a>
                  {/* <a className="c-footer-commonLink" href="#">
                    Legal Information
                  </a>
                  <a className="c-footer-commonLink" href="#">
                    Press Kit
                  </a> */}
                </div>
              </div>
              <div className="c-footer-socialLinkRoot">
                <div className="c-footer-socialLinkContainer">
                  <a
                    href="https://discord.gg/JEPcm4YD"
                    target="_blank"
                    className="c-footer-socialIcon-container"
                  >
                    <i className="fab fa-discord c-footer-socialIcon"></i>
                  </a>
                  <a
                    href=" https://www.reddit.com/r/ZilionixxBlockchain/"
                    target="_blank"
                    className="c-footer-socialIcon-container"
                  >
                    <i className="fab fa-reddit-alien c-footer-socialIcon"></i>
                  </a>
                  <a
                    href="https://github.com/unicial/"
                    target="_blank"
                    className="c-footer-socialIcon-container"
                  >
                    <i className="fab fa-github c-footer-socialIcon"></i>
                  </a>
                  <a
                    href="https://twitter.com/zilionixx"
                    target="_blank"
                    className="c-footer-socialIcon-container"
                  >
                    <i className="fab fa-twitter c-footer-socialIcon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
