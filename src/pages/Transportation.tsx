import React from 'react'
import ResourceItem, { IResourceInfo, IResourceProps } from '../shared/ResourceItem'

const Transportation = () => {
  return (
    <>
      <h2>Arrival Transportation</h2>
      {arrivalTransport.map((resource, idx) =>
        <ResourceItem
          key={idx}
          title={resource.title}
          description={resource.description}
          imagePath={resource.imagePath}
          leftAlign={idx % 2 === 0}
        />
      )}

      <h2>Inter-Island Transportation</h2>
      {interIslandTransport.map((resource, idx) =>
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

export default Transportation

const arrivalTransport: IResourceInfo[] = [
  {
    title: "Cruise Ship",
    description: "Arrive in style by cruise ship, docking at Yellow Leaf Bay for an unforgettable island experience. This small cruise ship offers a scenic voyage with breathtaking ocean views, allowing you to relax and unwind before you even step foot on Taniti. With weekly arrivals, it's a popular choice for those who enjoy a leisurely journey. Book your cruise ship tickets online or call 1-800-555-1234 for assistance.",
    imagePath: "https://www.carnival.com/-/media/images/ships/po/carnival-panorama-tile-2.jpg?w=360&h=175&as=1&iar=1",
  },
  {
    title: "Charter Ship",
    description: "For a more personalized arrival experience, consider a charter ship. These smaller vessels offer a private and intimate journey to Taniti, perfect for groups or special occasions. Enjoy the exclusivity and tailored service as you make your way to the island's shores. Book your charter ship tickets online or call 1-800-555-1234 for assistance.",
    imagePath: "https://www.emeraldcruises.co.uk/-/media/project/scenic/emerald-cruises/emerald-cruises-uk/charters/d_ecyc_sakara_amalfi_lbanner.jpg?rev=482451d88b964ec8b07cd1addb5374f6",
  },
  {
    title: "Charter plane",
    description: "Take to the skies with a charter plane, offering direct flights to Taniti's small airport. These planes are ideal for those seeking a flexible and private travel option, with the convenience of choosing your departure time and enjoying a personalized flight experience. Book your charter plane tickets online or call 1-800-555-1234 for assistance.",
    imagePath: "https://leeaerospace.com/wp-content/uploads/2021/11/charter-jet-wichita-ks.jpg",
  },
  {
    title: "Commercial plane",
    description: "Taniti airport is in the midst of an expansion project, which, once completed, will enable it to handle larger commercial jets in the future.",
    imagePath: "https://media.gq.com/photos/6508829d305ef4e0229049b3/master/w_1920,c_limit/plane.jpg",
  },
]

const interIslandTransport: IResourceInfo[] = [
  {
    title: "Walking",
    description: "Explore the beauty of Taniti on foot, especially in Taniti City and the surrounding areas like Merriton Landing. The island's flat terrain makes walking a pleasant and scenic way to get around, allowing you to fully immerse yourself in the local atmosphere. Take a scenic walking tour of the island.",
    imagePath: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_682,q_65,w_639,x_720,y_552/v1/clients/blockislandri/alenushka_iva_instagram_721_ig_18119747698085927_39e61630-9d06-4923-bba9-0e26bab70fd4.jpg",
  },
  {
    title: "Rentals",
    description: "For those looking to explore Taniti at their own pace, rental cars, bikes, and even helmets are available from local vendors near the airport. Whether you prefer driving or cycling, renting a vehicle gives you the freedom to discover every corner of the island. Book a private or shared vehicle for your trip.",
    imagePath: "https://s3-media0.fl.yelpcdn.com/bphoto/T_SpBf871L0FPLyN4tqURA/1000s.jpg",
  },
  {
    title: "Public Buses",
    description: "Public buses are a convenient and affordable way to navigate Taniti City, with service running from 5 a.m. to 11 p.m. daily. These buses connect key points within the city, making it easy to get around without the need for a private vehicle. Take a bus to your destination.",
    imagePath: "https://www.lovebigisland.com/wp-content/uploads/HeleOnHiloMooheauTerminal.jpg",
  },
  {
    title: "Private Buses",
    description: "For trips outside of Taniti City, private buses are available to take you to various destinations across the island. These buses offer a more comfortable and direct service, perfect for group travel or exploring areas not covered by public transportation. Book a private bus for your trip.",
    imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wdanbi8wstC_pRl8ehKg-zrNmDbs5frk3Q&s",
  },
  {
    title: "Taxis",
    description: "Taxis provide a convenient and quick way to travel within Taniti City. Available at all hours, they are ideal for getting around town or reaching destinations that might be a bit too far to walk. Whether you're heading to a restaurant, hotel, or sightseeing spot, taxis offer a hassle-free transport option. Book a taxi for your trip.",
    imagePath: "https://www.tobermory.co.uk/wp-content/uploads/Island-Taxi.jpg",
  },
];