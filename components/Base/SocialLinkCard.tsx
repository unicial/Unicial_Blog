interface Props {
  onClick?: () => void;
  kind: string;
}

export default function SocialLinkCard({ kind, onClick }: Props) {
  return (
    <>
      <div className="c-socialLinkCard-root">
        <div className="c-socialLinkCard-iconContainer">
          {kind === "discord" ? (
            <i className="fab fa-discord c-socialLinkCard-bigsocialIcon"></i>
          ) : kind === "twitter" ? (
            <i className="fab fa-twitter c-socialLinkCard-bigsocialIcon"></i>
          ) : kind === "telegram" ? (
            <i className="fab fa-telegram-plane c-socialLinkCard-bigsocialIcon"></i>
          ) : (
            <i className="fas fa-archive c-socialLinkCard-bigsocialIcon"></i>
          )}
        </div>
        <div className="c-socialLinkCard-letterContainer">
          {kind === "discord"
            ? "Join us on "
            : kind === "twitter"
            ? "Follow us on "
            : kind === "telegram"
            ? "Join us on "
            : "Get started with our "}
          &nbsp;
          <span className="c-socialLinkCard-boldLetter">
            {kind === "discord"
              ? "Discord "
              : kind === "twitter"
              ? "Twitter"
              : kind === "telegram"
              ? "Telegram "
              : "SDK "}
          </span>
        </div>
      </div>
    </>
  );
}
