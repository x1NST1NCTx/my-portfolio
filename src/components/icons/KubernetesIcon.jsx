import KubernetesLogo from "../../assets/Kubernetes.svg";

export default function KubernetesIcon({ size = 48, className = "" }) {
  return (
    <img
      src={KubernetesLogo}
      alt="Kubernetes"
      width={size}
      height={size}
      className={className}
    />
  );
}