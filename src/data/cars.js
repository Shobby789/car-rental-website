import bmw1 from "../assets/bmw/bmw-1.jpg";
import bmw2 from "../assets/bmw/bmw-2.jpg";
import bmw3 from "../assets/bmw/bmw-3.jpg";
import audi1 from "../assets/audi/audi-a4-1.jpg";
import audi2 from "../assets/audi/audi-a4-2.jpg";
import audi3 from "../assets/audi/audi-a4-3.jpg";
import lexus1 from "../assets/lexus/lexus-1.jpg";
import lexus2 from "../assets/lexus/lexus-2.jpg";
import lexus3 from "../assets/lexus/lexus-3.webp";
import mercedes1 from "../assets/mercedes/Mercedes-1.jpg";
import mercedes2 from "../assets/mercedes/Mercedes-2.jpg";
import mercedes3 from "../assets/mercedes/Mercedes-3.jpg";
import mini1 from "../assets/mini/mini-1.jpg";
import mini2 from "../assets/mini/mini-2.jpg";
import mini3 from "../assets/mini/mini-3.jpg";
import porsch1 from "../assets/porsche/Porsche-1.jpg";
import porsch2 from "../assets/porsche/Porsche-2.jpg";
import porsch3 from "../assets/porsche/Porsche-3.jpg";
import coupe1 from "../assets/coupes/coupe-1.jpeg";
import coupe2 from "../assets/coupes/coupe-2.jpg";
import coupe3 from "../assets/coupes/coupe-3.jpg";
import sedan1 from "../assets/sedans/sedan-1.webp";
import sedan2 from "../assets/sedans/sedan-2.jpg";
import sedan3 from "../assets/sedans/sedan-3.webp";

export const cars = [
  {
    id: 1,
    name: "Audi",
    image:
      "https://images.unsplash.com/photo-1622198750361-6e94cb857945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    carLink: "",
  },
  {
    id: 2,
    name: "BMW",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    carLink: "",
  },
  {
    id: 3,
    name: "Lexus",
    image:
      "https://images.unsplash.com/photo-1570523986973-787a8f2c004b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    carLink: "",
  },
  {
    id: 4,
    name: "Mercedes Benz",
    image:
      "https://images.unsplash.com/photo-1622551997608-400d763b0f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    carLink: "",
  },
  {
    id: 5,
    name: "MINI",
    image:
      "https://images.unsplash.com/photo-1616520770475-30387282faac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
    carLink: "",
  },
  {
    id: 6,
    name: "Porsche",
    image:
      "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    carLink: "",
  },
];

export const carType = [
  {
    id: 1,
    name: "Coupe",
    image:
      "https://images.unsplash.com/photo-1607892027477-34542018abc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    address: "",
  },
  {
    id: 2,
    name: "Sedan",
    image:
      "https://images.unsplash.com/photo-1648178328042-b7c0f62e4181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    address: "",
  },
  {
    id: 3,
    name: "SUV",
    image:
      "https://images.unsplash.com/photo-1620591309146-f5b0dc646b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    address: "",
  },
];

