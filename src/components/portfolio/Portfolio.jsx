import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { init } from 'ityped'
import { useEffect, useState, useRef } from "react"
import { webPortfolio, mobilePortfolio } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            default:
                setData(webPortfolio);

        }

    }, [selected])

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay:1500,
            strings: ['More projects to come, stay tuned!',],
        });
    }, [])

    return (
        <div className="portfolio" id="portfolio">
          <h1>Portfolio.</h1>
          <ul>
            {list.map((item) => (
              <PortfolioList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
          <div className="container">
            {data.map((d) => (
              <div className="item">
                <img onClick={()=> window.open(d.link, "_blank")} src={d.img} alt="" />
                <h3>{d.title}</h3>
              </div>
            ))}
            
          </div>
          <div className="infoText"><span ref={textRef}></span></div>
        </div>
      );
}