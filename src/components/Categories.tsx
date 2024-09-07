import React from 'react'
import steel from '../assets/images/steel.jpeg';
import iron from '../assets/images/welding.jpg';
import tractor from '../assets/images/tractor-trolley-1.jpg';
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
    return (
        <div className=''>
            <div>
                {
                    categories.map((cat) => {
                        return (
                            <div className='border-primary-orange rounded-md'>
                                <p>Category {cat.id}</p>
                                <div className='rounded-md'>
                                    <img src={cat.image} alt={`catogory ${cat.id}`}/>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categories
