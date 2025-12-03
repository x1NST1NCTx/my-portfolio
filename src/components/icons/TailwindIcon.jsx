import TailwindLogo from "../../assets/TailwindCss.svg";

export default function TailwindIcon({ size = 48, className = "" }) {
  return (
    <img
      src={TailwindLogo}
      alt="Tailwind"
      width={size}
      height={size}
      className={className}
    />
  );
}