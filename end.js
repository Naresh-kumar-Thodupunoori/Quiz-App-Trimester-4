const finalScore = document.getElementById('finalScore');
const score = localStorage.getItem('mostRecentScore');

finalScore.innerText = `Your score: ${score}`;
