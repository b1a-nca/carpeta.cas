const siteUpdates = [
  { date: "06/30/2026", text: "Nuevas experiencias CAS are...in! ₍՞ .  ̫ . ՞₎" },
  { date: "04/13/2026", text: "Seccion 2 creada (>.<)" },
  { date: "04/11/2026", text: "El sitio web ha sido creado! :3" }
];

function renderUpdates() {
  var container = document.getElementById("updates-container");
  if (!container) return;

  var html = "<p>";
  siteUpdates.forEach(function(u) {
    html += '<br><span class="udate">' + u.date + '</span> ' + u.text;
  });
  html += "</p>";

  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderUpdates);