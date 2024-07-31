document.addEventListener('DOMContentLoaded', function() {
    // Function to handle tab switching
    function openTab(evt, tabName) {
        // Get all tab-content elements and hide them
        var tabContent = document.querySelectorAll('.tab-content');
        tabContent.forEach(function(content) {
            content.classList.remove('active');
        });

        // Get all nav links and remove the active class
        var tabLinks = document.querySelectorAll('nav ul li a');
        tabLinks.forEach(function(link) {
            link.classList.remove('active');
        });

        // Show the current tab and add the active class to the clicked link
        document.getElementById(tabName).classList.add('active');
        evt.currentTarget.classList.add('active');
    }

    // Attach the openTab function to window to make it globally accessible
    window.openTab = openTab;

    // Default open the first tab
    document.querySelector('nav ul li a').click();
});
