import "./topbar.scss"
import {Person,Mail} from '@material-ui/icons';


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">nur zeinab.</a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}> {/*expand menu*/}
                        <span className="Line1"></span>
                        <span className="Line2"></span>
                        <span className="Line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
