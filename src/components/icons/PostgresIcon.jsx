import PostgresLogo from "../../assets/PostgresqlFill.svg";

export default function PostgresIcon({ size = 48, className = "" }) {
  return (
    <img
      src={PostgresLogo}
      alt="PostgreSQL"
      width={size}
      height={size}
      className={className}
    />
  );
}