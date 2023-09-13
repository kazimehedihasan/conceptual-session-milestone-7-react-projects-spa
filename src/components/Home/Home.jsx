import { useEffect } from "react";
import "./Home.css";
const Home = () => {

    useEffect(() => {
        fetch("./data.json")
        .then((res  => res.json()))
        .then((data) => console.log(data))
    },[])
  return (
    <div className="container">
      <div className="card-containner">
        <div className="card">
          <div className="card-img">
            <img className="photo" src="https://i.ibb.co/Rvc67Cr/ar.jpg" alt="" />
          </div>
          <h2>kazi mehedi</h2>
          <p><small>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit.
              Molestiae, doloremque.</small></p>
              <div className="info">
                <p>salary: 200</p>
                <p>writer</p>
              </div>
              <button className="select-btn">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
