const latLang = "lat=18.5679146&lng=73.91434319999999";

export const COMPANY_LOGO =
  "https://img.freepik.com/free-vector/pizzeria-emblem-design_1176-233.jpg?w=740&t=st=1704703727~exp=1704704327~hmac=73459d409ba24e137deedf33556d18ac149cc7557d20117411ffa0ee9d79734a";
export const FOOD_IMG =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";
// export const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5789792&lng=73.9085889&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const ACTUAL_SWIGGY_API = `https://www.swiggy.com/dapi/restaurants/list/v5?${latLang}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
export const SWIGGY_API = `https://api.allorigins.win/raw?url=${encodeURIComponent(
  ACTUAL_SWIGGY_API
)}`;

export const ERROR_IMG =
  "https://img.freepik.com/free-vector/warning-concept-illustration_114360-1551.jpg?w=740&t=st=1705479461~exp=1705480061~hmac=c4a9e1128fa2e9f39b9d2ae9bfd6888eae22b1d4afb902e099e7b84b409d48ae";

export const DISCOUNT_LOGO = 
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart";

export const CRAOUSEL_IMG =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/";

export const FOOD_MENU =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const VEG_LOGO =
  "https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png";

export const NONVEG_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png";

export const MENU = "";
