from flask import Flask, render_template, request, redirect
from flask_cors import CORS, cross_origin
from werkzeug import secure_filename
import os

app=Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
uploadFileDir = 'uploaded/'

#* Upload
@cross_origin
@app.route('/submitUpload', methods = ['POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        f.save(uploadFileDir + secure_filename(f.filename))
        return '[*] File Uploaded Successfully'
    else:
        return redirect("/error404", code=302)

#* Submit (Standard)



#* Submit (Async)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='127.0.0.1', port=port)