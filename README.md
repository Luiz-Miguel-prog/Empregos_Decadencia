# Empregos_Decadencia
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mindmap - Empregos em Decadência</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="mindmap">
        <div class="balloon center" onclick="showPopup('Extinção')">Extinção</div>
        <div class="balloon top-left" onclick="showPopup('Emprego 1')">Taxista</div>
        <div class="balloon top-right" onclick="showPopup('Emprego 2')">Carteiro</div>
        <div class="balloon bottom-left" onclick="showPopup('Emprego 3')">Mercado</div>
    </div>

    <!-- Pop-up -->
    <div id="popup" class="popup">
        <div class="popup-content">
            <span class="close-btn" onclick="closePopup()">X</span>
            <p id="popup-text"></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
