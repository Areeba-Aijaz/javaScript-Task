//  Question 2

//  var personName = prompt("What is your name?");
//  alert(`Hello ${personName},  would you like to learn some Python today?`);

//  Question 3

// var personName = prompt("What is your name?");
// document.write(personName.toUpperCase());
// document.write(personName.toLowerCase());
// document.write(personName.toTitlecase());


//  Question 4

 //index.html


//  Question 5

// var famous_person = "Albert Einstein";
// var message = "“A person who never made a mistake never tried anything new.”"
// document.write(`${famous_person} once said, ${message}`);

//  Question 6

// var person_Name = " \tAreeba\n "
// document.write(person_Name.lstrip());
// document.write(person_Name.rstrip());
// document.write(person_Name.strip());



//  Question 7

// document.write(4 + 4)
// document.write(10 - 2)
// document.write(4 * 2)
// document.write(8 / 1)


//  Question 8

// console.log(4 + 4)
// console.log(10 - 2)
// console.log(4 * 2)
// console.log(8 / 1)

//  Question 9

// var fav_num = 3;
// var message = "My favourite number is"
// document.write(`${message} ${fav_num}`)

//  Question 10

// create a for loop // <-- comment

    //   var array = ["Nabeera" , "Ayesha" , "Arbish" , "Areeba" , "Sajal"]; //array
    //     for                              // start for loop
    //     (                               // round bracket 
    //     let                              // decleared variable
    //     i                               // name for declaration
    //     =                               // assignment operator for declaration
    //     0; i<=array.length;              //length
    //     i++                               // increament 
    //     )                                 // bracket close
    //     {                                  // block strt
    //     document.write(i)                  //result
    //     }                                   //block end



//  Question 11

// var names = ["Nabeera", "Ayesha" , "Arbish" , "Areeba" , "Sajal"];
// document.write(names[0]);
// document.write(names[1]);
// document.write(names[2]);
// document.write(names[3]);
// document.write(names[4]);

//question 12

//  var names = ["Nabeera", "Ayesha" , "Arbish" , "Areeba" , "Sajal"];
//  var msg = "you are my friend";

// document.write(`${names[0]}! ${msg}`)
// document.write(`${names[1]}! ${msg}`)
// document.write(`${names[2]}! ${msg}`)
// document.write(`${names[3]}! ${msg}`)
// document.write(`${names[4]}! ${msg}`)

//  Question 13

// var array = ["bike" , "cycle" , "car"];
// document.write(`when i am going to office use ${array[2]} `); 
// document.write(`when i am going with friends using ${array[0]} `);
// document.write(`when i am go out alone i am using ${array[1]} `); .title()


//  Question 14

// var Guest_invite = ["Laiba ","Iqra ","Sana "];
// var invitation = ("Please tommorrow you must come in dinner dear! ")
// document.write(invitation+Guest_invite[0])
// document.write(invitation+Guest_invite[1])
// document.write(invitation+Guest_invite[2])

// question 15

// var Guest_invite = ["Laiba ","Iqra ","Sana "];
// var invitation = ("Please tommorrow you must come in dinner dear! ")
// document.write(invitation+Guest_invite[0])
// document.write(invitation+Guest_invite[1])
// document.write(invitation+Guest_invite[2])

// // can’t make the dinner

// document.write("can/'t make the dinner Dear!"+Guest_invite[0])
// delete(Guest_invite[0])
// Guest_invite.pop()
// Guest_invite.unshift("alia")

// //Print new invitation

// document.write(invitation+Guest_invite[0])
// document.write(invitation+Guest_invite[1])
// document.write(invitation+Guest_invite[2])

// question 16

// var Guest_invite = ["Laiba ","Iqra ","Sana "];
// var invitation = ("Please tommorrow you must come in dinner dear! ")
// document.write(invitation+Guest_invite[0])
// document.write(invitation+Guest_invite[1])
// document.write(invitation+Guest_invite[2])

