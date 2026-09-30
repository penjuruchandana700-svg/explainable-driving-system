function makeDecision(situation) {
  const decision = document.getElementById("decision");
  const reason = document.getElementById("reason");
  const objects = document.getElementById("objects");
  const confidenceBar = document.getElementById("confidenceBar");
  const confidenceText = document.getElementById("confidenceText");
  const egoCar = document.getElementById("egoCar");

  if (situation === "pedestrian") {
    decision.textContent = "STOP";
    decision.style.color = "#ff4444";

    reason.textContent =
      "A pedestrian was detected in the vehicle's predicted path. " +
      "The safest action is to stop and allow the pedestrian to cross.";

    objects.innerHTML = `
      <li>🚶 Pedestrian — Detected</li>
      <li>🛣️ Driving Lane — Occupied</li>
      <li>⚠️ Collision Risk — High</li>
    `;

    confidenceBar.style.width = "98%";
    confidenceBar.style.background = "#ff4444";
    confidenceText.textContent = "98%";

    egoCar.style.bottom = "30px";

  } else if (situation === "vehicle") {
    decision.textContent = "SLOW DOWN";
    decision.style.color = "#ffaa00";

    reason.textContent =
      "A vehicle is detected ahead. The system reduces speed " +
      "to maintain a safe following distance.";

    objects.innerHTML = `
      <li>🚙 Vehicle — Detected</li>
      <li>📏 Following Distance — Reduced</li>
      <li>⚠️ Risk Level — Medium</li>
    `;

    confidenceBar.style.width = "91%";
    confidenceBar.style.background = "#ffaa00";
    confidenceText.textContent = "91%";

    egoCar.style.bottom = "70px";

  } else {
    decision.textContent = "PROCEED";
    decision.style.color = "#00ff88";

    reason.textContent =
      "No obstacles are detected in the planned driving path. " +
      "The vehicle can continue at its current speed.";

    objects.innerHTML = `
      <li>🛣️ Road — Clear</li>
      <li>🚫 Obstacles — None</li>
      <li>✅ Collision Risk — Low</li>
    `;

    confidenceBar.style.width = "95%";
    confidenceBar.style.background = "#00ff88";
    confidenceText.textContent = "95%";

    egoCar.style.bottom = "150px";
  }
}
