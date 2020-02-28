window.onload=function(){
    setTimeout(logo, 1000);
    setTimeout(menu1, 1000);
    setTimeout(menu2, 1000);
    setTimeout(media, 1000);
    setTimeout(indi, 1000);
    setTimeout(content, 1500);
    setTimeout(img, 1500);
    setTimeout(nav, 1500);
}

function logo(){
    var h=document.querySelector('#logo h1');
    h.style.opacity='1';
}

function menu1(){
    var l=document.querySelectorAll('#menu1 li');
    var i;
    for(i=0; i<l.length; i++){
        l[i].style.opacity='1';
        l[i].style.transform='translate(0)';
    }
}

function menu2(){
    var l=document.querySelectorAll('#menu2 li');
    var i;
    for(i=0; i<l.length; i++){
        l[i].style.opacity='1';
        l[i].style.transform='translate(0)';
    }
}

function media(){
    var l=document.querySelectorAll('#media li');
    var i;
    for(i=0; i<l.length; i++){
        l[i].style.opacity='1';
        l[i].style.transform='translate(0)';
    }
}

function indi(){
    var l=document.querySelectorAll('#indi li');
    var i;
    for(i=0; i<l.length; i++){
        l[i].style.opacity='1';
        l[i].style.transform='translate(0)';
    }
}

function content(){
    var he=document.querySelector('#content h1')
    he.style.opacity='1';
    he.style.transform='translate(0)';
    var p=document.querySelector('#content p')
    p.style.opacity='1';
    p.style.transform='translate(0)';
    var he=document.querySelector('content button')
    b.style.opacity='1';
    b.style.transform='translate(0)';
}

function img(){
    var im=document.querySelector('#img');
    im.style.opacity='1';
    im.style.transform=translate(0);
}

function nav(){
    var n=document.querySelector('#navigator');
    n.style.opacity='1';
    n.style.transform=translate(0);
}