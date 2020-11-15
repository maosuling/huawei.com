window.onload=function(){
    var div=document.querySelector('.idx-banner')
    var img = document.getElementById('img')
    var lis =document.querySelectorAll('.page>a')
    var prev=document.querySelector('.prev')
    var next=document.querySelector('.next')

    var index=4;

    function change() {
        img.src='img/image/'+index+'.jpg';
        for (var i=0;i<lis.length;i++){
            lis[i].style.cssText='border:1px solid white';
        }

        lis[index].style.cssText='background-color:white';
    }

    function autoChange() {
        index++;
        if (index>4){
            index=0;
        }
        change();
    }

    var timer=setInterval(autoChange,5000);

    div.onmouseover=function () {
        clearInterval(timer);
    };
    div.onmouseout=function () {
        timer=setInterval(autoChange,5000);
    }

    prev.onclick=function () {
        index--;
        if(index<0)
        {
            index=4;
        }
        change();

    }
    next.onclick=function () {
        index++;
        if(index>4)
        {
            index=0;
        }
        change();

    }
    for (var i=0;i<lis.length;i++)
    {
        lis[i].id=i;
        lis[i].onclick=function () {
            index=this.id;
            change();
        }
    }

    var lists=document.querySelectorAll('.tab-list>li');
    var divs=document.querySelectorAll('.idx-elect>.good-box');

    for (var i=0;i<lists.length;i++)
    {
        lists[i].index=i;
        lists[i].onmouseover=function () {
            for (var i=0;i<lists.length;i++)
            {
                lists[i].style.cssText='border-bottom:none;color:#424242;'
            }
            lists[this.index].style.cssText='color: #ff6700;\n' +
                '    border-bottom: 2px solid #ff6700;';

            for (var j=0;j<divs.length;j++)
            {
                divs[j].style.display='none';
            }

            divs[this.index].style.display='block';
        }
    }
}