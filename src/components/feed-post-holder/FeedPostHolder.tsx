import "./feedpostholder.css"
import taskData from "../../task-assets/data.json"
import objectToMap from "../../utils/objectToMap";
import { I_FeedCard } from "../feed-card/FeedCard";
import FeedCard from "../feed-card/FeedCard";
import LoadingAnim, { LoadingAnimStyleType } from "../loading-animation/LoadingAnim";
import { useEffect, useState } from "react";

function FeedPostHolder() {

    /*For demonstration purpose*/
    const [isPageLoading, setIsPageLoading] = useState(true)

    const dataKeys = Object.keys(taskData.posts_by_date)

    useEffect(() => {
        /*For demonstration purpose*/
        const timer = setTimeout(() => setIsPageLoading(false), 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="feed-post-holder">
            {isPageLoading ? <LoadingAnim loaderStyle={LoadingAnimStyleType.Custom} message="Loading..." />
                :

                dataKeys.map(dataKey => {
                    return <section key={dataKey} className="feed-post">
                        <h3>{dataKey}</h3>
                        <div className="posts">
                            {objectToMap(taskData.posts_by_date).get(dataKey).map((post: I_FeedCard) => {
                                return <FeedCard key={post.postId} {...post} />
                            })}
                        </div>
                    </section>
                })

            }

        </div>
    )
}

export default FeedPostHolder