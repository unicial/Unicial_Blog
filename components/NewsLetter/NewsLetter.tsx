import { useState } from "react";
import { TextField } from "@material-ui/core";
import CommonBtn from "../Base/CommonBtn";
import { useAppDispatch } from "../../store/hooks";
import { showAlert } from "../../store/alert";
import axios from "axios";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();

  const handleSubscribe = async () => {
    if (email) {
      let regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(email)) {
        dispatch(
          showAlert({
            message: "Please enter a correct email address",
            severity: "error",
          })
        );
      } else {
        try {
          const response = await axios.post("/api/subscribe", {
            email,
          });
          dispatch(
            showAlert({
              message: "You have successfully submitted.",
              severity: "success",
            })
          );
        } catch (e: any) {
          dispatch(
            showAlert({
              message: e.response.data.error,
              severity: "error",
            })
          );
        }
      }
    } else {
      dispatch(
        showAlert({ message: "Please enter your email", severity: "error" })
      );
    }
  };

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
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <div className="c-newLetter-subscribeBtnContainer">
              <CommonBtn
                letter="SUBSCRIBE"
                className="c-newLetter-subscribeBtn"
                onClick={handleSubscribe}
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
