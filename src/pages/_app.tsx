import 'styles/globals.css'
import 'styles/styles.css'
import Layout from "components/_shared/layout";
import React from "react";


const RocoFinance: React.FunctionComponent = ({Component, pageProps}) => {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default RocoFinance;

