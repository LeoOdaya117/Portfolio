AOS.init({
        
    delay: 100,  
    duration: 800,  
    easing: 'ease-in-out', 
});
// Toggle dark mode based on user preference
function toggleDarkMode() {
    const htmlElement = document.documentElement; // Get the root element
    htmlElement.classList.toggle('darkmode'); // Toggle the 'dark' class on the <html> element
    const icon = document.getElementById('darkModeIcon'); // Get the icon element

    // Toggle the icon between sun and moon
    if (htmlElement.classList.contains('darkmode')) {
        icon.classList.remove('fa-moon'); // Remove moon icon
        icon.classList.add('fa-sun');     // Add sun icon for dark 
        dark
    } else {
        icon.classList.remove('fa-sun');  // Remove sun icon
        icon.classList.add('fa-moon');    // Add moon icon for light mode
    }
}