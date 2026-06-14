// ===================== SYMPTOM CHECKER LOGIC =====================

const checkBtn = document.getElementById("checkBtn");
const resultBox = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  // Get all checked symptoms
  const checkboxes = document.querySelectorAll(".symptom:checked");
  const selectedSymptoms = Array.from(checkboxes).map((cb) => cb.value);

  if (selectedSymptoms.length === 0) {
    resultBox.className = "result-box";
    resultBox.innerHTML = "Please select at least one symptom.";
    return;
  }

  // Find the best matching rule
  // Priority: rule with the most matching symptoms (and all its symptoms present in selected)
  let bestMatch = null;
  let bestMatchCount = 0;

  conditionRules.forEach((rule) => {
    const allPresent = rule.symptoms.every((s) => selectedSymptoms.includes(s));
    if (allPresent && rule.symptoms.length > bestMatchCount) {
      bestMatch = rule;
      bestMatchCount = rule.symptoms.length;
    }
  });

  const result = bestMatch || defaultResult;

  // Display result
  resultBox.className = "result-box " + (result.type === "warning" ? "warning" : "minor");
  resultBox.innerHTML = `
    <strong>Possible Condition:</strong> ${result.condition}<br>
    <strong>Advice:</strong> ${result.advice}
  `;
});


// ===================== HOSPITAL LOCATOR LOGIC =====================

const locateBtn = document.getElementById("locateBtn");
const areaSelect = document.getElementById("areaSelect");
const hospitalResult = document.getElementById("hospitalResult");

locateBtn.addEventListener("click", () => {
  const selectedArea = areaSelect.value;

  if (!selectedArea) {
    hospitalResult.innerHTML = "Please select an area first.";
    return;
  }

  const centers = healthCenters[selectedArea];

  if (!centers || centers.length === 0) {
    hospitalResult.innerHTML = "No health centers found for this area.";
    return;
  }

  let html = "";
  centers.forEach((center) => {
    html += `
      <div class="hospital-item">
        <h4>${center.name}</h4>
        <p><strong>Type:</strong> ${center.type}</p>
        <p><strong>Address:</strong> ${center.address}</p>
        <p><strong>Contact:</strong> ${center.contact}</p>
      </div>
    `;
  });

  hospitalResult.innerHTML = html;
});
