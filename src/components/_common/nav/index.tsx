import React, {useState} from "react";
import NavItem from "components/_common/nav/nav-item";
import SubNav from "components/_common/nav/sub-nav";
import SubNavItem from "components/_common/nav/sub-nav/sub-nav-item";
import Image from "next/image";

const Nav: React.FunctionComponent = () => {

    return(
        <>
            <div className="menu">
                <ul className="flex top-menu items-center">
                    <NavItem text="Home" to="/"></NavItem>
                    <NavItem text="Earn" to="#" >
                        <SubNav >
                            <SubNavItem text="Stake V2" to="#" extraCssClass="rounded-t-lg" />
                            <SubNavItem text="Stake V1" to="#" />
                            <SubNavItem text="Airdrop" to="#" extraCssClass="rounded-b-lg" />
                        </SubNav>
                    </NavItem>
                    <NavItem text="Marketplace" to="#"></NavItem>
                    <NavItem text="Roco Starter" to="#">
                        <SubNav >
                            <SubNavItem text="IGOs" to="#" extraCssClass="rounded-t-lg" />
                            <SubNavItem text="KYC" to="#" />
                            <SubNavItem text="Apply IGO" to="#" />
                            <SubNavItem text="Learn More" to="#" extraCssClass="rounded-b-lg" />
                        </SubNav>
                    </NavItem>
                    <NavItem text="Games" to="#"></NavItem>
                    <NavItem text="Learn More" to="#">
                        <SubNav >
                            <SubNavItem text="Exchanges" to="#" extraCssClass="rounded-t-lg" />
                            <SubNavItem text="Audit" to="#" />
                            <SubNavItem text="News" to="#" />
                            <SubNavItem text="Overview" to="#" />
                            <SubNavItem text="Token Economics" to="#" />
                            <SubNavItem text="Burn Information" to="#" />
                            <SubNavItem text="Road Map" to="#" />
                            <SubNavItem text="Technical Documents" to="#" />
                            <SubNavItem text="Team" to="#" />
                            <SubNavItem text="Contact" to="#" extraCssClass="rounded-b-lg" />
                        </SubNav>
                    </NavItem>
                    <NavItem text="Social" to="#" >
                        <SubNav>
                            <SubNavItem text="Telegram" to="https://t.me/rocofinance" extraCssClass="rounded-t-lg" />
                            <SubNavItem text="Twitter" to="https://twitter.com/rocofinance" />
                            <SubNavItem text="Medium" to="https://rocofinance.medium.com/" />
                            <SubNavItem text="Discord" to="https://discord.com/invite/Fxbf4PVtua" />
                            <SubNavItem text="Facebook" to="https://www.facebook.com/RocoFinance/" />
                            <SubNavItem text="Github" to="https://github.com/rocofinance" />
                            <SubNavItem text="LinkedIn" to="https://www.linkedin.com/company/rocofinance" />
                            <SubNavItem text="Instagram" to="https://www.instagram.com/rocofinance/" />
                            <SubNavItem text="Youtube" to="https://www.youtube.com/channel/UCVu9WvdsNvH1WlkDpOavetA" extraCssClass="rounded-b-lg" />
                        </SubNav>
                    </NavItem>
                    <li>
                        <button className="btn btn-light w-[140px]">
                            <Image
                                src="/avax.svg"
                                alt="Avalanche Mainnet"
                                width={20}
                                height={20}
                                priority
                            />
                            <span className="truncate ... ml-[3px]">Avalanche Mainnet</span>
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-red ml-1">
                            Connect Wallet
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav;