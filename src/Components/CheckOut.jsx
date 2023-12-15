import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import moment from "moment";

import { CartContext } from "../contexts/CartContext";


const clearBuyer = {name: "", phone: "", email: ""};

const fechaYHora = moment();
const fechaCompra = fechaYHora.format("DD-MM-YYYY");
const horaCompra = fechaYHora.format("HH:mm:ss");

const date = { fecha: fechaCompra, hora: horaCompra };

export const CheckOut = () => {
  const [buyer, setbuyer] = useState(clearBuyer);
  const { items, clear } = useContext(CartContext);

  const total = items.reduce((acumulado, actual) => {
    return acumulado + actual.price * actual.quantity
  }, 0);

  const handleSendOrder = () => {
    const order = { buyer, items, date, total };

    const db = getFirestore();

    const orderCollection = collection(db, "order");

    addDoc(orderCollection, order).then((id) => {
      if (id) {
        alert(`Su orden: ${id} ha sido completada!`);
      }
    }).finally(() => {setbuyer(clearBuyer), clear()});

  };
  
  const handleChange = (ev) => {
    const {name, value} = ev.target;

    setbuyer(prev => {
      return{...prev, [name]: value};
    });

  }

  return (
    <div className="form-container">
      <h2 className="subtitle">Datos Comprador</h2>
      <form className="form" onSubmit={handleSendOrder}>
        
        <div className="input-container">
          <label className="field-name">Nombre</label>
          
          <input name="name" className="input" 
          type="text" value={buyer.name} 
          onChange={handleChange} required />

        </div>

        <div className="input-container">
          <label className="field-name">Teléfono</label>
          
          <input name="phone" className="input" 
          type="text" value={buyer.phone} 
          onChange={handleChange} required />

        </div>

        <div className="input-container">
          <label className="field-name">Email</label>
          
          <input name="email" className="input input-email" 
          type="email" value={buyer.email} 
          onChange={handleChange} required />

        </div>

        <div className="button-container">
          <Button type="submit" className="submit" variant="dark" >Enviar</Button>
        </div>
      </form>
    </div>
  )
}