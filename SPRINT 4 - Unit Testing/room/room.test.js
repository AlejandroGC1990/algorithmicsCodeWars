const Room = require("./room");
const Booking = require("../booking/booking"); 

describe("Room Class Tests", () => {
  test("Room should return true if occupied on a given date", () => {
    const booking = new Booking("John Doe", "john@example.com", new Date("2024-09-15"), new Date("2024-09-20"));
    const room = new Room("Room 1", [booking], 10000, 10);
    
    expect(room.isOccupied(new Date("2024-09-16"))).toBe(true); 
  });

  test("Room should return false if not occupied on a given date", () => {
    const booking = new Booking("John Doe", "john@example.com", new Date("2024-09-15"), new Date("2024-09-20"));
    const room = new Room("Room 1", [booking], 10000, 10);
    
    expect(room.isOccupied(new Date("2024-09-21"))).toBe(false); 
  });
});