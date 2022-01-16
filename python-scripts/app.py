from flask import Flask
import matplotlib.pylab as plt
import numpy as np
from flask import request
import tensorflow as tf
import tensorflow_hub as hub

app = Flask(__name__)


@app.route("/")
def nstModelWaves():
    # content_image = plt.imread(content_path)
    # style_image = plt.imread("https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Great_Wave_off_Kanagawa.jpg")
    # content_image = content_image.astype(np.float32)[np.newaxis, ...] / 255.
    # style_image = style_image.astype(np.float32)[np.newaxis, ...] / 255.
    # style_image = tf.image.resize(style_image, (256, 256))
    # # Load image stylization module.
    # hub_module = hub.load('https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2')

    # # Stylize image.
    # outputs = hub_module(tf.constant(content_image), tf.constant(style_image))
    # stylized_image = outputs[0]
    return "content"

@app.route('/product/<name>')
def get_product(name):
    content_image = plt.imread(name)
    style_image = plt.imread("https://upload.wikimedia.org/wikipedia/commons/0/0a/The_Great_Wave_off_Kanagawa.jpg")
    content_image = content_image.astype(np.float32)[np.newaxis, ...] / 255.
    style_image = style_image.astype(np.float32)[np.newaxis, ...] / 255.
    style_image = tf.image.resize(style_image, (256, 256))
    # Load image stylization module.
    hub_module = hub.load('https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2')

    # Stylize image.
    outputs = hub_module(tf.constant(content_image), tf.constant(style_image))
    stylized_image = outputs[0]
    return "The product is " + str(name)

if __name__ == '__name__':
    app.run(debug=True)
