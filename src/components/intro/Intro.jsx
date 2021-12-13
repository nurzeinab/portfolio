import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay:1500,
            strings: ['fullstack developer', 'Designer', "Content Creator"],
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="img/avatar_zuzu.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Zeinab</h1>
                    <h3>An aspiring <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="img/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
