//1.Class Movie
/*a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
 a String representing the studio, and a String representing the rating as its arguments,
 and sets the respective class properties to these values.*/
 class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movieDetails = new movie("Vikram","Cinepolis", "pg-12");
console.log(movieDetails);
/*output =>movie {title: 'Vikram', studio: 'Cinepolis', rating: 'pg-12'}
rating : "5"
studio : "Cinepolis"
title  : "Vikram"
*/

/*b)Write a method getPG, which takes an array of base type Movie as its argument, and returns a
 new array of only those movies in the input array with a rating of "PG". 
You may assume the input array is full of Movie instances. The returned array need not be full.*/
class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Moviee("Vikram", "Raj kamal films", "PG");
let moviee2 = new Moviee("Sita Raman", "Vyjayanthi Movies", "V");
let movie3 = new Moviee("The Avengers", "Marvel Studios", "PG");
let movie4 = new Moviee("Thunivu", "Zee studios", "PG-13");
let movie5 = new Moviee("The rise of Gru", "Illumination", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies); 

/* output:
Moviee {title: 'Vikram', studio: 'Raj kamal films', rating: 'PG'}
Moviee {title: 'The Avengers', studio: 'Marvel Studios', rating: 'PG'}
Moviee {title: 'The rise of Gru', studio: 'Illumination', rating: 'PG'}*/

/*c) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13*/

class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let TheRiseOfGru = new Moviez("The Rise of Gru", "Illumination", "PG-13");

    console.log(TheRiseOfGru);

    /*output
    Moviez {title: 'The Rise of Gru', studio: 'Illumination', rating: 'PG-13'}
rating:"PG-13"
studio:"Illumination"
title:"The Rise Of Gru"*/

//------------------------------------------------------------------


//2. Class Circle

class Circle {
    constructor(radius = 1.0, color = "red") {
      this._radius = radius;
      this._color = color;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    get color() {
      return this._color;
    }
  
    set color(color) {
      this._color = color;
    }
  
    toString() {
      return `Circle [radius = ${this._radius} , color = ${this._color}]`;
    }
  
    getArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  const circle1 = new Circle(2, "green");
  const circle2 = new Circle(5, "Yellow");
  
  console.log(circle1.toString());
  console.log("Area:", circle1.getArea());
  console.log("Circumference:", circle1.getCircumference());
  
  console.log(circle2.toString());
  console.log("Area:", circle2.getArea());
  console.log("Circumference:", circle2.getCircumference());
 
  /*output :
  Circle [radius = 2 , color = green]
OOPS.js:122 Area: 12.566370614359172
OOPS.js:123 Circumference: 12.566370614359172
OOPS.js:125 Circle [radius = 5 , color = Yellow]
OOPS.js:126 Area: 78.53981633974483
OOPS.js:127 Circumference: 31.41592653589793*/

//-----------------------------------------------------------

//3. Write a person class to hold all the details.
class Person {
    constructor(firstName, lastName, age, department, email,contactNo,country){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.contactNo=contactNo;
        this.country=country;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        contactNum: ${this.contactNum}
        country: ${this.country}`;
    }
}
let person1 = new Person("Faiza", "Afrin",26, "Developer", "faiza123@gmail.com", 9660508969864, "SaudiArabia") ;
let person2 = new Person("Mohamed","Asik",32, "Business Analyst", "asik123@gmail.com", 447986543674,"London");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());
/* output:
Name: Faiza Afrin
        age: 26
        department: Developer
        email: faiza123@gmail.com
        contactNum: undefined
        country: SaudiArabia
OOPS.js:163 Name: Mohamed Asik
        age: 32
        department: Business Analyst
        email: asik123@gmail.com
        contactNum: undefined
        country: London */
    
//-----------------------------------------------------------------

//4. write a class to calculate the uber prize
class UberPrice {
    constructor(duration, distance, baseFare, costPerMile) {
      this.duration = duration;
      this.distance = distance;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      
    }
  
    totalPrice() {
      return this.baseFare + (this.duration * this.costPerMile) + this.distance;
    }
  }
  
  const myUber = new UberPrice(10,15,25,70);
  console.log(myUber.totalPrice());
  //output =>740