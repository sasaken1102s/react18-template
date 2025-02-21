import React from "react";
import Layout from "../layout/Layout";

interface Props {
    children?: React.ReactNode;
}

const Home = ({ children }: Props) => {
    return (
        <Layout title="Top" desc="desc">
            <p>Home</p>
        </Layout>
    );
};

export default Home;
