'use strict';

//外部Javascriptファイル
//index.htmlにスライドショーを追加
const images=['images/keyvisual.jpg','images/keyvisual2.jpg','images/keyvisual3.jpg'];
let current=0;

function changeImage(num){
    if(current+num>=0&&current+num<images.length){
        current+=num;
        document.getElementById('main_image').src=images[current];
    }
};

document.getElementById('prev').onclick=function(){
    changeImage(-1);
};
document.getElementById('next').onclick=function(){
    changeImage(1);
};
