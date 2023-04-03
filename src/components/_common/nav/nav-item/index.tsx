import React, {useState} from "react";
import Link from "next/link";
import ChevronDown from "components/_shared/icons/chevron/down";

interface NavItemProps {
    text: string;
    to: string;
    children?: any;
}
const NavItem: React.FunctionComponent = ({text, to, children}: NavItemProps) => {

    /**TODO Naming tam olmadı gibi tekrar bakılacak**/
    const renderNavItem = () => {
        if(children){
            return (<li className="relative"><Link href={to} className="flex items-center" >
                <span>{text}</span>
                <ChevronDown />
            </Link>
                {children}
            </li>)
        }else{
            return (
                <li><Link href={to}>{text}</Link></li>
            )
        }
    }
    return(
        <>
            {renderNavItem()}
        </>
    )
}

export default NavItem;