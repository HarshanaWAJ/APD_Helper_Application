# Description: This file is responsible for improve sond quallity.

from pydub import AudioSegment
import noisereduce as nr
import numpy as np

def improve_audio_quality(input_audio_path, output_audio_path):
    audio = AudioSegment.from_file(input_audio_path)
    samples = np.array(audio.get_array_of_samples())
    sample_rate = audio.frame_rate
    reduced_noise = nr.reduce_noise(y=samples, sr=sample_rate)
    enhanced_audio = AudioSegment(
        reduced_noise.tobytes(),
        frame_rate=sample_rate,
        sample_width=audio.sample_width,
        channels=audio.channels
    )
    enhanced_audio.export(output_audio_path, format="wav")
    