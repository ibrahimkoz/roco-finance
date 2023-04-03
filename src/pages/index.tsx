import React from "react";
import Image from "next/image";
import homeImage from 'assets/home-image.png';
import {Poppins} from "next/font/google";

const poppins = Poppins({weight: ['100', '200', '300', '400', '500', '600'], subsets: ['latin-ext']})
import cardImage1 from 'assets/card-image-1.png'
import cardImage2 from 'assets/card-img-2.png'
import cardImage3 from 'assets/card-img-3.png'
import ourStake from 'assets/our-stake.png'
import riseOnlineWorldCover from 'assets/riseonlineworld_video_2.jpg';
import metaHoundCover from 'assets/metahound_video.jpg';
import goodBoodyCover from 'assets/goodyboody_video.jpg';
import pokerCover from 'assets/poker_video.jpg';
import gamesRise from 'assets/riseonlineworld.png';
import gamesMeta from 'assets/metahound.png';
import gamesGoodBoody from 'assets/goodybody.png';
import gamesPoker from 'assets/poker.png';
import gamesTerrapy from 'assets/terrapy.png';
import gamesPitmanMining from 'assets/pitman.png';


import Link from "next/link";

console.log(cardImage1)


class IndexPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return <>
            <div className={poppins.className + " container mx-auto hero-container flex flex-row py-[120px]"}>
                <div className="text-section">
                    <h3 className="text-gray ">NFT Market Place</h3>
                    <h1 className="text-black">Welcome to <span className="text-red">ROCO</span> GameFi Planet</h1>
                    <p>Discover, find and sell extraordinary monster NFTs</p>
                    <button className="btn btn-black px-6 text-lg mt-2">Explore Now</button>
                </div>
                <div className="image-section">
                    <Image
                        src={homeImage}
                        alt="Roco Finance Home Image"
                    />
                </div>
            </div>

            <div className={poppins.className + " container mx-auto products-container flex flex-row"}>
                <div className="text-container text-[18px] pr-4">
                    <h2>Our Products</h2>
                    <p>Next Gen NFTs are not only for holders, they are also for the players who want to have unique
                        assets in the game. You can stake your Roco tokens to earn even more Roco tokens. We have also
                        launchpad for developers to let them kick start their Gamefi projects. Roco is a universe where
                        you can find tons of features.</p>
                </div>
                <div className="figure-container middle-block">
                    <Link href="#" style={{backgroundImage: "url(" + cardImage1.src + ")"}}>
                        <div className="mb-6 ml-6 mr-6">
                            <h3 className="text-white">NFT Market</h3>
                            <p className="text-white mt-2">Next-Gen NFTS for all game players and developers.</p>
                        </div>
                    </Link>
                </div>
                <div className="figures-container end-block">
                    <div className="figure-container mt-1 ml-4">
                        <Link href="#" style={{backgroundImage: "url(" + cardImage3.src + ")"}}>
                            <div className="mb-5 ml-6 mr-6">
                                <h3 className="text-white">POOLS</h3>
                                <p className="text-white mt-2">Stake your ROCO tokens and earn rewards.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="figure-container mt-1 ml-4">
                        <Link href="#" style={{backgroundImage: "url(" + cardImage2.src + ")"}}>
                            <div className="mb-5 ml-6 mr-6">
                                <h3 className="text-white">LAUNCHPAD</h3>
                                <p className="text-white mt-2">Kick start your GAMEFI project NOW!.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={poppins.className + " container mx-auto our-stakes-container flex flex-col"}>
                <h2>Our Stakes</h2>
                <p className="text-[20px]">Stake your Roco tokens to earn even more tokens.</p>
                <div className="stakes-container h-[395px] flex justify-end mt-6"
                     style={{backgroundImage: "url(" + ourStake.src + ")"}}>
                    <div className="roco-stakes bg-white">
                        <h4>TOTAL ROCO STAKED</h4>
                        <h2 className="text-red">3687352.1494</h2>
                        <div className="no-stakers-container flex justify-between mt-6">
                            <div className="flex flex-col">
                                <span className="text-[22px]">NUMBER OF STAKERS</span>
                                <span className="text-[60px] font-bold">1063</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[22px]">Apr</span>
                                <span className="text-[60px] font-bold">%13</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={poppins.className + " container mx-auto trailers-container flex flex-row mt-[160px]"}>
                <div className="games-big flex-grow">
                    <div className="rise-online-cover">
                        <Link href="#" style={{backgroundImage: "url(" + riseOnlineWorldCover.src + ")"}}>
                            <div className="flex justify-end">
                                <p className="text-white text-[20px] mt-6 mr-5">Rise Online World - Official Trailer</p>
                            </div>
                            <div className="big-play-button"></div>
                        </Link>
                    </div>
                </div>
                <div className="games-small w-[304px]">
                    <div className="game-item">
                        <Link className="flex justify-end flex-col relative" href="#" style={{backgroundImage: "url(" + metaHoundCover.src + ")"}}>
                            <div className="small-play-button"></div>
                            <span className="text-white mb-3 ml-5">Meta Hound - Official Trailer</span>
                        </Link>
                    </div>
                    <div className="game-item mt-4">
                        <Link className="flex justify-end flex-col" href="#" style={{backgroundImage: "url(" + goodBoodyCover.src + ")"}}>
                            <span className="text-white mb-3 ml-5">Good Boody</span>
                        </Link>
                    </div>
                    <div className="game-item mt-4">
                        <Link className="flex justify-end flex-col" href="#" style={{backgroundImage: "url(" + pokerCover.src + ")"}}>
                            <span className="text-white mb-3 ml-5">Poker</span>

                        </Link>
                    </div>
                </div>
            </div>
            <div className={poppins.className + " container mx-auto roco-games-container flex flex-col mt-[160px]"}>
                <div className="container-title flex flex-row justify-between items-center">
                    <div>
                        <h3>Development by ROCO</h3>
                        <p className="text-[20px]">We Are Empowering Blockchain Projects</p>
                    </div>
                    <Link className="btn btn-black" href="#">All Games</Link>
                </div>
                <div className="row flex flex-row mt-6">
                    <div className="games-card card-inline h-[480px] flex">
                        <div className="card-left-block flex flex-col items-start pl-4 py-3">
                            <h3>Rise Online World</h3>
                            <p>A thrilling adventure, an MMORPG that you will love and have fun, combination of oldschool and modern MMORPG, a magical world where you fight for your kingdom and become a legend!</p>
                            <Link href="#" className="btn btn-red block mt-3">Visit</Link>
                        </div>
                        <div className="card-right-block games-item">
                            <Link href="#" className="w-[380px] flex" style={{backgroundImage: "url(" + gamesRise.src + ")"}}>
                            </Link>
                        </div>
                    </div>
                    <div className="games-card card-block flex ml-4">
                        <div className="games-item">
                            <Link href="#" className="w-[312px] flex flex-col justify-end">
                                <div className="img-bg w-full h-full" style={{backgroundImage: "url(" + gamesMeta.src + ")"}}>

                                </div>
                                <div className="bg-white card-meta p-2">
                                    <h4 className="text-[20px]">Metahound</h4>
                                    <p className="pb-4">Meta Hound is a utopian racing game. Meta Hounds are the evolution of real world hounds...</p>

                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="games-card card-block flex ml-4">
                        <div className="games-item">
                            <Link href="#" className="w-[312px] flex flex-col justify-end">
                                <div className="img-bg w-full h-full" style={{backgroundImage: "url(" + gamesGoodBoody.src + ")"}}>

                                </div>
                                <div className="bg-white card-meta p-2">
                                    <h4 className="text-[20px]">Good Boody</h4>
                                    <p className="pb-4">Another great game by Rokogame Studios like Metahound. It's about an eternal conflict between...</p>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row flex flex-row mt-6 h-[480px]">
                    <div className="games-card card-block flex ml-4">
                        <div className="games-item">
                            <Link href="#" className="w-[312px] flex flex-col justify-end">
                                <div className="img-bg w-full h-full" style={{backgroundImage: "url(" + gamesPoker.src + ")"}}>

                                </div>
                                <div className="bg-white card-meta p-2">
                                    <h4 className="text-[20px]">Poker</h4>
                                    <p className="pb-4">Poker breathes new life into card gaming. With its unique mechanics and dynamics, luck is...</p>

                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="games-card card-block flex ml-4">
                        <div className="games-item">
                            <Link href="#" className=" flex flex-col justify-end">
                                <div className="img-bg w-full h-full" style={{backgroundImage: "url(" + gamesTerrapy.src + ")"}}>

                                </div>
                                <div className="bg-white card-meta p-2">
                                    <h4 className="text-[20px]">Terrapy</h4>
                                    <p className="pb-4">Terrapy makes the good unique by transforming it into NFT. Thus, it aims to give a breath of fresh goodness to those who are waiting for help in the depths of despair. It will be with you soon.</p>

                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="games-card card-block flex ml-4">
                        <div className="games-item">
                            <Link href="#" className="w-[312px] flex flex-col justify-end">
                                <div className="img-bg w-full h-full" style={{backgroundImage: "url(" + gamesGoodBoody.src + ")"}}>

                                </div>
                                <div className="bg-white card-meta p-2">
                                    <h4 className="text-[20px]">Pitman Mining</h4>
                                    <p className="pb-4">Pitman Mining is a blockchain game where you can earn tokens by digging in NFT lands. In Pitman...</p>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    }
}

export default IndexPage;