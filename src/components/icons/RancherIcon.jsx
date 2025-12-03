import RancherLogo from "../../assets/Rancher.svg";

export default function RancherIcon({ size = 48, className = "" }) {
  return (
    <img
      src={RancherLogo}
      alt="Rancher"
      width={size}
      height={size}
      className={className}
    />
  );
}