export const carsForBooking = [
  {
    id: 1,
    name: "Audi A4",
    image:
      "https://images.unsplash.com/photo-1622198750361-6e94cb857945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    ratePerDay: "79",
    reviews: "4",
    seats: "4",
    gearType: "Auto",
    car_images: [audi1, audi2, audi3],
    luggage: "2",
    doors: "4",
    included: [
      {
        audioInput: "Audio input",
        bluetooth: "Bluetooth",
        heated_seats: "Heated seats",
        all_wheel_drive: "All wheel drive",
        usb_input: "USB input",
        fm_radio: "FM radio",
      },
    ],
    exluded: ["GPS Navigation", "Sunroof"],
  },
  {
    id: 2,
    name: "BMW",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    ratePerDay: "96",
    reviews: "4",
    seats: "2",
    gearType: "Auto",
    car_images: [bmw1, bmw2, bmw3],
    luggage: "2",
    doors: "2",
    included: [
      {
        audioInput: "Audio input",
        bluetooth: "Bluetooth",
        heated_seats: "Heated seats",
        all_wheel_drive: "All wheel drive",
        usb_input: "USB input",
        fm_radio: "FM radio",
      },
    ],
    exluded: ["GPS Navigation", "Sunroof"],
  },
  {
    id: 3,
    name: "Lexus",
    image:
      "https://images.unsplash.com/photo-1570523986973-787a8f2c004b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    ratePerDay: "82",
    reviews: "4",
    seats: "5",
    gearType: "Auto",
    car_images: [lexus1, lexus2, lexus3],
    luggage: "3",
    doors: "4",
    included: [
      {
        audioInput: "Audio input",
        bluetooth: "Bluetooth",
        heated_seats: "Heated seats",
        all_wheel_drive: "All wheel drive",
        usb_input: "USB input",
        fm_radio: "FM radio",
      },
    ],
    exluded: ["GPS Navigation", "Sunroof"],
  },
  {
    id: 4,
    name: "Mercedes Benz",
    image:
      "https://images.unsplash.com/photo-1622551997608-400d763b0f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    ratePerDay: "76",
    reviews: "4",
    seats: "2",
    gearType: "Auto",
    car_images: [mercedes1, mercedes2, mercedes3],
    luggage: "2",
    doors: "2",
    included: [
      {
        audioInput: "Audio input",
        bluetooth: "Bluetooth",
        heated_seats: "Heated seats",
        all_wheel_drive: "All wheel drive",
        usb_input: "USB input",
        fm_radio: "FM radio",
      },
    ],
    exluded: ["GPS Navigation", "Sunroof"],
  },
  {
    id: 5,
    name: "MINI",
    image:
      "https://images.unsplash.com/photo-1616520770475-30387282faac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
    ratePerDay: "70",
    reviews: "4",
    seats: "2",
    gearType: "Auto",
    car_images: [mini1, mini2, mini3],
    luggage: "2",
    doors: "2",
    included: [
      {
        audioInput: "Audio input",
        bluetooth: "Bluetooth",
        heated_seats: "Heated seats",
        all_wheel_drive: "All wheel drive",
        usb_input: "USB input",
        fm_radio: "FM radio",
      },
    ],
    exluded: ["GPS Navigation", "Sunroof"],
  },
  {
    id: 6,
    name: "Porsche",
    image:
      "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    ratePerDay: "85",
    reviews: "4",
    seats: "2",
    gearType: "Auto",
    car_images: [porsch1, porsch2, porsch3],
    luggage: "2",
    doors: "2",
    included: [
      {
        audioInput: "Audio input",
        bluetooth: "Bluetooth",
        heated_seats: "Heated seats",
        all_wheel_drive: "All wheel drive",
        usb_input: "USB input",
        fm_radio: "FM radio",
      },
    ],
    exluded: ["GPS Navigation", "Sunroof"],
  },
];

export const carsByType = [
  {
    id: 1,
    name: "Yellow Coupe",
    type: "Coupe",
    image: coupe1,
    ratePerDay: "79",
    reviews: "4",
    seats: "2",
    gearType: "Auto",
    car_images: [coupe1, coupe2, coupe3],
    luggage: "2",
    doors: "2",
    included: [
      {
        audioInput: "Audio input",
        bluetooth: "Bluetooth",
        heated_seats: "Heated seats",
        all_wheel_drive: "All wheel drive",
        usb_input: "USB input",
        fm_radio: "FM radio",
      },
    ],
    exluded: ["GPS Navigation", "Sunroof"],
  },
  {
    id: 2,
    name: "Coupe",
    type: "Coupe",
    image: coupe2,
    ratePerDay: "79",
    reviews: "4",
    seats: "2",
    gearType: "Auto",
    car_images: [coupe1, coupe2, coupe3],
    luggage: "2",
    doors: "2",
    included: [
      {
        audioInput: "Audio input",
        bluetooth: "Bluetooth",
        heated_seats: "Heated seats",
        all_wheel_drive: "All wheel drive",
        usb_input: "USB input",
        fm_radio: "FM radio",
      },
    ],
    exluded: ["GPS Navigation", "Sunroof"],
  },
  // sedans
  {
    id: 3,
    name: "Sedan",
    type: "Sedan",
    image: coupe1,
    ratePerDay: "69",
    reviews: "4",
    seats: "4",
    gearType: "Auto",
    car_images: [sedan1, sedan2, sedan3],
    luggage: "2",
    doors: "4",
    included: [
      {
        audioInput: "Audio input",
        bluetooth: "Bluetooth",
        heated_seats: "Heated seats",
        all_wheel_drive: "All wheel drive",
        usb_input: "USB input",
        fm_radio: "FM radio",
      },
    ],
    exluded: ["GPS Navigation", "Sunroof"],
  },
  {
    id: 4,
    name: "Sedan 2",
    type: "Sedan",
    image: coupe2,
    ratePerDay: "79",
    reviews: "4",
    seats: "4",
    gearType: "Auto",
    car_images: [sedan1, sedan2, sedan3],
    luggage: "2",
    doors: "4",
    included: [
      {
        audioInput: "Audio input",
        bluetooth: "Bluetooth",
        heated_seats: "Heated seats",
        all_wheel_drive: "All wheel drive",
        usb_input: "USB input",
        fm_radio: "FM radio",
      },
    ],
    exluded: ["GPS Navigation", "Sunroof"],
  },
];
