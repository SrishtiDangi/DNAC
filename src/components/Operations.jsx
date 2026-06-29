import { useState, useEffect } from "react";
import Reveal from "./Reveal";

import {
    FaHeartbeat,
    FaChartLine,
    FaTools,
    FaShieldAlt,
    FaRobot
} from "react-icons/fa";


function Operations() {

    const [data, setData] = useState(null);
    const [selected, setSelected] = useState(null);


    useEffect(() => {

        fetch("http://localhost:5000/api/operations")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));

    }, []);


    if (!data)
        return <h2>Loading Operations...</h2>



    const icons = [
        <FaHeartbeat size={30} />,
        <FaChartLine size={30} />,
        <FaTools size={30} />,
        <FaShieldAlt size={30} />,
        <FaRobot size={30} />
    ];


    return (

        <section id="operations" style={{ padding: "70px 0" }}>


            <Reveal>

                <div style={{
                    textAlign: "center",
                    marginBottom: "45px"
                }}>


                    <h2 style={{
                        fontSize: "30px",
                        fontWeight: "900",
                        color: "#2C3E50"
                    }}>
                        {data.title}
                    </h2>


                    <p style={{ color: "#666" }}>
                        {data.subtitle}
                    </p>


                </div>

            </Reveal>



            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "25px",
                flexWrap: "wrap"
            }}>


                {
                    data.cards.map((card, index) => (


                        <div
                            key={index}
                            onClick={() => setSelected(card)}

                            style={{
                                width: "240px",
                                background: card.color,
                                padding: "25px",
                                borderRadius: "25px",
                                textAlign: "center",
                                cursor: "pointer",
                                boxShadow: "0 12px 30px rgba(0,0,0,.1)",
                                transition: "0.3s"
                            }}


                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-10px)";
                            }}


                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                            }}

                        >


                            {icons[index]}


                            <h3>
                                {card.title}
                            </h3>


                            <p>
                                {card.desc}
                            </p>


                        </div>


                    ))

                }

            </div>





            <h2 style={{
                textAlign: "center",
                margin: "60px 0 30px"
            }}>
                Operations Workflow
            </h2>




            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap"
            }}>


                {

                    data.flow.map((item, index) => (


                        <div
                            key={index}

                            style={{
                                background: "#f5f5ff",
                                padding: "20px",
                                borderRadius: "20px",
                                width: "200px",
                                textAlign: "center"
                            }}
                        >


                            <h3>
                                {item.name}
                            </h3>


                            <p>
                                {item.desc}
                            </p>


                        </div>


                    ))

                }


            </div>






            {
                selected &&

                <div

                    onClick={() => setSelected(null)}

                    style={{

                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999

                    }}

                >


                    <div

                        onClick={(e) => e.stopPropagation()}

                        style={{

                            background: "#fff",
                            width: "600px",
                            maxWidth: "90%",
                            padding: "35px",
                            borderRadius: "30px"

                        }}

                    >


                        <h2>
                            {selected.title}
                        </h2>


                        <p>
                            {selected.desc}
                        </p>


                        <ul>

                            {
                                selected.details.map((item, index) => (

                                    <li key={index}>
                                        {item}
                                    </li>

                                ))

                            }

                        </ul>


                        <button

                            onClick={() => setSelected(null)}

                            style={{
                                marginTop: "20px",
                                padding: "10px 25px",
                                border: "none",
                                borderRadius: "20px",
                                background: "#2C3E50",
                                color: "white",
                                fontSize: "15px",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "0.3s"
                            }}

                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                            }}

                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                            }}

                        >
                            Close
                        </button>


                    </div>


                </div>

            }


        </section>

    )

}


export default Operations;