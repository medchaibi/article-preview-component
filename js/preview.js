let show = document.getElementById('actshare')
let display = 0;
function hideshow()
{
    if( display == 1 ){
        show.style.display = 'flex';
        display = 0 ;
    }
    else{
        show.style.display = 'none';
        display = 1 ;
    }
}