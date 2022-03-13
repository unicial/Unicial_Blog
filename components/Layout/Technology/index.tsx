import BlogTable from "../../BlogTable/BlogTable";
import { useState, useEffect } from "react";
import { getAllTechnology } from "../../../lib";

export default function Technology() {
  const [technology, setTechnology] = useState<any | undefined>();

  useEffect(() => {
    getAllTechnology().then((e: any) => {
      setTechnology(e);
    });
  }, []);

  return (
    <>
      <div className="c-announcements-root">
        <div className="c-announcements-headerContainer">
          <div className="c-announcements-headerBigtitle">Technology</div>
          <div className="c-announcements-headerSmalltitle">
            Read about the technology behind our platform.
          </div>
        </div>
        <div className="c-announcements-TableContainer">
          <BlogTable rows={technology} />
        </div>
      </div>
    </>
  );
}
