import BlogTable from "../../BlogTable/BlogTable";
import { useState, useEffect } from "react";
import { getAllProjects } from "../../../lib";

export default function ProjectUpdates() {
  const [projects, setProjects] = useState<any | undefined>();

  useEffect(() => {
    console.log("project_update test");
    getAllProjects().then((e: any) => {
      setProjects(e);
    });
  }, []);

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
          <BlogTable rows={projects} />
        </div>
      </div>
    </>
  );
}
