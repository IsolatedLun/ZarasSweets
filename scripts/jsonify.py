import os, json, shutil
from bs4 import BeautifulSoup

IMAGE_DATA_DIR = './scripts/input/'
OUTPUT_DATA_DIR = './scripts/output/'

WEBSITE_URL ='https://zaras-sweets.netlify.app/'

def empty_dir(path: str):
    for x in os.listdir(path):
        os.remove(os.path.join(path, x))

def de_clean_title(title: str):
    return "_".join([x.lower() for x in title.split(' ')])
def clean_title(title: str):
    return " ".join([x.capitalize() for x in title.split('_')])


def parse_folder(path: str, folder: str, i: int) -> [str, dict]:
    category, title, price, unit, *others = folder.split('-')
    images = os.listdir(os.path.join(path, folder))
    flavors = others[0].split(',') if len(others) > 0 else []

    data = {"id": i, 
            "type": category,
            "title": clean_title(title), 
            "flavors": flavors,
            "selectedFlavors": [],
            "price": int(price), 
            "unit": unit, 
            "quantity": 1,
            "images": []
        }
    
    output_category_dir = os.path.join(OUTPUT_DATA_DIR, title)
    if os.path.exists(output_category_dir):
        empty_dir(output_category_dir)

    os.makedirs(output_category_dir, exist_ok=True)
    for i, img in enumerate(images):
        img_path = os.path.join(path, folder, img)
        new_img_path = f"{output_category_dir}/{i}.jpg"

        data['images'].append(new_img_path.removeprefix('./scripts/'))
        shutil.copyfile(img_path, new_img_path)

    return data


def create_schema():
    schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "url": WEBSITE_URL,
        "numberOfItems": len(DATA['shop']),
        "itemListElement": []
    }

    for item in DATA['shop']:
        item_schema = {
            "@type": "Product",
            "image": WEBSITE_URL + item['images'][0],
            "url": WEBSITE_URL + '#' + de_clean_title(item['title']),
            "name": de_clean_title(item['title']),
            "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": item['price']
            }
        }

        schema['itemListElement'].append(item_schema)

    with open('./frontend/src/app.html', 'r+', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        schema_el = soup.find('head script[type="application/ld+json"]')

        if schema_el is None:
            soup.find('head').insert(0,
                soup.new_tag('script', attrs={"type": "application/ld+json"})
            )

        soup.find('script').string = json.dumps(schema, indent=3)
        f.truncate(0)
        f.write(soup.prettify())

if __name__ == '__main__':
    DATA = {"shop": [], "categories": {}, "titles": [], "max_price": 0}
    for (path, folders, _) in os.walk(IMAGE_DATA_DIR):
        for i, folder in enumerate(folders):
            data = parse_folder(path, folder, i)

            DATA['shop'].append(data)
            DATA['max_price'] = max(data['price'], DATA['max_price'])
            DATA['categories'][data['type']] = DATA['categories'].get(data['type'], 0) + 1
            DATA['titles'].append(data['title'])

    create_schema()

    if os.path.exists('./frontend/static/output'):
        os.remove('./frontend/static/output')

    shutil.move(OUTPUT_DATA_DIR, './frontend/static/')
    with open('./frontend/src/shop.json', 'w', encoding='utf-8') as f:
        json.dump(DATA, f, indent=3)