// var new_msg = "BroOo!I found a bigger dinner table."
// document.write(new_msg+Guest_invite[0])
// document.write(new_msg+Guest_invite[1])
// document.write(new_msg+Guest_invite[2])

// • Add one new guest to the beginning of your array.

// Guest_invite.unshift("moona ","hiba ", "afia ")

//Print a new set of invitation messages

// document.write(invitation+Guest_invite[0])
// document.write(invitation+Guest_invite[1])
// document.write(invitation+Guest_invite[2])
// document.write(invitation+Guest_invite[3])
// document.write(invitation+Guest_invite[4])
// document.write(invitation+Guest_invite[5])

                //Question 17

// var invitation = ("Please tommorrow you must come in dinner dear! ")
// var Guest_invite = ["Laiba ","Iqra ","Sana "];
// document.write(invitation+Guest_invite[0])
// document.write(invitation+Guest_invite[1])
// document.write(invitation+Guest_invite[2])

// var new_msg = "BroOo!I found a bigger dinner table."
// document.write(new_msg+Guest_invite[0])
// document.write(new_msg+Guest_invite[1])
// document.write(new_msg+Guest_invite[2])


// • Add one new guest to the beginning of your array.

// Guest_invite.unshift("moona ","hiba ", "afia ")
// Print a new set of invitation messages

// document.write(invitation+Guest_invite[0])
// document.write(invitation+Guest_invite[1])
// document.write(invitation+Guest_invite[2])
// document.write(invitation+Guest_invite[3])
// document.write(invitation+Guest_invite[4])
// document.write(invitation+Guest_invite[5])

// // var cancel_msg = "So sorry Friends! Dinner table won't arrive in time for the dinner so i can invite only two people for dinner";

// document.write(Guest_invite[0] + cancel_msg)
// document.write(Guest_invite[1] + cancel_msg)
// document.write(Guest_invite[2] + cancel_msg)
// document.write(Guest_invite[3] + cancel_msg)
// document.write(Guest_invite[4] + cancel_msg)
// document.write(Guest_invite[5] + cancel_msg)

// var excuse_msg = "i'm sorry you can't invite them to dinner."

// document.write(Guest_invite[2] + excuse_msg)
// document.write(Guest_invite[3] + excuse_msg)
// document.write(Guest_invite[4] + excuse_msg)
// document.write(Guest_invite[5] + excuse_msg)

// Each time you pop a name from your list

// Guest_invite.pop();
// Guest_invite.pop();
// Guest_invite.pop();
// Guest_invite.pop();

//Print a message to each of the two people still on your list, letting them know they’re still invited.

// var still_invited_frnd_msg = "you're still invited."
// document.write(Guest_invite[0] + still_invited_frnd_msg)
// document.write(Guest_invite[1] + still_invited_frnd_msg)

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Guest_invite.pop();
// Guest_invite.pop();
// document.write(Guest_invite);
//  if (Guest_invite == 0){
//     document.write("Friends invited list in empty");

//  } else {
//     document.write(Guest_invite)
//  }

// Question 18

// var like_places = ["Makkah" , "Turkey" , "Italy" ,"Kashmir" , "Paris"]
// document.write(like_places)

// document.write("Original order:")
// document.write(sorted(like_places))

// document.write("\nAlphabetical:")
// document.write(like_places)

// document.write("\nOriginal order:")

// document.write("\nReverse alphabetical:")
// document.write(sorted(like_places, reverse=True))

// document.write("\nOriginal order:")
// document.write(like_places)

// document.write("\nReversed:")
// locations.reverse()
// document.write(like_places)

// document.write("\nOriginal order:")
// like_places.reverse()+
// document.write(like_places)

// document.write("\nAlphabetical")
// like_places.sort()
// document.write(like_places)

// document.write("\nReverse alphabetical")
// like_places.sort(reverse=True)
// document.write(like_places)


//Qestion 19 

