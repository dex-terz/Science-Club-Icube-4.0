const problemStatements = [
  {
    id: 1,
    title: "PS-01: Enhance Urban Living Through AI-Driven Traffic Management System",
    description: "Traffic congestion is a major issue in cities, causing delays and pollution. Your task is to create a system using AI and IoT to monitor traffic with sensors and cameras, analyze patterns, and optimize signal timings. The system should also provide live updates to users through an app or dashboard, suggesting alternative routes to reduce congestion. Design a prototype or model showcasing how this solution can improve traffic flow and urban transportation."
  },
  {
    id: 2,
    title: "PS-02: Switching from Heavy Fuel Oil to Suitable Fuel for Marine Diesel Engines",
    description: "Addressing urgent environmental concerns, innovative approaches are sought to transition marine diesel engines from heavy fuel oil to a more sustainable alternative. Develop solutions that prioritize efficiency, affordability, and environmental impact in maritime transportation. Together, let’s pioneer a global shift towards cleaner marine fuels, mitigating climate change and preserving our oceans."
  },
  {
    id: 3,
    title: "PS-03: Smart Campus Management Solution",
    description: "Modern campuses require efficient management to enhance productivity and convenience. Your task is to develop a tech-based solution using IoT devices, mobile apps, or data-driven analytics to address specific campus needs. This could include a system for smart energy management that optimizes electricity usage, an automated attendance system using IoT or facial recognition, or a real-time campus navigation app for guiding students and visitors. Create a prototype or concept showcasing how your solution improves campus operations."
  },
  {
    id: 4,
    title: "PS-04: Disaster Resilient Infrastructure Monitoring System",
    description: "Infrastructure like bridges, dams, and buildings are vital but prone to damage over time, posing risks during disasters. Your task is to develop a sensor-based system that continuously monitors the structural health of these assets. Using IoT sensors for data collection and AI for analyzing patterns, the system should predict potential failures and provide timely alerts. Design a prototype or conceptual model to demonstrate how this solution ensures safety and reduces disaster-related risks."
  },
  {
    id: 5,
    title: "PS-05: Personalized Learning and Skill Development Platform",
    description: "Design a platform that uses AI to analyze individual learning styles, strengths, and weaknesses to create personalized learning paths for students and professionals. The system should recommend courses, tutorials, and hands-on projects, and provide real-time feedback to enhance skills based on market demands and career goals. It should integrate gamification elements and allow peer-to-peer learning for better engagement."
  },
  {
    id: 6,
    title: "PS-06: VR Training for Emergency Response and Safety",
    description: "Design a cost-effective VR training solution to simulate disaster scenarios like fires, earthquakes, or medical emergencies. Focus on creating detailed environment mockups using free 3D assets from tools like Unity or Blender. Plan customizable scenario logic, outlining responder tasks and challenges. Incorporate a conceptual design for AI-driven feedback, evaluating performance through predefined metrics and visualized using flowcharts. Optionally, develop a prototype or demo using a non-VR setup or affordable VR options like Google Cardboard. Propose an accessibility plan for scalable, low-cost implementation using mobile VR. Present the idea with detailed mockups, diagrams, and cost analysis, ensuring feasibility for real-world applications."
  },
  {
    id: 7,
    title: "PS-07: Blockchain-Powered Decentralized Identity Verification Platform",
    description: "Traditional identity verification methods are prone to inefficiencies and security risks. Your task is to create a decentralized platform using blockchain technology for secure and tamper-proof identity verification. The system should streamline background checks by storing encrypted data on a distributed ledger, ensuring privacy and authenticity. Design a prototype or concept that demonstrates how blockchain can revolutionize identity management with increased efficiency and trust."
  },
  {
    id: 8,
    title: "PS-08: Efficient Energy Storage for Remote Locations Using Alternative Sources",
    description: "Alternative energy sources, such as solar and wind, offer significant benefits over fossil fuels but face challenges in remote areas, particularly with energy storage. Your task is to develop a new methodology for efficiently storing alternative energy in portable devices like batteries or chargers. The solution should ensure that energy can be stored for a specified period, ensuring its accessibility in areas with inconsistent energy availability. Additionally, the system should prioritize safety considerations to prevent risks like overheating or damage. Design a compact, safe, and efficient energy storage solution suitable for mobile use in remote locations."
  },
  {
    id: 9,
    title: "PS-09: Real-Time Threat Detection System",
    description: "Cybersecurity threats like phishing and malware compromise sensitive information daily. Your task is to develop an AI-powered system capable of real-time detection of phishing websites and malicious email attachments. The system should analyze URLs, email content, and attachment behavior to identify potential threats, providing immediate alerts. Build a prototype or simulation that highlights how AI can enhance security by proactively mitigating risks in real-time."
  },
  {
    id: 10,
    title: "PS-10: IoT-Enabled Smart Healthcare Monitoring System",
    description: "Design a system that uses IoT devices to monitor a patient's vital signs in real-time, alerting medical professionals and family members if there are any abnormalities. The system should also provide patients with easy-to-read dashboards showing their health data, and include features like medication reminders and activity tracking. Develop a prototype or concept that demonstrates how IoT can improve patient care and streamline medical monitoring."
  },
  {
    id: 11,
    title: "PS-11: Automated Urban Agriculture System",
    description: "Urban farming is gaining popularity as cities strive to become more self-sufficient. Your task is to create an automated urban agriculture system using IoT sensors and AI to monitor soil moisture, temperature, light, and nutrient levels. The system should automatically adjust the growing conditions for crops and alert the user when manual intervention is required. Develop a prototype that demonstrates how this solution could revolutionize food production in urban environments."
  },
  {
    id: 12,
    title: "PS-12: AI-Powered Personal Finance Assistant",
    description: "Design an AI-powered personal finance assistant that can analyze a user's spending habits, income, and financial goals. The system should suggest ways to optimize savings, reduce expenses, and manage investments. Additionally, it could provide real-time budget tracking, bill payment reminders, and financial insights. Develop a prototype that showcases how AI can simplify personal finance management and improve financial well-being."
  },
  {
    id: 13,
    title: "PS-13: Autonomous Delivery Drone System",
    description: "With the growing need for fast and efficient deliveries, autonomous delivery drones offer a promising solution. Your task is to design a system where drones can navigate, deliver packages, and return autonomously. This could include integrating AI for obstacle avoidance, GPS for navigation, and cloud technology for real-time tracking and monitoring. Build a prototype or concept to demonstrate how autonomous drones could revolutionize the delivery industry."
  },
  {
    id: 14,
    title: "PS-14: Sustainable Packaging Solution Using Biodegradable Materials",
    description: "With increasing environmental concerns over plastic waste, the development of sustainable packaging solutions is critical. Your task is to design an innovative packaging system using biodegradable materials that provide the same level of protection and durability as traditional packaging. Consider how this solution could be applied to various industries, including food, e-commerce, and pharmaceuticals. Design a prototype or concept to demonstrate the feasibility and environmental benefits of this solution."
  },
  {
    id: 15,
    title: "PS-15: Automated Waste Sorting and Recycling System",
    description: "Develop an automated system that uses AI and robotics to sort and recycle waste efficiently. The system should identify recyclable materials and separate them from non-recyclable waste, ensuring that the recyclable materials are processed properly. Design a prototype that demonstrates how this system can streamline waste management processes and reduce the environmental impact of landfills."
  },
  {
    id: 16,
    title: "PS-16: Smart Home Energy Optimization System",
    description: "Create a smart home system that uses IoT sensors to monitor energy usage across different appliances and devices. The system should provide real-time feedback on energy consumption and suggest ways to optimize usage, such as turning off lights when rooms are unoccupied or adjusting heating and cooling based on occupancy. Design a prototype or concept to demonstrate how this system can reduce energy costs and contribute to sustainability."
  },
  {
    id: 17,
    title: "PS-17: AI-Based Automated Content Generation Tool",
    description: "Design a tool that uses AI to automatically generate high-quality content for websites, blogs, and social media posts. The tool should analyze keywords, trends, and audience preferences to create content that is both engaging and SEO-friendly. Build a prototype that showcases how AI can streamline content creation for digital marketing purposes."
  },
  {
    id: 18,
    title: "PS-18: Smart Traffic Light System for Pedestrian Safety",
    description: "Design a traffic light system that prioritizes pedestrian safety by using sensors and AI to detect pedestrian movement and adjust light timings accordingly. The system should ensure that pedestrians have enough time to cross safely while minimizing delays for vehicle traffic. Develop a prototype or concept that demonstrates how this solution can improve pedestrian safety and traffic flow."
  },
  {
    id: 19,
    title: "PS-19: AI-Driven Fraud Detection System for E-Commerce",
    description: "With the rise of e-commerce, fraudulent transactions have become a significant concern. Your task is to create an AI-driven fraud detection system that can analyze transaction data in real-time and identify suspicious patterns. The system should provide immediate alerts to merchants and prevent fraudulent purchases. Design a prototype or concept to demonstrate how AI can enhance security in the e-commerce sector."
  },
  {
    id: 20,
    title: "PS-20: Voice-Controlled Smart Assistant for Elderly Care",
    description: "Design a voice-controlled smart assistant specifically for elderly individuals to help them with daily tasks, such as setting medication reminders, controlling smart devices, and staying connected with family members. The assistant should be easy to use, with large buttons and simple commands. Develop a prototype or concept to demonstrate how this solution can improve the quality of life for elderly individuals."
  },
  {
    id: 21,
    title: "PS-21: Real-Time Crowd Management and Safety System",
    description: "Design a system using AI and IoT to monitor and manage crowd density in public spaces such as shopping malls, airports, and stadiums. The system should be able to provide real-time data on crowd movement and density and send alerts to authorities if overcrowding occurs, ensuring public safety. Develop a prototype that demonstrates how this system can be used to optimize crowd management."
  },
  {
    id: 22,
    title: "PS-22: AI-Powered Job Recommendation Platform",
    description: "Develop an AI-powered job recommendation platform that analyzes a user's skills, experience, and preferences to suggest relevant job opportunities. The system should also allow employers to post job openings and match them with suitable candidates. Create a prototype or concept that demonstrates how AI can streamline the job search process for both job seekers and employers."
  },
  {
    id: 23,
    title: "PS-23: Autonomous Waste Collection Robot",
    description: "Create a robot that can autonomously collect waste from streets or public spaces. The robot should be able to navigate using AI and sensors, detect trash, and pick it up without human intervention. Design a prototype that demonstrates how autonomous robots can help maintain clean and safe public spaces."
  },
  {
    id: 24,
    title: "PS-24: Remote Health Monitoring for Chronic Patients",
    description: "Design a system for remotely monitoring chronic patients using wearable devices that track vital signs such as heart rate, blood pressure, and glucose levels. The system should send real-time data to healthcare providers, enabling them to intervene early if necessary. Develop a prototype that demonstrates how this solution can improve healthcare for patients with chronic conditions."
  },
  {
    id: 25,
    title: "PS-25: Smart Inventory Management System",
    description: "Develop a smart inventory management system using IoT sensors and AI to track inventory levels in real-time. The system should automatically reorder items when stocks are low, track expiration dates, and alert staff to any discrepancies. Create a prototype or concept to demonstrate how this system can optimize inventory management for businesses."
  },
  {
    id: 26,
    title: "PS-26: Smart Wearable for Fitness Tracking and Health Insights",
    description: "Design a smart wearable device that tracks a user's fitness activities such as steps, heart rate, calories burned, and sleep quality. The system should provide personalized health insights and suggest improvements based on the user's data. Develop a prototype or concept that demonstrates how this wearable can help individuals achieve their fitness goals."
  },
  {
    id: 27,
    title: "PS-27: AI-Based Personalized Nutrition Planner",
    description: "Develop an AI-based nutrition planner that suggests personalized meal plans based on a user's dietary preferences, health goals, and allergies. The system should recommend recipes, track calorie intake, and provide insights into nutrient balance. Design a prototype or concept to demonstrate how AI can optimize personal nutrition and wellness."
  },
  {
    id: 28,
    title: "PS-28: Smart Home Security System with Facial Recognition",
    description: "Create a smart home security system that uses facial recognition technology to identify visitors and grant or deny access to the home. The system should also integrate motion sensors and alert homeowners of any suspicious activity. Design a prototype to demonstrate how facial recognition can enhance home security."
  },
  {
    id: 29,
    title: "PS-29: AI-Powered Virtual Shopping Assistant",
    description: "Design a virtual shopping assistant that uses AI to help customers find products based on their preferences, price range, and previous shopping behavior. The assistant should be able to recommend similar products and provide personalized discounts. Develop a prototype that demonstrates how AI can improve the online shopping experience."
  },
  {
    id: 30,
    title: "PS-30: Solar-Powered Portable Water Purifier",
    description: "Design a portable water purifier that uses solar power to filter and purify water in remote areas. The system should be lightweight, easy to use, and capable of purifying a significant amount of water within a short period. Develop a prototype to demonstrate how this system can provide clean drinking water in areas with limited access to electricity."
  }
];


