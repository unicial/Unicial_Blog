import { Grid } from "@material-ui/core";
import ArticleCard from "../../ArticleCard/ArticleCard";
export default function BlogDetailFooter() {
  return (
    <>
      <div className="c-blogDetailFooter-root">
        <div className="c-blogDetailFooter-relatedArticleContainer">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <ArticleCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArticleCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArticleCard />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
