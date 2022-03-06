<!doctype html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style/style.css">
    </head>

  <body>

    <section class="my-5">
        <div class="container">
            <div clas="row">
                <div clas="col-12">
                    <form id="googleFontsChecker">
                        <div class="input-group mb-3">
                            <h3>Benutzen Sie Google Fonts?</h3>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="https://ihre_webseite.de">
                            
                            <button class="btn btn-primary" type="submit">
                                <span role="loader" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <i role="success" class="bi bi-check-circle"></i>
                                <i role="error" class="bi bi-x-circle"></i>
                                <span role="message">Jetzt Überprüfen</span>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </section>
    

    

    <script src="js/googleFontsChecker.js"></script>


  </body>
</html>