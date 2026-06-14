// ===================== SYMPTOM-CONDITION DATA =====================
// Add or edit symptom combinations and their results here.
// type: "minor" -> manageable at home
// type: "warning" -> consult doctor / seek attention

const conditionRules = [
  {
    symptoms: ["chestpain", "breathlessness"],
    condition: "Possible cardiac/respiratory issue",
    advice: "Seek immediate medical attention. Visit the nearest hospital emergency department.",
    type: "warning"
  },
  {
    symptoms: ["fever", "cough", "bodyache"],
    condition: "Possible Viral Infection / Flu",
    advice: "Rest, stay hydrated, and monitor your temperature. Consult a doctor if symptoms persist beyond 3 days.",
    type: "minor"
  },
  {
    symptoms: ["fever", "cough", "sorethroat"],
    condition: "Possible Common Cold / Throat Infection",
    advice: "Warm fluids and rest are recommended. Consult a doctor if fever is high or persistent.",
    type: "minor"
  },
  {
    symptoms: ["fever", "headache", "bodyache"],
    condition: "Possible Viral Fever",
    advice: "Stay hydrated and rest. Consult a doctor if fever persists for more than 2 days.",
    type: "minor"
  },
  {
    symptoms: ["nausea", "diarrhea"],
    condition: "Possible Stomach Infection / Food Poisoning",
    advice: "Stay hydrated with ORS. Consult a doctor if symptoms worsen or persist.",
    type: "minor"
  },
  {
    symptoms: ["headache", "fatigue"],
    condition: "Possible Stress / Mild Migraine",
    advice: "Rest and stay hydrated. Consult a doctor if headaches are frequent or severe.",
    type: "minor"
  },
  {
    symptoms: ["fever"],
    condition: "Mild Fever",
    advice: "Monitor your temperature and rest. Consult a doctor if fever exceeds 102°F or lasts more than 2 days.",
    type: "minor"
  }
];

// Default message if no rule matches
const defaultResult = {
  condition: "General Symptoms Detected",
  advice: "Your symptoms don't match a specific pattern. Please monitor your condition and consult a doctor if it worsens or persists.",
  type: "minor"
};


// ===================== NEARBY HEALTH CENTER DATA =====================
// Replace this with real data collected by your team for your area.

const healthCenters = {
  area1: [
    {
      name: "Sadar Hospital, Jamshedpur",
      type: "Government Hospital",
      address: "Sakchi, Jamshedpur, Jharkhand",
      contact: "0657-XXXXXXX"
    },
    {
      name: "Jan Aushadhi Store - Sadar Hospital Campus",
      type: "Jan Aushadhi Store",
      address: "Sadar Hospital Campus, Jamshedpur",
      contact: "N/A"
    }
  ],
  area2: [
    {
      name: "PHC Sakchi",
      type: "Primary Health Center",
      address: "Sakchi Main Road, Jamshedpur",
      contact: "0657-XXXXXXX"
    },
    {
      name: "Tata Main Hospital",
      type: "Multi-specialty Hospital",
      address: "C Road, Bistupur, Jamshedpur",
      contact: "0657-XXXXXXX"
    }
  ],
  area3: [
    {
      name: "MGM Medical College & Hospital",
      type: "Government Hospital",
      address: "Bistupur, Jamshedpur, Jharkhand",
      contact: "0657-XXXXXXX"
    },
    {
      name: "Jan Aushadhi Store - Bistupur",
      type: "Jan Aushadhi Store",
      address: "Main Road, Bistupur, Jamshedpur",
      contact: "N/A"
    }
  ]
};
