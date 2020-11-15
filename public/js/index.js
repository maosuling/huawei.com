import './library/jquery.js';
import './library/jquery.lazyload.min.js';
import banner1 from './library/banner1.js';
import banner2 from './library/banner2.js';
// import banner4 from './library/banner3.js';
import { baseUrl } from './library/config.js';

(function() {
    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getProducts`,
        dataType: "json",
        success: function(res) {
            // 获得数据后进行字符串拼接
            let tempLi = '';
            res.forEach((elm, i) => {

                let picture = JSON.parse(elm.picture);
                // console.log(picture);
                // console.log(elm);

                tempLi += `<li class="margin0 item" style="margin-right:10px;">
                <a href="../html/product.html?id=${elm.id}">
                    <div class="six-list-top">
                        <p class="six-first-p1">
                            <span>高清双摄</span>
                        </p>
                        <p class="six-second-p p-picture">
                            <img class="lazy" data-original="img/${picture[0].src}" alt="">
                        </p>
                        <p class="third-p1 p-title"> ${elm.title}</p>
                        <p class="third-p2 p-subtitle">${elm.subtitle}</p>
                        <p class="third-p3 p-price">￥${elm.price}</p>
                    </div> 
                </a>
            </li>`;
            });

            $('.list').append(tempLi);
            $(".lazy").lazyload({effect: "fadeIn"});

            const banner = $('.slider');
            const picLi = $('.idx-banner .banner-box img');
            const btnLi = $('.idx-banner .page span');
            const leftArrow = $('.prev');
            const rightArrow = $('.next');
            banner1(banner, picLi, btnLi,rightArrow,leftArrow);

            const banner3 = $('.slider3');
            const picLi3 = $('.idx-banner .banner-box2 img');
            const btnLi3 = $('.idx-banner .page2 span');
            banner2(banner3, picLi3, btnLi3);

            // const rightArrow1 = $('.prev2');
            // const leftArrow1 = $('.next2');
            // banner4(rightArrow1, leftArrow1)
            $('.prev2').on('click',function(){
                $('.slider5').css('left','-1200px');
            });
            $('.next2').on('click',function(){
                $('.slider5').css('left','1200px');
            });
        }
    });
})();