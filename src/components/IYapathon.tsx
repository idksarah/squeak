import "./topbar.css"

function IYapathon({topShit, bottomBitch}: {topShit: string, bottomBitch: string}) {
    return(
        <div className="iyapathon">
            <p className="h2">{topShit}</p>
            <p>{bottomBitch}</p>
        </div>
    )
}

export default IYapathon;