const title = document.querySelector('.title');
title.setAttrribute('aria-label', title.textContent); 

title.innerHTML = [...title.textContent]
.map((ch, i) => ch === ' ' ? ' ' : '<span class="lts 1${i %3}"aria-hidden="true">${ch}</span>')
.join('');