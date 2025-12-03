import RestfulLogo from "../../assets/ApiFilled.svg";

export default function RestfulIcon({ size = 48, className = "" }) {
  return (
    <img
      src={RestfulLogo}
      alt="REST API"
      width={size}
      height={size}
      className={className}
    />
  );
}