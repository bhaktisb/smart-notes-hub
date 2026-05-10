from flask import Flask, request, jsonify
from flask_cors import CORS
from bson.objectid import ObjectId
from db import notes_collection

app = Flask(__name__)

CORS(app)


@app.route('/')
def home():
    return "Flask Backend Running 🚀"


@app.route('/notes', methods=['GET'])
def get_notes():

    notes = []

    for note in notes_collection.find():

        notes.append({
            "id": str(note["_id"]),
            "title": note["title"],
            "description": note["description"]
        })

    return jsonify(notes)


@app.route('/notes', methods=['POST'])
def add_note():

    new_note = request.json

    notes_collection.insert_one(new_note)

    return jsonify({
        "message": "Note added successfully"
    })

@app.route('/notes/<id>', methods=['DELETE'])
def delete_note(id):

    notes_collection.delete_one({
        "_id": ObjectId(id)
    })

    return jsonify({
        "message": "Note deleted successfully"
    })


import os

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)