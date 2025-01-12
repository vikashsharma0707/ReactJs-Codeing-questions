import { useState } from "react";
import "./CSS/style.css";
import g1 from "./Images/g1.jpeg";
import g2 from "./Images/g2.jpeg";
import g3 from "./Images/g3.jpeg";
import g4 from "./Images/g4.jpeg";

const Greeting = () => {
  const [status, setStatus] = useState("");

  // Update time every second
  setInterval(() => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    setStatus(currentTime);
  }, 1000);

  const date = new Date();
//   let hour = 10;
  let hour = date.getHours();
  let msg;
  let image;

  // Determine greeting message and image based on the time of day
  if (hour >= 5 && hour <= 12) {
    msg = "GOOD MORNING";
    image = g1;
  } else if (hour >= 12 && hour <= 18) {
    msg = "GOOD AFTERNOON";
    image = g2;
  } else if (hour >= 18 && hour <= 22) {
    msg = "GOOD EVENING";
    image = g3;
  } else {
    msg = "GOOD NIGHT";
    image = g4;
  }

  return (
    <>
    <h1>This is Greeting page</h1>
      <div className="hello">
        <div className="time">{status}</div> {/* Styled time */}
        <div className="message">{msg}</div> {/* Styled message */}
        <img src={image} alt="Greeting" /> {/* Greeting image */}
      </div>
    </>
  );
};

export default Greeting;
