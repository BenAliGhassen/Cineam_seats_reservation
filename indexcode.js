function display_Img(){
    const cont = document.querySelector(".main");
    const bt = document.getElementById("btn");
    const before = document.querySelector(".main img");
    if(before!=null){
        before.remove();
    }

    const val = document.getElementById("liste").value;
    console.log(val);
    const img = document.createElement("IMG");
    img.setAttribute("src",val+".jpg");
    
    img.classList.add("movie_poster")
    cont.appendChild(img);
    if(val == "none"){
        bt.style.visibility="hidden";
    }else  
    {
         bt.style.visibility="visible";
        }
        if(val=="Openhimmer"){
            localStorage.setItem("x",12);
        }else if(val=="Barbie"){
            localStorage.setItem("x",10);
        }else localStorage.setItem("x",9);
}
function create(x) {
    const Bcont = document.querySelector(".cinema");
    for (var i = 0; i < 3 ; i++) {
        const cont = document.createElement("div");
        cont.classList.add("containe");
        for(j=0;j<=x;j++){
            const seats = document.createElement("div");
            seats.classList.add("seat");
            cont.appendChild(seats);
            let y=Math.random()* (9 - 4) + 4;
            if(x%Math.round(y) ==0){
                seats.classList.add("reserved");
            }
        }
        Bcont.appendChild(cont);
    }
}
const Bcont = document.querySelector(".cinema");
if(Bcont!=null){
create(localStorage.getItem("x"));
const price = document.getElementById('price');
const sell_seats = document.getElementById('N_seats');
function update(){
const ret = document.querySelectorAll(".containe .seat.selected");
const ret_val = ret.length;
price.innerText = ret_val * 15;
sell_seats.innerText = ret_val;
}
Bcont.addEventListener("click",(e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        update();
    }
});
}


