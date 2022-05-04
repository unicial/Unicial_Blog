import React, { useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import { alertMessage, alertSeverity } from "../../../store/alert/selectors";
import { showAlert } from "../../../store/alert";

export default function Alert() {
  const dispatch = useAppDispatch();
  const msg = useAppSelector(alertMessage);
  const severity = useAppSelector(alertSeverity);

  const [openAlert, setOpenAlert] = React.useState(false);

  React.useEffect(() => {
    if (msg?.length !== 0) {
      setOpenAlert(true);
    }
  }, [msg, severity]);

  const handleCloseClick = () => {
    dispatch(showAlert({ message: "", severity: severity }));
    setOpenAlert(false);
  };

  useEffect(() => {
    let timeId = setTimeout(() => {
      dispatch(showAlert({ message: "", severity: severity }));
      setOpenAlert(false);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, [msg]);

  return (
    <>
      <div
        className={
          openAlert === true
            ? "c-alert-notificationRoot"
            : "c-alert-displayNone"
        }
      >
        <div className="c-alert-notificationContainer">
          {severity === "success" ? (
            <>
              <div className="c-alert-notificationPicture">
                <img
                  src="/svg/notification_check.svg"
                  className="c-alert-checkIcon"
                />
              </div>
              <div className="c-alert-notificationText">
                <div className="c-alert-notificationTitle">Success</div>
                <div className="c-alert-notificationDescription">{msg}</div>
              </div>
              <IconButton onClick={handleCloseClick} size="small">
                <CloseIcon className="c-alert-closeIcon" />
              </IconButton>
            </>
          ) : (
            <>
              <div className="c-alert-notificationPicture_error">
                <img
                  src="/svg/notification_error.svg"
                  className="c-alert-checkIcon"
                />
              </div>
              <div className="c-alert-notificationText">
                <div className="c-alert-notificationTitle_error">Error</div>
                <div className="c-alert-notificationDescription">{msg}</div>
              </div>
              <IconButton onClick={handleCloseClick} size="small">
                <CloseIcon className="c-alert-closeIcon" />
              </IconButton>
            </>
          )}
        </div>
      </div>
    </>
  );
}
