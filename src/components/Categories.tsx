import React from 'react'
import steel from '../assets/images/steel.jpeg';
import iron from '../assets/images/welding.jpg';
import tractor from '../assets/images/tractor-trolley-1.jpg';
// import { useNavigate } from 'react-router-dom';
type category = {
    id: number,
    image: string
}
const categories: category[] = [
    {
        id: 1,
        image: iron
    },
    {
        id: 2,
        image: steel
    },
    {
        id: 3,
        image: tractor
    }
]
const Categories = () => {
    // const navigate = useNavigate()
    return (
        <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 border-b-2 border-bgrey p-10'>
            {
                categories.map((cat) => {
                    return (
                        <div className='border-2 border-primary-orange rounded-md p-4 flex flex-col gap-5 items-center justify-between'>
                            <p className='text-center md:text-left'>Category {cat.id}</p>
                            <div className='rounded-md flex justify-center items-center '>
                                <img src={cat.image} alt={`catogory ${cat.id}`} className="h-32 w-64 object-cover"/>
                            </div>
                            <button
                                className="mt-4 md:mt-0 bg-primary-orange text-white py-2 px-4 rounded-md"
                                // onClick={() => navigate(`/category/${cat.id}`)}
                                 >
                                    View more
                                </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Categories
