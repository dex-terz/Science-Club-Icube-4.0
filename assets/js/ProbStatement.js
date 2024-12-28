

function toggleList() {
  const listContainer = document.getElementById('card-container1');
  const toggleicon = document.getElementById('one');
  toggleicon.textContent= toggleicon.textContent === "-" ? "+" : "-";
  renderCards();
  listContainer.style.display = listContainer.style.display === 'block' ? 'none' : 'block';
}

// Array of problem statements
const problemStatements = [
  { id: 1, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  { id: 2, title: "PS 2", description: "Drone-based surveillance system for vessels..." },
  { id: 3, title: "PS 3", description: "Removal/Reduction of stickiness in spray drying..." },
  { id: 4, title: "PS 4", description: "IoT-enabled Android application for parking space..." },

  { id: 5, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  { id: 6, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  { id: 7, title: "PS 2", description: "Drone-based surveillance system for vessels..." },
  { id: 8, title: "PS 3", description: "Removal/Reduction of stickiness in spray drying..." },
  { id: 9, title: "PS 4", description: "IoT-enabled Android application for parking space..." },

  { id: 10, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  { id: 11, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  { id: 12, title: "PS 2", description: "Drone-based surveillance system for vessels..." },
  { id: 13, title: "PS 3", description: "Removal/Reduction of stickiness in spray drying..." },
  { id: 14, title: "PS 4", description: "IoT-enabled Android application for parking space..." },

  { id: 15, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  { id: 16, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  { id: 17, title: "PS 2", description: "Drone-based surveillance system for vessels..." },
  { id: 18, title: "PS 3", description: "Removal/Reduction of stickiness in spray drying..." },
  { id: 19, title: "PS 4", description: "IoT-enabled Android application for parking space..." },

  { id: 20, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  { id: 21, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  { id: 22, title: "PS 2", description: "Drone-based surveillance system for vessels..." },
  { id: 23, title: "PS 3", description: "Removal/Reduction of stickiness in spray drying..." },
  { id: 24, title: "PS 4", description: "IoT-enabled Android application for parking space..." },

  { id: 25, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  { id: 26, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  { id: 27, title: "PS 2", description: "Drone-based surveillance system for vessels..." },
  { id: 28, title: "PS 3", description: "Removal/Reduction of stickiness in spray drying..." },
  { id: 29, title: "PS 4", description: "IoT-enabled Android application for parking space..." },

  { id: 30, title: "PS 1", description: "Switching from heavy fuel oil to a suitable fuel..." },
  
];

// Function to render cards dynamically
function renderCards() {
const container = document.getElementById('card-container1');
container.innerHTML = ''; // Clear any existing cards

problemStatements.forEach(ps => {
const card = document.createElement('div');
card.classList.add('cardx');
card.setAttribute('onclick', `showModal(${ps.id})`);

card.innerHTML = `
  <div class="card-content1">
      <div class="left1">${ps.title}</div>
      <div class="separator"></div>
      <div class="right1">${ps.description}</div>
  </div>
`;

container.appendChild(card);
});
}
// Example showModal function
function showModal(id) {
  const modal = document.getElementById("modal1");
  const modalTitle = document.getElementById("modal-title1");
  const modalDescription = document.getElementById("modal-description1");

  // Find the problem statement based on the id
  const problemStatement = problemStatements.find(ps => ps.id === id);

  // Populate modal content dynamically
  if (problemStatement) {
      modalTitle.textContent = problemStatement.title;
      modalDescription.textContent = problemStatement.description;
  }

  modal.style.display = "flex"; // Show modal
}
window.addEventListener('click', function (event) {
  const modal = document.getElementById('modal1');
  if (event.target === modal) {
      closeModal();
  }
});


// Close modal
function closeModal() {
  const modal = document.getElementById("modal1");
  modal.style.display = "none"; // Hide modal
}
