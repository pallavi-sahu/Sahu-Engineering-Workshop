import React from 'react'
import steel from '../assets/images/steel.jpeg';
import iron from '../assets/images/welding.jpg';
import tractor from '../assets/images/tractor-trolley-1.jpg';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
type category = {
    id: number,
    image: string,
    category:string
}
const categories: category[] = [
    {
        id: 1,
        image: iron,
        category:"Welding"

    },
    {
        id: 2,
        image: steel,
        category:"Steel"

    },
    {
        id: 3,
        image: tractor,
        category:"Tractor Trolly"

    }
]
const Categories = () => {
    // const navigate = useNavigate()
    return (
        <div className='flex flex-col gap-10 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 xl:space-x-10 border-b-2 border-bgrey p-10'>
            {
                categories.map((cat) => {
                    return (
                        <div className='border border-border-orange rounded-md p-4 flex flex-col gap-5 items-center justify-between'>
                            <p className='text-center md:text-left text-xl font-bold text-primary-blue'>{cat.category}</p>
                            <div className='rounded-md flex justify-center items-center '>
                                <img src={cat.image} alt={`catogory ${cat.id}`} className="h-32 w-64 object-cover rounded-md"/>
                            </div>
                            <button
                                className="mt-4 md:mt-0 py-2 px-4 text-primary-blue"
                                onClick={() => console.log("clicked")}
                                 >
                                    View More ...
                                </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Categories
