import JavaLogo from "../../assets/JavaOutlined.svg";

export default function JavaIcon({ size = 48, className = "" }) {
  return (
    <img
      src={JavaLogo}
      alt="Java"
      width={size}
      height={size}
      className={className}
    />
  );
}