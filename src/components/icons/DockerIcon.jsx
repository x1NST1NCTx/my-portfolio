import DockerLogo from "../../assets/DockerOutlined.svg";

export default function DockerIcon({ size = 48, className = "" }) {
  return (
    <img
      src={DockerLogo}
      alt="Docker"
      width={size}
      height={size}
      className={className}
    />
  );
}