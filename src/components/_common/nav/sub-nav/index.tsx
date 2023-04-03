

const SubNav: React.FunctionComponent = ({children}) => {
    return(
        <>
            <ul className="dropdown">
                {children}
            </ul>
        </>
    )
}

export default SubNav;