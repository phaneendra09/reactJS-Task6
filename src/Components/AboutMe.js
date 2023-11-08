import React from "react";

const AboutMe = () => {
    return (
        <div style={{ height: "100vh", alignItems: "center" }} id="aboutMe">
        <div className="about" style={{ paddingTop: "40vh" }}>
            <div className="hvr-float" style={{ width: "40%" }}>
            <h1>About me</h1>
            <p style={{ fontSize: "x-large", marginTop: "10px" }}>
            As a computer science undergraduate student aiming for a decent internship or job. I am motivated to apply and further
            develop my technical skills, contribute to a dynamic team, and drive innovation to make a meaningful impact and
            organized, dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take
            on added responsibilities to meet team goals.
            </p>
            </div>
            <div>
            <img
                src="https://vesperllama.github.io/portfolio-website/resources/code.jpg"
                alt="code"
                height={"250px"}
            />
            </div>
        </div>
        <div
            style={{
            marginTop: "10%",
            width: "95%",
            textAlign: "end",
            }}
        >
            <button
            onClick={(e) => {
                window.location.href = "#nv";
            }}
            style={{
                width: "40px",
                height: "40px",
                color: "black",
                fontSize: "large",
            }}
            >
            &uarr;
            </button>
        </div>
        </div>
    );
};

export default AboutMe;