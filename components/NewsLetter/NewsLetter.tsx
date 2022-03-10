import { TextField } from "@material-ui/core";
import CommonBtn from "../Base/CommonBtn";
export default function NewsLetter() {
  return (
    <>
      <div className="c-newLetter-root">
        <div className="c-newLetter-container">
          <div className="c-newLetter-leftPart">
            <div className="c-newLetter-mainTitle">Developers newsletter</div>
            <div className="c-newLetter-mainContent">
              Subscribe to the latest news about Decentraland
            </div>
          </div>
          <div className="c-newLetter-rightPart">
            <TextField
              placeholder="mail@domain.com"
              className="c-newLetter-input"
            />
            <div className="c-newLetter-subscribeBtnContainer">
              <CommonBtn
                letter="SUBSCRIBE"
                className="c-newLetter-subscribeBtn"
              >
                <i className="far fa-arrow-right c-base-rightArrow c-newsLetter-subrightArrow"></i>
              </CommonBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
