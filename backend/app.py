from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from voice_to_text import voice_to_text
from voice_to_voice import improve_audio_quality

app = Flask(__name__)
CORS(app)

@app.route("/voice-to-text", methods=["POST"])
def handle_voice_to_text():
    text = voice_to_text()
    return jsonify({"text": text})

@app.route("/voice-to-voice", methods=["POST"])
def handle_voice_to_voice():
    input_file = request.files["audio"]
    input_file.save("input.wav")
    improve_audio_quality("input.wav", "output.wav")
    return #send_file("output.wav", as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)