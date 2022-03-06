import { useTranslation } from "react-i18next";

interface HeaderSignInBtnProps {
  onClick?: () => void;
}
const HeaderSignInBtn = ({ onClick }: HeaderSignInBtnProps) => {
  const { t } = useTranslation();
  return (
    <div className="c-header-signBtn">
      <div className="c-header-signBtnContent">
        <img src="/images/signin_user.svg" className="c-header-searchIcon" />
        <span className="c-header-signMiddle"></span>
        <img src="/images/signin_search.svg" alt="search" />
      </div>
    </div>
  );
};
export default HeaderSignInBtn;
