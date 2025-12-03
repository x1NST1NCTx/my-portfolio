import TsLogo from "../../assets/TypescriptFill.svg";

export default function TsIcon({ size = 48, className = "" }) {
  return (
    <img
      src={TsLogo}
      alt="TypeScript"
      width={size}
      height={size}
      className={className}
    />
  );
}