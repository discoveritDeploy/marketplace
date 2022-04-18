import Mock from "./mock";
import "./server/grocery2-shop/carouselsDB";
import "./server/grocery2-shop/navigationDB";
import "./server/grocery2-shop/sectionDB";
import "./server/superstore-shop/carouselsDB";
import "./server/superstore-shop/sectionsDB";
import "./server/fashion-shop/sectionDB";
import "./server/fashion-shop/carouselsDB";
import "./server/gadget-shop/sectionsDB";
import "./server/gadget-shop/carouselsDB";
import "./server/grocery1-shop/productsDB";
import "./server/grocery1-shop/servicesDB";
import "./server/grocery1-shop/navigationDB";
import "./server/healthbeauty-shop/navigationDB";
import "./server/healthbeauty-shop/productsDB";
import "./server/healthbeauty-shop/servicesDB";
import "./server/gift-shop/navigationDB";
import "./server/gift-shop/productsDB";
import "./server/gift-shop/servicesAndCategoriesDB";
import "./server/furniture-shop/navigationDB";
import "./server/furniture-shop/productsDB";
import "./server/grocery3-shop/productsDB";
import "./server/related-products/productsDB";

Mock.onAny().passThrough();
