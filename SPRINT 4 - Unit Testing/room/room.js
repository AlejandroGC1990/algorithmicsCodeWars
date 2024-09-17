class Room {
  constructor(name, bookings, rate, discount) {
    this.name = name;
    this.bookings = bookings;
    this.rate = rate;
    this.discount = discount;
  }

  isOccupied(date) {
    return this.bookings.some((booking) => {
      return date >= booking.checkIn && date <= booking.checkOut;
    });
  }

  occupancyPercentage(startDate, endDate) {}

  static totalOccupancyPercentage(rooms, startDate, endDate) {}

  static availableRooms(rooms, startDate, endDate) {}
}
module.exports = Room;
