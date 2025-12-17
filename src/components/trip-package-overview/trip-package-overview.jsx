import { Button } from "ui/button/button";
import { TripCard } from "../trip-card/trip-card";

export const TripPackageOverview = ({ trip, onEdit, onRemove }) => {
  return (
    <div>
      <TripCard
        title="Resort"
        type="resort"
        summary={`${trip.resort.name} - ${trip.resort.description}`}
        onEdit={() => onEdit("resort")}
      />
      <TripCard
        title="Hotel"
        type="hotel"
        summary={`${trip.hotel.name}, near lifts`}
        onEdit={() => onEdit("hotel")}
      />
      <TripCard
        title="Room"
        type="room"
        summary={trip.room}
        onEdit={() => onEdit("room")}
      />
      <TripCard
        title="Skipass"
        type="skipass"
        summary={`${trip.skipass.days} days, ${trip.skipass.zone} zone`}
        onEdit={() => onEdit("skipass")}
      />
      <TripCard
        title="Transfer"
        type="transfer"
        summary={`From ${trip.transfer.from}`}
        onEdit={() => onEdit("transfer")}
      />
      <TripCard
        title="Flight"
        type="flight"
        summary={
          trip.flight
            ? `${trip.flight.airline}, ${trip.flight.class}, ${trip.flight.date} ${trip.flight.time}`
            : "No flight added"
        }
        onEdit={() => onEdit("flight")}
        isDisabled={!trip.flight}
      >
        {trip.flight && (
          <Button
            size="small"
            onClick={() => onRemove("flight")}
            variant="danger"
          >
            Remove Flight
          </Button>
        )}
        {!trip.flight && (
          <Button
            size="small"
            onClick={() => onEdit("flight")}
            variant="primary"
          >
            Add Flight
          </Button>
        )}
      </TripCard>
      <TripCard
        title="Insurance"
        type="insurance"
        summary={
          trip.insurance.included
            ? `Included, ${trip.insurance.type}`
            : "Not included"
        }
        onEdit={() => onEdit("insurance")}
        isDisabled={!trip.insurance.included}
      >
        {trip.insurance.included && (
          <Button
            size="small"
            onClick={() => onRemove("insurance")}
            variant="danger"
          >
            Remove Insurance
          </Button>
        )}
        {!trip.insurance.included && (
          <Button
            size="small"
            onClick={() => onEdit("insurance")}
            variant="primary"
          >
            Add Insurance
          </Button>
        )}
      </TripCard>
      <TripCard
        title="Add-ons"
        type="addons"
        summary={trip.addons.length ? trip.addons.join(", ") : "No add-ons"}
        onEdit={() => onEdit("addons")}
        isDisabled={trip.addons.length === 0}
      >
        {trip.addons.length > 0 && (
          <Button
            size="small"
            onClick={() => onRemove("addons")}
            variant="danger"
          >
            Remove All Add-ons
          </Button>
        )}
        {trip.addons.length === 0 && (
          <Button
            size="small"
            onClick={() => onEdit("addons")}
            variant="primary"
          >
            Add Add-ons
          </Button>
        )}
      </TripCard>
    </div>
  );
};
