import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Details from "../components/custom-details/Details";
import FeedCard, { E_PostChannel, E_PostStatus } from "../components/feed-card/FeedCard";
import FeedPostHolder from "../components/feed-post-holder/FeedPostHolder";
import LoadingAnim, { LoadingAnimStyleType } from "../components/loading-animation/LoadingAnim";
import SideBar from "../components/sidebar/SideBar";

import sideBarData from "../config/SideBarData.json"

describe("<LoadingAnim />", () => {
    it("should render </> correctly", () => {
        render(< LoadingAnim message="Loading..." loaderStyle={LoadingAnimStyleType.FullScreen} />)

        const container = screen.getByTestId("loader")
        const loaderMsg = screen.getByText("Loading...")

        expect(loaderMsg).toBeTruthy()

        expect(container.className).toBe("loading-anim  loading-anim-full-screen")
    })
})
describe("<FeedPostHolder />", () => {
    it("should render </> correctly", () => {
        //TODO
    })
})
describe("<SideBar />", () => {
    it("should render </> correctly", () => {
        //TODO
    })
})
describe("<Details />", () => {
    it("should render component correctly", () => {
        render(<Details id="1" name="Test span" icon="src/assets/channels/instagram.png" />)

        const details = screen.getByTestId("details")
        const nameSpan = screen.getByText("Test span")

        expect(nameSpan).toBeTruthy()
        expect(details.className).toBe("custom-details")
    })
})
describe("<FeedCard />", () => {
    it("should render component correctly", () => {
        render(<FeedCard
            postId="postId2"
            published_at="2021-06-17 08:40:52"
            is_published={true}
            status={3}
            entry={
                {
                    type: "photo",
                    message: "Lorem ipsum dolor sit amet, consecteturat\r\n adipiscing elit, sed do eiusmod tempor \r\nincididunt? http://bit.ly/145HD7S ",
                    image: [
                        "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg"
                    ]
                }
            }
            updated_at="2021-06-17 08:41:15"
            created_at="2021-06-17 08:40:52"
            link="https://twitter.com/smorientation/status/1405445424404746242"
            account={
                {
                    name: "Social Orientation",
                    username: "smorientation",
                    image: "4b20564176a222d0ed94b60c51c69490.jpg",
                    link: "https://twitter.com/smorientation",
                    channel: E_PostChannel.Twitter
                }
            }
        />)
        const userName = screen.getByText("@smorientation")
        const profileImage = screen.getByTestId("profile-img")

        expect(userName).toBeTruthy()
        expect(profileImage.getAttribute("alt")).toBe("prf")

    })
})