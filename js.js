
// class producto {
//     constructor(nombre, precio, stock, cantidad, vendido){
//         this.nombre = nombre;
//         this.precio = parseFloat(precio);
//         this.stock = true;
//         this.cantidad = parseFloat(cantidad);
//         this.vendido = false;
//     }
//      iva() {this.precio = this.precio * 1.21;
// }
// vender(){this.vendido= true;
// if (this.vendido == true){
//     this.cantidad = this.cantidad - 1;
// }
// }
// }

// const p1 = new producto( "Nike", 1000, true, 5, false);
// const p2 = new producto("Adidas", 900, true, 5, false);
// const p3 = new producto("Puma", 900, true, 5, false);
// const p4 = new producto("Rebook", 700, true, 5, false);
// const p5 = new producto("Fila", 800, true, 8, false);
// const p6 = new producto("Rift", 600, false , 9, false);
// const p7 = new producto("Pony", 600, false, 10, false);
// p1.iva();
// p2.iva();
// p3.iva();
// p4.iva();
// p5.iva();
// p6.iva();
// p7.iva();
// p7.vender();
// // Si se agrega un p(num).vender, se activa el metodo vender y se resta uno a la cantidad de productos.
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);
// console.log(p5);
// console.log(p6);
// console.log(p7);

// console.log("perdon por matar un gatito")


// ------------------------------------------------------------------
// Calcular horas
// var total=0;

// do{
//     var Semana= prompt("Cuantas horas trabajaste?");
// if (Number(Semana)== Semana){
//   total= total + Number(Semana);
// }

// else{
// if (Semana!=undefined){
//     alert(Semana + "No es un valor numerico");

// }
// }
// }
// while(Semana !=undefined);

// alert(`La suma es ${total}`);


// ------------------------------------------------------------------


class campeon {
    constructor(nombre, vida, daño){
        this.nombre = nombre;
        this.vida = parseInt(vida);
        this.daño = parseInt(daño);
    }
}

const campeones= [];
campeones.push(new campeon("ekko", 100, 10));
campeones.push(new campeon("illaoi", 100, 10));
// campeones.push(new campeon("jinx", 100, 10));
// campeones.push(new campeon("lulu", 100, 10));
// campeones.push(new campeon("olaf", 100, 10));
// campeones.push(new campeon("poppy", 100, 10));
// campeones.push(new campeon("sejuani", 100, 10));


// Ekko vs illaoi
var ataque=document.getElementById("attack_ekko");
ataque.addEventListener("click", function(){
    ataque=(campeones[1].vida - campeones[0].daño);
    while(campeones[1].vida>0){
        campeones[1].vida=ataque;
        if (ataque<=0){
            campeones[1].vida=10;
            alert("Ganaste");
           
            break;
        }
      break
      }
        if(campeones[0].vida<=0){
            alert("Ganaste");
           
        }
    console.log("La vida de " + campeones[1].nombre + " es " + ataque);

});



// Illaoi vs Ekko
var ataque=document.getElementById("attack_illaoi");
ataque.addEventListener("click", function(){
    ataque=(campeones[0].vida - campeones[1].daño);
    while(campeones[0].vida>0){
        campeones[0].vida=ataque;
        if (ataque<=0){
            campeones[0].vida=10;
            alert("Ganaste");
           
            break;
        }
      break
      }
        if(campeones[0].vida<=0){
            alert("Ganaste");
           
        }
    console.log("La vida de " + campeones[0].nombre + " es " + ataque);

});

var curar=document.getElementById("heal_illaoi");
curar.addEventListener("click", function(){
    curar=(campeones[1].vida + 10);
    while(campeones[1].vida!=100){
        campeones[1].vida=curar;
        alert("Pocion: Tu vida es " + campeones[1].vida);
        if (curar>=100){
            campeones[1].vida=90;
            alert("Tu vida esta completa");
         
            break;
        }
break;
if  (curar<=0){
    alert("Pocion: Tu vida es " + campeones[1].vida);
    break;
}
        }});
