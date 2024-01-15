const latLang = "lat=18.5789792&lng=73.9085889";

export const COMPANY_LOGO = "https://img.freepik.com/free-vector/pizzeria-emblem-design_1176-233.jpg?w=740&t=st=1704703727~exp=1704704327~hmac=73459d409ba24e137deedf33556d18ac149cc7557d20117411ffa0ee9d79734a";
export const FOOD_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";
// export const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5789792&lng=73.9085889&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";


export const ACTUAL_SWIGGY_API = `https://www.swiggy.com/dapi/restaurants/list/v5?${latLang}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
export const SWIGGY_API = `https://api.allorigins.win/raw?url=${encodeURIComponent(ACTUAL_SWIGGY_API)}`