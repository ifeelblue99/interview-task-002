import "./details.css"
import React, { useState } from 'react'

import { I_InnerBar, I_InnerBarLinks } from "../sidebar/SideBar"
import { RouteContext } from "../../App"
import { useContext } from "react"

const Details: React.FC<I_InnerBar> = ({ name, id, icon, links }) => {
    const [showLinkHolder, setShowLinkHolder] = useState(true)
    const [selectedBtn, setSelectedBtn] = useState("")

    const { setRoute } = useContext(RouteContext)

    return (
        <div key={id} data-testid="details" className='custom-details'>
            <div style={links && showLinkHolder ? { backgroundColor: "var(--dark-red)" } : {}} onClick={() => setShowLinkHolder(prev => !prev)} id="details-toggle-menu">
                <img src={icon} alt="icon" />
                <span>{name}</span>
            </div>
            {links && <section style={showLinkHolder ? { display: "inline-block" } : { display: "none" }} className="details-link-holder">
                <div className="button-holder">
                    {links?.map((link: I_InnerBarLinks) => {
                        return <button onClick={() => {
                            setSelectedBtn(link.name)
                            setRoute && setRoute(link.route)
                        }} style={link.name === selectedBtn ? { color: "var(--dark-red)" } : {}}
                            key={link.name}
                            className="details-button">{link.name}
                        </button>
                    })}
                </div>
            </section>}
        </div >
    )
}

export default React.memo(Details, (prev, curr) => {
    return prev.id === curr.id
})