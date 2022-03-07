import { Grid } from "@material-ui/core";
import SocialLinkCard from "../Base/SocialLinkCard";
export default function SocialLinkBlock() {
  return (
    <>
      <div className="c-socialLinkBlock-root">
        <div className="c-socialLinkBlock-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <SocialLinkCard kind="discord" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SocialLinkCard kind="twitter" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SocialLinkCard kind="telegram" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <SocialLinkCard kind="sdk" />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
