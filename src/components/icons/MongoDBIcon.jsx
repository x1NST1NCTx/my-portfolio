import MongoDBLogo from "../../assets/Mongodb.svg";

export default function MongoDBIcon({ size = 48, className = "" }) {
  return (
    <img
      src={MongoDBLogo}
      alt="MongoDB"
      width={size}
      height={size}
      className={className}
    />
  );
}