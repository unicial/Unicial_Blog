import { useState } from "react";
import { Grid } from "@material-ui/core";
import LatestArticle from "../../LatestArticle/LatestArticle";
import ArticleCard from "../../ArticleCard/ArticleCard";
import CommonBtn from "../../Base/CommonBtn";
import { selectAllArticle } from "../../../store/AllArticles/selectors";

import { useAppSelector } from "../../../store/hooks";


export default function AllArticles() {

  const allArticle = useAppSelector(selectAllArticle);
  const [showMoreCount, setShowMoreCount] = useState(3);
  const handleLoadMore = () => {
    setShowMoreCount(showMoreCount + 3)
  }
  return (
    <>
      <div className="c-allArticlesRoot">
        <LatestArticle />
        <div className="c-allArticles-photoesContainer">
          <Grid container spacing={4}>
            {allArticle?.allArticle?.slice(0, showMoreCount)?.map((article) => (
              <Grid item xs={12} sm={6} md={4}>
                <ArticleCard
                  contentType={article.sys.contentType.sys.id}
                  title={article.fields.title}
                  slug={article.fields.slug}
                  date={article.fields.date}
                  coverImage={article.fields.coverImage.fields.file.url}
                />
              </Grid>
            ))}

          </Grid>
        </div>
        <div className="c-allArticles-loadMoreBtnRoot">
          <div className="c-allArticles-loadMoreBtnContainer">
            <CommonBtn letter="LOAD MORE"
              onClick={handleLoadMore}
            >
              <i className="far fa-arrow-right c-base-rightArrow"></i>
            </CommonBtn>
          </div>
        </div>
      </div>
    </>
  );
}
