import { useCallback, useState } from "react";
import { mockTrip } from "data/mock-trip";
import { Modal } from "ui/modal/modal";

import { ResortHeader } from "components/resort-header/resort-header";
import { TotalPrice } from "./components/total-price/total-price";
import { AiRecommendation } from "components/ai-recommendation/ai-recommendation";

import { TripPackageOverview } from "components/trip-package-overview/trip-package-overview";
import { RecommendedForYou } from "components/recommended-for-you/recommended-for-you";
import { EditResortForm } from "components/forms/edit-resort-form/edit-resort-form";
import { EditHotelForm } from "components/forms/edit-hotel-form/edit-hotel-form";
import { EditRoomForm } from "components/forms/edit-room-form/edit-room-form";
import { EditTransferForm } from "components/forms/edit-transfer-form/edit-transfer-form";
import { EditFlightForm } from "components/forms/edit-flight-form/edit-flight-form";
import { EditInsuranceForm } from "components/forms/edit-insurance-form/edit-insurance-form";
import { EditAddonsForm } from "components/forms/edit-addons-form/edit-addons-form";
import { EditSkipassForm } from "components/forms/edit-ski-pass-form/edit-ski-pass-form";

import { removalDefaults, defaultFlight } from "constants/defaults";
import { calculateTotalPrice } from "utils/calculate-price";
import { getRecommendationLogic } from "utils/get-recommendation-logic";

import styles from "./app.module.css";

export const App = () => {
  const [trip, setTrip] = useState(mockTrip);
  const [modal, setModal] = useState({ open: false, component: null });

  const handleEdit = useCallback((component) => {
    setModal({ open: true, component });
  }, []);

  const handleCloseModal = () => {
    setModal({ open: false, component: null });
  };

  const handleSave = (component, value) => {
    console.log(component, value);
    setTrip((prev) => ({
      ...prev,
      [component]:
        typeof value === "object" && !Array.isArray(value)
          ? { ...prev[component], ...value }
          : value,
    }));
    handleCloseModal();
  };

  const handleRemove = (component) => {
    if (removalDefaults.hasOwnProperty(component)) {
      setTrip((prev) => ({
        ...prev,
        [component]: removalDefaults[component],
      }));
    }
  };

  const handleCheckout = useCallback(() => {
    alert("Proceeding to checkout!");
  }, []);

  const handleAiRecommendation = useCallback(() => {
    alert("Proceeding to checkout!");
  }, []);

  return (
    <div className={styles.container}>
      <ResortHeader resort={trip.resort} />
      <RecommendedForYou logic={getRecommendationLogic(trip)} />
      <div className={styles.packageGrid}>
        <div className={styles.mainColumn}>
          <TripPackageOverview
            trip={trip}
            onEdit={handleEdit}
            onRemove={handleRemove}
          />
        </div>
        <div className={styles.sidebar}>
          <AiRecommendation onAiRecommendation={handleAiRecommendation} />
          <TotalPrice
            onCheckout={handleCheckout}
            price={calculateTotalPrice(trip)}
          />
        </div>
      </div>

      <Modal
        isOpen={modal.open && modal.component === "resort"}
        onClose={handleCloseModal}
        title="Edit Resort"
      >
        <EditResortForm
          resort={trip.resort}
          onSave={(value) => handleSave("resort", value)}
          onCancel={handleCloseModal}
        />
      </Modal>
      <Modal
        isOpen={modal.open && modal.component === "hotel"}
        onClose={handleCloseModal}
        title="Edit Hotel"
      >
        <EditHotelForm
          hotel={trip.hotel}
          onSave={(value) => handleSave("hotel", value)}
          onCancel={handleCloseModal}
        />
      </Modal>
      <Modal
        isOpen={modal.open && modal.component === "room"}
        onClose={handleCloseModal}
        title="Edit Room"
      >
        <EditRoomForm
          room={trip.room}
          onSave={(value) => handleSave("room", value)}
          onCancel={handleCloseModal}
        />
      </Modal>
      <Modal
        isOpen={modal.open && modal.component === "skipass"}
        onClose={handleCloseModal}
        title="Edit Skipass"
      >
        <EditSkipassForm
          skipass={trip.skipass}
          onSave={(value) => handleSave("skipass", value)}
          onCancel={handleCloseModal}
        />
      </Modal>
      <Modal
        isOpen={modal.open && modal.component === "transfer"}
        onClose={handleCloseModal}
        title="Edit Transfer"
      >
        <EditTransferForm
          transfer={trip.transfer}
          onSave={(value) => handleSave("transfer", value)}
          onCancel={handleCloseModal}
        />
      </Modal>
      <Modal
        isOpen={modal.open && modal.component === "flight"}
        onClose={handleCloseModal}
        title="Edit Flight"
      >
        <EditFlightForm
          flight={trip.flight || defaultFlight}
          onSave={(value) => handleSave("flight", value)}
          onCancel={handleCloseModal}
        />
      </Modal>
      <Modal
        isOpen={modal.open && modal.component === "insurance"}
        onClose={handleCloseModal}
        title="Edit Insurance"
      >
        <EditInsuranceForm
          insurance={trip.insurance}
          onSave={(value) => handleSave("insurance", value)}
          onCancel={handleCloseModal}
        />
      </Modal>
      <Modal
        isOpen={modal.open && modal.component === "addons"}
        onClose={handleCloseModal}
        title="Edit Add-ons"
      >
        <EditAddonsForm
          addons={trip.addons}
          onSave={(value) => handleSave("addons", value)}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
};
