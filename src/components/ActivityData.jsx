import React, { useEffect, useState } from 'react';

const ActivityData = ({ filters, children, triggerSearch }) => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    const data = [

      // MAKATI
      {
        name: 'Ayala Museum',
        location: 'Makati',
        image: 'https://images.summitmedia-digital.com/spotph/images/2022/05/19/ayala-free-640-1652929734.jpg',
        price: 650, 
        pax: 'Solo',
        description: 'Explore the wonders of Filipino heritage through the various art pieces and installations at Ayala Museum.',
        duration: '2-3 hours',
        type: 'Cultural',
        link: 'https://www.ayalamuseum.org/home',
      },
      {
        name: 'Salcedo Market',
        location: 'Makati',
        image: 'https://www.easybook.com/images/destination/Philippines/Makati/SalcedoSaturdayMarket/SCMM.jpg',
        price: 1000, 
        pax: 'Date',
        description: 'The market meets, come rain or shine, every Saturday at the Jaime Velasquez Park of Salcedo village in Makati city. Its concessionaires offer a wide range of wet and dry food, with cuisines from all over the world. The Salcedo Market is a project under the Women of Bel-Air Foundation, Inc.',
        duration: '1-2 hours',
        type: 'Dining',
        link: 'https://www.instagram.com/salcedomarket/?hl=en',
      },
      {
        name: 'Pob Crawl',
        location: 'Makati',
        image: 'https://nylonmanila.com/wp-content/uploads/2023/09/POBLA-960x540.jpg',
        price: 2000, 
        pax: 'Barkada',
        description: 'Poblacion. This is where we meet friends, forget about exes, engage total strangers in conversations about anything, and simply dance the night away.',
        duration: '6 hours',
        type: 'Dining',
        link: 'https://nylonmanila.com/rundown-gen-z-approved-bars-in-poblacion/',
      },


      // MANILA
      {
        name: 'National Museum',
        location: 'Manila',
        image: 'https://images.summitmedia-digital.com/spotph/images/2022/06/03/national-museum-of-fine-arts-1654235019.jpg',
        price: 0, 
        pax: 'Solo',
        description: 'A trust of the Government, is an educational, scientific and cultural institution that acquires, documents, preserves, exhibits, and fosters scholarly study and public appreciation of works of art, specimens, and cultural and historical artifacts representative of the unique cultural heritage of the Filipino people and the natural history of the Philippines.',
        duration: '2-3 hours',
        type: 'Cultural',
        link: 'https://www.nationalmuseum.gov.ph/',
      },
      {
        name: 'Binondo Food Trip',
        location: 'Manila',
        image: 'https://anchorland.com.ph/wp-content/uploads/2023/01/shutterstock_1158843757-scaled.jpg',
        price: 1500, 
        pax: 'Date',
        description: 'Binondo, the oldest Chinatown in the world, is one of the most visited towns in the Philippine capital city of Manila for a cultural and gastronomic experience. In fact, Binondo tours are one of the popular Manila activities aside from the Manila bike tour in the Walled City of Intramuros, where you can explore iconic historical places in the country\'s capital.',
        duration: '3 hours',
        type: 'Dining',
        link: 'https://guidetothephilippines.ph/articles/what-to-experience/best-binondo-restaurants',
      },
      {
        name: 'Half-Day Manila City Tour',
        location: 'Manila',
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/70/13/82.jpg',
        price: 6341, 
        pax: 'Barkada',
        description: 'Manila is a big city, but on this guided tour you can see the must-visit sites without the hassle. From the Spanish colonial-era walled city of Intramuros to sprawling Rizal Park, your local guide will explain the fascinating history behind what you’re looking at, so you come away with a greater understanding of Manila and the Philippines.',
        duration: '4 hours',
        type: 'Cultural',
        link: 'https://www.tripadvisor.com.ph/AttractionProductReview-g298450-d12467873-Half_Day_Manila_City_Tour-Makati_Metro_Manila_Luzon.html',
      },

      // PASAY
      { 
        name: 'SPACE & TIME CUBE+', 
        location: 'Pasay',
        image: 'https://contents.smsupermalls.com/data/uploads/2024/06/IMG_2267.png',
        price: 880, 
        pax: 'Solo', 
        description: 'The immersive art museum boasts 20 themed attractions and sensory games, each designed to captivate and inspire. From mesmerizing LED tunnels and stunning light installations to jaw-dropping 3D technology and holographic displays, this museum promises an adventure that stimulates the senses. Perfect for customers of all ages, every corner of the museum is designed to immerse and inspire.',
        type: 'recreational', 
        link: 'https://www.smsupermalls.com/whats-new/entertainment/space-time-cube-philippines-first-immersive-art-museum-s-maison' 
      },  
      {
        name: 'Dessert Museum', 
        location: 'Pasay', 
        image: 'https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/rebqtiftstchftsqd7le.webp',
        price: 699, 
        pax: 'Date',
        description: 'Enter Manila\'s newest and quirkiest museum, where every corner is a feast for your senses!',
        type: 'Recreational', 
        link: 'https://www.klook.com/en-PH/activity/9526-dessert-museum-manila/',
      },
      {
        name: 'Star City',
        location: 'Pasay',
        image: 'https://www.bworldonline.com/wp-content/uploads/2022/02/269731140_713079052990256_5253004536439580533_n-scaled.jpg',
        price: 699, 
        pax: 'Barkada',
        description: 'Star City is a 35,000 m² amusement park in Pasay, Philippines. It is located in the reclaimed area of the Cultural Center of the Philippines Complex, part of Bay City.',
        type: 'recreational',
        link: 'https://starcity.com.ph/',
      },

      // QUEZON CITY
      {
        name: 'Thinking time at UP Sunken Garden',
        location: 'Quezon City',
        image: 'https://upwonders.wordpress.com/wp-content/uploads/2016/03/2173476491_dac80abc37_b.jpg',
        price: 0, 
        pax: 'Solo',
        description: 'The UP Sunken Garden is a beautiful green space that’s perfect for heart-to-heart conversations or muni-muni sessions. It’s the perfect place to go for when you want to feel nature vibes without traveling far.',
        duration: 'However long you need to think ;)',
        type: 'Recreational',
        link: 'https://www.windowseat.ph/introvert-friendly-places-quezon-city/',
      },
      {
        name: 'Sip and Gogh',
        location: 'Quezon City',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfLfpbHHhZKDe8kRwzdAaLrYEudTFSdGdfQ&s',
        price: 1200, 
        pax: 'Date',
        description: 'Sip & Gogh is the premier paint and sip studio in the Philippines that aims to promote art appreciation among Filipinos by creating personal and collective experiences that foster creativity, self-development, and social bonding through painting.',
        duration: '2-3 hours',
        type: 'Recreational',
        link: 'https://www.sipandgogh.com/',
      },
      {
        name: 'Food and Drinks at Cubao Expo',
        location: 'Quezon City',
        image: 'https://thesmartlocal.ph/wp-content/uploads/2022/07/Freds-revolucion.jpeg',
        price: 800, 
        pax: 'Barkada',
        description: 'Cubao Expo—also called Cubao X—is always evolving, seemingly presenting a new personality through its establishments every five or so years. Currently, it seems to have mostly settled into a fine balance of cafés, bars, and restaurants that suit the eclectic collection of stores in the area. It is inevitably going to change again, but for now, here is a guide to what one may consume at the legendary tambayan.',
        duration: '5 hours',
        type: 'Dining',
        link: 'https://www.spot.ph/eatdrink/the-latest-eat-drink/108691/cubao-x-restaurants-cafes-a6866-20240424-lfrm',
      },
      
      // Taguig
      {
        name: 'Jogging in BGC Greenway Park',
        location: 'Taguig',
        image: 'https://pgaacreativedesign.com/sites/default/files/styles/project_gallery/public/images/projects_gallery/greenway_28_midres.jpg',
        price: 0, 
        pax: 'Solo',
        description: 'BGC Greenway Park is the newest and longest urban park developed by Bonifacio Global City, it’s connecting McKinley Parkway all the way to Net Plaza with approximately 1.6 kilometers of asphalt road surrounded by grass and trees.',
        duration: '<1 hour',
        type: 'Recreational',
        link: 'https://www.pinoyfitness.com/2017/01/bgc-greenway-park-longest-urban-park-in-metro-manila/',
      },
      {
        name: 'Ride the Moovr Scooters',
        location: 'Taguig',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUxZh-u0q23o9yrNAujBNLMHTyvgeUGeCpQ&s',
        price: 0, 
        pax: 'Date',
        description: 'Moovr is the first app-enabled bike and e-scooter sharing service in the Philippines.',
        duration: 'No limit - PHP 45 for 10 mins',
        type: 'Recreational',
        link: 'https://www.moovr.ph/',
      },
      {
        name: 'Forbes Town',
        location: 'Taguig',
        image: 'https://i0.wp.com/www.megaworldcondominiums.com/wp-content/uploads/2013/03/Burgos-Circle.jpg?resize=819%2C544&ssl=1',
        price: 1500, 
        pax: 'Barkada',
        description: '✨ hidden gem in bgc🍸alfresco dining & nightlife 🏃‍♀️beauty & fitness 🐶 pet-friendly community 💯 safe & convenient 🌆 social neighborhood',
        duration: '5 hours',
        type: 'Dining',
        link: 'https://www.instagram.com/forbestown_/?hl=en',
      },

    ];
    setActivities(data);
  }, []);

  const filterActivities = () => {
    const [min, max] = filters.price ? filters.price.split('-').map(Number) : [0, Infinity];

    const newFilteredActivities = activities.filter(activity => {
      return (
        (!filters.pax || activity.pax.toLowerCase().includes(filters.pax.toLowerCase())) &&
        (!filters.location || activity.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.type || activity.type.toLowerCase() === filters.type.toLowerCase()) &&
        (!filters.price || activity.price >= min && activity.price <= max)
      );
    });

    setFilteredActivities(newFilteredActivities);
  };

  useEffect(() => {
    if (triggerSearch) {
      filterActivities();
    }
  }, [triggerSearch]);

  return children(filteredActivities);
};

export default ActivityData;