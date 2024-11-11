// Function to show house information in a popup
function showHouseInfo(event, title, backgroundImage) {
    const popup = document.getElementById('popup');
   

    // Set the title
    document.getElementById('popup-title').innerText = title;
    

    // Set the background image for the popup
     
    popup.style.backgroundImage = `url('${backgroundImage}')`;
    popup.style.backgroundSize = 'cover'; // Cover the entire popup
    popup.style.backgroundPosition = 'center'; // Center the image
   
    if (title === 'Community') {
        document.getElementById('community-link').style.display = 'block'; // Show the link
    } else {
        document.getElementById('community-link').style.display = 'none'; // Hide the link
    }


    // Show the popup
    popup.style.display = 'block';
}

// Function to close the house information popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to show the description popup
function showDescription() {
    document.getElementById('description-popup').style.display = 'block';
}

// Function to close the description popup
function closeDescription() {
    document.getElementById('description-popup').style.display = 'none';
}

// Handle the info button click event
let infoButton = document.querySelector('.info-button');

infoButton.addEventListener('click', function() {
    // Toggle 'active' class for the info button
    infoButton.classList.toggle('active');

    // Show the description popup
    showDescription();
});

// Close popup when clicking outside of it
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        closePopup();
    }
});




