import React from "react";
import Link from "next/link";
import {Poppins} from "next/font/google";
import Image from "next/image";

const poppins = Poppins({weight: ['100', '200', '300', '400', '500', '600'], subsets: ['latin-ext']})


const Footer: React.FunctionComponent = (props: any) => {

    return (
        <div className={poppins.className + " footer-container relative"}>
            <div className="footer-top-shape"></div>
            <div className="footer">
                <div className="container mx-auto flex flex-row pt-6">
                    <div className="footer-company-info">
                        <Image
                            src="/logo.svg"
                            alt="Roco Finance Logo"
                            width={229}
                            height={57}
                            priority
                        />
                        <p className="text-white mt-6">Roco is a crypto asset developed on AVAX network to use Roco Finance’s own game ecosystem and partner games. The main purpose of Roco is to provide services to game developers, content creators and player communities through the blockchain network.</p>
                    </div>
                    <div className="footer-menu menu1-container ml-6">
                        <ul>
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">Igos</Link></li>
                            <li><Link href="#">Exchanges</Link></li>
                            <li><Link href="#">Overview</Link></li>
                            <li><Link href="#">Road Map</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-menu menu2-container ml-6">
                        <ul>
                            <li><Link href="#">Stake</Link></li>
                            <li><Link href="#">Kyc</Link></li>
                            <li><Link href="#">Audit</Link></li>
                            <li><Link href="#">Token Economics</Link></li>
                            <li><Link href="#">Technical Documents</Link></li>
                            <li><Link href="#">Airdrop</Link></li>
                        </ul>
                    </div>
                    <div className="footer-menu menu3-container ml-6">
                        <ul>
                            <li><Link href="#">Marketplace</Link></li>
                            <li><Link href="#">Games</Link></li>
                            <li><Link href="#">News</Link></li>
                            <li><Link href="#">Burnt Information</Link></li>
                            <li><Link href="#">Team</Link></li>
                            <li><Link href="#">Apply IGO</Link></li>
                        </ul>
                    </div>
                    <div className="subscribe-newsletter-container flex flex-col ml-6">
                        <h4 className="text-white mt-3">Join Newsletter</h4>
                        <div>
                            <input type="text" className="join-newsletter-input" placeholder="Email Address"/>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="btn btn-red">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;