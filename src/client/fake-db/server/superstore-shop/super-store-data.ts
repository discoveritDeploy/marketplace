import bazarReactDatabase from "client/data/bazar-react-database";

export const mainCarouselData = [
	{
		title: "Cambiando la forma de comprar y vender inventario en Latinoamérica",
		photoUrl: "/assets/images/homeImage.png",
		description:
      "",
		buttonText: "Unite como Marca",
		buttonLik: "#",
		buttonText2: "Unite como Mayorista",
		buttonLik2: "#",
	}
];

export const flashDealsData = [
	{
		price: 250,
		title: "Smart watch black",
		imgUrl: "/assets/images/categoryImg.png",
		discount: 25,
		id: 4674163016,
		rating: 4,
	},
	{
		price: 350,
		title: "Smart watch black",
		imgUrl: "/assets/images/categoryImg.png",
		discount: 15,
		id: 1786818620,
		rating: 3,
	},
	{
		price: 150,
		title: "Smart watch black",
		imgUrl: "/assets/images/categoryImg.png",
		discount: 28,
		id: 5287174158,
		rating: 5,
	},
	{
		price: 180,
		title: "Smart watch black",
		imgUrl: "/assets/images/categoryImg.png",
		discount: 21,
		id: 6708885936,
		rating: 4,
	},
	{
		price: 250,
		title: "Smart watch black",
		imgUrl: "/assets/images/categoryImg.png",
		discount: 25,
		id: 8287533170,
		rating: 4,
	},
	{
		price: 180,
		title: "Smart watch black",
		imgUrl: "/assets/images/categoryImg.png",
		discount: 21,
		id: 9812971972,
		rating: 4,
	},
	{
		price: 150,
		title: "Smart watch black",
		imgUrl: "/assets/images/categoryImg.png",
		discount: 28,
		id: 3518328281,
		rating: 5,
	},
	{
		price: 350,
		title: "Smart watch black",
		imgUrl: "/assets/images/categoryImg.png",
		discount: 15,
		id: 2485294764,
		rating: 3,
	},
	{
		price: 299,
		title: "Smart watch black",
		imgUrl: "/assets/images/categoryImg.png",
		discount: 19,
		id: 2427928893,
		rating: 5,
	},
	{
		price: 180,
		title: "Smart watch black",
		imgUrl: "/assets/images/categoryImg.png",
		discount: 21,
		id: 2124324879,
		rating: 4,
	},
];

export const topCategoryList = [
	{
		title: "Headphone",
		subtitle: "3k orders this week",
		categoryUrl: "/",
		imgUrl: "/assets/images/banners/categoryImg.png",
	},
	{
		title: "Watch",
		subtitle: "3k orders this week",
		categoryUrl: "/",
		imgUrl: "/assets/images/categoryImg.png",
	},
	{
		title: "Sunglass",
		subtitle: "3k orders this week",
		categoryUrl: "/",
		imgUrl: "/assets/images/categoryImg.png",
	},
	{
		title: "Headphone",
		subtitle: "3k orders this week",
		categoryUrl: "/",
		imgUrl: "/assets/images/categoryImg.png",
	},
	{
		title: "Watch",
		subtitle: "3k orders this week",
		categoryUrl: "/",
		imgUrl: "/assets/images/categoryImg.png",
	},
];

export const topRatedList = [
	{
		price: 3300,
		reviewCount: 49,
		title: "Camera",
		imgUrl: "/assets/images/products/camera-1.png",
		discount: 8,
		id: 2294256829,
		rating: 4,
	},
	{
		price: 400,
		reviewCount: 20,
		title: "Shoe",
		imgUrl: "/assets/images/products/shoes-2.png",
		discount: 5,
		id: 4295570149,
		rating: 4.75,
	},
	{
		price: 999,
		reviewCount: 65,
		title: "Phone",
		imgUrl: "/assets/images/products/mobile-1.png",
		discount: 5,
		id: 5676950804,
		rating: 5,
	},
	{
		price: 999,
		reviewCount: 75,
		title: "Watch",
		imgUrl: "/assets/images/products/watch-1.png",
		discount: 6,
		id: 1674789677,
		rating: 5,
	},
];

export const topRatedBrandList = [
	{
		imgUrl: "/assets/images/products/london-britches.png",
		title: "London Britches",
		productUrl: "/",
	},
	{
		imgUrl: "/assets/images/products/jim and jiko.png",
		title: "Jim & Jago",
		productUrl: "/",
	},
];

export const newArrivalsList = [
	{
		price: 150,
		title: "Sunglass",
		imgUrl: "/assets/images/products/imagegoggles.png",
		discount: 8,
		id: 1670078035,
		rating: 5,
	},
	{
		price: 250,
		title: "Makeup",
		imgUrl: "/assets/images/products/lipstick (2).png",
		discount: 8,
		id: 3302401429,
		rating: 4,
	},
	{
		price: 350,
		title: "Smart Watch",
		imgUrl: "/assets/images/products/bgwatch.png",
		discount: 10,
		id: 814272833,
		rating: 5,
	},
	{
		price: 15,
		title: "Lipstick",
		imgUrl: "/assets/images/products/lipstick (1).png",
		discount: 5,
		id: 8169421085,
		rating: 4,
	},
	{
		price: 55,
		title: "Green plant",
		imgUrl: "/assets/images/products/lipstick (4).png",
		discount: 7,
		id: 8398582292,
		rating: 2,
	},
	{
		price: 535,
		title: "Bonsai tree",
		imgUrl: "/assets/images/products/lipstick (3).png",
		discount: 6,
		id: 6046531880,
		rating: 5,
	},
];

