import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface Props {
    title?: string;
    desc?: string;
    noindexfollow?: boolean;
}

const Page = ({ title = "", desc = "", noindexfollow = false }: Props) => {
    const homeUrl = "http://localhost:3000/";

    const siteTitle = "defaultsiteTitle";
    let pageTitle = siteTitle;

    if (title) {
        pageTitle = `${title}｜${pageTitle}`;
    }

    return (
        <Helmet>
            <meta charSet="UTF-8" />
            <link rel="canonical" href={homeUrl} />
            <title>{pageTitle}</title>
            <meta name="description" content={desc} />
            <meta name="format-detection" content="telephone=no" />
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="/touch.png" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={desc} />
            <meta
                property="og:url"
                content={`${window.location.origin}${useLocation().pathname}`}
            />
            <meta property="og:locale" content="ja_JP" />
            <meta property="og:image" content={`${homeUrl}img/ogp.png`} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteTitle} />
            {noindexfollow ? (
                <meta name="robots" content="noindex,nofollow" />
            ) : null}
        </Helmet>
    );
};

export default Page;
