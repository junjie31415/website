// Programmer: Junjie Zhao
// Email: jzhao58@u.rochester.edu


const filterButtons = document.querySelectorAll('.filter-button');
const paperItems = document.querySelectorAll('.paper-item');
const resultCount = document.getElementById('result-count');

// Update the paper card based on what tag the viewer selects
function updatePaperVisibility(selectedTopic) {
  let visibleCount = 0;

  paperItems.forEach(function (paper) {
    const paperTopic = paper.getAttribute('data-topic');
    if (selectedTopic === 'all' || paperTopic === selectedTopic) {
      paper.classList.remove('hidden');
      visibleCount += 1;
    } else {
      paper.classList.add('hidden');
    }
  });

  if (resultCount) {
    resultCount.textContent = 'Showing ' + visibleCount + ' papers.';
  }
}

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    filterButtons.forEach(function (item) {
      item.classList.remove('active');
    });

    button.classList.add('active');
    const topic = button.getAttribute('data-topic');
    updatePaperVisibility(topic);
  });
});