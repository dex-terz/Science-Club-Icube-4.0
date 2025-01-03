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
    title: "PS-10: Fraudulent Activity Simulation and Detection with StyleGANs",
    description: "Create a system that uses StyleGANs to generate fake messages, emails, or websites commonly associated with cybercrimes like bank fraud. The system will not only generate fraudulent data but also classify it as fraudulent by training a detection model that learns to recognize such content. This approach aims to develop a robust detection mechanism to flag and prevent scams, thereby protecting individuals from financial theft."
  },
  {
    id: 11,
    title: "PS-11: Anti-Piracy Video Detection Tool ",
    description: "Develop a tool to detect and flag pirated videos on websites or streaming platforms, similar to reCAPTCHA’s bot detection. The tool should use video fingerprinting (hashing) to compare uploaded videos against known pirated content and analyze metadata for discrepancies such as altered resolution or encoding. The system should flag suspicious videos for review or automatic removal. Participants can use publicly available video datasets like those from [TRECVID](https://www.nist.gov/itl/iad/mig/trecvid) or download videos from platforms like YouTube for testing."
  },
  {
    id: 12,
    title: "PS-12: Adaptive Lighting System for Night Driving Safety",
    description: "Night driving can be hazardous due to poor visibility, especially on curvy roads or in heavy traffic. Your task is to design a prototype for an adaptive lighting system that adjusts the intensity and direction of a vehicle’s headlights based on real-time conditions such as road curvature, speed, and surrounding traffic. The system should enhance visibility, reduce glare for other drivers, and improve overall night-driving safety. Develop a solution that uses sensors and algorithms to adjust lighting dynamically, ensuring optimal illumination for safer driving at night."
  },
  {
    id: 13,
    title: "PS-13:Gamified Habit Formation and Goal Achievement Platform ",
    description: "Design a platform that transforms personal habit-building or goal-setting into an engaging, gamified experience. Users can set goals (e.g., learning a new skill, exercising, or saving money) and progress through various “game levels” by completing daily or weekly tasks. The system should reward users with points, badges, or unlockable achievements and introduce friendly competition through leaderboards or collaborative team challenges "
  },
  {
    id: 14,
    title: "PS-14: Self-Watering and Plant Health Monitoring System",
    description: "Efficient plant care requires timely watering and early detection of health issues. Your task is to develop an AI-powered system that automatically waters plants when the soil is dry and monitors their health using a camera. The system should analyze leaf color variations to detect potential insect damage or diseases and issue warnings accordingly. Create a functional prototype or simulation that demonstrates how this solution ensures optimal plant care and reduces manual intervention."
  },
  {
    id: 15,
    title: "PS-15: Safe and Economic Hazardous Waste Disposal and Recycling Methodology ",
    description: "Improper disposal of hazardous waste is a significant environmental and health risk. The challenge is to propose a feasible and economical method for safely disposing of or recycling hazardous waste. Your solution should address the risks associated with open disposal, such as contamination of land, water, and air, and prevent the release of harmful toxins like dioxins and mercury. The methodology should offer an efficient, cost-effective way to recycle or safely manage hazardous materials while minimizing environmental harm. Develop a solution that ensures safety, sustainability, and compliance with environmental regulations"
  },
  {
    id: 16,
    title: "PS-16: Carbon Emission Tracking and Dashboard ",
    description: "Carbon emissions from vehicles contribute significantly to environmental pollution. Your task is to develop an AI-driven tool that tracks and monitors the carbon emissions of vehicles in real-time. The system should analyze driving patterns, such as speed, acceleration, and braking, and provide actionable insights to drivers on how to adopt more eco-friendly driving behaviors. The goal is to make access the environmental impact of vehicle emissions by promoting efficient driving patterns, ultimately lowering the carbon footprint. Design a solution that delivers real-time feedback and helps drivers to access their environmental impact through dashboard."
  },
  {
    id: 17,
    title: "PS-17: Predictive Maintenance System for Commercial Vehicles ",
    description: "This project aims to design a prototype predictive maintenance system for commercial vehicles like trucks, delivery vans, and buses. By using IoT sensors to collect real-time data (e.g., engine temperature, tire pressure, fuel consumption), the system will analyze and predict potential issues before they cause breakdowns. Machine learning algorithms will optimize maintenance schedules, reducing unscheduled downtime and maintenance costs. The system will integrate with existing vehicle diagnostic systems to identify early signs of wear and tear, improving fleet reliability and operational efficiency."
  },
  {
    id: 18,
    title: "PS-18: Blockchain-Based Voting System for Secure Elections ",
    description: "Ensuring the security and transparency of elections is essential to maintaining trust in democratic processes. Your task is to design a blockchain-based voting system that guarantees secure, transparent, and tamper-proof elections. The system should allow voters to cast their votes electronically, with each vote securely recorded on a decentralized ledger. The blockchain ensures the immutability of records, prevents fraud, and offers complete transparency. Develop a prototype or conceptual model that demonstrates how blockchain technology can revolutionize voting systems, making them more secure and efficient. "
  },
  {
    id: 19,
    title: "PS-19: Simulation of Lunar Habitat Life Support Systems",
    description: "To simulate the life support systems of a lunar habitat, participants are required to use simulation software such as MATLAB and Simulink. These tools will model critical systems like oxygen supply, temperature control, waste management, and energy consumption to optimize the sustainability of the habitat during long-duration lunar missions. The software enables the simulation of various scenarios to assess system performance, resource efficiency, and redundancy. For further understanding and guidance, participants can refer to NASA’s research on life support systems(NASA Life Support Systems) and relevant Simulink tutorials available on YouTube. This project will involve creating theoretical models that simulate realistic lunar habitat life support operations. "
  },
  {
    id: 20,
    title: "PS-20: Conversational Agent for Legal Advice Using Prompt Engineering",
    description: "Providing legal advice requires precision and context-aware responses to ensure users receive trustworthy information. Your task is to develop a conversational agent powered by large language models to assist with legal inquiries, document generation, and answering common legal questions. The agent will handle queries, offer legal advice on various topics, and assist in drafting legal documents. Focus on prompt engineering to ensure the model delivers accurate, relevant, and context-sensitive legal guidance. The system should include a feedback loop, allowing users to refine prompts and improve the agent’s responses over time. This will ensure the agent offers reliable legal assistance enabling smooth interactions while continuously enhancing its response quality."
  },
  {
    id: 21,
    title: "PS-21: Elderly Care Solutions Platform for Caregiver and Senior Connections ",
    description: "As the elderly population grows, ensuring their well-being and timely assistance for daily activities becomes increasingly important. Your task is to develop a platform that connects elderly individuals with caregivers, enabling easy communication and facilitating the timely provision of help for daily needs. The platform should allow users to request assistance for tasks like medication reminders, meal preparation, and general companionship, while caregivers can monitor and respond to requests efficiently. Focus on making the platform user-friendly for both seniors and caregivers, ensuring reliability, security, and responsiveness to improve the quality of life for elderly individuals."
  },
  {
    id: 22,
    title: "PS-22: Personalized Treatment Pathways for Cystic Fibrosis ",
    description: "This project involves a comprehensive analysis of cystic fibrosis (CF), focusing on its genetic basis, progression, and current treatment options. The goal is to develop an AI-based model that predicts disease pathways and tailors treatment plans using real-time patient data. The system should consider various treatment methods, including medical devices, intravenous therapies, and drugs, to create personalized pathways. The solution must integrate data from genetics, clinical observations, and treatment outcomes to optimize care and improve the quality of life for CF patients. The project will provide an innovative approach to managing cystic fibrosis, enhancing treatment efficiency and long-term patient outcomes."
  },
  {
    id: 23,
    title: "PS-23: Network Traffic Management System",
    description: "Design an IoT-based network traffic management system that monitors and optimizes data flow within a large-scale network. The system should utilize IoT sensors to gather data on network performance, including latency, bandwidth usage, and packet loss. Based on real-time data, the system should dynamically adjust routing paths to avoid congestion, improve traffic flow, and minimize bottlenecks. The system should also incorporate predictive analytics to forecast potential network failures and proactively address issues before they affect performance. The goal is to ensure a more efficient and reliable local network, especially in environments with high demand or critical data transfer, such as data centers or smart cities."
  },
  {
    id: 24,
    title: "PS-24: Low-Cost Underwater Habitat Model ",
    description: "Develop a scalable model of a low-cost underwater habitat designed to support human life in aquatic environments for extended periods. The habitat must address structural integrity to withstand underwater pressure, incorporate basic life support systems like air filtration and waste management, and use cost-effective materials. The project will include a physical prototype and simulations to demonstrate pressure resistance, habitability, and resource management. This solution explores the challenges of underwater living, focusing on safety, sustainability, and adaptability for future underwater research or habitation needs."
  },
  {
    id: 25,
    title: "PS-25: Smart Grid Technology and Integration ",
    description: "Design a smart grid that integrates renewable energy sources like solar and wind with traditional power generation, optimizing energy consumption, real-time distribution, and demand prediction. The system should feature real-time monitoring, dynamic load balancing, fault detection, and a demand predictor to ensure efficient energy flow, reduce transmission losses, and maintain grid stability. The solution will enhance grid resilience, improve energy distribution, and contribute to a more reliable, sustainable power infrastructure."
  },
  {
    id: 26,
    title: "PS-26: Advanced Signal Processing for Healthcare Diagnostics ",
    description: "This project aims to develop a portable, cost-effective system for analyzing ECG signals to diagnose heart conditions. Using sensors and Arduino for signal capture, the system will filter noise, detect anomalies, and apply AI algorithms to analyze and visualize ECG patterns. The solution will assist healthcare professionals in diagnosing conditions like arrhythmias and heart attacks, improving accessibility and quality of care in both urban and rural settings. "
  },
  {
    id: 27,
    title: "PS-27: Development of Organoids Using 3D Bioprinting",
    description: "3D bioprinting has revolutionized the field of tissue engineering by enabling the creation of complex, three-dimensional structures that resemble human organs. Your task is to design a methodology or platform that utilizes 3D bioprinting technology to develop organoids capable of mimicking human organs. These organoids should incorporate advanced features like tissue complexity, functional capabilities, and vascularization to enhance their biological relevance for medical research, drug testing, and disease modeling. Focus on selecting appropriate biomaterials, optimizing printing techniques, and ensuring the long-term viability and functionality of the organoids. The platform should be scalable, efficient, and adaptable for various organ types."
  },
  {
    id: 28,
    title: "PS-28: Sustainable Urban Drainage Systems (SUDS) ",
    description: "Urban areas often struggle with stormwater runoff, flooding, and pollution. The task is to design an innovative and cost-effective urban drainage system that effectively manages these issues. The system should integrate green infrastructure solutions such as permeable pavements, green roofs, and rain gardens to absorb and slow down water flow. In addition, IoT sensors should be incorporated to enable real-time monitoring of water levels, flow rates, and water quality, providing critical data for maintenance and decision-making. The ultimate goal is to enhance flood resilience, improve water quality, and support sustainable urban development, reducing the negative environmental impact of traditional drainage systems."
  },
  {
    id: 29,
    title: "PS-29: Predictive Modeling and Optimization in Chemical Engineering ",
    description: "Develop an AI/ML model to optimize key parameters in a chemical process, focusing on reaction yield, energy consumption, and product quality. The model should predict process outcomes using historical data (e.g., pressure, temperature, flow rates) to forecast product quality and yields. Implement fault detection and prevention mechanisms to identify early signs of equipment failure or process deviations, enhancing plant safety. Use machine learning to optimize energy efficiency by determining the best operating conditions while maintaining high product yields. Additionally, provide insights on adjusting the process to reduce environmental impact, such as minimizing emissions and waste generation."
  },
  {
    id: 30,
    title: "PS-30: Biodegradable Bio-Sorbent Device for Efficient Oil Spill Cleanup ",
    description: "Oil spills pose a serious environmental threat, and cleaning up these spills efficiently is essential. Your task is to design a device that stores, deploys, and applies biodegradable bio-sorbents to oil spill sites. The device should be easy to use, cost-effective, and capable of deploying bio-sorbents in a way that maximizes their absorption capacity, effectively cleaning the spill. Focus on creating a solution that uses agricultural waste-derived bio-sorbents, ensuring the device contributes to sustainable cleanup methods while minimizing environmental impact."
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
          card.innerHTML = `<div class="pss" onclick="showModal(${ps.id})">${ps.title}</div>`;
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