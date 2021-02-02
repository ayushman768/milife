function myClick() {
    var x;
    x = document.querySelector('.navigation');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


function mySelect(evt, mypro) {
    var i, product, btn, def;
    def = document.querySelector('.default');
    product = document.getElementsByClassName('product');
    for (i = 0; i < product.length; i++) {
        product[i].style.display = "none";
    }
    btn = document.getElementsByClassName('tab_btn');
    for (i = 0; i < btn.length; i++) {
        btn[i].className = btn[i].className.replace(" active", "");

    }
    document.getElementById(mypro).style.display = "block";
    def.style.display = "none";
    evt.currentTarget.className += " active";
}