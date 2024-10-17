import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

interface Props {
    children?: React.ReactNode;
    title?: string;
    desc?: string;
    noindexfollow?: boolean;
}

const Layout = ({ children, title, desc, noindexfollow }: Props) => {
    return (
        <>
            <Seo title={title} desc={desc} noindexfollow={noindexfollow} />
            <div className="wrapper">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
