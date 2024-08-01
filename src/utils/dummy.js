const dummyData = [
  // Severe Storms
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `STORM_${String(index + 1).padStart(3, "0")}`,
    title: `Severe Storm in Location ${index + 1}`,
    description: `Severe storm conditions observed in Location ${index + 1}.`,
    link: `https://example.com/storm_location_${index + 1}`,
    categories: [{ id: 11, title: "Severe Storms" }],
    sources: [{ id: "STORM_SOURCE", url: "https://example.com/storm_source" }],
    geometries: [
      {
        date: `2024-06-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [-75.1, 39.9], // USA (Philadelphia)
          [2.4, 48.8], // France (Paris)
          [139.7, 35.6], // Japan (Tokyo)
          [-79.4, 43.7], // Canada (Toronto)
          [8.6, 49.4], // Germany (Frankfurt)
          [116.4, 39.9], // China (Beijing)
          [151.2, -33.9], // Australia (Sydney)
          [18.5, 54.9], // Russia (Kaliningrad)
          [-70.6, -33.5], // Chile (Santiago)
          [15.5, 28.5], // Egypt (Cairo)
          [-64.3, -31.4], // Argentina (Cordoba)
          [30.5, 50.4], // Ukraine (Kiev)
          [121.5, 25.0], // Taiwan (Taipei)
          [19.4, 51.5], // Poland (Lodz)
          [25.0, -33.5], // South Africa (Cape Town)
          [12.6, 41.9], // Italy (Rome)
          [-77.0, 38.9], // USA (Washington, D.C.)
          [114.2, 22.3], // Hong Kong
          [5.5, 43.7], // Italy (Marseille)
          [104.0, 30.0], // China (Chengdu)
          [77.0, 28.5], // India (New Delhi)
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),

  // Volcanoes
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `VOLCANO_${String(index + 1).padStart(3, "0")}`,
    title: `Volcano Eruption in Location ${index + 1}`,
    description: `Volcanic activity reported in Location ${index + 1}.`,
    link: `https://example.com/volcano_location_${index + 1}`,
    categories: [{ id: 12, title: "Volcanoes" }],
    sources: [
      { id: "VOLCANO_SOURCE", url: "https://example.com/volcano_source" },
    ],
    geometries: [
      {
        date: `2024-07-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [156.0, -19.2], // Papua New Guinea (Rabaul)
          [145.9, -37.8], // Australia (Melbourne)
          [-155.3, 19.4], // USA (Hawaii)
          [80.5, 24.8], // India (Kumano)
          [36.4, -1.2], // Kenya (Mount Kenya)
          [115.5, -8.2], // Indonesia (Bali)
          [13.3, 38.4], // Italy (Mount Etna)
          [-76.0, 4.2], // Colombia (Galeras)
          [37.5, 40.0], // Turkey (Mount Ararat)
          [-70.1, -23.4], // Chile (Villarica)
          [135.8, -21.1], // Australia (Central Australia)
          [8.6, 46.4], // Switzerland (Matterhorn)
          [149.0, -35.3], // Australia (Canberra)
          [166.5, -21.2], // Solomon Islands (Tinakula)
          [14.2, 49.4], // Czech Republic (Cesky)
          [21.0, 60.0], // Finland (Sodankyla)
          [110.3, -7.7], // Indonesia (Merapi)
          [10.8, 50.0], // Russia (Klyuchevskoy)
          [72.0, 31.0], // Kyrgyzstan (Khan Tengri)
          [-74.6, 3.9], // Venezuela (Santo Domingo)
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),

  // Water Color
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `WATER_COLOR_${String(index + 1).padStart(3, "0")}`,
    title: `Unusual Water Color in Location ${index + 1}`,
    description: `Reports of unusual water color observed in Location ${
      index + 1
    }.`,
    link: `https://example.com/water_color_location_${index + 1}`,
    categories: [{ id: 13, title: "Water Color" }],
    sources: [
      {
        id: "WATER_COLOR_SOURCE",
        url: "https://example.com/water_color_source",
      },
    ],
    geometries: [
      {
        date: `2024-08-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [37.6, 55.8], // Russia (Moscow)
          [45.3, 10.0], // Italy (Milan)
          [114.0, 22.5], // Hong Kong
          [-46.6, -23.7], // Brazil (Goias)
          [116.5, -8.6], // Indonesia (Flores)
          [2.0, 49.0], // France (Calais)
          [35.6, 50.0], // Iran (Tehran)
          [-87.6, 15.6], // Belize (Belmopan)
          [121.3, 31.0], // China (Shanghai)
          [142.4, 37.5], // Japan (Fukuoka)
          [139.8, -12.5], // Australia (Brisbane)
          [38.9, -2.0], // Spain (Murcia)
          [-78.6, 40.4], // USA (Pittsburgh)
          [77.0, 28.6], // India (Delhi)
          [-115.1, 36.2], // USA (Las Vegas)
          [34.2, -1.8], // Morocco (Agadir)
          [14.3, -12.8], // Chad (N'Djamena)
          [20.8, 45.0], // Saudi Arabia (Jeddah)
          [-98.7, 29.4], // USA (San Antonio)
          [73.8, 18.5], // India (Pune)
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),

  // Landslides
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `LANDSLIDE_${String(index + 1).padStart(3, "0")}`,
    title: `Landslide in Location ${index + 1}`,
    description: `Landslide reported in Location ${index + 1}.`,
    link: `https://example.com/landslide_location_${index + 1}`,
    categories: [{ id: 14, title: "Landslides" }],
    sources: [
      { id: "LANDSLIDE_SOURCE", url: "https://example.com/landslide_source" },
    ],
    geometries: [
      {
        date: `2024-09-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [35.7, 39.0], // Turkey (Istanbul)
          [-121.8, 37.4], // USA (California)
          [80.2, 28.6], // Nepal (Kathmandu)
          [7.2, 12.5], // Cameroon (Douala)
          [13.2, 50.8], // Germany (Dresden)
          [-74.2, 40.7], // USA (New York)
          [77.0, 28.5], // India (New Delhi)
          [-80.0, 25.8], // USA (Miami)
          [103.0, 14.8], // Thailand (Chiang Mai)
          [90.4, 23.8], // Bangladesh (Dhaka)
          [118.8, 32.1], // China (Nanjing)
          [-43.0, -22.9], // Brazil (Rio de Janeiro)
          [71.3, 31.5], // Pakistan (Karachi)
          [138.7, -34.0], // Australia (Adelaide)
          [29.5, 47.8], // Kuwait (Kuwait City)
          [151.2, -33.8], // Australia (Sydney)
          [-77.4, 1.7], // Colombia (Bogotá)
          [135.0, 48.5], // Japan (Fukuoka)
          [12.7, 55.6], // Denmark (Copenhagen)
          [16.7, 48.2], // Austria (Vienna)
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),

  // Sea and Lake Ice
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `SEA_ICE_${String(index + 1).padStart(3, "0")}`,
    title: `Sea and Lake Ice Reported in Location ${index + 1}`,
    description: `Sea and lake ice conditions reported in Location ${
      index + 1
    }.`,
    link: `https://example.com/sea_ice_location_${index + 1}`,
    categories: [{ id: 15, title: "Sea and Lake Ice" }],
    sources: [
      { id: "SEA_ICE_SOURCE", url: "https://example.com/sea_ice_source" },
    ],
    geometries: [
      {
        date: `2024-10-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [25.0, 64.0], // Russia (Murmansk)
          [143.0, 66.0], // Russia (Yakutsk)
          [14.6, 60.5], // Sweden (Ostersund)
          [-69.0, -60.0], // Antarctica (South Pole)
          [118.3, 68.0], // China (Heilongjiang)
          [142.0, 55.5], // Japan (Sapporo)
          [90.0, 62.0], // Russia (Norilsk)
          [34.5, 58.0], // Kazakhstan (Kostanay)
          [36.5, 48.5], // Mongolia (Ulaanbaatar)
          [22.0, 55.0], // Latvia (Riga)
          [138.0, 64.0], // Russia (Khabarovsk)
          [13.0, 70.0], // Norway (Tromsø)
          [16.0, 66.0], // Iceland (Reykjavik)
          [104.0, 50.0], // Mongolia (Hohhot)
          [40.0, 57.0], // Russia (Irkutsk)
          [-52.0, -64.0], // Antarctica (Ross Ice Shelf)
          [105.0, 53.0], // Russia (Chita)
          [-70.0, 67.0], // Canada (Resolute)
          [129.0, 60.0], // Russia (Amur)
          [77.0, 62.0], // India (Ladakh)
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),

  // Earthquakes
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `EARTHQUAKE_${String(index + 1).padStart(3, "0")}`,
    title: `Earthquake in Location ${index + 1}`,
    description: `Earthquake reported in Location ${index + 1}.`,
    link: `https://example.com/earthquake_location_${index + 1}`,
    categories: [{ id: 16, title: "Earthquakes" }],
    sources: [
      { id: "EARTHQUAKE_SOURCE", url: "https://example.com/earthquake_source" },
    ],
    geometries: [
      {
        date: `2024-11-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [142.4, -10.4], // Australia (Northern Territory)
          [73.5, 32.0], // Nepal (Kathmandu)
          [-70.5, -33.5], // Chile (Valparaíso)
          [87.6, 43.7], // China (Xinjiang)
          [150.0, -35.0], // Australia (Newcastle)
          [46.5, 24.5], // Egypt (Cairo)
          [139.7, 35.6], // Japan (Tokyo)
          [78.0, 29.0], // India (Agra)
          [-122.5, 37.7], // USA (San Francisco)
          [25.0, 45.0], // Russia (Volgograd)
          [9.2, 53.4], // Germany (Hamburg)
          [77.0, 32.5], // India (Shimla)
          [14.5, 46.5], // Slovenia (Ljubljana)
          [118.0, -7.0], // Indonesia (Bali)
          [136.0, -5.5], // Indonesia (Makassar)
          [42.3, 10.5], // Italy (Florence)
          [44.5, 43.5], // Russia (Dagestan)
          [-79.4, 43.7], // Canada (Toronto)
          [23.5, 46.0], // Mongolia (Ulaanbaatar)
          [-104.0, 37.5], // USA (Colorado)
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),

  // Snow
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `SNOW_${String(index + 1).padStart(3, "0")}`,
    title: `Snowfall in Location ${index + 1}`,
    description: `Heavy snowfall reported in Location ${index + 1}.`,
    link: `https://example.com/snow_location_${index + 1}`,
    categories: [{ id: 17, title: "Snow" }],
    sources: [{ id: "SNOW_SOURCE", url: "https://example.com/snow_source" }],
    geometries: [
      {
        date: `2024-12-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [138.2, 36.6], // Japan (Nagano)
          [9.0, 46.0], // Switzerland (Zurich)
          [16.5, 48.2], // Austria (Vienna)
          [14.5, 40.7], // Italy (Rome)
          [153.0, -27.4], // Australia (Brisbane)
          [74.0, 30.5], // India (Shimla)
          [22.2, 55.0], // Finland (Helsinki)
          [140.1, 40.8], // Japan (Niigata)
          [16.4, 60.0], // Sweden (Umea)
          [-106.0, 35.6], // USA (New Mexico)
          [30.0, 60.0], // Russia (Kirov)
          [-78.0, 40.5], // USA (Pittsburgh)
          [144.9, -37.8], // Australia (Melbourne)
          [42.5, 60.0], // Russia (Perm)
          [121.5, 31.0], // China (Shanghai)
          [29.0, 44.0], // Turkey (Erzurum)
          [-74.0, 40.0], // USA (New York)
          [5.5, 43.6], // Italy (Marseille)
          [103.0, 10.0], // Thailand (Bangkok)
          [125.0, 7.0], // Philippines (Davao)
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),

  // Temperature Extremes
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `TEMP_EXTREMES_${String(index + 1).padStart(3, "0")}`,
    title: `Temperature Extremes in Location ${index + 1}`,
    description: `Extreme temperature conditions reported in Location ${
      index + 1
    }.`,
    link: `https://example.com/temp_extremes_location_${index + 1}`,
    categories: [{ id: 18, title: "Temperature Extremes" }],
    sources: [
      {
        id: "TEMP_EXTREMES_SOURCE",
        url: "https://example.com/temp_extremes_source",
      },
    ],
    geometries: [
      {
        date: `2024-01-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [-71.5, 42.3], // USA (Boston)
          [36.5, 50.0], // Iran (Tehran)
          [144.0, -37.8], // Australia (Melbourne)
          [118.0, 35.0], // China (Shijiazhuang)
          [-122.5, 37.8], // USA (San Francisco)
          [30.5, 50.4], // Ukraine (Kiev)
          [12.3, 51.0], // Germany (Dresden)
          [14.5, 50.0], // Czech Republic (Prague)
          [37.5, 55.8], // Russia (Moscow)
          [20.0, 40.0], // Italy (Rome)
          [10.0, 60.0], // Sweden (Stockholm)
          [-62.0, -34.0], // Argentina (Buenos Aires)
          [9.2, 47.5], // Switzerland (Geneva)
          [2.0, 41.0], // Spain (Barcelona)
          [30.0, 40.0], // Saudi Arabia (Riyadh)
          [14.0, 60.0], // Finland (Helsinki)
          [-105.0, 39.0], // USA (Denver)
          [34.0, 41.0], // Turkey (Ankara)
          [115.0, 5.0], // Malaysia (Kota Kinabalu)
          [-77.0, 38.0], // USA (Washington, D.C.)
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),
  // Drought
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `DROUGHT_${String(index + 1).padStart(3, "0")}`,
    title: `Severe Drought in Location ${index + 1}`,
    description: `Extended drought conditions observed in Location ${
      index + 1
    }.`,
    link: `https://example.com/drought_location_${index + 1}`,
    categories: [{ id: 6, title: "Drought" }],
    sources: [
      { id: "DROUGHT_SOURCE", url: "https://example.com/drought_source" },
    ],
    geometries: [
      {
        date: `2024-01-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [12.6, 5.6], // Chad
          [-96.7, 17.0], // Mexico
          [19.4, 41.3], // Turkey
          [120.7, 15.0], // Philippines
          [70.6, 19.4], // India
          [29.9, -1.7], // Mali
          [37.6, 2.8], // Algeria
          [36.7, 1.6], // Tunisia
          [50.5, 28.9], // Jordan
          [31.5, -8.4], // Morocco
          [14.6, -3.0], // Burkina Faso
          [116.4, -6.9], // Indonesia
          [13.5, 43.8], // Spain
          [32.9, 16.4], // Libya
          [-63.6, -18.0], // Bolivia
          [27.5, -19.0], // Botswana
          [79.0, 30.5], // Nepal
          [8.4, 13.5], // Niger
          [-57.5, -23.0], // Brazil
          [40.7, 8.0], // Ethiopia
          [23.8, 37.5], // Greece
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),

  // Dust and Haze
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `DUST_HAZE_${String(index + 1).padStart(3, "0")}`,
    title: `Dust and Haze in Location ${index + 1}`,
    description: `Significant dust and haze reported in Location ${index + 1}.`,
    link: `https://example.com/dust_haze_location_${index + 1}`,
    categories: [{ id: 7, title: "Dust and Haze" }],
    sources: [
      { id: "DUST_HAZE_SOURCE", url: "https://example.com/dust_haze_source" },
    ],
    geometries: [
      {
        date: `2024-02-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [45.7, 20.5], // Iraq
          [101.7, 20.8], // Thailand
          [37.6, 55.8], // Russia
          [114.2, 30.5], // China
          [43.8, 25.4], // Egypt
          [67.2, 26.5], // Pakistan
          [28.6, 30.1], // Sudan
          [46.2, 12.0], // Iran
          [21.4, 48.3], // Saudi Arabia
          [29.9, 19.0], // Jordan
          [50.0, 18.0], // Kuwait
          [52.3, 31.5], // Turkmenistan
          [39.8, 52.1], // Uzbekistan
          [40.7, 43.3], // Armenia
          [25.8, 38.0], // Syria
          [74.5, 29.0], // Afghanistan
          [74.2, 37.5], // Kazakhstan
          [72.3, 38.5], // Qatar
          [85.0, 21.0], // Nepal
          [89.2, 28.6], // Bangladesh
          [106.8, 19.0], // Laos
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),

  // Wildfires
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `WILDFIRE_${String(index + 1).padStart(3, "0")}`,
    title: `Wildfire in Location ${index + 1}`,
    description: `Large wildfire detected in Location ${index + 1}.`,
    link: `https://example.com/wildfire_location_${index + 1}`,
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [
      { id: "WILDFIRE_SOURCE", url: "https://example.com/wildfire_source" },
    ],
    geometries: [
      {
        date: `2024-03-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [-122.4, 37.7], // USA (California)
          [145.0, -37.8], // Australia (Victoria)
          [118.7, -8.5], // Indonesia (East Nusa Tenggara)
          [-68.1, -22.9], // Argentina (Catamarca)
          [54.2, -21.4], // South Africa (North West)
          [116.0, -6.0], // Indonesia (Central Sulawesi)
          [121.5, 31.2], // China (Shanghai)
          [14.6, -14.6], // Brazil (Mato Grosso)
          [-3.8, 40.4], // Spain (Madrid)
          [139.8, -7.3], // Australia (Queensland)
          [-63.6, -21.3], // Bolivia (Santa Cruz)
          [33.8, -27.0], // Mozambique (Gaza)
          [24.8, 30.4], // Egypt (Aswan)
          [100.6, 15.0], // Thailand (Chiang Mai)
          [120.5, -6.0], // Indonesia (Bali)
          [-103.2, 21.5], // Mexico (Baja California)
          [19.2, 40.3], // Turkey (Gaziantep)
          [14.3, 12.8], // Chad (Borkou)
          [-58.4, -34.6], // Argentina (Buenos Aires)
          [39.4, 33.4], // Turkey (Ankara)
          [126.8, 37.5], // South Korea (Jeju)
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),

  // Floods
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `FLOOD_${String(index + 1).padStart(3, "0")}`,
    title: `Floods in Location ${index + 1}`,
    description: `Heavy flooding reported in Location ${
      index + 1
    } due to monsoon rains.`,
    link: `https://example.com/flood_location_${index + 1}`,
    categories: [{ id: 9, title: "Floods" }],
    sources: [{ id: "FLOOD_SOURCE", url: "https://example.com/flood_source" }],
    geometries: [
      {
        date: `2024-04-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [34.8, -1.3], // Lake Victoria, Uganda
          [79.0, 21.0], // Mumbai, India
          [-58.4, -34.6], // Buenos Aires, Argentina
          [120.9, 14.6], // Manila, Philippines
          [31.5, -29.0], // Durban, South Africa
          [115.9, -32.0], // Perth, Australia
          [118.3, 26.1], // Hangzhou, China
          [24.9, 60.4], // Helsinki, Finland
          [-77.0, 38.9], // Washington, D.C., USA
          [139.7, 35.6], // Tokyo, Japan
          [78.4, 17.4], // Hyderabad, India
          [2.4, 48.8], // Paris, France
          [-73.9, 40.7], // New York City, USA
          [145.0, -37.8], // Melbourne, Australia
          [-43.2, -22.9], // Rio de Janeiro, Brazil
          [27.1, 47.0], // Chisinau, Moldova
          [100.5, 13.8], // Bangkok, Thailand
          [9.2, 53.5], // Hamburg, Germany
          [153.0, -27.4], // Brisbane, Australia
          [18.4, -33.9], // Cape Town, South Africa
          [-67.0, 10.0], // Caracas, Venezuela
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),

  // Extreme Temperature
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `TEMP_${String(index + 1).padStart(3, "0")}`,
    title: `Extreme Temperature in Location ${index + 1}`,
    description: `Severe temperature extremes reported in Location ${
      index + 1
    }.`,
    link: `https://example.com/temp_location_${index + 1}`,
    categories: [{ id: 10, title: "Extreme Temperature" }],
    sources: [{ id: "TEMP_SOURCE", url: "https://example.com/temp_source" }],
    geometries: [
      {
        date: `2024-05-${String(index + 1).padStart(2, "0")}T00:00:00Z`,
        type: "Point",
        coordinates: [
          // Unique coordinates for each country
          [45.3, 10.0], // Italy (Milan)
          [77.1, 28.7], // India (Delhi)
          [-71.1, -33.5], // Chile (Santiago)
          [143.6, -12.5], // Australia (Darwin)
          [16.4, 48.2], // Austria (Vienna)
          [46.5, 13.8], // Slovenia (Ljubljana)
          [60.0, 23.0], // Finland (Helsinki)
          [16.9, 52.4], // Poland (Wroclaw)
          [87.7, 43.8], // China (Urumqi)
          [37.8, 57.6], // Russia (Yekaterinburg)
          [-53.2, -33.5], // Argentina (Buenos Aires)
          [18.8, 47.5], // Slovakia (Bratislava)
          [109.6, 15.4], // Vietnam (Da Nang)
          [120.7, 30.8], // China (Hangzhou)
          [70.3, 53.5], // Kazakhstan (Pavlodar)
          [-58.3, -34.6], // Argentina (Buenos Aires)
          [35.8, 32.0], // Israel (Tel Aviv)
          [9.4, 38.5], // Ethiopia (Addis Ababa)
          [13.2, 52.5], // Germany (Berlin)
          [138.6, 35.5], // Japan (Nagoya)
          [103.8, 1.4], // Singapore
        ][index % 20], // Rotate through the 20 coordinates
      },
    ],
  })),
];

export default dummyData;