// var Guest_invite = ["Laiba ","Iqra ","Sana "];
// var invitation = ("Please tommorrow you must come in dinner dear! ")
// document.write(invitation+Guest_invite[0])
// document.write(invitation+Guest_invite[1])
// document.write(invitation+Guest_invite[2])
// document.write("i'm inviting " + Guest_invite.length + " peoples");

//Qestion 20

// var countries = ["Karachi" , "Lahore" , "Islamabad" , "Peshawar" , "Multan"];
// for (let i = 0; i < countries.length; i++) {
// document.write(countries[i])    
// }

//..............Qestion 21
// function myfunc(){
//     const obj = {
//         name : 'Farah',
//         age: 30,
//         city: 'karachi'
//       };
// }
// myfunc()

//.................Qestion 22

// var array = [98,"amna","cat"];
// document.write("Intentional Error calling for del element at -4 which is out of range hehe....")
// document.write(array[-5]) 

//.....................Qestion 23

// let thing = 'chocolte';
// document.write(thing == 'vanila')

// let fruit = 'banana';
// document.write(fruit == 'banana')

// let color = 'red';
// document.write(color == 'blue')

// let city = 'karachi';
// document.write(city == 'karachi')

// let car = 'carola';
// document.write(car == 'carola')

// let nam = 'areeba';
// document.write(nam == 'areeba')

// let flower = 'rose';
// document.write(flower == 'lily')

// let company = 'Dell';
// document.write(company == 'HP')

// let match = 'pak vs Ind';
// document.write(match == 'pak vs Aus')

// let country = 'pakistan';
// document.write(country == 'pakistan')




                 //Qestion 24


// var result="pass"
// document.write(result !="equal")
// document.write(result =="equal")

// var result="pass"
// document.write(result.toLowerCase()=="pass")

// var value = 5
// document.write(value != 5)
// document.write(value == 5)
// document.write(value  > 5)
// document.write(value  < 5)
// document.write(value <= 5)
// document.write(value >= 5)

// var value = 10
// if( value<=8 && value>=10){
//     document.write("Its equal")
// }else{
//     document.write("oh no")
// }
//     if( value<=8 || value>=10){
//     document.write("its equal")
// }

//  var value=[12,34,56,78]
// document.write(23 in value)
// document.write(!33 in value)


//Question no 25

// var alien_color = "yellow"
// if (alien_color == "Green") {
//     document.write("You earn just 5 points")
// } 

// var alien_color = "red";
// if (alien_color == "Green") {
//     document.write("You earn just 5 points")
// } 

// var alien_color = "Green";
// if (alien_color == "Green") {
//     document.write("You earn just 5 points")
// } 

//.....................Question no 26

// var alien_color = "Green";
// if (alien_color = "Green") {
//     document.write("you just earned 5 points for shooting the alien.")
// } 

// var alien_color = "red";
// if (alien_color = "Green") {
//     document.write("you just earned 5 points for shooting the alien.")
// } else {
//     document.write("you just earned 10 points.")
// }


//.....................question no 27

// var alien_color = "red";
// if (alien_color == "Green") {
//     document.write("you just earned 5 points for shooting the alien.")
// } else if ( alien_color == "yellow"){
//     document.write("you just earned 10 points.")
// } else{
//     document.write("you just earned 15 points.")
// }

// var alien_color = "Green";
// if (alien_color == "Green") {
//     document.write("you just earned 5 points for shooting the alien.")
// } else if ( alien_color == "yellow"){
//     document.write("you just earned 10 points.")
// } else{
//     document.write("you just earned 15 points.")
// }

// var alien_color = "yellow";
// if (alien_color == "Green") {
//     document.write("you just earned 5 points for shooting the alien.")
// } else if ( alien_color == "yellow"){
//     document.write("you just earned 10 points.")
// } else{
    // document.write("you just earned 15 points.")
// }

//.................Question no 28

