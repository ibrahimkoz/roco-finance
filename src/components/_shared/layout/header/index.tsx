import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Poppins} from "next/font/google";
import Nav from "components/_common/nav";

const poppins = Poppins({weight: ['100', '200', '300', '400', '500', '600'], subsets: ['latin-ext']})

const Header: React.FunctionComponent = (props: any) => {

    return (
        <>
            <div className="relative">
            <div className={poppins.className + " header-container bg-white border-b fixed"}>
                <div className="top-menu-container bg-black">
                    <ul className="flex text-sm p-2">
                        <li><a className="text-white" href="https://old.roco.finance">Old Website</a></li>
                        <li><Link className="text-white ml-4" href="#">Redeem Code</Link></li>
                        <li><a className="text-white ml-4"
                               href="https://play.google.com/store/apps/details?id=com.RocoSoft.RocoNftAr"
                               target="_blank">Roco NFT AR</a></li>
                    </ul>
                </div>
                <div className="container mx-auto flex justify-between items-center py-4 px-1">
                    <div className="logo"><Image
                        src="/logo.svg"
                        alt="Roco Finance Logo"
                        width={102}
                        height={24}
                        priority
                    /></div>
                    <Nav />
                </div>
            </div>
            </div>
        </>
    )
}

export default Header;