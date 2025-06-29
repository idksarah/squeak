import "./topbar.css"

function Yapathon({topShit, bottomBitch}: {topShit: string, bottomBitch: string}) {
    return(
        <div className="yapathon">
            <p className="h2">{topShit}</p>
            <p>{bottomBitch}</p>
        </div>
    )
}

export default Yapathon;