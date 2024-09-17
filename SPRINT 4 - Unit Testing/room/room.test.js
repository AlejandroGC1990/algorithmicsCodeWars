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

  //?totalOccupancyPercentage
  test("totalOccupancyPercentage should return the correct overall occupancy percentage", () => {
    const booking1 = new Booking(
      "John Doe",
      "john@example.com",
      new Date("2024-09-01"),
      new Date("2024-09-10")
    );
    const booking2 = new Booking(
      "Jane Smith",
      "jane@example.com",
      new Date("2024-09-05"),
      new Date("2024-09-15")
    );
    const booking3 = new Booking(
      "Alice Johnson",
      "alice@example.com",
      new Date("2024-09-10"),
      new Date("2024-09-20")
    );

    const room1 = new Room("Room 1", [booking1], 10000, 10);
    const room2 = new Room("Room 2", [booking2], 10000, 10);
    const room3 = new Room("Room 3", [booking3], 10000, 10);

    const startDate = new Date("2024-09-01");
    const endDate = new Date("2024-09-15");

    const rooms = [room1, room2, room3];
    const totalOccupancy = Room.totalOccupancyPercentage(
      rooms,
      startDate,
      endDate
    );

    const totalDays =
      Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

    const occupiedDaysRoom1 =
      Math.ceil((new Date("2024-09-10") - startDate) / (1000 * 60 * 60 * 24)) +
      1;
    const occupiedDaysRoom2 =
      Math.ceil(
        (new Date("2024-09-15") - new Date("2024-09-05")) /
          (1000 * 60 * 60 * 24)
      ) + 1;
    const occupiedDaysRoom3 =
      Math.ceil((endDate - new Date("2024-09-10")) / (1000 * 60 * 60 * 24)) + 1;

    const occupancyRoom1 = (occupiedDaysRoom1 / totalDays) * 100;
    const occupancyRoom2 = (occupiedDaysRoom2 / totalDays) * 100;
    const occupancyRoom3 = (occupiedDaysRoom3 / totalDays) * 100;

    const expectedOccupancy =
      (occupancyRoom1 + occupancyRoom2 + occupancyRoom3) / 3;

    expect(totalOccupancy).toBeCloseTo(expectedOccupancy, 2);
  });

  test("availableRooms should return only the rooms that are available in the given date range", () => {
    const booking1 = new Booking(
      "John Doe",
      "john@example.com",
      new Date("2024-09-01"),
      new Date("2024-09-10")
    );
    const booking2 = new Booking(
      "Jane Smith",
      "jane@example.com",
      new Date("2024-09-05"),
      new Date("2024-09-15")
    );
    const booking3 = new Booking(
      "Alice Johnson",
      "alice@example.com",
      new Date("2024-09-10"),
      new Date("2024-09-20")
    );

    const room1 = new Room("Room 1", [booking1], 10000, 10);
    const room2 = new Room("Room 2", [booking2], 10000, 10);
    const room3 = new Room("Room 3", [booking3], 10000, 10);
    const room4 = new Room("Room 4", [], 10000, 10); // Sin reservas

    const startDate = new Date("2024-09-01");
    const endDate = new Date("2024-09-15");

    const rooms = [room1, room2, room3, room4];
    const availableRooms = Room.availableRooms(rooms, startDate, endDate);

    expect(availableRooms).toEqual([room4]);
  });
});
