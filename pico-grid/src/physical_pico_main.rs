// use rust_gpiozero::*;
// use std::thread::sleep;
// use std::time::Duration;
// use std::io;

// fn main() {
    
//     let hm1_solar = LED::new(21); //21
//     let hm1_battery = LED::new(20); //20
//     let hm1_fossil = LED::new(16); //16
//     // let hm2_solar = LED::new(12); //12
//     // let hm2_battery = LED::new(7); //07
//     // let hm2_fossil = LED::new(8); //08
//     // let hm3_solar = LED::new(25); //25
//     // let hm3_battery = LED::new(24); //24
//     // let hm3_fossil = LED::new(23); //23

//     // let sys1_solar = LED::new(18); //18
//     let sys1_battery = LED::new(15); //15
//     // let sys2_solar = LED::new(14); //14
//     // let sys2_battery = LED::new(26); //26



//     println!("*****  Welcome to the PicoGrid Simulator! *****");
//     // println!("Here we simulate 4 homes.");
//     // println!("Our home that is consuming energy and has its own solar generation and a battery");
//     // println!("and 3 other homes in our street that are ready to purchase energy locally");
//     // println!("First, we input some numbers to configure a consumption average for our home and a solar generation profile for the day");
//     // println!("We then configure the capacity for our homes battery");
//     // println!("Finally we configure a value for excess (unused) generation at which we start selling our solar power to the other homes");
//     // println!("let's get started!");
//     // println!("");
//     // println!("");

//     //enter energy consumption of OUR home1
//     println!("How much energy is consumed by your Home: ");
//     let mut consumption = String::new();
//     io::stdin()
//         .read_line(&mut consumption)
//         .expect("Failed to read our line");
//     let consumption: i32 = consumption.trim().parse().expect("Please type a number!");

//     //enter capacity of our battery for OUR home1
//     // println!("How much energy capacity in our Battery: ");
//     // let mut battery1 = String::new();
//     // io::stdin()
//     //     .read_line(&mut battery1)
//     //     .expect("Failed to read our line"); 
//     // let battery1: u32 = battery1.trim().parse().expect("Please type a number!");

//     //how much excess energy being produced when we start selling OUR home1
//     // println!("When OUR home is producing X excess energy we will sell it to neighbours. Enter X: ");
//     // let mut sellat = String::new();
//     // io::stdin()
//     //     .read_line(&mut sellat)
//     //     .expect("Failed to read our line"); 
//     // let sellat: u32 = sellat.trim().parse().expect("Please type a number!");



//     // println!("Enter 24 numbers to simulate your renewable generation profile for the day");
//     // let mut generation = String::new();
//     // io::stdin()
//     //     .read_line(&mut generation)
//     //     .expect("Failed to read our line"); 

//     // println!("*******SETTINGS*******");
//     // println!("1) Consumption HOME1: {}", consumption);
//     // println!("2) Battery Capacity HOME1: {}", battery1);
//     // println!("3) Start selling when our battery is full and we have this amount excess: {}", sellat);
//     //println!("4) SOLAR GENERATION PROFILE: {}", generation);




//     //Enter the solar generation profile for the day. 24 values.
//     let generation: [i32; 24] = [0,0,0,0,0,0,2,3,4,7,9,10,10,10,10,9,9,7,4,1,0,0,0,0];

//     let mut index = 0;
//     let mut battery_value = 0;


//     while index < 24 { // iterate through generation array to show a day of consumption

//         println!("the generation value is: {}", generation[index]);
//         let mut consumption_new = 0; //initialize this value.


//         // if we are consuming more than we are generating we need to either use our battery or the Grid
//         if consumption - generation[index] > 0 {
//             consumption_new = consumption - generation[index]; // how much more am I consuming than generating?
//             //println!("battery_value = {}", battery_value);
//             //println!("consumption new: {}", consumption_new);

//             println!("you need to use battery of fossil");
//             if battery_value == 0 {
//                 println!("GRID"); // if there is 0 in my battery I need the grid
//                 hm1_solar.off();
//                 hm1_battery.off();
//                 hm1_fossil.on();
//             }
//             if battery_value > 0 {  // if there is a + number in my battery use that
//                 if battery_value - consumption_new > 0 { // if the battery - consumption_new is a positive number then battery_value = battery_value - consumption_new (light up Battery)
//                     battery_value = battery_value + consumption_new;
//                     println!("BATTERY");
//                     hm1_solar.off();
//                     hm1_battery.on();
//                     hm1_fossil.off();
//                 }
//                 if battery_value - consumption_new < 0 { // if the battery - consumption_new is a negative number then battery_value = 0 (light up Fossil) 
//                     battery_value = 0;
//                     println!("BATTERY & GRID");
//                     hm1_solar.off();
//                     hm1_battery.on();
//                     hm1_fossil.on();
//                 }
//             }
//         println!("battery_value UPDATED: {}", battery_value);
//         // if we are have more energy than we are consuming we can either fill up our battery or sell it
//         } else {
//             consumption_new = consumption - generation[index]; // update my consumption after solar
//             battery_value = battery_value - consumption_new; //add excess power to battery
//             //println!("battery_value = {}", battery_value);
//             //println!("consumption_new = {}", consumption_new);
//             println!("you can fill your battery or sell");
//             hm1_battery.on();
//             sys1_battery.on();
//             sleep(Duration::from_secs(1));
//             sys1_battery.off();
//             sleep(Duration::from_secs(1));
//             sys1_battery.on();
//             sleep(Duration::from_secs(1));
//             sys1_battery.off();
//         }




//         sleep(Duration::from_secs(1));
//         index += 1;
//         hm1_solar.off();
//         hm1_battery.off();
//         hm1_fossil.off();
//         sys1_battery.off();
// }

// }
