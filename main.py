from flask import Flask, render_template, redirect, send_file
from waitress import serve

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/interop')
def interop():
  return redirect('ms-windows-store://pdp/?ProductId=9NJ3RS1T5N68&mode=mini&pos=0,0,1600,870')

@app.route('/thankyou')
def thonks():
  return send_file('static/optimized.svg.html')

if __name__ == "__main__":
  serve(app, port=0)