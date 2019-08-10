import http from '../untils/http.js';
//buy促销专场
export const shop_buy_api=(time_code="31291c72c8cd17a5f5ef594c457d4358")=>http('get',"/mapi7/index.php?c=promotion&a=hot-promotion&imageSize=b&udid=f2716c8fa7780f9f6d900b144cdaaa2c&permanent_id=20190801192635825681959475282527147&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&timestamp=1565008969785",{time_code:time_code});
//buy即刻秒杀
export const shop_second_api=()=>http('get',"/api/touch/optimization/feed?page=0&udid=f2716c8fa7780f9f6d900b144cdaaa2c&permanent_id=20190801192635825681959475282527147&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&ct=touch&cv=1.0&ts=1565061001707&tc=818de0d66d7b9c84808b997ccc36954b")
//more页面
export const shop_more_api=()=>http('get','/mapi7/index.php?c=promotion&a=hot-promotion&imageSize=b&udid=f2716c8fa7780f9f6d900b144cdaaa2c&permanent_id=20190801192635825681959475282527147&client_version=1.0&user_client=touch&app_id=touch&h5_server=1&timestamp=1565076210212&time_code=a05278adfdb070c4b1105e0e727b495f');
//list页面
export const shop_list_api=(id)=>http('get','/promotion_ajax.php?collection_promo_id='+id)
//搜索接口
export const shop_search_api=(collection_promo_id,keyword)=>http('get','/promotion_ajax.php?collection_promo_id='+collection_promo_id,{keyword:keyword})
//shopping页面
export const shop_shopping_api=(id)=>http('get',"/h5ajax.php?action=get_product_info&pid="+id)
