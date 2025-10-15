window.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const fieldInput = document.getElementById('field-input');
  const levelSelect = document.getElementById('level-select');
  const timelineInput = document.getElementById('timeline-input');
  const planList = document.getElementById('plan-list');

  if (!generateBtn || !fieldInput || !levelSelect || !timelineInput || !planList) {
    console.error('One or more required DOM elements are missing.');
    return;
  }

  generateBtn.addEventListener('click', function() {
    const field = fieldInput.value || 'General';
    const level = levelSelect.value || 'General';
    const timeline = parseInt(timelineInput.value, 10) || 6;

    const items = [
      `Research ${field} roles and required skills`,
      `Enroll in relevant courses (aim for 2–3 by month ${Math.floor(timeline / 2)})`,
      `Build portfolio projects (one per month)`,
      `Prepare resume and LinkedIn for ${field} roles`,
      `Apply to at least ${Math.max(5, timeline)} opportunities`
    ];

    planList.innerHTML = '';
    items.forEach((text, idx) => {
      const li = document.createElement('li');
      li.textContent = `Step ${idx + 1} (${level}): ${text}`;
      planList.appendChild(li);
    });
  });
});
