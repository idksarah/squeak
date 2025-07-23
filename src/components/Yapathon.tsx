import "./topbar.css"

function Yapathon({topShit, bottomBitch}: {topShit: string, bottomBitch: string}) {
    return(
        <div className="yapathon">
            <p className="h2" dangerouslySetInnerHTML={{ __html: topShit }} />
            <p dangerouslySetInnerHTML={{ __html: bottomBitch }} />
        </div>
    )
}

export default Yapathon;