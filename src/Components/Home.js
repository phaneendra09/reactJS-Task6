import React from "react";
import me from "./Pictures/myPic.jpeg";

const Home = () => {
    return (
        <div id="home" className="my">
        <div>
            <p className="name">Hey! I am Venkata Phaneendra</p>
            <p
            className="name"
            style={{
                display: "inline-block",
                marginLeft: "50%",
            }}
            >
            Student
            </p>
        </div>
        <div>
            <img className="myPic" src={me} alt="my_Picture" height={400} />
        </div>
        </div>
    );
};

export default Home;