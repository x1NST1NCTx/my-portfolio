import CommandLineLogo from "../../assets/CommandSolid.svg";

export default function CommandLineIcon({ size = 48, className = "" }) {
  return (
    <img
      src={CommandLineLogo}
      alt="Docker"
      width={size}
      height={size}
      className={className}
    />
  );
}