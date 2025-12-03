import PodmanLogo from "../../assets/Podman.svg";

export default function PodmanIcon({ size = 48, className = "" }) {
  return (
    <img
      src={PodmanLogo}
      alt="Podman"
      width={size}
      height={size}
      className={className}
    />
  );
}