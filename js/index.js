// $(document).ready(function () {
//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar').toggleClass('active');
//         $(this).toggleClass('active');
//     });
// });

// menu.onclick(function =>(
//     menu.style.left='280px'
// );)
function left(){
    // menu.style.left='0px'
    var menu= document.getElementById("sidebar")
    if( menu.style.left = '-280px'){
        menu.style.left = '0px'
    }
    // else if( menu.style.left = '0px'){
    //     menu.style.left = '-280px'
    // }
    else{
        menu.style.backgroundColor="red"
    }
}
let dismiss=document.getElementById("dismiss")
dismiss.onclick=function (){
    var menu= document.getElementById("sidebar")
    menu.style.left="-300px"
}