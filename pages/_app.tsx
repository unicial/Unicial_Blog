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
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  const theme = useTheme();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
