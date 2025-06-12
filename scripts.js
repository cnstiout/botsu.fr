// ============================
// Animation du titre principal
// ============================
document.addEventListener("DOMContentLoaded", () => {
  // Animation "BOTS"
  const words = ["OTSB", "BOTS", "SBOT"];
  let index = 0;
  const title = document.getElementById("animated-title");
  if (title) {
    setInterval(() => {
      index = (index + 1) % words.length;
      title.textContent = words[index];
    }, 100);
  }

  // =======================
  // Bouton "Copier l'adresse IP"
  // =======================
  const copyBtn = document.querySelector('button[onclick="copyIP()"]');
  if (copyBtn) {
    copyBtn.addEventListener('click', copyIP);
  }

  function copyIP() {
    const ip = document.getElementById("server-ip");
    if (ip) {
      navigator.clipboard.writeText(ip.textContent).then(() => {
        alert("Adresse IP copiée ! ✅");
      }).catch(err => {
        alert("Erreur lors de la copie : " + err);
      });
    }
  }

  // =======================
  // Horloge et thème dynamique
  // =======================
  function updateClockAndTheme() {
    const now = new Date();
    const heures = now.getHours();
    const body = document.body;
    body.classList.remove("morning", "afternoon", "evening", "night");

    if (heures >= 6 && heures < 12) {
      body.classList.add("morning");
    } else if (heures >= 12 && heures < 18) {
      body.classList.add("afternoon");
    } else if (heures >= 18 && heures < 21) {
      body.classList.add("evening");
    } else {
      body.classList.add("night");
    }

    // Met à jour l’horloge (français)
    const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    const jourNom = jours[now.getDay()];
    const jour = now.getDate().toString();
    const moisNom = mois[now.getMonth()];
    const annee = now.getFullYear();

    const minutes = now.getMinutes().toString().padStart(2, '0');
    const secondes = now.getSeconds().toString().padStart(2, '0');
    const heureStr = `${heures.toString().padStart(2, '0')}:${minutes}:${secondes}`;

    const lignes = [
      jourNom,
      jour,
      moisNom,
      annee,
      heureStr
    ];

    const clockElem = document.getElementById('clock');
    if (clockElem) {
      clockElem.innerHTML = lignes.join('<br>');
    }
  }
  setInterval(updateClockAndTheme, 1000);
  updateClockAndTheme();

  // =======================
  // Message scroll (selon l’heure)
  // =======================
  function updateScrollingText() {
    const hour = new Date().getHours();
    const scroll = document.getElementById("message-scroll");
    let message = "";

    if (hour >= 6 && hour < 12) {
      message = "🌅 Bon matin ! N'oublie pas ton café et ton petit chat !";
    } else if (hour >= 12 && hour < 18) {
      message = "🌞 Mange bien, hydrate-toi, fais une pause.";
    } else if (hour >= 18 && hour < 21) {
      message = "🌇 Après-midi créatif ? Reste focus et curieux.";
    } else {
      message = "🌙 Bonne nuit punpun!";
    }

    if (scroll) {
      scroll.textContent = message;
    }
  }
  updateScrollingText();
});

function generateCalendar(monthLength) {
    const today = new Date();
    const currentDay = today.getDate();
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = ""; // reset du contenu

    for (let day = 1; day <= monthLength; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar-day");
        dayElement.textContent = day;

        if (day < currentDay) {
            dayElement.classList.add("passed");
        }

        calendar.appendChild(dayElement);
    }
}

// Exemple : pour le mois de juin (30 jours)
generateCalendar(30);
