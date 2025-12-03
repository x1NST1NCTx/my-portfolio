import Neo4jLogo from "../../assets/Neo4jWordmark.svg";

export default function Neo4jIcon({ size = 48, className = "" }) {
  return (
    <img
      src={Neo4jLogo}
      alt="Neo4j"
      width={size}
      height={size}
      className={className}
    />
  );
}