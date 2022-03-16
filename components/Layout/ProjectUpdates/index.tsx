import BlogTable from "../../BlogTable/BlogTable";
import { useAppSelector } from "../../../store/hooks";
import { selectProjectUpdate } from "../../../store/ProjectUpdate/selectors";

export default function ProjectUpdates() {
  return (
    <>
      <div className="c-announcements-root">
        <div className="c-projectUpdate-headerContainer">
          <div className="c-announcements-headerBigtitle">Project Updates</div>
          <div className="c-announcements-headerSmalltitle">
            Releases, developements, and updates.
          </div>
        </div>
        <div className="c-announcements-TableContainer">
          <BlogTable rows={useAppSelector(selectProjectUpdate).projectUpdate} />
        </div>
      </div>
    </>
  );
}
