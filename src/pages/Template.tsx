import React from "react";
import Layout from "../layout/Layout";

interface Props {
    children?: React.ReactNode;
}

const Page = ({ children }: Props) => {
    return (
        <Layout>
            <p>Home</p>
        </Layout>
    );
};

export default Page;
