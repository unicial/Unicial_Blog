import BlogTable from "../../BlogTable/BlogTable";
import { useAppSelector } from "../../../store/hooks";
import { selectTechnology } from "../../../store/Technology/selectors";

export default function Technology() {
  return (
    <>
      <div className="c-announcements-root">
        <div className="c-technology-headerContainer">
          <div className="c-announcements-headerBigtitle">Technology</div>
          <div className="c-announcements-headerSmalltitle">
            Read about the technology behind our platform.
          </div>
        </div>
        <div className="c-announcements-TableContainer">
          <BlogTable rows={useAppSelector(selectTechnology).technology} />
        </div>
      </div>
    </>
  );
}
