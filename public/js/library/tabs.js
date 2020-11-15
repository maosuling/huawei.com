// const btns = $('.links .tabBtn');
// const boxs = $('.set-meal-ajax .box');
function tabs(btns,boxs){
    btns.on('mouseover', function() {
        let i = btns.index(this);
        $(this).addClass('hover').siblings().removeClass('hover');
        boxs.eq(i).addClass('show').siblings().removeClass('show');
    });
}

export default tabs;
