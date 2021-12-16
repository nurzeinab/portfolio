import "./contact.scss"


export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="top">
                <h1>Contact.</h1>
            </div>
            <div className="content">
                <h2>Feel free to <span>connect</span> with me</h2>
                <ul>
                    <li>
                        <img onClick={()=> window.open("https://www.linkedin.com/in/zeinab-nur-32bb1a155/", "_blank")} src="img/linkedin-3-16.png" alt="" />
                    </li>
                    <li>
                        <img onClick={()=> window.open("https://github.com/nurzeinab", "_blank")} src="img/github-8-64.png" alt="" />
                    </li>
                    <li>
                        <img onClick={()=> window.open("https://www.instagram.com/_znuuur/?hl=de", "_blank")} src="img/instagram-4-64.png" alt="" />
                    </li>
                </ul>
            </div>
            <footer className="footer--pin">Made with ❤️ by Zeinab Nur
            </footer>   
        </div>
    )
}
