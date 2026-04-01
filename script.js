// ---------------------------
// Mobile Menu (safe)
// ---------------------------
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

// ---------------------------
// Lesson Estimator (safe)
// ---------------------------
function calculateLessons() {
  const experienceEl = document.getElementById('experience');
  const confidenceEl = document.getElementById('confidence');
  const resultEl = document.getElementById('calc-result');

  if (!experienceEl || !confidenceEl || !resultEl) return;

  const experience = experienceEl.value;
  const confidence = confidenceEl.value;

  let base = experience === 'none' ? 40 : (experience === 'some' ? 25 : 12);
  let total = base + ((5 - confidence) * 3);

  resultEl.innerHTML = `Estimated hours: <span style="color:#e63946; font-size:1.5rem;">${total}</span>`;
}

// ---------------------------
// Testimonials (safe)
// ---------------------------
let current = 0;
const tests = [
  { name: "Sarah Spencer.", text: "Passed first time with Rawat. The instructor was so patient and calm, which really helped my nerves.", loc: "Huddersfield" },
  { name: "Hassan", text: "Best instructor in West Yorkshire.", loc: "Batley" },
  { name: "Rabia", text: "Passed first time. Thank you", loc: "Ravensthorpe" },
  { name: "Yusuf M", text: "Thanks to Rawat I've passed before my provisional expired.", loc: "Batley" },
  { name: "Ahmed R", text: "Highly recommend for anyone looking for professional manual lessons. Great value for money.", loc: "Batley" },
  { name: "Andrew Brown", text: "The mock tests were a game changer. I felt 100% prepared when the real test day came.", loc: "Huddersfield" },
  { name: "Ish", text: "Thank you so much, could not have done it without you and your guidance", loc: "Batley" },
  { name: "RD", text: "Yes, I've passed before my birthday. Thank you for my early birthday gift!", loc: "Batley" },
];

function updateTestimonials() {
  const textEl = document.getElementById('test-text');
  const nameEl = document.getElementById('test-name');
  const locEl = document.getElementById('test-loc');

  if (!textEl || !nameEl || !locEl) return;

  textEl.innerText = `"${tests[current].text}"`;
  nameEl.innerText = tests[current].name;
  locEl.innerText = tests[current].loc;

  current = (current + 1) % tests.length;
}

// Only start the slider if the elements exist on the page
if (
  document.getElementById('test-text') &&
  document.getElementById('test-name') &&
  document.getElementById('test-loc')
) {
  updateTestimonials();
  setInterval(updateTestimonials, 5000);
}
