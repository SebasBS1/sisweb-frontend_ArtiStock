type Props = {
    rating: number;
    setRating: (rating: string) => void;
    filter: string;
    setFilter: (filter: string) => void;
}

export default function Filter(props: Props){
    return(
        <>
            <div className="px-4 py-3 border-b-slate-400 border-b-2">
                <h3 className="text-md font-medium mb-2 text-gray-600">Filter</h3>
                <div className="flex space-x-4">
                    <div className="w-full ">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
                        <input type="text" className="border rounded-md px-3 py-2 w-full"
                               placeholder="Text input"
                               value={props.filter}
                               onChange={(e) => props.setFilter(e.target.value)}/>
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                        <input type="text" className="border rounded-md px-3 py-2 w-full" placeholder="Text input" />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
                        <div className="relative">
                            <select className="border rounded-md px-3 py-2 w-full"
                                    value={props.rating}
                                    onChange={(e) => props.setRating(e.target.value)}>
                                <option value="" disabled>Select an option</option>
                                <option key={1} value={1}>1</option>
                                <option key={2} value={2}>2</option>
                                <option key={3} value={3}>3</option>
                                <option key={4} value={4}>4</option>
                                <option key={3} value={5}>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-end mb-3">
                        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-md">
                            Filtrar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}