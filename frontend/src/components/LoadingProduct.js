import React from "react"
import ContentLoader from "react-content-loader"

const LoadingItem = (props) => (
    <ContentLoader
        speed={2}
        width={380}
        height={556}
        viewBox="0 0 380 556"
        backgroundColor="#c9c9c9"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="4" ry="4" width="380" height="556" />
    </ContentLoader>
);

export default LoadingItem
