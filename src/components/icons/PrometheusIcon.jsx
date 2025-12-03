import PrometheusLogo from "../../assets/Prometheusio.svg";

export default function PrometheusIcon({ size = 48, className = "" }) {
  return (
    <img
      src={PrometheusLogo}
      alt="Prometheus"
      width={size}
      height={size}
      className={className}
    />
  );
}