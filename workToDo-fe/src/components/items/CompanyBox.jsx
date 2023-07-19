import React from 'react'

function CompanyBox({company}) {
  return (
    <div className=' group relative bg-lightBlue p-4 rounded-lg bg-opacity-20'>
        <img className=' object-cover rounded-lg ' src={company.img} alt="" />
        <h3 className=' text-xl pt-4 pb-1 text-darkBlue font-semibold'>{company.name}</h3>
        <p className=' w-[70%] text-sm text-midBlue  pb-1  font-light'>{company.slogan}</p>
        <div className=' absolute py-2 px-3 top-6 left-6 rounded-lg bg-success text-emerald-700'>{company.sector}</div>
        <button className='px-4 py-3 hover:scale-110 group-hover:opacity-100 group-hover:bottom-5 transition-all opacity-0 absolute right-4 bottom-0 rounded-lg bg-success text-emerald-700'>See More</button>
    </div>
  )
}

export default CompanyBox