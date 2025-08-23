//  class => first letter of the class is always capital...

   // in class the constructor always run first...constructor object ko initialize krta hai..




class Footballers{

myConstructor(name,club,jersy,city){

this.name = name;
this.club = club;
this.jersy = jersy;
this.city = city;

}

play(text){
    let h1 = document.createElement("h1")
    h1.textContent = text;
    h1.style.color = "yellow"
    document.body.appendChild(h1)
}

}

let f1 = new Footballers("Messiii" , "Barca" , 10 , "Argentine")









