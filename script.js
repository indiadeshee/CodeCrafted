/*!
 * CodeCrafted Web Design Template
 * Copyright (c) 2025 [Aapka Naam / Aapka Company Naam]
 * All rights reserved.
 */

// Footer Year Update
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form Validation (Simple example)
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents form submission
    alert("Thank you for reaching out! We will get back to you soon.");
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    alert('Form submitted successfully!');
});
AOS.init();
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
};

document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById("voice-btn").addEventListener("click", function() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function(event) {
            const searchQuery = event.results[0][0].transcript;
            document.getElementById("search-input").value = searchQuery;
            document.getElementById("suggestions").style.display = "none";
        };

        recognition.onerror = function() {
            alert("Speech recognition failed.");
        };
    } else {
        alert("Your browser does not support voice search.");
    }
});

const suggestions = [
    "Web Design",
    "SEO Services",
    "Digital Marketing",
    "Mobile Apps",
    "Graphic Design",
    "Content Writing",
    "Social Media Marketing"
];

// Show suggestions when typing
document.getElementById("search-input").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query));

    const suggestionsContainer = document.getElementById("suggestions");
    suggestionsContainer.innerHTML = ""; // Clear previous suggestions

    if (filteredSuggestions.length > 0) {
        suggestionsContainer.style.display = "block";
        filteredSuggestions.forEach(suggestion => {
            const suggestionElement = document.createElement("div");
            suggestionElement.textContent = suggestion;
            suggestionElement.addEventListener("click", function() {
                document.getElementById("search-input").value = suggestion;
                suggestionsContainer.style.display = "none"; // Hide suggestions after selection
            });
            suggestionsContainer.appendChild(suggestionElement);
        });
    } else {
        suggestionsContainer.style.display = "none";
    }
});

// Clear the search input when the 'X' button is clicked
document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("search-input").value = "";
    document.getElementById("suggestions").style.display = "none";
});
function initMap() {
    // आपके गूगल मैप API Key को जोड़ें
    const mapOptions = {
        zoom: 14,  // ज़ूम स्तर
        center: { lat: 28.6139, lng: 77.2090 },  // दिल्ली का उदाहरण, इसे अपने स्थान के अनुसार बदलें
        mapTypeId: 'roadmap',  // मैप का प्रकार (Roadmap, Satellite, Hybrid, Terrain)
        styles: [  // कस्टम मैप स्टाइल (अगर चाहें)
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    };

    // मैप को DOM के साथ जोड़ना
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // एक marker जोड़ना
    const marker = new google.maps.Marker({
        position: { lat: 28.6139, lng: 77.2090 },  // marker का स्थान
        map: map,
        title: 'Our Office'  // marker पर दिखने वाला टेक्स्ट
    });
}

// गूगल मैप API लोड करना
function loadMapScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
}

// जब पेज लोड हो, तो मैप को लोड करें
window.onload = loadMapScript;
// Dark/Light Mode Toggle Functionality
const modeToggleButton = document.getElementById("mode-toggle");
const modeIcon = document.getElementById("mode-icon");
const body = document.body;

// Check for saved theme in localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    modeIcon.classList.remove("fa-sun");
    modeIcon.classList.add("fa-moon");
}

// Toggle between dark and light modes
modeToggleButton.addEventListener("click", function() {
    body.classList.toggle("dark-mode");

    // Toggle the sun/moon icon
    if (body.classList.contains("dark-mode")) {
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark");  // Save dark mode preference
    } else {
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "light");  // Save light mode preference
    }
});

