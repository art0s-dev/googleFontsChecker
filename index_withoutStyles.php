<!doctype html>
<html lang="en">

  <body>
    <style>
        form#googleFontsChecker img {
            display: none;
        }
        form#googleFontsChecker img.active {
            display: block;
        }

        form#googleFontsChecker small {
            display: none;
        }
        form#googleFontsChecker small.active {
            display: block;
        }
    </style>
    
    <section>
        <form id="googleFontsChecker">
            <input type="text" placeholder="Hier Link einfügen" required>
            <small>Wir konnten Ihre Webseite nicht finden.</small>
            <img src="assets/loader.gif" alt="googleFontsChecker Loading Animation">
            <button type="submit">Anfrage absenden</button>
        </form>
    </section>
    

    <script src="js/googleFontsChecker.js"></script>
  </body>
</html>