import Html5Logo from "../../assets/icons8-html-5.svg";

export default function Html5Icon({ size = 48, className = "" }) {
  return (
    <img
      src={Html5Logo}
      alt="HTML 5"
      width={size}
      height={size}
      className={className}
    />
  );
}