// Function to toggle the list of problem statements
function toggleList() {
  const cardContainer = document.getElementById("card-container1");
  if (cardContainer.innerHTML === "") {
      // Populate the card container with problem statements
      problemStatements.forEach(ps => {
          const card = document.createElement("div");
          card.className = "cardx";
          card.innerHTML = `<h4 onclick="showModal(${ps.id})">${ps.title}</h4>`;
          cardContainer.appendChild(card);
      });
  } else {
      // Clear the card container if it is already populated
      cardContainer.innerHTML = "";
  }
}

// Function to show modal
function showModal(id) {
  const modal = document.getElementById("modal1");
  const modalTitle = document.getElementById("modal-title1");
  const modalDescription = document.getElementById("modal-description1");

  // Find the problem statement based on the id
  const problemStatement = problemStatements.find(ps => ps.id === id);

  // Populate modal content dynamically with a line break
  if (problemStatement) {
      modalTitle.textContent = problemStatement.title; // Set the title
      modalDescription.innerHTML = `<br>${problemStatement.description}`; // Add line break before the description
  }

  modal.style.display = "block"; // Show modal
}


// Function to close modal
function closeModal() {
  const modal = document.getElementById("modal1");
  modal.style.display = "none"; // Hide modal
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("modal1");
  if (event.target === modal) {
      closeModal();
  }
}