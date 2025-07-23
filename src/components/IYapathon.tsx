import "./topbar.css";

function IYapathon({ topShit, bottomBitch }: { topShit: string, bottomBitch: string }) {
    return (
        <div className="iyapathon">
            <p className="h2" dangerouslySetInnerHTML={{ __html: topShit }} />
            <p dangerouslySetInnerHTML={{ __html: bottomBitch }} />
        </div>
    );
}

export default IYapathon;
