import BlogTable from "../../BlogTable/BlogTable";
import { useState, useEffect } from "react";
import { getAllTutorials } from "../../../lib";

export default function Tutorials() {
  const [tutorials, setTutorials] = useState<any | undefined>();

  useEffect(() => {
    console.log("project_update test");
    getAllTutorials().then((e: any) => {
      setTutorials(e);
    });
  }, []);

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
          <BlogTable rows={tutorials} />
        </div>
      </div>
    </>
  );
}
