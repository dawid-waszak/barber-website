import React from 'react'
import Title from './Title'
import ShopItem from './ShopItem'

const Pricing = () => {
  return (
    <div id="shop" className='min-h-screen flex flex-col py-28 bg-stone-700 px-4'>
        <Title name="Shop"/>
        <div className='m-auto flex flex-wrap justify-center mt-24 gap-6'>
          <ShopItem 
            im="./src/assets/BarberSet.png" 
            name="Hydrating Skincare Kit for Men" 
            desc="Achieve smooth and hydrated skin with this kit containing a deep hydration face wash, anti-fatigue moisturizer, and a soothing face mask."
            price="$44.99"
            />
          <ShopItem 
            im="./src/assets/Shampoo.png" 
            name="Premium Beard Shampoo" 
            desc="Specially formulated to cleanse and nourish your beard, this shampoo removes dirt and excess oil while keeping your beard soft, hydrated, and itch-free."
            price="$20.99"
            />
          <ShopItem 
            im="./src/assets/Cosmetics.png" 
            name="Styling Pomade" 
            desc="Get a sleek, polished look with our water-based styling pomade, offering medium hold and a natural shine without greasiness."
            price="$14.99"
            />
        </div>
    </div>
  )
}

export default Pricing