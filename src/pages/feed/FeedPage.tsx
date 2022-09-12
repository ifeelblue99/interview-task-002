import "./feedpage.css"
import React from 'react'
import ColoredDot from "../../components/ColoredDot"
import FeedPostHolder from "../../components/feed-post-holder/FeedPostHolder"

function FeedPage() {
    return (
        <main className="feed-page">
            <header>
                <div className="feed-page-colors">
                    <span><ColoredDot color="var(--dark-gray)" />Published</span>
                    <span><ColoredDot color="var(--dark-green)" />Scheduled</span>
                    <span><ColoredDot color="var(--dark-orange)" />Need Approval</span>
                    <span><ColoredDot color="var(--dark-red)" />Error</span>
                    <span><ColoredDot color="var(--dark-blue)" />Notes</span>
                </div>
            </header>
            <section>
                <FeedPostHolder />
            </section>
        </main>
    )
}

export default React.memo(FeedPage)