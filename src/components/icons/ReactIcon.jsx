import ReactLogo from "../../assets/icons8-react-native.svg";

export default function ReactIcon({ size = 48, className = "" }) {
  return (
    <img
      src={ReactLogo}
      alt="React"
      width={size}
      height={size}
      className={className}
    />
  );
}