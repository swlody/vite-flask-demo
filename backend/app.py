import json
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
# TODO specific origin
cors = CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/v1/hello")
def hello_world():
    return json.dumps({"msg": "Hello, world!"})
