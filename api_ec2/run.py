from main import app
app.run(host='0.0.0.0', port='5000', debug=True, use_reloader=False, ssl_context=('./../data/ssl/certificate.crt', './../data/ssl/private.key'))
