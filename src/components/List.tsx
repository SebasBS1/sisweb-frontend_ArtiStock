import { Product } from "my-types";
import { PencilIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/16/solid";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function List({ products }:{products: Array<Product>}) {
    return (
        <>
            <div className="px-4 py-3">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">
                                <abbr title="Discount Percentage">Disc.%</abbr>
                            </th>
                            <th className="px-4 py-2">Rating</th>
                            <th className="px-4 py-2">Stock</th>
                            <th className="px-4 py-2">Modify</th>
                            <th className="px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            console.log(product);
                            return(
                            <tr className="bg-slate-700 border-b-2" key={product.id}>
                                <th>{product.id}</th>
                                <td>
                                    <FontAwesomeIcon icon={faImage} />
                                </td>
                                <td>
                                    <a className="button text-white">{product.title}</a>
                                </td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.discountPercentage}</td>
                                <td>{product.rating}</td>
                                <td>{product.stock}</td>
                                <td className="px-4 py-2">
                                    <button type="button" onClick={() => confirm("Save the changes?")}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                </td>
                                <td>
                                    <button
                                    type="button"
                                    onClick={() => confirm("Delete the product?")}>
                                        <FontAwesomeIcon icon={faTrash}/>
                                        </button>
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr className="bg-gray-800">
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">
                                <abbr title="Discount Percentage">Disc.%</abbr>
                            </th>
                            <th className="px-4 py-2">Rating</th>
                            <th className="px-4 py-2">Stock</th>
                            <th className="px-4 py-2">Modify</th>
                            <th className="px-4 py-2">Delete</th>
                        </tr>
                    </tfoot>
                </table>
                <div className="flex align-items-center mt-4">
                    <AreaChart width={500} height={350} data={products}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUV" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="10%" stopColor="#3d86fc" stopOpacity={0.9}/>
                                <stop offset="90%" stopColor="#3d86fc" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPV" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="10%" stopColor="#fc3d3d" stopOpacity={0.9}/>
                                <stop offset="90%" stopColor="#fc3d3d" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="5 5"/>
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#3d86fc" fillOpacity={1} fill="url(#colorUV)" />
                        <Area type="monotone" dataKey="pv" stroke="#fc3d3d" fillOpacity={1} fill="url(#colorUV)" />
                    </AreaChart>
                </div>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-950 uppercase bg-gray-50 dark:bg-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stocked
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className="bg-gray-200 border-b border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {product.category}
                                </th>
                                <td className="px-6 py-4 text-gray-900"> {product.price}</td>
                                <td className="px-6 py-4 text-gray-900">{product.stocked ? "Yes" : "No"}</td>
                                <td className="px-6 py-4 text-gray-900">{product.name}</td>
                                <td className="flex gap-2 items-center pt-4.5 text-gray-900">
                                    <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                                        <PencilIcon className="h-5 w-5" />Edit
                                    </button>
                                    <button className="flex items-center gap-2 text-red-500 hover:text-red-800">
                                        <TrashIcon className="h-5 w-5" />Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}