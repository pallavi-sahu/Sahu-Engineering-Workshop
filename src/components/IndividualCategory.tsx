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
]
const IndividualCategory = () => {
  return (
    <div>
      <div className='flex flex-row gap-10 p-4'>
      <div>Category 1</div>
      <div>Category 2</div>
      <div>Category 3</div>
      </div>

      <div className='bg-red w-full border-1 p-4 flex justify-center items-center'>Category</div>
      {
        products.map((product) => {
          return (
            <div>
              <div>
                <p>{product.heading}</p>
                <p>{product.description}</p>
              </div>
              <div>
                <img src={product.img} alt={product.heading}/>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default IndividualCategory
