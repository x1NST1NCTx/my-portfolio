import SpringBootLogo from "../../assets/Springboot.svg";

export default function SpringBootIcon({ size = 48, className = "" }) {
  return (
    <img
      src={SpringBootLogo}
      alt="Spring Boot"
      width={size}
      height={size}
      className={className}
    />
  );
}