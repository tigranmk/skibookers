export const hotelOptions = [
  { name: "4* Chalet", location: "Near lifts", price: 400 },
  { name: "3* Lodge", location: "Village center", price: 250 },
  { name: "5* Resort", location: "Ski-in/Ski-out", price: 600 }
];

export const roomOptions = [
  { name: "Double Room with breakfast", price: 0 },
  { name: "Single Room, no breakfast", price: 50 },
  { name: "Suite with half-board", price: 150 }
];

export const resortOptions = [
  { name: "Alpine Heights", description: "Swiss Alps, Intermediate, Lively après-ski", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
  { name: "Snow Valley", description: "French Alps, Beginner, Family-friendly", image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" },
  { name: "Glacier Peak", description: "Austrian Alps, Advanced, Quiet", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80" }
];

export const skipassBasePrice = 50;
export const zoneMultiplier = { "Premium": 1.5, "Standard": 1, "Beginner": 0.8 };
export const levels = ["Beginner", "Intermediate", "Advanced"];

export const allAddons = ["Ski lessons", "Spa", "Nightlife", "Snowmobile", "Guided tour"];
export const addonPrices = {
  "Ski lessons": 120,
  "Spa": 80,
  "Nightlife": 60,
  "Snowmobile": 150,
  "Guided tour": 100
};

export const transferTypes = ["Shuttle", "Private Car", "Bus"];
export const airports = ["Geneva Airport", "Zurich Airport", "Lyon Airport"];
export const transferPrices = { "Shuttle": 60, "Private Car": 180, "Bus": 40 };

export const airlines = ["Emirates", "Swiss", "Lufthansa"];
export const flightBase = { "Emirates": 400, "Swiss": 350, "Lufthansa": 300 };
export const classes = ["Economy", "Business", "First"];
export const classMultiplier = { "Economy": 1, "Business": 2, "First": 3 };

export const insuranceTypes = ["Basic", "Premium", "None"];
export const insurancePrices = { "Basic": 30, "Premium": 80, "None": 0 };