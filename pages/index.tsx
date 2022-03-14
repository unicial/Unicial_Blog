import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import TopTab from "../components/TopTab/TopTab";
import AllAricles from "../components/Layout/AllArticles";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import SocialLinkBlock from "../components/SocialLinkBlock/SocialLinkBlock";
import Footer from "../components/Footer/Footer";
// import { getAllPosts } from "../lib";
import { getAllArticle } from "../lib";
import { getAllProjects } from "../lib";
import { useEffect } from "react";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<any | undefined>();

  useEffect(() => {
    getAllArticle().then((e: any) => {
      setPosts(e);
    });
  }, []);

  // console.log("posts", posts);

  return (
    <div className={styles.container}>
      <Head>
        <title>Unicial Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <TopTab />
      <AllAricles posts={posts} />
      <NewsLetter />
      <SocialLinkBlock />
      <Footer />
    </div>
  );
};

export default Home;
