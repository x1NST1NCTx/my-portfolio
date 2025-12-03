import GrafanaLogo from "../../assets/Grafana.svg";

export default function GrafanaIcon({ size = 48, className = "" }) {
  return (
    <img
      src={GrafanaLogo}
      alt="Grafana"
      width={size}
      height={size}
      className={className}
    />
  );
}