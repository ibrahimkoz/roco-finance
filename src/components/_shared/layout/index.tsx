import React from "react";
import Header from "components/_shared/layout/header";
import Footer from "components/_shared/layout/footer";


const Layout: React.FunctionComponent = ({children}) => {
    return(
         <>
            <Header />
             <main>
                 {children}
             </main>
             <Footer />
         </>
    )
}


export default Layout;