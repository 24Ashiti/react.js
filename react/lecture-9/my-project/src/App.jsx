import "./App.css";
import List_Reandering from "./List_Reandering";

// const Quotes = [
//   "Everything you can imagine is real.",
//   "Normality is a paved road: it's comfortable to walk but no flowers grow.",
//   "Live as if you were to die tomorrow",
//   "It always seems impossible until it's done.",
// ];

const product = [
  {
    id: 1,
    name: "T-shirt",
    price: 300,
    color: "black",
    catagories:"woman-clothes",
    img:"https://m.media-amazon.com/images/I/61pFvC3zHuL._SY879_.jpg"
  },
  {
    id: 2,
    name: "shirt",
    price: 150,
    color: "red",
    catagories:"man-clothes",
    img:"https://m.media-amazon.com/images/I/61h0+zRTcPL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: 3,
    name: "shirt",
    price: 200,
    color: "blue",
    catagories:"man-clothes",
    img:"https://m.media-amazon.com/images/I/71AtRc6-0-L._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: 4,
    name: "shirt",
    price: 250,
    color: "green",
    catagories:"man-clothes",
    img:"https://m.media-amazon.com/images/I/71quo5VvAFL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: 5,
    name: "T-shirt",
    price: 300,
    color: "yellow",
    catagories:"woman-clothes",
    img:"https://m.media-amazon.com/images/I/616ypIz1eOL._SY879_.jpg"
  },
  {
    id: 6,
    name: "pent",
    price: 350,
    color: "black",
    catagories:"man-clothes",
    img:"https://m.media-amazon.com/images/I/51JvyNGP6xL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: 7,
    name: "pent",
    price: 400,
    color: "white",
    catagories:"man-clothes",
    img:"https://m.media-amazon.com/images/I/518Jx5btpsL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: 8,
    name: "pent",
    price: 450,
    color: "blue",
    catagories:"man-clothes",
    img:"https://m.media-amazon.com/images/I/51hYYgX7DlL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: 9,
    name: "suit",
    price: 500,
    color: "blue",
    catagories:"woman-clothes",
    img:"https://m.media-amazon.com/images/I/61wxki52w0L._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: 10,
    name: "suit",
    price: 550,
    color: "red",
    catagories:"woman-clothes",
    img:"https://m.media-amazon.com/images/I/71x63IcatQL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: 11,
    name: "suit",
    price: 600,
    color: "black",
    catagories:"woman-clothes",
    img:"https://m.media-amazon.com/images/I/51057pvPshL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id: 12,
    name: "T-shirt",
    price: 250,
    color: "white",
    catagories:"woman-clothes",
    img:"https://m.media-amazon.com/images/I/61UgUZXXIbL._SY879_.jpg"
  }
]


function App() {
const FilterData = product.filter((data) => data.name === "T-shirt")
console.log(FilterData);

  const Render_List = FilterData.map(
    (item) => 
    <div className='m-2'>
      <div className="shadow-xl shadow-grey-900">
        <div className="object-fill">
        <img src={item.img} alt="" className="h-[300px] w-[250px] object-contain  "/>
        </div>
        <div className="p-4">
          <h1 className="font-bold text-2xl">{item.name}</h1>
          <p>{item.color}</p>
          <span>{item.price}</span>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <ul className='flex justify-center items-center h-screen'>
        {Render_List}</ul> 
    </>
  );
}

export default App;
