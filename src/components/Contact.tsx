import React from 'react'

const services = [
    {
        id: 1,
        stats: "100 +",
        text: "Customers",
        color: ""
    },
    {
        id: 2,
        stats: "1 Lakh +",
        text: "Orders",
        color: ""
    },
    {
        id: 3,
        stats: "20 +",
        text: "Services",
        color: ""
    }
]
const Contact = () => {
    return (
        <div>
            <div className='grid grid-cols-auto xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center p-10'>
                {
                    services.map((service) => {
                        return (
                            <div className='flex flex-col border-2 p-15'>
                                <p>{service.stats}</p>
                                <p>{service.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Contact
