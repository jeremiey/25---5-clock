import React from "react"

function SessionInterval(props) {
    
    return (
        <section className="interval-container">
            <button>Down</button>
            <p>{props.sessionInterval}</p>
            <button>Up</button>
        </section>
    )
}

export default SessionInterval
