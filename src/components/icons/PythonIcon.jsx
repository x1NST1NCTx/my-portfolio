import PythonLogo from "../../assets/Prometheusio.svg";

export default function PythonIcon({ size = 48, className = "" }) {
  return (
    <img
      src={PythonLogo}
      alt="Python"
      width={size}
      height={size}
      className={className}
    />
  );
}