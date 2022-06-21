import Link from "next/link";
import Script from "next/script";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import avatar from "../temp/avatar.jpg";
import { BsPerson } from "react-icons/bs";
import { useContext } from "react";
import { UberContext } from "../context/uberContext";

const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `hidden md:block text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `hidden md:block mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
};

const Navbar = () => {
  const { currentAccount, connectWallet, currentUser } =
    useContext(UberContext);

  return (
    <nav className="flex flex-row justify-between md:justify-around items-center bg-black text-white h-16 fixed z-50 w-full">
      <section className="text-lg md:text-3xl cursor-pointer font-bold p-5">
        <Link href={"/"}>Uber3.0</Link>
      </section>
      <section
        className="bg-black hidden md:flex md:items-center absolute right-0 top-16 md:static w-1/2 md:w-fit"
        id="collapseLink"
      >
        <ul className="flex flex-col md:flex-row md:justify-end text-left md:text-center text-gray-50 space-x-6">
          <Link href={"#"}>
            <li className="ml-6 hover:text-white hover:scale-125 cursor-pointer transition ease-in-out delay-150">
              Drive
            </li>
          </Link>

          <Link href={"#"}>
            <li className=" hover:text-white hover:scale-125 cursor-pointer transition ease-in-out delay-150">
              Ride
            </li>
          </Link>

          <Link href={"#"}>
            <li className=" hover:text-white hover:scale-125 cursor-pointer transition ease-in-out delay-150">
              More
            </li>
          </Link>

          <Link href={"#"}>
            <li className=" hover:text-white hover:scale-125 cursor-pointer transition ease-in-out delay-150">
              Help
            </li>
          </Link>
        </ul>
      </section>
      <section className="md:flex flex-col md:flex-row md:justify-end text-left items-center md:text-center p-5">
        <div className={style.menuItem}>{currentUser.name?.split(" ")[0]}</div>
        <div className={style.userImageContainer}>
          <Image
            className={style.userImage}
            src={avatar}
            width={40}
            height={40}
          />
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton} onClick={() => connectWallet()}>
            <BsPerson />
            <span className={style.loginText}>Log in</span>
          </div>
        )}
      </section>
      <section className="md:hidden flex flex-col justify-end p-5 cursor-pointer">
        <AiOutlineMenu id="menuIcon" />
      </section>
      <Script src="navOps.js" strategy="lazyOnload" />
    </nav>
  );
};

export default Navbar;
