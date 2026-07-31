from pathlib import Path
import base64

base = Path('.')
index = (base / 'index.html').read_text(encoding='utf-8')
css = (base / 'style.css').read_text(encoding='utf-8')
js = (base / 'script.js').read_text(encoding='utf-8')
img_path = base / 'image-data.txt'
if img_path.exists():
    img_data = img_path.read_text(encoding='utf-8').strip()
else:
    img_data = 'data:image/jpeg;base64,' + base64.b64encode((base / '494039236_9725879910826598_874797414156165031_n.jpg').read_bytes()).decode('ascii')
html = index.replace('<link rel="stylesheet" href="style.css">', f'<style>\n{css}\n</style>')
html = html.replace('<script src="script.js"></script>', f'<script>\n{js}\n</script>')
html = html.replace('src="494039236_9725879910826598_874797414156165031_n.jpg"', f'src="{img_data}"')
(base / 'portfolio-standalone.html').write_text(html, encoding='utf-8')
print('created portfolio-standalone.html')
