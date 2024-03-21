let californiaHotel = [];
// 1. push(): Adds one or more elements to the end of an array
// and returns the new length of the array.

//Our hotel just got 3 new clients, so let's get them into their rooms
californiaHotel.push('Mr. Lake');
californiaHotel.push('Mr. Johnson');
californiaHotel.push('Mr. Bern');
console.log(californiaHotel);

californiaHotel.pop();
console.log(californiaHotel);

//californiaHotel.unshift('Ms. Nancy');
console.log(californiaHotel);

const isAllHotelGuestsAreMr = californiaHotel.every((guest) =>
guest.includes('Mr.')
);
console.log(isAllHotelGuestsAreMr); //false

