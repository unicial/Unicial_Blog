import BlogTable from "../../BlogTable/BlogTable";
import { useAppSelector } from "../../../store/hooks";
import { selectAnnouncement } from "../../../store/Announcement/selectors";
import React from "react";
export default function Announcements() {
  return (
    <>
      <div className="c-announcements-root">
        <div className="c-announcements-headerContainer">
          <div className="c-announcements-headerBigtitle">Announcements</div>
          <div className="c-announcements-headerSmalltitle">
            The latest news from Decentraland.
          </div>
        </div>
        <div className="c-announcements-TableContainer">
          <BlogTable rows={useAppSelector(selectAnnouncement).announcement} />
        </div>
      </div>
    </>
  );
}
