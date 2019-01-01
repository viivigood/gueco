function productBannerHover(div){

	console.log(div.querySelector('.product-banner-img'));
	img=div.querySelector('.product-banner-img');
	rct=div.querySelector('.rectriangle-left')
	img.style.opacity=1;
	rct.style.background="#F90101";
}

function productBannerOut(div){

	console.log(div.querySelector('.product-banner-img'));
	img=div.querySelector('.product-banner-img');
	rct=div.querySelector('.rectriangle-left')
	img.style.opacity=0.5;
	rct.style.background="rgba(128,128,128,0.5)";
}

