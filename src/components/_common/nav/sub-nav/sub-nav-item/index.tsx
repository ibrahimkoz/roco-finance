import React from "react";
import Link from "next/link";

interface SubNavItemProps {
    text: string;
    to: string;
    extraCssClass?: string;

}

const SubNavItem: React.FunctionComponent = ({text, to, extraCssClass} :SubNavItemProps ) => {

    return(
        <>
            <li><Link href={to} className={extraCssClass}>{text}</Link></li>

        </>
    )
}

export default SubNavItem;