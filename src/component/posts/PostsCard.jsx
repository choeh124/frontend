import React from "react"
import "./PostsCard.css"

export default function PostsCard({children}){
    return(
        <div className="PostsCard">
            {children}
        </div>
    )
}