const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); menu.classList.toggle('opened', !open); });
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {menu.classList.remove('opened');toggle.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('leadForm');
form.addEventListener('submit', async e => {
 e.preventDefault(); if(!form.reportValidity()) return;
 const data = new FormData(form);
 const note = String(data.get('note')||'').trim();
 const msg = `Здравствуйте! Хочу записаться на бесплатное тестирование «Аптечки».\n\nИмя: ${data.get('name')}\nКонтакт: ${data.get('handle')}\nДля кого: ${data.get('scenario')}${note?'\nКомментарий: '+note:''}`;
 const feedback = document.getElementById('formFeedback');
 try { await navigator.clipboard.writeText(msg);feedback.textContent='Заявка скопирована. Вставьте её в переписку Telegram и отправьте.'; }
 catch { feedback.textContent='Не удалось автоматически скопировать. Выделите и скопируйте заявку из поля ниже.'; let text=document.getElementById('fallbackText');if(!text){text=document.createElement('textarea');text.id='fallbackText';text.readOnly=true;feedback.after(text);}text.value=msg;text.focus();text.select(); }
 window.open('https://t.me/kkkkkeka', '_blank', 'noopener,noreferrer');
});
