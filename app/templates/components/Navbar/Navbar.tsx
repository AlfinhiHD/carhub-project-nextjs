import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../../elements/Button/Button";

const Navbar = () => {
  return (
    <header className="w-full px-20 py-5 z-10">
      <nav className="flex justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Car Hub Logo"
            width={120}
            height={15}
            className=""
          />
        </Link>

        <CustomButton
          buttonType="secondary"
          buttonText="Sign In"
        />
      </nav>
    </header>
  );
};

export default Navbar;
