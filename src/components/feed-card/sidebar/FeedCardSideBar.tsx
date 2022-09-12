import React from "react"
import "./feedcardsidebar.css"

export interface I_FeedCardSideBar {
    color: string
}

const FeedCardSideBar: React.FC<I_FeedCardSideBar> = ({ color }) => {
    return <div style={{
        backgroundColor: `var(--dark-${color})`
    }} className="feed-card-side-bar">
        <img className="feed-card-side-bar-info" src="src/assets/icons/info-w.png" alt="info" />
        <div className="feed-card-side-bar-tools">
            <img src="src/assets/icons/gear-w.png" alt="info" />
            <img src="src/assets/icons/copy-w.png" alt="info" />
            <img src="src/assets/icons/edit-w.png" alt="info" />
            <img src="src/assets/icons/delete-w.png" alt="info" />
            <img src="src/assets/icons/send-w.png" alt="info" />
        </div>
    </div>
}

export default React.memo(FeedCardSideBar, (prev, curr) => {
    return prev.color === curr.color
})