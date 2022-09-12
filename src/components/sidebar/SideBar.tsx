import "./sidebar.css"
import React, { useEffect, useState } from 'react'
import barData from "../../config/SideBarData.json"
import objectToMap from "../../utils/objectToMap"
import Details from "../custom-details/Details"

export interface I_OuterBar {
    id: number,
    icon: string
}
export interface I_InnerBarLinks {
    name: string,
    route: string
}
export interface I_InnerBar {
    id: string,
    name: string,
    icon: string,
    links?: I_InnerBarLinks[]
}

const SideBar: React.FC = () => {

    const [outerLayoutElement, setOuterLayoutElement] = useState(2)
    let { outerBar, innerBar } = barData
    const { childrenID } = React.useMemo(() => outerBar[outerLayoutElement], [outerLayoutElement])
    const innerBarAsMap = React.useMemo(() => objectToMap(innerBar), [innerBar])

    return (
        <section className="side-bar">
            <h2>sociality<span>.io</span></h2>
            <div className="sections">
                <section className="outer-layer">
                    {outerBar.map(({ icon, id }: I_OuterBar) => {
                        return <button style={id === outerLayoutElement ? { opacity: "1", backgroundColor: "var(--mid-gray)" } : {}} onClick={() => setOuterLayoutElement(id)} key={id}>
                            <img alt="icon" src={icon} />
                        </button>
                    })}
                </section>
                <section className="inner-layer">
                    {childrenID.length > 0 && childrenID.map((childId) => {
                        const data = innerBarAsMap.get(childId)
                        return <Details key={childId} {...data} />
                    })}
                </section>
            </div>
        </section>
    )

}

export default SideBar