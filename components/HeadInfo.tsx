import React from "react";

import Head from "next/head";

const HeadInfo = ({title, keyword, description}) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="keywords" content={keyword}></meta>
			<meta name="description" content={description}></meta>
		</Head>
	)
}

HeadInfo.defaultProps={
	title: "my blog",
	keyword: "blog powered by next js",
	contents: "practice next js"
}

export default HeadInfo;

