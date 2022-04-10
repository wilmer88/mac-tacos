
const NombreSelect = () => {
 
    return (
        <label className="label">
        Nombre Para La Orden
        <div className="is-mobile">
          <input
       
           // onChange={handleChangeI}
            aria-label="iput for order name"
            className="input is-normal is-rounded"
            type="nombre"
            id="orden-name"
            name="nombreDeOrden"
            placeholder="Gonzalo"
            // value={orden.nombreDeOrden}
          />
        </div>
      </label>
     
    );
  
}

export default NombreSelect;

