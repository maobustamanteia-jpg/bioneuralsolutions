import os
from PIL import Image

input_path = "hero.png"
output_path = "assets/hero.webp"

print(f"Opening {input_path}...")
img = Image.open(input_path)
width, height = img.size
new_width = 1920
new_height = int(height * (new_width / width))

print(f"Resizing to {new_width}x{new_height}...")
img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

print(f"Saving to {output_path}...")
img.save(output_path, "WEBP", quality=85)
print("Done.")
