import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { useEffect, useState } from "react"
import { webPortfolio, mobilePortfolio, designPortfolio } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "web",
            title: "Web",
        },
        


    ];

    useEffect(() => {

        switch (selected) {
            case "web":
                setData(webPortfolio);
                break;
            
            default:
                setData(webPortfolio);

        }

    }, [selected])

    return (
        <div className='portfolio' id="portfolio">
            <h1>My recent works.</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <a href={d.link} target="_blank">
                        <img src={d.img} alt="" /></a>
                        <h3>{d.title}</h3>
                    </div>

                ))}


            </div>
        </div>
    )
}
