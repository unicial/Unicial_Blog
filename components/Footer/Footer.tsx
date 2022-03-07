import LanguageMenuBar from "../LanguageMenuBar/LanguageMenuBar";
import { languageData } from "../../config/constant";
export default function () {
  return (
    <>
      <div className="c-footer-root">
        <div className="c-footer-container">
          <div className="c-footer-leftPart">
            <div className="c-footer-languageMenubarContainer">
              <LanguageMenuBar data={languageData} />
            </div>
            <div className="c-footer-middleDivide"></div>
            <div className="c-footer-description">
              © 2022 Decentraland CC BY-SA 3.0
            </div>
          </div>
          <div className="c-footer-rightPart-root">
            <div className="c-footer-rightPart-container">
              <div className="c-footer-commonLinkRoot">
                <div className="c-footer-commonLinkContainer">
                  <a className="c-footer-commonLink">Home</a>
                  <a className="c-footer-commonLink">Legal Information</a>
                  <a className="c-footer-commonLink">Press Kit</a>
                </div>
              </div>
              <div className="c-footer-socialLinkRoot">
                <div className="c-footer-socialLinkContainer">
                  <div className="c-footer-socialIcon-container">
                    <i className="fab fa-discord c-footer-socialIcon"></i>
                  </div>
                  <div className="c-footer-socialIcon-container">
                    <i className="fab fa-discord c-footer-socialIcon"></i>
                  </div>
                  <div className="c-footer-socialIcon-container">
                    <i className="fab fa-discord c-footer-socialIcon"></i>
                  </div>
                  <div className="c-footer-socialIcon-container">
                    <i className="fab fa-twitter c-footer-socialIcon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
