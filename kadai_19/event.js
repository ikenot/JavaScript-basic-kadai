
const clickBtn = document.getElementById('btn');
const parentList = document.getElementById('text');

clickBtn.addEventListener('click', () => {
  parentList.textContent = 'ボタンをクリックしました';
})