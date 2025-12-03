import CPlusPlusLogo from "../../assets/Cplusplus.svg";

export default function CPlusPlusIcon({ size = 48, className = "" }) {
  return (
    <img
      src={CPlusPlusLogo}
      alt="C++"
      width={size}
      height={size}
      className={className}
    />
  );
}