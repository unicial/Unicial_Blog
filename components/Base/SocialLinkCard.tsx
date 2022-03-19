interface Props {
  onClick?: () => void;
  kind: string;
}

export default function SocialLinkCard({ kind, onClick }: Props) {
  return (
    <>
      <div className="c-socialLinkCard-root" onClick={onClick}>
        <div className="c-socialLinkCard-iconContainer">
          {kind === "discord" ? (
            <i className="fab fa-discord c-socialLinkCard-bigsocialIcon"></i>
          ) : kind === "twitter" ? (
            <i className="fab fa-twitter c-socialLinkCard-bigsocialIcon"></i>
          ) : kind === "telegram" ? (
            <i className="fab fa-telegram-plane c-socialLinkCard-bigsocialIcon"></i>
          ) : (
            <i className="fab fa-facebook c-socialLinkCard-bigsocialIcon"></i>
          )}
        </div>
        <div className="c-socialLinkCard-letterContainer">
          {kind === "discord"
            ? "Join us on "
            : kind === "twitter"
            ? "Follow us on "
            : kind === "telegram"
            ? "Join us on "
            : "Join us on"}
          &nbsp;
          <span className="c-socialLinkCard-boldLetter">
            {kind === "discord"
              ? "Discord "
              : kind === "twitter"
              ? "Twitter"
              : kind === "telegram"
              ? "Telegram "
              : "facebook"}
          </span>
        </div>
      </div>
    </>
  );
}
