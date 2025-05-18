// Mock Data
const cars = [
    { name: "Economy Car", price: 45, type: "Sedan" },
    { name: "Luxury SUV", price: 120, type: "SUV" },
    { name: "Convertible", price: 85, type: "Sports" }
];

// DOM Elements
const settingsMenu = document.getElementById('settingsMenu');
const overlay = document.getElementById('overlay');
const loginModal = document.getElementById('loginModal');

// Toggle Settings Menu
function toggleSettings() {
    settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
}

// Handle Overlay Click
overlay.onclick = () => {
    document.querySelectorAll('.modal, .settings-menu').forEach(el => el.style.display = 'none');
    overlay.style.display = 'none';
};

// Login Button Handler
document.querySelector('.btn-primary').addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'block';
    overlay.style.display = 'block';
});

// Search Form Handler
document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Show loading state
    e.target.querySelector('button').innerHTML = 'Searching...';
    setTimeout(() => {
        renderCars();
        e.target.querySelector('button').innerHTML = 'Search Cars';
    }, 1000);
});

// Render Car Cards
function renderCars() {
    const grid = document.getElementById('resultsGrid');
    grid.innerHTML = cars.map(car => `
        <div class="car-card">
            <div style="padding: 20px">
                <h3>${car.name}</h3>
                <p style="margin: 10px 0">Type: ${car.type}</p>
                <p style="font-size: 24px; color: #003580; margin: 15px 0">$${car.price}/day</p>
                <button class="btn btn-primary" style="width: 100%">Book Now</button>
            </div>
        </div>
    `).join('');
}

// Initial Render
renderCars();