// var Human_age = prompt("How old are you?")
// if (Human_age <= 2) {
//     document.write("You are baby")
// } else if(Human_age >= 2 && Human_age <= 4 ){
//     document.write("you are toddler.")
// } else if(Human_age >= 4 && Human_age <= 13){
//     document.write("You are kid")
// } else if(Human_age >= 13 && Human_age <= 20){
//     document.write("You are Teenager")
// } else if(Human_age >= 20 && Human_age <= 65){
//     document.write("You are adult")
// }else if (Human_age <= 65){
//     document.write("You are elder")
// }else{
//     document.write("Person Death")
// }
//.................question 29
// var fav_fruits = ["Mango","Orange","Graps"]
// for (let i = 0; i < fav_fruits.length; i++) {
//             if (fav_fruits[i] == 'Mango' ) {
//                 document.write(" i really like Mango")
//             } else if(fav_fruits[i] == 'Orange' ) {
//                 document.write(" i really like Orange ")
//             }else if (fav_fruits[i] == 'Graps' ) {
//                 document.write(" i really like Graps ")
//             }else if(fav_fruits[i] == 'apple' ) {
//                 document.write(" i really like apple ")
//             }else if(fav_fruits[i] == 'watermelon' ) {
//                 document.write(" i really like watermelon ")
//             }}
        
//......................question 30

// var userNames = ["Areeba","Aqsa","Admin","Abiha","Anils"]
// for (let i = 0; i <userNames.length; i++){
//       if ( userNames[i] == 'Admin'){
//         document.write("Hello admin, would you like to see a status report?")
//      } else {
//         document.write(`Hello ${userNames[i]} thank you for logging in again!`)
//      }}

//.................question 31

// var userNames = []
//     if (userNames == []) {
//             for (let i = 0; i <userNames.length; i++){
//                 if ( userNames[i] == 'Admin'){
//                 document.write("Hello admin, would you like to see a status report?")
//             } else {
//                 document.write(`Hello ${userNames[i]} thank you for logging in again!`)
//             }}
// } else {
//     document.write("you need to find some users!")
// }


//  Question no 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.  

// var current_users = ["Iman","Alia","Ana","Amara","Abia"]
// var new_users = ["Bala","Amna","Amara","Abia","Ameera"]
//     for (let i = 0; i <= new_users.length; i++){
//         // document.write(new_users[i])

//          for (let j = 0; j <= current_users.length; j++){
//             // document.write(current_users[i])

//          if ( new_users[i] == current_users[i]){
//          document.write("the person will need to enter a new username  ")
//          } else{
//          document.write("username is available.  ")
//  }}}
// var current_users=["ali","ahmed","fahad","aun","rana"]
// var new_users=["ali","rana","bilal","huzi","dula"]
// for (user in new_users) {
//     if(user in current_users){
//         document.write("person will need to enter a new username.")
//     } else{
//         document.write(" saying that the username is available..")
//     }
// }

 

//.............Question no 33

// var number = [1,2,3,4,5,6,7,8,9]
// for (let i = 0; i < number.length; i++) {
//     if (number[i] === 1) {
//         document.write("1st")
//     } else if(number[i] === 2) {
//         document.write("2nd")
//     } else if(number[i] === 3) {
//         document.write("3rd")
//     }else {
//         document.write(number[i] + "th")
//     }}

//question no 34

// var pizzas_flavours = ["Creamy","Fajita","Chicken-tikka"]

// for (let i = 0; i < pizzas_flavours.length; i++){
//     document.write(" i should have " + pizzas_flavours[i] )
// }
// document.write(" I really love pizza!")

//question no 35

// var animalNames = ["Tiger","Loin","Leopard"]
// for (let i = 0; i < animalNames.length; i++) {
//     document.write(animalNames[i] + " run very fast ")
//   }document.write("All animals are non-veg")

//................Question no  36

// function make_shirt(size,print_msg){
//     document.write("I want a size " +size+ " and print the sentence in my shirt is "+ print_msg )}
    
// make_shirt(14, 'I am a big person')



