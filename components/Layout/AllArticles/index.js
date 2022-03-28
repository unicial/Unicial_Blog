import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import LatestArticle from "../../LatestArticle/LatestArticle";
import ArticleCard from "../../ArticleCard/ArticleCard";
import CommonBtn from "../../Base/CommonBtn";
import { selectAllArticle } from "../../../store/AllArticles/selectors";

import { useAppSelector } from "../../../store/hooks";
import { initCount, showmoreCount } from '../../../config/constant'

export default function AllArticles() {

  const allArticle = useAppSelector(selectAllArticle);
  const [showCount, setShowCount] = useState(0);
  const [ismoreOrless, setIsmoreOrless] = useState("more");
  const totalArticleCount = allArticle?.allArticle?.length;

  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (totalArticleCount <= initCount) {
      setShowCount(totalArticleCount);
      setShown(false);
    } else {
      setShown(true);
      if (ismoreOrless === "more") {
        setShowCount(initCount);
      } else {
        setShowCount(totalArticleCount)
      }
    }
  }, [totalArticleCount])
  const handleLoadMore = () => {
    if (showCount + showmoreCount >= totalArticleCount)
      setIsmoreOrless("less");
    setShowCount(showCount + showmoreCount);

  }
  const handleLoadLess = () => {
    setShowCount(initCount);
    setIsmoreOrless("more");
  }
  return (
    <>
      <div className="c-allArticlesRoot">
        <LatestArticle />
        <div className="c-allArticles-photoesContainer">
          <Grid container spacing={4}>
            {allArticle?.allArticle?.slice(0, showCount)?.map((article, key) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
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
          {shown && (
            ismoreOrless === "more" ? (
              <div className="c-allArticles-loadMoreBtnContainer">
                <CommonBtn letter="LOAD MORE"
                  onClick={handleLoadMore}
                >
                  <i className="far fa-arrow-right c-base-rightArrow"></i>
                </CommonBtn>
              </div>
            ) : (
              <div className="c-allArticles-loadMoreBtnContainer">
                <CommonBtn letter="LOAD LESS"
                  onClick={handleLoadLess}
                >
                  <i className="far fa-arrow-right c-base-rightArrow"></i>
                </CommonBtn>
              </div>
            )

          )}

        </div>
      </div>
    </>
  );
}
