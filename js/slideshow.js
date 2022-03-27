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
]

var index = 0;

function sau() {
    index++;
    if (index >= array_hinh.length) {
        index = 0;
    }
    var hinh = document.getElementById('show');
    hinh.src = array_hinh[index];
    document.getElementById('dem').innerHTML = index + "/9";
}

function truoc() {
    index--;
    if (index < 0) {
        index=9;
    }
    var hinh = document.getElementById('show');
    hinh.src = array_hinh[index];
    document.getElementById('dem').innerHTML = index + "/9";
}

setInterval("sau()",3000);
