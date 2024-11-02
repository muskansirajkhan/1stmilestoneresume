var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
// Initially hide the skills section
skills.style.display = 'none';
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'block'; // Show the skills section
    }
    else {
        skills.style.display = 'none'; // Hide the skills section
    }
});
