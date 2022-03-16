import BlogTable from "../../BlogTable/BlogTable";
import { useAppSelector } from "../../../store/hooks";
import { selectPlatform } from "../../../store/Platform/selectors";

export default function Platform() {
  return (
    <>
      <div className="c-announcements-root">
        <div className="c-platform-headerContainer">
          <div className="c-announcements-headerBigtitle">Platform</div>
          <div className="c-announcements-headerSmalltitle">
            Explore the philosophy and practice of building virtual experiences
            for Unicial.
          </div>
        </div>
        <div className="c-announcements-TableContainer">
          <BlogTable rows={useAppSelector(selectPlatform).platform} />
        </div>
      </div>
    </>
  );
}
