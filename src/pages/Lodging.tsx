import React from 'react'
import ResourceItem, { IResourceInfo } from '../shared/ResourceItem'

const Lodging = () => {
  return (
    <>
      <h2>Lodging</h2>
      {lodging.map((resource, idx) =>
        <ResourceItem
          key={idx}
          title={resource.title}
          description={resource.description}
          imagePath={resource.imagePath}
          leftAlign={idx % 2 === 0}
        />
      )}
    </>
  )
}

export default Lodging;

const lodging: IResourceInfo[] = [
  {
    title: "Resort",
    description: "Experience luxury and comfort at Taniti’s premier four-star resort, where world-class amenities and breathtaking views await you. This expansive resort offers a tranquil escape, with beautifully appointed rooms, fine dining, and a range of recreational activities that allow you to immerse yourself in the island's beauty. Whether you're looking to relax by the pool, indulge in spa treatments, or explore the surrounding nature, this resort provides an unparalleled experience. Book your inn rooms online or call 1-800-555-1234 for assistance.",
    imagePath: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/02/CALALA-ISLAND-NICARAGUA.jpg?ssl=1",
  },
  {
    title: "Hotels",
    description: "Taniti’s hotels are a blend of charm and convenience, offering comfortable accommodations that cater to a variety of budgets. These small, family-owned establishments provide personalized service and a cozy atmosphere, making them ideal for travelers seeking a home away from home. With their convenient locations and welcoming hosts, these hotels are perfect for both short stays and extended vacations. Book your hotel rooms online or call 1-800-555-1234 for assistance.",
    imagePath: "https://phgcdn.com/images/uploads/MCDIH/masthead/hero3.jpg",
  },
  {
    title: "Hostels",
    description: "For travelers on a budget, Taniti’s hostels offers an affordable and social lodging experience. The hostel provides basic, clean accommodations and is a great option for backpackers or those looking to meet fellow travelers. With shared facilities and a laid-back vibe, it's the perfect base for exploring the island while keeping costs low. Book your hostel rooms online or call 1-800-555-1234 for assistance.",
    imagePath: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/bc/36/32/island-life-backpackers.jpg?w=2000&h=-1&s=1",
  },
  {
    title: "Bed and Breakfasts",
    description: "The growing number of bed and breakfasts in Taniti offer a unique and intimate lodging experience. These charming establishments, often family-run, provide cozy rooms and home-cooked breakfasts that reflect the warmth and hospitality of the island. Each bed and breakfast has its own character, making them a delightful option for those looking to experience the local culture in a more personal setting. Book your bed and breakfast rooms online or call 1-800-555-1234 for assistance.",
    imagePath: "https://sanjuan.objects.liquidweb.services/photos/137-otters-pond-bb-on-orcas-island-by-stephanie-forrer-1-2800x900-2000.webp",
  },
];