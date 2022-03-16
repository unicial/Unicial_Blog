import "../styles/globals.css";
import "../styles/header.css";
import "../styles/headerSignInBtn.css";
import "../styles/headerMobileMenu.css";
import "../styles/toptab.css";
import "../styles/authorsMenuBar.css";
import "../styles/allArticles.css";
import "../styles/latestArticle.css";
import "../styles/articleCard.css";
import "../styles/commonBtn.css";
import "../styles/newsLetter.css";
import "../styles/socialLinkBlock.css";
import "../styles/socialLinkCard.css";
import "../styles/footer.css";
import "../styles/languageMenuBar.css";
import "../styles/announcements.css";
import "../styles/blogDetail.css";
import "../styles/blogDetailHeader.css";
import "../styles/blogDetailBody.css";
import "../styles/blogDetailFooter.css";
import "../styles/baseTable.css";
import "../styles/blogTable.css";
import "../styles/testCard.scss";
import "../styles/authorDetail.css";
import type { AppProps } from "next/app";
import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { store } from "../store/store";
import { getAllArticle } from "../lib";

function MyApp(props: any) {
  // return <Component {...pageProps} />
  const { Component, pageProps, res } = props;
  const theme = useTheme();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  // console.log("res", res);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component res={res} {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
MyApp.getInitialProps = async (ctx: any) => {
  // const res = await fetch("https://api.github.com/repos/vercel/next.js");
  // const json = await res.json();
  // return { res: json.message };
  const res = await getAllArticle();
  return { res: res };
};

export default MyApp;
