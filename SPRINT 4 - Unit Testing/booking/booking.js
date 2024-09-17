class Booking {
  constructor(name, email, checkIn, checkOut, discount, room) {
    this.name = name;
    this.email = email;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.discount = discount;
    this.room = room;
  }

  get fee() {
    const days = (this.checkOut - this.checkIn) / (1000 * 60 * 60 * 24); 
    const roomCost = this.room.rate * days; 

    const totalDiscount = (this.room.discount + this.discount) / 100; 
    const finalCost = roomCost * (1 - totalDiscount); 

    return Math.round(finalCost); 
  }
}
module.exports = Booking;
