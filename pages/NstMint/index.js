/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Cards from '../cards'
function NstMint() {
    return (
        <div>
               <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg justify-center m-8" >
  <img className="h-72 w-96" src="https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Great_Wave_off_Kanagawa.jpg" alt="Sunset in the mountains"></img>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Great Wave off Kanagawa</div>
    <p className="text-gray-700 text-base">
    Katsushika Hokusai
    </p>
    
  </div>

</div>
<div className='flex flex-wrap gap-4 justify-center'>
        <Cards url="https://upload.wikimedia.org/wikipedia/commons/d/d7/Green_Sea_Turtle_grazing_seagrass.jpg" />
        <Cards url="Königssee-GettyImages-181139790.jpg" />
        <Cards url="dog.jpg"/>
       
</div>
<div className='flex flex-wrap gap-4 justify-center'>
        <Cards url="download.png"/>
        <Cards url="download (1).png"/>
        <Cards url="download (2).png"/>
       
</div>
        </div>
    )
}

export default NstMint
