import {
  hotelOptions,
  roomOptions,
  skipassBasePrice,
  zoneMultiplier,
  addonPrices,
  transferPrices,
  flightBase,
  classMultiplier,
  insurancePrices,
} from "../data/option-data";

export const calculateTotalPrice = (trip) => {
  const hotelOption = hotelOptions.find((h) => h.name === trip.hotel.name);
  const hotelPrice = hotelOption ? hotelOption.price : 0;

  const roomOption = roomOptions.find((r) => r.name === trip.room);
  const roomPrice = roomOption ? roomOption.price : 0;

  const skipassDays = trip.skipass.days;
  const skipassZone = trip.skipass.zone;
  const skipassPrice =
    skipassDays * skipassBasePrice * (zoneMultiplier[skipassZone] || 1);

  const transferPrice = transferPrices[trip.transfer.type] || 0;

  const flightPrice = trip.flight
    ? (flightBase[trip.flight.airline] || 0) *
      (classMultiplier[trip.flight.class] || 1)
    : 0;

  const insurancePrice = trip.insurance.included
    ? insurancePrices[trip.insurance.type] || 0
    : 0;

  const addonsPrice = (trip.addons || []).reduce(
    (sum, addon) => sum + (addonPrices[addon] || 0),
    0
  );

  return (
    hotelPrice +
    roomPrice +
    skipassPrice +
    addonsPrice +
    transferPrice +
    flightPrice +
    insurancePrice
  );
};
