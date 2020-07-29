$(document).ready(function(){
    var div1 = document.getElementById("main").offsetTop;
    var div2 = document.getElementById("abilities").offsetTop;
    var div3 = document.getElementById("ultimate").offsetTop;
    var div4 = document.getElementById("author").offsetTop;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    scrollTop+=10;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      document.getElementById("item4").src = "images/navbar/1.png";
    }
    else if (scrollTop >= div3) {
       document.getElementById("item3").src = "images/navbar/1.png";
    }
    else if (scrollTop >= div2) {
       document.getElementById('item2').src = "images/navbar/1.png";
    }
    else if (scrollTop >= div1) {
       document.getElementById('item1').src = "images/navbar/1.png";
    }
    $(window).scroll(function(){
        $(".image1").css("opacity", 1 - $(window).scrollTop() / $('.image1').height());
        div1 = document.getElementById("main").offsetTop;
        div2 = document.getElementById("abilities").offsetTop;
        div3 = document.getElementById("ultimate").offsetTop;
        div4 = document.getElementById("author").offsetTop;
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          scrollTop+=10;
        //console.log(scrollTop+" "+div1+" "+div2+" "+div3+" "+div4);
        if ((window.innerHeight + window.scrollY + 300) >= document.body.offsetHeight) {
           document.getElementById("item1").src = "images/navbar/empty.png";
           document.getElementById('item2').src = "images/navbar/empty.png";
           document.getElementById("item3").src = "images/navbar/empty.png";
           document.getElementById("item4").src = "images/navbar/1.png";
        }
        else if (scrollTop >= div3) {
           document.getElementById("item1").src = "images/navbar/empty.png";
           document.getElementById('item2').src = "images/navbar/empty.png";
           document.getElementById("item3").src = "images/navbar/1.png";
           document.getElementById("item4").src = "images/navbar/empty.png";
        }
        else if (scrollTop >= div2) {
           document.getElementById("item1").src = "images/navbar/empty.png";
           document.getElementById('item2').src = "images/navbar/1.png";
           document.getElementById("item3").src = "images/navbar/empty.png";
           document.getElementById("item4").src = "images/navbar/empty.png";
        }
        else if (scrollTop >= div1) {
           document.getElementById('item1').src = "images/navbar/1.png";
           document.getElementById('item2').src = "images/navbar/empty.png";
           document.getElementById("item3").src = "images/navbar/empty.png";
           document.getElementById("item4").src = "images/navbar/empty.png";
        }
    });
});
