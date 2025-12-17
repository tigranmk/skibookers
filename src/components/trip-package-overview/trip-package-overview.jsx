import { TripCard } from "../trip-card/trip-card";

export const TripPackageOverview = ({ trip, onEdit, onRemove }) => (
  <div>
    <TripCard
      title="Resort"
      summary={`${trip.resort.name} - ${trip.resort.description}`}
      onEdit={() => onEdit("resort")}
    />
    <TripCard
      title="Hotel"
      summary={`${trip.hotel.name}, ${trip.hotel.location}, ${trip.hotel.room}`}
      onEdit={() => onEdit("hotel")}
    />
    <TripCard
      title="Room"
      summary={trip.room}
      onEdit={() => onEdit("room")}
    />
    <TripCard
      title="Skipass"
      summary={`${trip.skipass.days} days, ${trip.skipass.zone} zone, ${trip.skipass.level} level`}
      onEdit={() => onEdit("skipass")}
    />
    <TripCard
      title="Transfer"
      summary={`${trip.transfer.type} from ${trip.transfer.from} at ${trip.transfer.time}`}
      onEdit={() => onEdit("transfer")}
    />
    <TripCard
      title="Flight"
      summary={ 
        trip.flight
        ? `${trip.flight.airline}, ${trip.flight.class}, ${trip.flight.date} ${trip.flight.time}`
        : "No flight added"
      }     
      onEdit={() => onEdit("flight")}
      isDisabled={!trip.flight}
    >
      {trip.flight && (
        <button onClick={() => onRemove("flight")} style={{marginTop: 8, color: "#d32f2f", background: "none", border: "none", cursor: "pointer"}}>
          Remove Flight
        </button>
      )}
      {!trip.flight && (
        <button onClick={() => onEdit("flight")} style={{marginTop: 8, color: "#0077ff", background: "none", border: "none", cursor: "pointer"}}>
          Add Flight
        </button>
      )}
    </TripCard>
    <TripCard
      title="Insurance"
      summary={trip.insurance.included ? `Included, ${trip.insurance.type}` : "Not included"}
      onEdit={() => onEdit("insurance")}
      isDisabled={!trip.insurance.included}
    >
      {trip.insurance.included && (
        <button onClick={() => onRemove("insurance")} style={{marginTop: 8, color: "#d32f2f", background: "none", border: "none", cursor: "pointer"}}>
          Remove Insurance
        </button>
      )}
      {!trip.insurance.included && (
        <button onClick={() => onEdit("insurance")} style={{marginTop: 8, color: "#0077ff", background: "none", border: "none", cursor: "pointer"}}>
          Add Insurance
        </button>
      )}
    </TripCard>
    <TripCard
      title="Add-ons"
      summary={trip.addons.length ? trip.addons.join(", ") : "No add-ons"}
      onEdit={() => onEdit("addons")}
      isDisabled={trip.addons.length === 0}
    >
      {trip.addons.length > 0 && (
        <button onClick={() => onRemove("addons")} style={{marginTop: 8, color: "#d32f2f", background: "none", border: "none", cursor: "pointer"}}>
          Remove All Add-ons
        </button>
      )}

      {!trip.addons.length && (
        <button onClick={() => onEdit("addons")} style={{marginTop: 8, color: "#0077ff", background: "none", border: "none", cursor: "pointer"}}>
          Add Add-ons
        </button>
      )}
    </TripCard>
  </div>
);

export default TripPackageOverview;