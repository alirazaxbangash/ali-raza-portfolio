const toggle=document.getElementById('toggle');const nav=document.getElementById('nav');toggle.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();
// Subtle neon cursor-follow effect on desktop
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

// Free demo request: compose a WhatsApp message; user reviews and sends it.
const demoForm = document.getElementById('demoForm');
if (demoForm) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(demoForm);
    const message = [
      'Hi Ali! I would like to request a free demo.',
      `Name: ${data.get('name') || ''}`,
      `Business/Brand: ${data.get('business') || 'Not provided'}`,
      `Demo type: ${data.get('demoType') || ''}`,
      `Details: ${data.get('details') || 'Not provided'}`,
    ].join('\n');
    window.open(`https://wa.me/923208528489?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}
