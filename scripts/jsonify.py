import os, json, shutil

IMAGE_DATA_DIR = './scripts/input/'
OUTPUT_DATA_DIR = './scripts/output/'

def empty_dir(path: str):
    for x in os.listdir(path):
        os.remove(os.path.join(path, x))

def clean_title(title: str):
    return " ".join([x.capitalize() for x in title.split('_')])


def parse_folder(path: str, folder: str, i: int) -> [str, dict]:
    category, title, price, unit = folder.split('-')
    images = os.listdir(os.path.join(path, folder))

    data = {"id": i, 
            "type": category,
            "title": clean_title(title), 
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


if __name__ == '__main__':
    DATA = {"shop": [], "categories": {}, "titles": [], "max_price": 0}
    for (path, folders, _) in os.walk(IMAGE_DATA_DIR):
        for i, folder in enumerate(folders):
            data = parse_folder(path, folder, i)

            DATA['shop'].append(data)
            DATA['max_price'] = max(data['price'], DATA['max_price'])
            DATA['categories'][data['type']] = DATA['categories'].get(data['type'], 0) + 1
            DATA['titles'].append(data['title'])

    if os.path.exists('./frontend/static/output'):
        os.remove('./frontend/static/output')

    shutil.move(OUTPUT_DATA_DIR, './frontend/static/')
    with open('./frontend/src/shop.json', 'w', encoding='utf-8') as f:
        json.dump(DATA, f, indent=3)