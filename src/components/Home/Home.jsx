/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "./Home.css";
import Cart from "./Cart/Cart";



const Home = () => {
const [allactors, aseAllactors] = useState([]);
const [selectActor, setSelectactors] = useState([]);
const [remaining, setRemaining] = useState(0);
const [totalCoust, setTotalCoust] = useState(0);
    useEffect(() => {
        fetch("./data.json")
        .then((res  => res.json()))
        .then((data) => aseAllactors(data))
    },[])

    // select button kaj
const handleSelectorActors = (actor)=> {
  const isExist = selectActor.find((item) => item.id === actor.id);
  let count = actor.salary;
  if (isExist) {
    return alert ('Selector actor ')
  }
else{
  selectActor.forEach((item) =>{
    count = count + item.salary;
  })
  // console.log(count);
  const totalRemaining = 20000 - count;
  if (count > 20000) {
    return alert ('mama taka ses tumi akhon gumao');
  }
 else{
  setTotalCoust(count);

  setRemaining(totalRemaining);
  setSelectactors([...selectActor, actor])
 }
}

}
    // console.log(allactors);

  return (
    <div className="container">
      <div className="home-containner">
        <div className="card-container ">
          {
            allactors.map((actor) =>(
<div key={actor.id} className="card">
          <div className="card-img">
            <img className="photo" src={actor.image} alt="" />
          </div>
          <h2>{actor.name}</h2>
          <p><small>{actor.role}</small></p>
              <div className="info">
                <p>{actor.salary} $</p>
                <p>writer</p>
              </div>
              <button onClick={()=> handleSelectorActors(actor)} className="select-btn">Select</button>
        </div>

            ))
          }
        </div>
        <div className="cart">
       <Cart selectActor={selectActor} remaining={remaining} totalCoust={totalCoust}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
