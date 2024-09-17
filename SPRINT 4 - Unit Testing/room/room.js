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

  occupancyPercentage(startDate, endDate) {
    const totalDays =
      Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const occupiedDays = this.bookings.reduce((acc, booking) => {
      const overlapStart = new Date(Math.max(startDate, booking.checkIn));
      const overlapEnd = new Date(Math.min(endDate, booking.checkOut));
      const overlapDays = Math.max(
        0,
        (overlapEnd - overlapStart) / (1000 * 60 * 60 * 24) + 1
      );
      return acc + overlapDays;
    }, 0);
    return (occupiedDays / totalDays) * 100;
  }

  static totalOccupancyPercentage(rooms, startDate, endDate) {
    if (rooms.length === 0) return 0;

    const totalOccupancy = rooms.reduce((acc, room) => {
      const occupancy = room.occupancyPercentage(startDate, endDate);
      return acc + occupancy;
    }, 0);

    return totalOccupancy / rooms.length;
  }

  static availableRooms(rooms, startDate, endDate) {}
}
module.exports = Room;
