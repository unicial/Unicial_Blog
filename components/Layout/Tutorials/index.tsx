import BlogTable from "../../BlogTable/BlogTable";
import { useAppSelector } from "../../../store/hooks";
import { selectTutorial } from "../../../store/Tutorial/selectors";

export default function Tutorials() {
  return (
    <>
      <div className="c-announcements-root">
        <div className="c-tutorials-headerContainer">
          <div className="c-announcements-headerBigtitle">Tutorials</div>
          <div className="c-announcements-headerSmalltitle">
            Learn how to use our developer tools to build 3D content, games, and
            apps for Unicial.
          </div>
        </div>
        <div className="c-announcements-TableContainer">
          <BlogTable rows={useAppSelector(selectTutorial).tutorial} />
        </div>
      </div>
    </>
  );
}
