import "./topbar.css"
import { useNavigate } from "react-router-dom";

function Topbar() {
    let navigate = useNavigate();
    function goHome(){
        navigate("/")
    }
    function goDesign(){
        navigate("/design");
    }
    function goRequirements(){
        navigate("/requirements");
    }
    function goFaq(){
        navigate("/faq");
    }
    function removeHidden(event:any){
        const dot = event.currentTarget.querySelector(".dot");
        dot?.classList.remove("hidden");
    }
    function addHidden(event:any){
        const dot = event.currentTarget.querySelector(".dot");
        dot?.classList.add("hidden");
    }
    return(
        <div className="topbar">
            <div className="topbarElement" onMouseEnter={removeHidden} onMouseLeave={addHidden}>
                <p className="pointer" onClick={goHome}>home</p>
                <span className="dot hidden"></span>
            </div>
            <div className="topbarElement" onMouseEnter={removeHidden} onMouseLeave={addHidden}>
                <p className="pointer" onClick={goDesign}>design your case</p>
                <span className="dot hidden"></span>
            </div>
            <div className="topbarElement" onMouseEnter={removeHidden} onMouseLeave={addHidden}>
                <p className="pointer" onClick={goRequirements}>requirements</p>
                <span className="dot hidden"></span>
            </div>
            <div className="topbarElement" onMouseEnter={removeHidden} onMouseLeave={addHidden}>
                <p className="pointer" onClick={goFaq}>faq</p>
                <span className="dot hidden"></span>
            </div>
            <div className="topbarElement" onMouseEnter={removeHidden} onMouseLeave={addHidden}>
                <p className="pointer">submit</p>
                <span className="dot hidden"></span>
            </div>
        </div>
    )
}

export default Topbar;