//.................Question no  37

// function make_shirt(size){
//     let length = size;
//     if (length == 'large') {
//         document.write("I love JavaScript ")
//     } else if(length == 'medium') {
//         document.write("I love python ")
//     }else{
//     document.write("I love java ")
// }}
// make_shirt('large')
// make_shirt('medium')
// make_shirt('small')



//............Question no  38

// function describe_city(city,country){
//     document.write( country + " is in "+ city)
// }
// describe_city('India','Dehli')
// describe_city('Istanbol','Turkey ')
// describe_city('Dubai','Saudia-arabia ')

 
//........... Question no 39

// function city_country(city,country){
// /document.write( "\""+city+ "-"+country+"\"")
//     }
//     city_country('Islamabad','Pakistan')
//     city_country('Turkey','Istanbol ')
//     city_country('SaudiArabia ','Dubai ')


//......................Question no 40

// function make_album(artist, title){
//       let album = {
//               'artist':artist,
//               'title':title
//      };
//             console.log(album)
// }
// make_album('metallica', 'ride-the-lightning')
// make_album('beethoven', 'ninth symphony')
// make_album('willie nelson', 'red-headed stranger')

//......................Question no 41

// var magiciansNames = [" yoyoMagician "," AlbertMagician "," ParkMagician "," SakdomMagician "," ylkmMagician "]
// function show_magicians(){
//     for (let i = 0; i < magiciansNames.length; i++) {
//         document.write(magiciansNames[i])
//     }
// }
// show_magicians()

//.....................Question no 42

// var magiciansNames = [" yoyoMagician "," AlbertMagician "," ParkMagician "," SakdomMagician "," ylkmMagician "]
//                for (let i = 0; i < magiciansNames.length; i++) { 
//                document.write("The greate"+ magiciansNames[i])
        
//     }


//................... 43.


// var magiciansNames = [" yoyoMagician "," AlbertMagician "," ParkMagician "," SakdomMagician "," ylkmMagician "]
// function show_magicians(){
//     for (let i = 0; i < magiciansNames.length; i++) {
//         document.write(magiciansNames[i])
//     }
// }
// show_magicians()

//       for (let i = 0; i < magiciansNames.length; i++) { 
//       document.write("The greate"+ magiciansNames[i])
    // }

// function show_magicians(magicians) {
//     for (let i = 0; i < magicians.length; i++) {
//         let magician = magicians[i].split(' ')
//             .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
//             .join(' ')
//         console.log(magician)
//     }
// }


// function make_great(magicians) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = "the Great " + magicians[i]
//     }
// }
// magicians = ['harry houdini', 'david blaine', 'teller']
// let new_magicians = [...magicians]
// make_great(new_magicians)

// show_magicians(magicians)
// show_magicians(new_magicians)


//...............44.

// function make_sandwichnew(items) {
//     console.log("I'll make you a great sandwich:")
//     for (let i = 0; i < items.length; i++) {
//         console.log("  ...adding " + items[i] + " to your sandwich.")
//     }
//     console.log("Your sandwich is ready!")
// }

// make_sandwichnew(['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon'])
// make_sandwichnew(['turkey', 'apple slices', 'honey mustard'])
// make_sandwichnew(['peanut butter', 'strawberry jam'])

//................. 45.
// function make_car(manufacturer, model, options) {

//     car_dict = {
//         'manufacturer': manufacturer[0].toUpperCase() + manufacturer.slice(1, ).toLowerCase(),
//         'model': model[0].toUpperCase() + model.slice(1, ).toLowerCase(),
//     }
//     fina_car_dic = {...car_dict, ...options }

//     return fina_car_dic
// }

// my_outback = make_car('subaru', 'outback', { color: 'blue', tow_packag: true })
// console.log(my_outback)

// my_accord = make_car('honda', 'accord' {
//     year: 1991,
//     color: 'white',
//     headlights: 'popup'
// })
// console.log(my_accord);

