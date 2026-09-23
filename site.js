// 28 September 2026 at 11:00 in Amsterdam: 09:00 UTC (CEST).
const launchTime = Date.parse('2026-09-28T09:00:00Z');
function updateCountdown() {
  const remaining = Math.max(0, Math.ceil((launchTime - Date.now()) / 1000));
  const parts = {
    days: Math.floor(remaining / 86400),
    hours: Math.floor((remaining % 86400) / 3600),
    minutes: Math.floor((remaining % 3600) / 60),
    seconds: remaining % 60
  };
  for (const [unit, number] of Object.entries(parts)) {
    document.querySelector(`[data-unit="${unit}"]`).textContent = String(number).padStart(2, '0');
  }
  document.getElementById('countdown-done').hidden = remaining !== 0;
}
updateCountdown();
setInterval(updateCountdown, 1000);

const form = document.getElementById('signup-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  const error = document.getElementById('signup-error');
  error.hidden = true;
  button.disabled = true;
  button.textContent = 'Even geduld…';
  const values = new FormData(form);
  try {
    const response = await fetch('https://formsubmit.co/ajax/silver@desko.nl', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({
        name: values.get('name'), email: values.get('email'),
        toestemming: values.get('consent') === 'on' ? 'Ja, eenmalige update' : 'Nee',
        _subject: 'Aanmelding Desko sneak peek', website: values.get('website')
      })
    });
    const result = await response.json();
    console.info('FormSubmit status:', JSON.stringify({success: result.success, message: result.message}));
    if (!response.ok || (result.success !== true && result.success !== 'true')) throw new Error('Aanmelden mislukt');
    form.reset();
    form.hidden = true;
    document.getElementById('signup-success').hidden = false;
  } catch (_) {
    error.hidden = false;
  } finally {
    button.disabled = false;
    button.textContent = 'Houd me op de hoogte ↗';
  }
});
