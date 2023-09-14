/* eslint-disable react/prop-types */

import './Cart.css'
const Cart = ({selectActor, remaining, totalCoust}) => {
    // console.log(selectActor);
    return (
        <div>
              <h2>total actors: {selectActor.length}</h2>
              <h5>remaining: {remaining}</h5>
              <h5>totalCoust: {totalCoust}</h5>
              {selectActor.map((acto) => (
                    <li key={acto.id}>{acto.name}</li>
                
                ))}
        </div>
        
    );
};
export default Cart;