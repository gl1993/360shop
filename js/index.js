window.onload=function(){
	var swiper = new Swiper('.banner .swiper-container',{
		pagination: '.banner .swiper-pagination',
        paginationClickable: true,
        autoplay:2000,
	});
	var swiper1 = new Swiper('.tuijian .swiper-container', {
        slidesPerView : 3,
        slidesPerGroup : 3,
    }); 
}