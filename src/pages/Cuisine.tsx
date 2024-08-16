import React from 'react'
import ResourceItem, {IResourceInfo} from '../shared/ResourceItem'

const Cuisine = () => {
  return (
    <>
      <h2>Fine Dining</h2>
      {fineDining.map((resource, idx) =>
        <ResourceItem
          key={idx}
          title={resource.title}
          description={resource.description}
          imagePath={resource.imagePath}
          leftAlign={idx % 2 === 0}
        />
      )}

      <h2>Local Provisions</h2>
      {localProvisions.map((resource, idx) =>
        <ResourceItem
          key={idx}
          title={resource.title}
          description={resource.description}
          imagePath={resource.imagePath}
          leftAlign={idx % 2 === 1}
        />
      )}
    </>
  )
}

export default Cuisine;


const fineDining: IResourceInfo[] = [
  {
    title:"Local Favorites",
    description:"Local Favorites in Taniti offer a culinary experience that is deeply rooted in the island's traditions. These restaurants primarily serve dishes featuring fresh, locally caught fish and rice, staples of Taniti's cuisine. The menus reflect the island's rich fishing culture, with chefs using time-honored techniques to prepare the seafood. Dining at these establishments provides visitors with an authentic taste of Taniti, where the flavors of the ocean meet the simplicity of well-prepared rice, creating a memorable and satisfying meal.",
    imagePath:"https://www.tastingtable.com/img/gallery/the-best-seafood-restaurants-in-america/intro-1647440546.webp",
  },
  {
    title:"Taste of Home",
    description:"For those craving familiar comfort foods, the Taste of Home restaurants in Taniti specialize in American-style meals. These establishments offer a variety of classic dishes, from burgers and steaks to hearty breakfasts and traditional sides. The atmosphere is welcoming and reminiscent of a diner or casual eatery, making it a favorite spot for tourists and expats alike who are looking for a taste of home while enjoying the island's surroundings. Whether you're in the mood for a quick bite or a leisurely meal, these restaurants provide a comforting and satisfying option.",
    imagePath:"https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/American-Restaurants-in-Dubai-Cover-24-05-1170x508.jpg",
  },
  {
    title: "Pan-Asian Cuisine",
    description:"Taniti's Pan-Asian Cuisine restaurants bring a diverse range of Asian flavors to the island, offering dishes inspired by various culinary traditions from across Asia. These restaurants serve a mix of flavorful stir-fries, noodle dishes, sushi, and more, all prepared with fresh ingredients and authentic techniques. The menus are designed to cater to a variety of tastes, from the rich and savory to the light and refreshing. Dining at one of these establishments allows visitors to enjoy a fusion of cultures and flavors, making it a popular choice for those seeking a more adventurous dining experience.",
    imagePath:"https://tb-static.uber.com/prod/image-proc/processed_images/e26dbe0c7ddbc4fb41b5877598d0ba38/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
  },
]



const localProvisions: IResourceInfo[] = [
  {
    title:"Supermarkets",
    description:"The supermarkets in Taniti are the largest and most comprehensive places to shop for a wide variety of goods. These stores offer everything from fresh produce and seafood to household essentials and specialty items. Stocked with both local products and imported goods, the supermarkets cater to both residents and tourists looking to purchase a range of items in one convenient location. With ample space and a broad selection, they are the go-to destinations for those who want to do their shopping all in one trip.",
    imagePath:"https://cdn.vox-cdn.com/thumbor/uxEjCY-m_e7IWRy0uBGT0f-GTwE=/0x0:1024x576/1220x813/filters:focal(431x207:593x369):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72594824/IP_Union_City.0.jpeg",
  },
  {
    title:"Grocery stores",
    description:"Taniti's smaller grocery stores provide a more intimate shopping experience, focusing on a curated selection of essentials and locally sourced products. These stores are perfect for quick trips or for those who prefer a more personal shopping environment. Despite their size, they offer a good variety of fresh produce, dairy, and pantry staples, making them a convenient option for everyday shopping needs. The friendly atmosphere and attentive service often make these stores a favorite among locals.",
    imagePath:"https://www.guidetosanjuans.com/wp-content/uploads/2016/02/villagemarket.jpg",
  },
  {
    title:"Convenience store",
    description:"The 24-hour convenience store in Taniti is a lifesaver for anyone needing to pick up essentials at any hour of the day or night. Whether you're grabbing a late-night snack, restocking on travel necessities, or just need something quickly, this store offers a wide range of items in a compact space. Its round-the-clock operation makes it an indispensable part of the island's retail landscape, providing easy access to groceries, beverages, and basic supplies whenever you need them.",
    imagePath:"https://images1.cityfeet.com/i2/wXDEX7JfG7JQzg0s14xWLDvkrqCba-rGSBTMExJkMZI/110/1212-victory-blvd-staten-island-photo-1-of-11.jpg",
  },
]