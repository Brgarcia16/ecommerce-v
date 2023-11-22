export const ItemsCounter = ({cantidad, setCantidad}) => {
  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const decrementarCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
  return (
      <div>
        <button onClick={incrementarCantidad} id='incrementadorButtons'>+</button>
        <span >{cantidad}</span>
        <button onClick={decrementarCantidad} id='incrementadorButtons'>-</button>        
      </div>
  );
};