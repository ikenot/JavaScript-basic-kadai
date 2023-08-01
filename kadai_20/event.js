
const clickBtn = document.getElementById('btn');
const text = document.getElementById('text');

clickBtn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';    
  }, 2000);

})