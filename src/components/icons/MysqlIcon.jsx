import MysqlLogo from "../../assets/Mysql.svg";

export default function MysqlIcon({ size = 48, className = "" }) {
  return (
    <img
      src={MysqlLogo}
      alt="MySQL"
      width={size}
      height={size}
      className={className}
    />
  );
}