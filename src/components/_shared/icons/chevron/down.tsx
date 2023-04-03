import React from "react";


const ChevronDown: React.FunctionComponent = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.634 7.463" className="w-[13px] h-[13px] text-red ml-2">
            <defs>
                <linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#f858a2" />
                    <stop offset="1" stopColor="#fe585c" />
                </linearGradient>
            </defs>
            <g transform="translate(0 -100.698)">
                <g transform="translate(0 100.698)">
                    <path
                        d="M12.432,101.322l-.414-.417a.693.693,0,0,0-.978,0L6.32,105.626,1.594,100.9a.693.693,0,0,0-.977,0l-.414.414a.692.692,0,0,0,0,.977l5.627,5.648a.706.706,0,0,0,.49.222h0a.706.706,0,0,0,.489-.222l5.622-5.632a.7.7,0,0,0,.2-.494A.691.691,0,0,0,12.432,101.322Z"
                        transform="translate(0 -100.698)" fill="currentColor"></path>
                </g>
            </g>
        </svg>

    )
}
export default ChevronDown;