import React from 'react'



const products = [
  {
    id: 1,
    heading: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img:""
  },
  {
    id: 2,
    heading: "Product 2",
    img:"",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    heading: "Product 3",
    img:"",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
]
const IndividualCategory = () => {
  return (
    <div className='md:pl-8 md:pr-8'>
      <div className='flex flex-row gap-5 md: gap:10 border-b-2 p-4'>
      <div className='border-b-4 border-black '>Category 1</div>
      <div>Category 2</div>
      <div>Category 3</div>
      </div>

      <div className='m-4 border-2 text-center p-2 bg-grey font-bold text-xl text-primary-blue rounded-md'>Category - 1</div>
      {
        products.map((product) => {
          return (
            <div className='p-6 flex flex-col md:flex-row gap-4 border-2 m-4 rounded-md'>
              <div className='flex flex-col'>
                <p className='text-xl font-bold'>{product.heading}</p>
                <p>{product.description}</p>
              </div>
              <div className='w-full md:w-[33vw] rounded-md'>
                <img src={product.img} alt={product.heading} className='rounded-md'/>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default IndividualCategory
