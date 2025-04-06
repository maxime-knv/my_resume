<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Maxime Kournikov - Développeur</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Canvas pour les formes animées -->
  <canvas id="canvas"></canvas>

  <!-- Sidebar CV -->
  <div class="sidebar">
    <img class="cv" src="my_resume.jpg" alt="Aperçu du CV de Maxime Kournikov">
  </div>

  <!-- Content -->
  <div class="content">
    <img class="photo" src="photo_maxime.jpg" alt="Portrait de Maxime Kournikov">
    <header>
      <h1>Maxime Kournikov</h1>
      <p>Développeur en formation</p>
      <p>Recherche stage front-end · Juillet 2025 · 6 mois · Temps plein</p>
    </header>

    <div class="contact">
      <div>
        <p><strong>Téléphone :</strong></p>
        <button class="btn-contact" onclick="copyText('+33 6 51 49 95 44')">+33 6 51 49 95 44</button>
      </div>
      <div>
        <p><strong>Email :</strong></p>
        <button class="btn-contact" onclick="copyText('maxime.kournikov.pro@gmail.com')">maxime.kournikov.pro@gmail.com</button>
      </div>
      <div>
        <p><strong>LinkedIn :</strong></p>
        <button class="btn-contact" onclick="redirectTo('https://www.linkedin.com/in/maxime-kournikov/')">Voir Profil</button>
      </div>
      <div>
        <p><strong>Github :</strong></p>
        <button class="btn-contact" onclick="redirectTo('https://github.com/maxime-knv')">Voir Github</button>
      </div>
    </div>

    <a class="btn-download" href="my_resume.jpg" download>Télécharger mon CV</a>
  </div>

  <script src="script.js"></script>
</body>
</html>
