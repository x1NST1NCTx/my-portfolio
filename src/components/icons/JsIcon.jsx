import JsLogoWhite from '../../assets/icons8-javascript.svg';

export default function JsIcon({ size = 48, className = "" }) {
  return (
    <img
      src={JsLogoWhite}
      alt="JavaScript"
      width={size}
      height={size}
      className={className}
    />
  );
}