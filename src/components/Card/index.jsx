import {PropTypes} from "prop-types"


export const Card = ({data}) => {
    // codigo para que no salga el error '‘children’ is missing inprops validation'
    Card.propTypes = {
        data: PropTypes.node.isRequired,
    }     
    // console.log(data)

    if (data && data.title && data.price) {
    return (
        <div className="w-56 h-64 flex flex-col cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <figure className="shrink w-full h-48 relative rounded-t-lg">
                <button className="w-4 h-4 grid place-content-center absolute right-4 top-4 rounded-full p-4 shadow-inner bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white">
                    + {/* icono de mas de react icons */}
                </button>
                <img src={data.images[0]} alt={data.category.name} className="w-full h-full object-cover rounded-t-lg"/>
                <span className="absolute left-4 bottom-4 text-xs font-medium py-0.5 px-2 border-2 rounded-md bg-slate-200 shadow-inner">{data.category.name}</span>
            </figure>   
            <div className="p-1 flex items-start justify-between gap-1 shadow-inner">
                <span className="p-1 text-sm font-normal">{data.title}</span>
                <span className="p-1 text-lg font-semibold">${data.price}</span>
            </div>
        </div>
    )
    } else {
    return <div>Loading...</div>; // or handle the loading state in another way
    }    
}