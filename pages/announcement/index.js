import Layout from "../../components/Layout/Layout";
import Announcements from "../../components/Layout/Announcements";
import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { fetchAllData } from "../../store/AllArticles";
import { fetchAnnouncementData } from "../../store/Announcement";
import { fetchProjectUpdateData } from "../../store/ProjectUpdate";
import { fetchPlatformData } from "../../store/Platform";
import { fetchTechnologyData } from "../../store/Technology";
import { fetchTutorialData } from "../../store/Tutorial";
const Index = (props) => {
  const dispatch = useAppDispatch();

  dispatch(fetchAllData(props.res.all));
  dispatch(fetchAnnouncementData(props.res.announcement));
  dispatch(fetchProjectUpdateData(props.res.projectUpdates));
  dispatch(fetchPlatformData(props.res.platform));
  dispatch(fetchTechnologyData(props.res.platform));
  dispatch(fetchTutorialData(props.res.tutorials));

  return (
    <>
      <Layout title="Unicial-Blog" description="This is a Unicila Blog page">
        <Announcements />
      </Layout>
    </>
  );
};

export default Index;
