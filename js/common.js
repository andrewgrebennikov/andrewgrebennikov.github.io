$(document).ready(function(){$(".slider__list").slick({nextArrow:'<button type="button" class="slick-next"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>',prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i></button>'}),$(".tabs__controls-link").on("click",function(t){t.preventDefault();var e=$(this).closest(".tabs__controls-item"),a=$(".tabs__item"),s=e.data("class");a.filter(".tabs__item_"+s).add(e).addClass("active").siblings().removeClass("active")}),$(".header").sticky({topSpacing:0,zIndex:100,className:"header-sticky"}),$(".header").on("sticky-end",function(){$(".sticky-wrapper").removeAttr("style")})});