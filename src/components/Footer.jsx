import Link from "next/link";

const Footer = () => {
  return (
    <p className="text-center">
      All rights reserved by{" "}
      <Link href={"/"}>
        <span className="text-pretty font-bold text-blue-800">SHAHADHA</span>{" "}
      </Link>
      &copy; 2024
    </p>
  );
};

export default Footer;
