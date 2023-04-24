from flask import Flask, session, redirect, url_for, escape, request, render_template
from urllib.parse import urlencode
import os

PORT = int(os.environ.get('PORT', 5000))

app = Flask(__name__)
app.secret_key = os.environ['SECRET_KEY']

siteData = {}
siteData["bannerImages"] = os.listdir("/home/static/img/banners/")

@app.route('/')
def index():
    global siteData
    return render_template('index.html', siteData=siteData)

@app.route('/privacy_policy')
def privacy_policy():
    return render_template('privacy_policy.html')
    
if __name__ == '__main__':
    if os.environ.get('PORT'):
        app.run(host='0.0.0.0', debug=False, port=PORT)
    else:
        app.run(host='0.0.0.0', debug=True, port=PORT)
