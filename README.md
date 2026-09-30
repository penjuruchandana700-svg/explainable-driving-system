🚗 Explainable Autonomous Driving

An interactive web-based Explainable Autonomous Driving (XAI) dashboard that demonstrates how an autonomous vehicle can detect objects, make driving decisions, and explain the reasoning behind those decisions.

📌 Project Overview

Autonomous driving systems make decisions based on information detected from their surroundings. This project focuses on explainability, making those decisions easier for users to understand.

The dashboard simulates different driving situations and displays:

🚶 Pedestrian detection

🚙 Vehicle detection

🛣️ Road conditions

🛑 Stop decisions

⚠️ Slow-down decisions

✅ Proceed decisions

📊 AI confidence levels

💡 Explanations for AI decisions

✨ Features

Interactive Driving Environment
Visual representation of the road and detected objects.

Object Detection Simulation
Simulates pedestrians, vehicles, and clear roads.

Explainable AI Decisions
Shows why the autonomous vehicle chooses to stop, slow down, or proceed.

Confidence Visualization
Displays the AI system's confidence for each decision.

Responsive Design
Works on desktop and mobile screen sizes.

Simple Web Technologies
Built using HTML, CSS, and JavaScript without external frameworks.

🛠️ Technologies Used

HTML5

CSS3

JavaScript

Responsive Web Design

📂 Project Structure
explainable-autonomous-driving/
│
├── index.html
├── style.css
├── script.js
└── README.md

🚀 Getting Started
1. Clone the repository
git clone https://github.com/YOUR-USERNAME/explainable-autonomous-driving.git

2. Open the project

Navigate to the project folder:

cd explainable-autonomous-driving

3. Run the application

Open index.html in any modern web browser.

No server or additional installation is required.

🎮 How to Use

After opening the application, you will see the autonomous driving dashboard.

Use the buttons to simulate different situations:

🚶 Pedestrian Detected

The system detects a pedestrian in the vehicle's predicted path.

Decision: STOP

Explanation: The vehicle stops to reduce collision risk and allow the pedestrian to cross.

🚙 Vehicle Ahead

A vehicle is detected ahead of the autonomous vehicle.

Decision: SLOW DOWN

Explanation: The vehicle reduces speed to maintain a safer following distance.

🛣️ Road Clear

No obstacles are detected in the planned driving path.

Decision: PROCEED

Explanation: The vehicle can continue because the driving path is clear.

🧠 Explainable AI Concept

The main idea of this project is to make autonomous vehicle decisions understandable.

Instead of displaying only:

STOP


the system provides an explanation such as:

A pedestrian was detected in the vehicle's predicted path.
The safest action is to stop and allow the pedestrian to cross.


This helps users understand what the system detected, what decision it made, and why it made that decision.

📊 Example Decision Flow
        Environment
             │
             ▼
      Object Detection
             │
             ▼
     Situation Analysis
             │
      ┌──────┼──────┐
      ▼      ▼      ▼
 Pedestrian Vehicle  Clear
      │      │      │
      ▼      ▼      ▼
     STOP  SLOW    PROCEED
      │      │      │
      └──────┼──────┘
             ▼
       AI Explanation

🔮 Future Improvements

This project can be extended with:

Real-time camera input

Computer vision-based object detection

Machine learning models

Traffic sign recognition

Traffic light detection

Lane detection

Collision prediction

Real-time vehicle speed simulation

Sensor data visualization

Voice-based explanations

Advanced XAI techniques such as SHAP or LIME

Integration with autonomous driving datasets

⚠️ Disclaimer

This project is an educational simulation and is not intended for controlling real autonomous vehicles or making real-world driving decisions.

👨‍💻 Author

Your Name

If you found this project useful, consider giving the repository a ⭐ on GitHub.
