import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  className?: any;
  onClick?: () => void;
  letter: string;
}

export default function CommonBtn({
  children,
  className,
  onClick,
  letter,
}: Props) {
  return (
    <>
      <div className={clsx("c-commonBtn-root", className)} onClick={onClick}>
        <span className="c-commonBtn-contentContainer">
          <span className="c-commonBtn-letter">{letter}</span>
          {children}
        </span>
      </div>
    </>
  );
}
