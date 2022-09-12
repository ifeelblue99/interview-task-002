import "./loadingAnim.css"
import React from 'react'

export enum LoadingAnimStyleType {
    FullScreen = "FS",
    Custom = "C",
}

export interface LoadingAnimInterface {
    message?: string,
    loaderStyle: LoadingAnimStyleType,
}

const LoadingAnim: React.FC<LoadingAnimInterface> = ({ message, loaderStyle }) => {

    return (

        <div data-testid="loader" className={"loading-anim " +
            (loaderStyle === "FS" ? " loading-anim-full-screen" : "loading-anim-custom")}>
            <div
                /* developed & designed by https://twitter.com/Amin_Bahmed */
                className="container animation-6">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
                <div className="shape shape4"></div>
            </div>
            {message && <span className="loading-anim-msg"><strong>{message}</strong></span>}
        </div>
    )
}

export default LoadingAnim