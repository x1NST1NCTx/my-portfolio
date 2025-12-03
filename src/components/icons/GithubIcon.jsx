import GithubLogo from "../../assets/icons8-github.svg";

export default function GithubIcon({ size = 48, className = "" }) {
  return (
    <img
      src={GithubLogo}
      alt="Github"
      width={size}
      height={size}
      className={className}
    />
  );
}