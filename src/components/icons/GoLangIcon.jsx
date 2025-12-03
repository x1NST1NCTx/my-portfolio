import GoLangLogo from "../../assets/Golang.svg";

export default function GoLangIcon({ size = 48, className = "" }) {
  return (
    <img
      src={GoLangLogo}
      alt="Git"
      width={size}
      height={size}
      className={className}
    />
  );
}