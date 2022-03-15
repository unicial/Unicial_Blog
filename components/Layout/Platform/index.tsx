import BlogTable from "../../BlogTable/BlogTable";
import { useState, useEffect } from "react";
import { getAllPlatform } from "../../../lib";

export default function Platform() {
  const [platform, setPlatform] = useState<any | undefined>();

  useEffect(() => {
    console.log("project_update test");
    getAllPlatform().then((e: any) => {
      setPlatform(e);
    });
  }, []);

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
          <BlogTable rows={platform} />
        </div>
      </div>
    </>
  );
}
