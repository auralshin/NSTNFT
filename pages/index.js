/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Cards from './cards'

export default function Home() {
  return (
    <div>
      <div className='flex justify-center font-bold text-center text-4xl'>
        Neural Style Transfer NFTs
      </div>
      <div className='flex flex-wrap p-2 gap-4 justify-center '>
        <Cards url="https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Great_Wave_off_Kanagawa.jpg" painter="Katsushika Hokusai"  desc="The Great Wave off Kanagawa"/>
        <Cards url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1024px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" painter="Van Gogh"  desc="The Starry Night"/>
        <Cards url="https://upload.wikimedia.org/wikipedia/commons/b/b4/Vassily_Kandinsky%2C_1913_-_Composition_7.jpg" painter="Wassily Kandinsky"  desc="Composition 7"/>
        <Cards url="https://upload.wikimedia.org/wikipedia/en/1/14/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg" painter="Pablo Picasso"  desc="The Weeping Woman"/>
              
      </div>
    </div>
  )
}
