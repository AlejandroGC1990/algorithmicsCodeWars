const Room = require("./room");
const Booking = require("../booking/booking");

describe("Room Class Tests", () => {
  //?isOccupied
  test("Room should return true if occupied on a given date", () => {
    const booking = new Booking(
      "John Doe",
      "john@example.com",
      new Date("2024-09-15"),
      new Date("2024-09-20")
    );
    const room = new Room("Room 1", [booking], 10000, 10);

    expect(room.isOccupied(new Date("2024-09-16"))).toBe(true);
  });

  test("Room should return false if not occupied on a given date", () => {
    const booking = new Booking(
      "John Doe",
      "john@example.com",
      new Date("2024-09-15"),
      new Date("2024-09-20")
    );
    const room = new Room("Room 1", [booking], 10000, 10);

    expect(room.isOccupied(new Date("2024-09-21"))).toBe(false);
  });

  //?occupancyPercentage
  test("Room should return correct occupancy percentage", () => {
    const booking1 = new Booking(
      "John Doe",
      "john@example.com",
      new Date("2024-09-01"),
      new Date("2024-09-05")
    );
    const booking2 = new Booking(
      "Jane Smith",
      "jane@example.com",
      new Date("2024-09-10"),
      new Date("2024-09-15")
    );

    const room = new Room("Room 1", [booking1, booking2], 10000, 10);

    const startDate = new Date("2024-09-01");
    const endDate = new Date("2024-09-15");

    const occupancy = room.occupancyPercentage(startDate, endDate);

    const totalDays =
      Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const occupiedDays =
      Math.ceil((new Date("2024-09-05") - startDate) / (1000 * 60 * 60 * 24)) +
      1 +
      Math.ceil((endDate - new Date("2024-09-10")) / (1000 * 60 * 60 * 24)) +
      1;
    const expectedOccupancy = (occupiedDays / totalDays) * 100;

    expect(occupancy).toBeCloseTo(expectedOccupancy, 2);
  });

});