export const carBrandList = [
	"ferrari",
	"tesla",
	"bmw",
	"toyota",
	"mini",
	"ford",
];

export const mobileBrandList = [
	"apple",
	"dell",
	"xiaomi",
	"asus",
	"sony",
	"acer",
];
export const mobileShopList = ["herman miller", "otobi", "hatil", "steelcase"];

export const opticsBrandList = [
	"ray-ban",
	"zeiss",
	"occular",
	"apple",
	"titan",
];
export const opticsShopList = ["herman miller", "zeiss", "hatil", "steelcase"];

export const bottomCategoryList = [
	{
		name: "Automobile",
		imgUrl: bazarReactDatabase[13 + 100].imgUrl,
	},
	{
		name: "Car",
		imgUrl: bazarReactDatabase[2 * 13 + 100].imgUrl,
	},
	{
		name: "Fashion",
		imgUrl: bazarReactDatabase[3 * 13 + 100].imgUrl,
	},
	{
		name: "Mobile",
		imgUrl: bazarReactDatabase[4 * 13 + 100].imgUrl,
	},
	{
		name: "Laptop",
		imgUrl: bazarReactDatabase[5 * 13 + 100].imgUrl,
	},
	{
		name: "Desktop",
		imgUrl: bazarReactDatabase[6 * 13 + 100].imgUrl,
	},
	{
		name: "Tablet",
		imgUrl: bazarReactDatabase[7 * 13 + 100].imgUrl,
	},
	{
		name: "Fashion",
		imgUrl: bazarReactDatabase[8 * 13 + 100].imgUrl,
	},
	{
		name: "Electronics",
		imgUrl: bazarReactDatabase[9 * 13 + 100].imgUrl,
	},
	{
		name: "Furniture",
		imgUrl: bazarReactDatabase[10 * 13 + 100].imgUrl,
	},
	{
		name: "Camera",
		imgUrl: bazarReactDatabase[11 * 13 + 100].imgUrl,
	},
	{
		name: "Electronics",
		imgUrl: bazarReactDatabase[100].imgUrl,
	},
];


export const serviceList = [
	{
		icon: "Truck",
		title: "Worldwide Delivery",
		description: "Despreocupate de coordinar"
	},
	{
		icon: "Shield",
		title: "Costo 0%",
		description: "Tu negocio actual, digitalizado sin costo"
	},
	{
		icon: "CreditCardVerified",
		title: "Cientos de marcas",
		description: "Navega cientos de productos sin moverte"
	},
];

export const usersReviews = [
	{
		review: "Hacer un pedido para mi local a los distribuidores o fabricantes de marcas puede demorar muchas horas cada vex que quiero reponer stock o buscar nuevos productos. En Discoverit encuentro todos los productos que quiero en un solo lugar y esta integrado con nuestra información de facturación. Esto me ahorra mucho tiempo.",
		userName: "Juana Isaoralde",
		category: "Home y Deco",
		date: new Date(),
		imgUrl: '/assets/images/randomUser1.png',
		alt: "User writing in her pc"
	},
	{
		review: "Hacer un pedido para mi local a los distribuidores o fabricantes de marcas puede demorar muchas horas cada vex que quiero reponer stock o buscar nuevos productos. En Discoverit encuentro todos los productos que quiero en un solo lugar y esta integrado con nuestra información de facturación. Esto me ahorra mucho tiempo.",
		userName: "Juana Isaoralde",
		category: "Home y Deco",
		date: new Date(),
		imgUrl: '/assets/images/randomUser1.png',
		alt: "User writing in her pc"
	},
	{
		review: "Hacer un pedido para mi local a los distribuidores o fabricantes de marcas puede demorar muchas horas cada vex que quiero reponer stock o buscar nuevos productos. En Discoverit encuentro todos los productos que quiero en un solo lugar y esta integrado con nuestra información de facturación. Esto me ahorra mucho tiempo.",
		userName: "Juana Isaoralde",
		category: "Home y Deco",
		date: new Date(),
		imgUrl: '/assets/images/randomUser1.png',
		alt: "User writing in her pc"
	},
	{
		review: "Hacer un pedido para mi local a los distribuidores o fabricantes de marcas puede demorar muchas horas cada vex que quiero reponer stock o buscar nuevos productos. En Discoverit encuentro todos los productos que quiero en un solo lugar y esta integrado con nuestra información de facturación. Esto me ahorra mucho tiempo.",
		userName: "Juana Isaoralde",
		category: "Home y Deco",
		date: new Date(),
		imgUrl: '/assets/images/randomUser1.png',
		alt: "User writing in her pc"
	}
]

export const dataKpiOrders = [
	{
		title: "Ordenes Totales",
		amount: 10000
	},
	{
		title: "Ordenes Abiertas",
		amount: 3000
	},
	{
		title: "Ordenes Pendientes",
		amount: 1500
	},
	{
		title: "Ordenes Cerradas",
		amount: 5500
	},
]