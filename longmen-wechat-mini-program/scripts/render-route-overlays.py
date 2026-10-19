from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "images" / "jiayuguan-satellite.webp"
SCALE = 2
COLORS = {
    "guard": (129, 166, 194),
    "caravan": (223, 141, 96),
}
PATHS = {
    "guard": [(1227, 82), (1175, 140), (1118, 211), (1055, 290), (986, 370), (915, 446), (850, 515), (780, 577), (700, 598), (616, 612), (670, 628), (742, 653), (660, 674), (582, 689), (512, 696), (430, 727), (345, 772)],
    "caravan": [(1227, 82), (1192, 145), (1150, 215), (1100, 290), (1044, 365), (988, 438), (950, 488), (916, 532), (892, 575), (881, 635), (862, 614), (840, 593), (820, 572), (804, 558), (775, 556), (746, 558), (716, 562), (686, 568), (654, 575), (622, 584), (590, 593), (558, 603), (527, 614), (497, 628), (469, 643), (445, 660), (420, 680), (405, 698), (395, 718), (395, 730), (382, 742), (365, 750), (346, 751), (317, 742), (285, 732), (252, 722), (235, 719)],
}
STOPS = {
    "guard": [(1227, 82), (616, 612), (742, 653), (512, 696), (345, 772)],
    "caravan": [(1227, 82), (881, 635), (804, 558), (395, 730), (235, 719)],
}

def route_overlay(active):
    base = Image.open(SOURCE).convert("RGBA")
    width, height = base.size
    canvas = Image.new("RGBA", (width * SCALE, height * SCALE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    try:
        font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 25 * SCALE)
    except OSError:
        font = ImageFont.load_default()
    other = "caravan" if active == "guard" else "guard"
    for key in (other, active):
        alpha = 245 if key == active else 68
        color = COLORS[key] + (alpha,)
        points = [(x * SCALE, y * SCALE) for x, y in PATHS[key]]
        draw.line(points, fill=(8, 15, 23, 165 if key == active else 80), width=(16 if key == active else 11) * SCALE, joint="curve")
        if key == active:
            draw.line(points, fill=COLORS[key] + (72,), width=13 * SCALE, joint="curve")
        draw.line(points, fill=color, width=(7 if key == active else 5) * SCALE, joint="curve")
        for index, (x, y) in enumerate(STOPS[key], 1):
            cx, cy, radius = x * SCALE, y * SCALE, 13 * SCALE
            marker = COLORS[key] + (alpha,)
            draw.ellipse((cx - radius - 5 * SCALE, cy - radius - 5 * SCALE, cx + radius + 5 * SCALE, cy + radius + 5 * SCALE), fill=COLORS[key] + (42 if key == active else 16,))
            draw.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=(17, 25, 34, 245 if key == active else 180), outline=marker, width=3 * SCALE)
            draw.ellipse((cx - radius + 4 * SCALE, cy - radius + 4 * SCALE, cx + radius - 4 * SCALE, cy + radius - 4 * SCALE), outline=(248, 229, 190, 235 if key == active else 100), width=1 * SCALE)
            label = str(index)
            box = draw.textbbox((0, 0), label, font=font)
            tw, th = box[2] - box[0], box[3] - box[1]
            draw.text((cx - tw / 2, cy - th / 2 - box[1]), label, font=font, fill=(255, 250, 235, 255))
    canvas = canvas.resize((width, height), Image.Resampling.LANCZOS)
    canvas.save(ROOT / "images" / ("map-" + active + ".png"), optimize=True)

for route in ("guard", "caravan"):
    route_overlay(route)
