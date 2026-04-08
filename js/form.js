const form = document.querySelector("#webform");
const summary = document.querySelector("#form-summary article");

if (form && summary) {
  form.addEventListener("input", updateSummary);
  form.addEventListener("submit", handleSubmit);
}

function updateSummary() {
  const fullname = document.querySelector("#fullname")?.value || "—";
  const email = document.querySelector("#email")?.value || "—";
  const incidentType = document.querySelector("#incident-type")?.value || "—";
  const date = document.querySelector("#date")?.value || "—";
  const location = document.querySelector("#location")?.value || "—";
  const comment = document.querySelector("#comment")?.value || "—";

  const severityChecked = document.querySelector(
    'input[name="severity"]:checked',
  );
  const severity = severityChecked ? severityChecked.value : "—";

  summary.innerHTML = `
    <h3>Opsummering</h3>
    <p><strong>Navn:</strong> ${fullname}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Type:</strong> ${incidentType}</p>
    <p><strong>Alvorlighed:</strong> ${severity}</p>
    <p><strong>Dato:</strong> ${date}</p>
    <p><strong>Sted:</strong> ${location}</p>
    <p><strong>Beskrivelse:</strong> ${comment}</p>
  `;
}

function handleSubmit(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  summary.innerHTML += `<p><strong>Status:</strong> Indberetning klar til at blive sendt.</p>`;
}
