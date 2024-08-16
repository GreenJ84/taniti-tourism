import React from 'react'
import ResourceItem, { IResourceInfo } from '../shared/ResourceItem'

const Activities = () => {
  return (
    <>
      <h2>Sightseeing</h2>
      {sightseeing.map((resource, idx) =>
        <ResourceItem
          key={idx}
          title={resource.title}
          description={resource.description}
          imagePath={resource.imagePath}
          leftAlign={idx % 2 === 0}
        />
      )}

      <hr/>

      <h2>Entertainment</h2>
      {entertainment.map((resource, idx) =>
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

export default Activities;

const sightseeing: IResourceInfo[] = [
  {
    title:"Taniti City",
    description:"Yellow Leaf Bay is a serene haven where the gentle waves of the Pacific Ocean meet pristine white sands. Encircling the bay, the beaches are ideal for relaxation, offering stunning views and a peaceful retreat from the busier parts of the island. Visitors can bask in the sun, enjoy a leisurely swim, or simply take in the breathtaking scenery that stretches as far as the eye can see. The bay is also a gateway to the vibrant marine life that inhabits the surrounding waters, making it a favorite spot for snorkeling and boat tours.",
    imagePath:"https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_large/public/hero-unit-images/Oahu-Honolulu-Aerial-Hero-2_1.jpg?itok=ImJq6DZH",
  },
  {
    title:"Yellow Leaf Bay",
    description:"Yellow Leaf Bay is a serene haven where the gentle waves of the Pacific Ocean meet pristine white sands. Encircling the bay, the beaches are ideal for relaxation, offering stunning views and a peaceful retreat from the busier parts of the island. Visitors can bask in the sun, enjoy a leisurely swim, or simply take in the breathtaking scenery that stretches as far as the eye can see. The bay is also a gateway to the vibrant marine life that inhabits the surrounding waters, making it a favorite spot for snorkeling and boat tours.",
    imagePath:"https://www.bay-of-islands.co.nz/wp-content/uploads/2016/01/Waewaetorea-Island-1200x804.jpg",
  },
  {
    title: "Taniti's active volcano",
    description:"Taniti's active volcano is a dramatic and awe-inspiring feature of the island, drawing adventurers and nature enthusiasts alike. The volcano, with its simmering lava flows and rugged terrain, offers a rare glimpse into the powerful forces that shape the earth. Guided tours provide safe access to the most striking viewpoints, where visitors can witness the raw energy of an active geological formation. This natural wonder is not just a sight to behold, but a reminder of the island's dynamic and ever-changing landscape.",
    imagePath:"https://i0.wp.com/globerovers.com/wp-content/uploads/2020/03/Nicaragua-Volcan-Concepcion.jpg?w=800&ssl=1",
  },
  {
    title:"Rainforest",
    description: "The lush rainforest of Taniti is a vibrant and living testament to the island's rich biodiversity. Towering trees, dense foliage, and a symphony of wildlife create an immersive experience for hikers and nature lovers. The rainforest trails wind through a verdant landscape where visitors can discover exotic plants, colorful birds, and hidden waterfalls. Each step deeper into the forest unveils new layers of the island's ecological complexity, offering a peaceful escape into nature's embrace.",
    imagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Kirakira_River_and_Beach.JPG/1920px-Kirakira_River_and_Beach.JPG",
  },
  {
    title:"Waterfront",
    description:"The waterfront in Taniti is a lively area that offers a picturesque setting where the land meets the sea. With its bustling docks and scenic promenades, the waterfront is a hub of activity, from local fishermen bringing in their daily catch to tourists embarking on boat tours. The area is also home to a variety of shops, restaurants, and cafes where visitors can enjoy fresh seafood and other local delicacies while overlooking the sparkling ocean. As the sun sets, the waterfront transforms into a romantic backdrop, with lights reflecting off the water and the gentle sound of waves creating a tranquil ambiance.",
    imagePath:"https://www.islandrealestate.com/wp-content/uploads/2020/07/P0470050.jpg",
  },
];

const entertainment: IResourceInfo[] = [
  {
    title:"Local History museum",
    description:"The Local History Museum in Taniti offers a fascinating journey through the island's past, showcasing its rich cultural heritage and historical milestones. Visitors can explore exhibits that highlight the evolution of Taniti, from its indigenous roots to its development as a vibrant tourist destination. Artifacts, photographs, and interactive displays provide a deep dive into the stories that have shaped the island, making it a must-visit for history enthusiasts and anyone interested in understanding the unique identity of Taniti.",
    imagePath:"https://images.squarespace-cdn.com/content/v1/608222732f82650503b9923b/1686073376504-MF3HA6VOJJFT6SB0Y8GX/Museum.jpg?format=2500w",
  },
  {
    title:"Chartered Fishing",
    description:"Chartered fishing tours in Taniti provide an exciting opportunity to experience the island's abundant marine life firsthand. Whether you're an experienced angler or a novice, these excursions offer a chance to catch a variety of fish while enjoying the breathtaking scenery of the surrounding waters. Professional guides ensure a safe and enjoyable trip, often sharing local fishing techniques and knowledge about the island's marine ecosystem. It's a perfect way to spend a day on the water, combining adventure with relaxation.",
    imagePath:"https://onthewater.com/wp-content/uploads/2018/07/find-a-charter-800x600.jpg",
  },
  {
    title: "Zip-lining",
    description:"For thrill-seekers, zip-lining in the rainforest of Taniti is an unforgettable experience. The adventure takes you high above the treetops, offering a bird's-eye view of the lush, green canopy below. As you glide from platform to platform, you'll feel the rush of adrenaline while being immersed in the sights and sounds of the rainforest. The zip-lining courses are designed to be both exhilarating and safe, making it an exciting activity for visitors of all ages who want to explore the island from a different perspective.",
    imagePath:"https://www.ncl.com/sites/default/files/NPI_52_Zipline_680x330.jpg",
  },
  {
    title:"Snorkeling",
    description:"Taniti's crystal-clear waters make it an ideal location for snorkeling, allowing visitors to explore the vibrant underwater world that lies just off the coast. The coral reefs are home to a dazzling array of marine life, including colorful fish, sea turtles, and other aquatic creatures. Guided snorkeling tours are available for those who want to learn more about the marine environment, but even a casual swim with a snorkel and mask offers a glimpse into the beauty of the island's underwater treasures.",
    imagePath:"https://silentworld.com/wp-content/uploads/2023/11/AdobeStock_600986683.jpeg",
  },
  {
    title:"Helicopter rides",
    description:"For a truly breathtaking view of Taniti, helicopter rides offer an unparalleled perspective of the island's diverse landscapes. From the air, you can see the dramatic contrasts between the white sandy beaches, dense rainforests, and the imposing active volcano. The rides provide a unique opportunity to appreciate the full beauty of Taniti in a short amount of time, making it an unforgettable experience for visitors who want to see the island from above.",
    imagePath:"https://images.squarespace-cdn.com/content/v1/531e9ec5e4b00453258c688d/1536123023506-WZ4NRI48EBA9S2CVITA3/new+york+city+helicopter+ride?format=2500w",
  },
  {
    title:"Local brewing",
    description:"Taniti's burgeoning brewing scene is a hidden gem for those who appreciate craft beverages. The local microbrewery offers a variety of unique brews, each infused with flavors that reflect the island's tropical ingredients and laid-back atmosphere. Visitors can take a tour of the brewery to learn about the brewing process, sample different beers, and even meet the brewers who are passionate about their craft. It's a great way to unwind and enjoy the local flavor of Taniti.",
    imagePath:"https://images.squarespace-cdn.com/content/v1/5b85c5e52487fd1f4b32f19f/1676477008502-8V3ESNCBH8MGSVG2CDE5/CraftmasterStainlessInc-194325-What-Is-Wort-blogbanner1.jpg?format=2500w",
  },
  {
    title:"Dance club venues",
    description:"The nightlife in Taniti has been energized by the opening of new dance club venues, where visitors can dance the night away to a mix of local and international beats. These clubs offer a lively atmosphere with vibrant music, great drinks, and a welcoming crowd, making them the perfect spot for those looking to let loose after a day of exploring the island. Whether you're into modern pop, classic hits, or local rhythms, the dance clubs in Taniti provide a fun and energetic night out.",
    imagePath:"https://i0.wp.com/utahagenda.com/wp-content/uploads/2022/08/ed639-dancing-live-music-nightclub-utah-1038.jpg?resize=1038%2C571&ssl=1",
  },
  {
    title:"Local entertainment",
    description:"Taniti offers a variety of local entertainment options that cater to different tastes and interests. From live music performances and traditional dance shows to art galleries and movie theaters, there's always something happening in the bustling entertainment scene. Many of these activities are centered in Merriton Landing, a rapidly developing area on the north side of Yellow Leaf Bay, making it a hub for both locals and tourists to enjoy the vibrant culture and creative spirit of the island.",
    imagePath:"https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/3/0d/30d5a338-1131-11ee-a0f7-472470192150/64949f7649bd9.image.jpg?resize=1200%2C800",
  },
]