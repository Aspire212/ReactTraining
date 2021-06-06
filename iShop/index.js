import Shop from './Shop.js'

const nameShop = "AvtoMoto";
const products = 
  [
    {
      name: "oil",
      code: 1,
      price: "20$",
      image: "https://content2.onliner.by/catalog/device/header/7c011c1fc5391bbab40558fab0b8fffb.jpeg",
      in_stok: 50
    },
    {
      name: "tires",
      code: 2,
      price: "50$",
      image: "https://content2.onliner.by/catalog/device/header/55697976ff3e363e697dc43ff8a967d0.jpeg",
      in_stok: 20
    },
    {
      name: "accumulators",
      code: 3,
      price: "150$",
      image: "https://content2.onliner.by/catalog/device/header/33e1d2fcae6d1ce998b5f715a08755d0.jpeg",
      in_stok: 10
      
    },
    {
      name: "Wiper blades",
      code: 4,
      price: "5$",
      image: "https://content2.onliner.by/catalog/device/header/e417189c51e5e3f923d581e36a5ac9cb.jpeg",
        in_stok: 100
      
    },
  ];

  ReactDOM.render(
    React.createElement(Shop, {name: nameShop, products: products}),
    document.getElementById("app")
  );