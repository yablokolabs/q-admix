import Image from "next/image";

const Brand = ({ ...props }) => (
  <Image
    src="/q-admix-logo.svg"
    alt="Q-AdMix Logo"
    {...props}
    width={props.width || 180}
    height={props.height || 40}
    priority
  />
);
export default Brand;
