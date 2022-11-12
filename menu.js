function myFunction(){
    let x = document.getElementById('myTopnav');
    if (x.className === "top-nav"){
        x.className += " responsive";//espace pour eviter que la classe ne css sois fause pour notre graphisme
    }else {
        x.className = "top-nav";
    }
}