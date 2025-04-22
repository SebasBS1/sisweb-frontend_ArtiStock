import { Product } from "my-types";


export default function List ({products}:{products:Array<Product>}) {
  
  return (
    <>
      {products.map((producto, index) => (
        <div key={index} className="d-flex producto mx-4 mb-4 p-3 rounded">
          <img src={producto.image}
          alt={producto.title}
          className="img-fluid" width="500px" />
          <div className="flex-grow-1 d-flex flex-column justify-content-between ps-3">
            <h2 className="mt-3">{producto.title}</h2>
            <p>{producto.price} MXN</p>
            <p>{producto.description}</p>
            {producto.tags && producto.tags.length > 0 && (
              <ul className="tags list-unstyled d-flex flex-wrap gap-2">
                {producto.tags.map((tag, i) => (
                  <li key={i} className="text-white p-2 rounded">
                    {tag.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="d-flex flex-column align-items-center">
            <button
              className="btn mb-5 mt-5"
              onClick={() => (window.location.href = "#")}
            >
              Modificar
            </button>
            <button className="btn">Eliminar</button>
          </div>
        </div>
      ))}
    </>
  );
}
