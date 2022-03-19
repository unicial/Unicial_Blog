import { Grid } from "@material-ui/core";
import SocialLinkCard from "../Base/SocialLinkCard";
export default function SocialLinkBlock() {
  const handleUrl = (url: string) => {
    window.open(url);
  };
  return (
    <>
      <div className="c-socialLinkBlock-root">
        <div className="c-socialLinkBlock-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <SocialLinkCard
                kind="discord"
                onClick={() => handleUrl("https://discord.gg/JEPcm4YD")}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SocialLinkCard
                kind="twitter"
                onClick={() => handleUrl("https://twitter.com/zilionixx")}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SocialLinkCard
                kind="telegram"
                onClick={() => handleUrl("https://t.me/zilionixxcommunity")}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SocialLinkCard
                kind="facebook"
                onClick={() => handleUrl("https://www.facebook.com/Zilionixx")}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
