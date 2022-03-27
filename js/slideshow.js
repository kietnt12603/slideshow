var array_hinh = [
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg",
    "image/5.jpg",
    "image/6.jpg",
    "image/7.jpg",
    "image/8.jpg",
    "image/9.jpg",
    "image/10.jpg",
    "image/11.jpg",
    "image/12.jpg",
    "image/13.jpg",
    "image/14.jpg",
    "image/15.jpg",
    "image/16.jpg",
    "image/17.jpg",
    "image/18.jpg",
    "image/19.jpg",
    "image/20.jpg",
]

var index = 0;

function sau() {
    index++;
    if (index >= array_hinh.length) {
        index = 0;
    }
    var hinh = document.getElementById('show');
    hinh.src = array_hinh[index];
    document.getElementById('dem').innerHTML = index + "/19";
}

function truoc() {
    index--;
    if (index < 0) {
        index=19;
    }
    var hinh = document.getElementById('show');
    hinh.src = array_hinh[index];
    document.getElementById('dem').innerHTML = index + "/19";
}

setInterval("sau()",2000);
