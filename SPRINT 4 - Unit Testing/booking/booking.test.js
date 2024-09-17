const Booking = require("./booking");
const Room = require("../room/room"); 

describe("Booking Class Tests", () => {
  test("Booking should calculate the fee correctly", () => {
    const room = new Room("Room 1", [], 10000, 10); 
    const booking = new Booking("John Doe", "john@example.com", new Date("2024-09-15"), new Date("2024-09-20"), 5, room); 
    
    expect(booking.fee).toBe(45000);
  });
});
