const buttons = document.querySelectorAll('.button-row button');
const cardGroups = document.querySelectorAll('.card-group');

// Initially show only the first card group
cardGroups[0].style.display = 'block';
for (let i = 1; i < cardGroups.length; i++) {
  cardGroups[i].style.display = 'none';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const targetGroup = document.querySelector(targetId);

    // Hide all card groups
    cardGroups.forEach(group => {
      group.style.display = 'none';
    });

    // Show the selected card group
    targetGroup.style.display = 'block';
  });
});


