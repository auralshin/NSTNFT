/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"

function cards(props) {

    return (
        <div>
            <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg" >
  <img className="h-72 w-96" src={props.url} alt="Sunset in the mountains"></img>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.desc}</div>
    <p className="text-gray-700 text-base">
      {props.painter}
    </p>
    <Link href="/NstMint">
        <a>See NFTs</a>
    </Link>
  </div>

</div>
        </div>
    )
}

export default cards
