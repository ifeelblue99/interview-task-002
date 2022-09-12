import "./feedcard.css"
import React from 'react'
import FeedCardSideBar from "./sidebar/FeedCardSideBar"
import handleImageLoadError from "../../utils/handleImageLoadError"
import detectLinksInText from "../../utils/detectLinksInText"

export enum E_PostStatus {
    NeedApproval = "orange",
    Scheduled = "green",
    Publishing = "gray",
    Published = "blue",
    Error = "red"
}
export enum E_PostChannel {
    TikTok = "tiktok",
    Twitter = "twitter",
    Facebook = "facebook",
    Instagram = "instagram",
    InstagramBusiness = "instagrambusiness"
}
export interface I_PostEntry {
    type: string,
    message: string,
    image: string[],
    video?: null
}
export interface I_PostAccount {
    name: string,
    username: string,
    image: string,
    link?: string,
    channel: E_PostChannel
}

export interface I_FeedCard {
    postId: string,
    published_at: string,
    is_published: boolean,
    status: number,
    entry: I_PostEntry,
    updated_at: string,
    created_at: string,
    link: string,
    account: I_PostAccount
}

const FeedCard: React.FC<I_FeedCard> = ({ published_at, account, status, entry }) => {
    return (
        <div className="feed-card">
            <FeedCardSideBar color={convertStatusInTOString(status)} />
            <div className="feed-card-main">
                <div style={{ color: "white", backgroundColor: `var(--soft-${convertStatusInTOString(status)})` }} className="feed-card-header">

                    <img onError={handleImageLoadError} src={getPostChannelIcon(account.channel)} alt="icn" />
                    <span>
                        Type:<strong>{entry.type}</strong>
                    </span>
                </div>
                <div className="feed-card-body">
                    <div className="account-info">
                        <img
                            data-testid="profile-img"
                            onError={handleImageLoadError}
                            src={account.image} alt="prf"
                        />
                        <div className="account-name">
                            <span><a target="_blank" href={account.link}>{account.name}</a></span>
                            <span>@{account.username}</span>
                            <span>{published_at}</span>
                        </div>
                    </div>
                    <div className="account-entry">
                        <span>{detectLinksInText(entry.message)}</span>
                        {entry.image[0] && <img onError={handleImageLoadError} alt="eim" src={entry.image[0]} />}
                    </div>
                    <div className="account-statistics">
                        <span>
                            <img src="src/assets/icons/like-gr.png" alt="like" />
                            <span>{Math.round(Math.random() * 10 + 5)}</span>
                        </span>
                        <span>
                            <img src="src/assets/icons/share-gr.png" alt="like" />
                            <span>{Math.round(Math.random() * 10 + 5)}</span>
                        </span>
                        <span>
                            <img src="src/assets/icons/comment-gr.png" alt="like" />
                            <span>{Math.round(Math.random() * 10 + 5)}</span>
                        </span>
                        <span>
                            <img src="src/assets/icons/eye-gr.png" alt="like" />
                            <span>{Math.round(Math.random() * 10 + 5)}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function convertStatusInTOString(status: number): E_PostStatus {
    switch (status) {
        case 0:
            return E_PostStatus.NeedApproval;
        case 1:
            return E_PostStatus.Scheduled;
        case 2:
            return E_PostStatus.Publishing;
        case 3:
            return E_PostStatus.Published;
        default:
            return E_PostStatus.Error;
    }
}
export function getPostChannelIcon(channel: E_PostChannel): string {
    switch (channel) {
        case E_PostChannel.Facebook:
            return "src/assets/channels/facebook.png"
        case E_PostChannel.Instagram:
            return "src/assets/channels/instagram.png"
        case E_PostChannel.Twitter:
            return "src/assets/channels/twitter.png"
        case E_PostChannel.InstagramBusiness:
            return "src/assets/channels/instagram.png"
        default:
            return "src/task-assets/no-post-image.png";
    }
}

export default React.memo(FeedCard, (prev, curr) => {
    return prev.postId === curr.postId
})