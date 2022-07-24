function responsive_menu(){
    var e= document.getElementById('menu_small');
    if(e.className === 'sideHeading'){
        e.className += " responsive";
    }else{
        e.className = 'sideHeading';
    }
}