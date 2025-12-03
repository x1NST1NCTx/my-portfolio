import GitLogo from "../../assets/Git-Icon-White.svg";

export default function GitIcon({ size = 48, className = "" }) {
  return (
    <img
      src={GitLogo}
      alt="Git"
      width={size}
      height={size}
      className={className}
    />
  );
}