
$(document).ready(() => {
    const menu = ['a','b','c','d']
    for(let i = 0; i <= menu.length -1 ; i++ )
    {
    $('#list-menu').append(
        `<a href="#" class="list-group-item list-group-item-action border-0 my-0 ${i === 0 ? 'active' : '' }">${menu[i]}</a>`
        )
    }
})
if(window.innerHeight < window.innerWidth){
    $('#headers').addClass("sticky-top");
} else {
    console.log('mobile')
}
// Check if dark mode is enabled in local storage
if (sessionStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

// Toggle dark mode on switch change
$('#darkModeSwitch').on('change', function () {
    if ($(this).is(':checked')) {
        $('#status-dark-mode').html('')
        $('#status-dark-mode').html(`<i class="fas fa-moon fa-lg"></i>`);
        enableDarkMode();
    } else {
        $('#status-dark-mode').html('')
        $('#status-dark-mode').html(`<i class="fas fa-sun fa-lg"></i>`);
        disableDarkMode();
    }
});

// Function to enable dark mode
function enableDarkMode() {
    $('body').addClass('dark-mode');
    $('hr').addClass('bg-light');
    $('.card').addClass('dark-mode border-light');
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    $('body').removeClass('dark-mode');
    $('hr').removeClass('bg-light');
    $('.card').removeClass('dark-mode border-light');
    localStorage.setItem('darkMode', null);
}