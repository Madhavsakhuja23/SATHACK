import { useState } from "react";
import { PatientQueue } from "./PatientQueue";
import { ConsultationModal } from "./ConsultationModal";

const DQueue = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="animate-fade-in">
      <PatientQueue onViewDetails={(patient) => setSelectedPatient(patient)} />

      <ConsultationModal
        patient={selectedPatient}
        open={!!selectedPatient}
        onClose={() => setSelectedPatient(null)}
      />
    </div>
  );
};

export default DQueue;
