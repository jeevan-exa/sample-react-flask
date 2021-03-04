from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_user_tenants')
def tenants():
    return {
      "profile_url": "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg",
      "logo_url": "https://exafluence.com/assets/images/logo.png",
      "active_tenant": "DBTEST",
      "status": "ok",
      "tenants": ["ExafluenceRepo", "ExafluenceRepoTest", "DBTEST", "TEST_TRAIL"],
    }
    
# @app.route('/hello')
# def hello():
#     return render_template('hello.html')


if __name__ == '__main__':
    app.run(debug=True)