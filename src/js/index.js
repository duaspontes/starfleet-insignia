const button = document.getElementById('change');
const badges = document.querySelectorAll('.insignia');

let currBadge = 0;

// Shows badge given number in badges array
function showBadge (badgeNumber){
    badges[badgeNumber].classList.add('front');
};

// Hides badge given number in badges array
function hideBadge (badgeNumber) {
    badges[badgeNumber].classList.remove('front');
};

button.addEventListener('click', function(){
    // Makes sure that the three badges loop
    if (currBadge === badges.length - 1) {
        hideBadge(currBadge);
        currBadge = 0;
        showBadge(currBadge);
    // If loop conditions aren't met, cycle through badges
    } else {
        hideBadge(currBadge);
        currBadge++;
        showBadge(currBadge);
    };
});