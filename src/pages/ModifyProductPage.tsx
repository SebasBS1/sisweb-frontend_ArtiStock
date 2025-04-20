import { useParams } from "react-router-dom"
import { Product, Tag } from "my-types";
import { useState, useEffect } from "react";
import { getProductById } from "../api/ProductAPI";
import "../style_ap.css"

interface Props {}

const ModifyProductPage = (_props: Props) => {
    const {id} = useParams();
    const productID = id!.toString();

    // Estado del componente.
    const [product, setProduct] = useState<Product>();

    // Eventos del componente
    useEffect(() => {
        getProductById(productID).then((data:any) => setProduct(data));
    }, [product]);

    return (
        <div className="container pt-2 pb-3 mt-5">
            <h1 className="text-center pt-5 mt-5 mb-3 title">Modificar Producto</h1>
            
            <form id="formProducto">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Nombre del Producto</label>
                            <input type="text" name="nombre"
                            defaultValue={product?.title || ""} 
                            className="form-control" placeholder="Nombre"/>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input type="number" name="precio" step={0.01}
                            defaultValue={product?.price || ""}
                            className="form-control" placeholder="$ 0.00" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Cantidad de Artículos en Stock</label>
                            <input type="number" name="stock"
                            defaultValue={product?.stock || ""}
                            className="form-control" placeholder="0" />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label ">Agregar Etiquetas</label>
                            <input type="text" name="tag" 
                            defaultValue={(product?.tags && (product?.tags.length > 0))? (product?.tags.map((i) => {return i.name}).join(" ")) : ""}
                            className="form-control" placeholder="Separar con ', ' en caso de ingresar más de una." />
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <label className="form-label">Insertar Imagen</label>
                        <input type="file" name="imgSRC" className="form-control mb-3" />

                        <div>
                            <label className="form-label">Descripción</label>
                            <textarea name="desc" defaultValue={product?.description || ""}
                            className="form-control" rows={3} placeholder="Detalles del producto"></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="row-auto d-flex justify-content-center gap-3 mt-4 mb-1">
                    {/* reset es para que no envie los datos, sino que regrese a los valores iniciales */}
                    <button className="btn btn-secondary" type="reset">Cancelar</button>
                    <button type="submit" className="b_custom">Actualizar Producto</button>
                </div>
            </form>
        </div>
    )
}

export default ModifyProductPage