import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Product } from "my-types";
import { useState, useEffect } from "react";
import { getAllProducts } from "../api/ProductAPI";
import { ProductAreaChart, ProductPieChart } from "../components/Charts";
import "../style_ap.css";

interface Props {}

const ProductPage = (_props: Props) => {
    // Estado del componente.
    const [products, setProducts] = useState<Product[]>([]);

    // Eventos del componente
    useEffect(() => {
        getAllProducts().then((data:any) => setProducts(data));
    }, [products]);

    return (
        <div className="pt-5">
            <nav className="pt-5 mt-5">
                <div className="px-4 py-3 border-b-slate-400 border-b-2">
                    <h2 className="text-lg text-gray-600 font-medium">All Products</h2>
                </div>
                <div className="px-4 py-3 border-b-slate-400 border-b-2">
                    <h3 className="text-md font-medium mb-2 text-gray-600">Filter</h3>
                    <div className="flex space-x-4">
                        <div className="w-full ">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
                            <input type="text" className="border rounded-md px-3 py-2 w-full" placeholder="Text input" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                            <input type="text" className="border rounded-md px-3 py-2 w-full" placeholder="Text input" />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
                            <div className="relative">
                                <select className="border rounded-md px-3 py-2 w-full">
                                    <option>Category 1</option>
                                    <option>Category 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-end mb-3">
                            <button className="text-white px-4 py-2">
                                Filtrar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 border-b-slate-400 border-b-2">
                    <h3 className="text-md font-medium text-gray-600">Results</h3>
                </div>
                <div className="px-4 py-3">
                    <table className="table w-full table-auto">
                        <thead className="text-center">
                            <tr className="bg-">
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">User ID</th>
                                <th className="px-4 py-2">Stock</th>
                                <th className="px-4 py-2">Modify</th>
                                <th className="px-4 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {products.map((product) => {
                                console.log(product);
                                return(
                                <tr className="bg-slate-700 border-b-2" key={product.id}>
                                    <th>{product.id}</th>
                                    <td>
                                        <FontAwesomeIcon icon={faImage} />
                                    </td>
                                    <td>
                                        <a className="">{product.title}</a>
                                    </td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.userId}</td>
                                    <td>{product.stock}</td>
                                    <td className="px-4 py-2">
                                        <button type="button" onClick={() => window.location.href = `/modify-product/${product.id}`}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                        type="button" onClick={() => confirm("Delete the product?")}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </button>
                                    </td>
                                </tr>
                                );
                            })}
                        </tbody>
                        <tfoot className="text-center">
                            <tr className="bg-gray-800">
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">User ID</th>
                                <th className="px-4 py-2">Stock</th>
                                <th className="px-4 py-2">Modify</th>
                                <th className="px-4 py-2">Delete</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <ProductAreaChart key1="price" key2="id" />
                <ProductPieChart _key="stock" />
            </nav>
        </div>
    )
}

export default ProductPage