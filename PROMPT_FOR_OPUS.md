# Prompt untuk Claude Opus: Fix Struktur Container HTML

## Masalah
File `index.html` memiliki masalah struktur container. Semua `category-content` (seperti a-umum, a-abk, b-umum, b-abk, c-iis, c-mia, c-abk) harus berada di dalam SATU `<div class="container">` yang sama di setiap section, tapi saat ini:
- Kategori pertama (a-umum, b-umum, c-iis) berada dalam container ✓
- Kategori kedua dan ketiga (a-abk, b-abk, c-mia, c-abk) berada DI LUAR container ✗

## Struktur Saat Ini (SALAH)
```html
<section id="paket-a">
    <div class="container">              <!-- Container mulai -->
        <div id="a-umum">...</div>       <!-- Dalam container ✓ -->
    </div>                               <!-- Container ditutup TERLALU AWAL -->
    
    <div id="a-abk">...</div>           <!-- DI LUAR container ✗ -->
</section>
```

## Struktur yang Benar
```html
<section id="paket-a">
    <div class="container">              <!-- Container mulai -->
        <div id="a-umum">...</div>       <!-- Dalam container -->
        <div id="a-abk">...</div>       <!-- Dalam container -->
    </div>                               <!-- Container ditutup SETELAH semua kategori -->
</section>
```

## Lokasi Masalah

### Paket A (lines ~130-455)
- Container dimulai: line 131
- a-umum dimulai: line 133
- Container ditutup: line 290 (SEHARUSNYA setelah a-abk)
- a-abk dimulai: line 293 (DI LUAR container!)
- a-abk selesai: line 450
- Section ditutup: line 454

### Paket B (lines ~455-858)
- Container dimulai: line 496
- b-umum dimulai: line 498
- Container ditutup: line ~674 (SEHARUSNYA setelah b-abk)
- b-abk dimulai: line ~677 (DI LUAR container!)
- b-abk selesai: line ~853
- Section ditutup: line ~857

### Paket C (lines ~859-1410)
- Container dimulai: line 907
- c-iis dimulai: line 909
- Container ditutup: line ~1086 (SEHARUSNYA setelah semua kategori)
- c-mia dimulai: line ~1089 (DI LUAR container!)
- c-abk dimulai: line ~1269 (DI LUAR container!)
- Section ditutup: line ~1408

## Perbaikan yang Diperlukan

Untuk setiap section (Paket A, B, C):

1. **Pindahkan penutup container `</div>`** dari sebelum kategori kedua ke setelah kategori terakhir
2. Pastikan semua `category-content` berada di dalam satu container yang sama
3. Jangan ubah konten di dalam kategori, hanya perbaiki struktur container pembungkus

## File yang Diubah
- `index.html` - Struktur container di setiap section

## Verifikasi
Setelah perbaikan, jalankan verifikasi:
```bash
python -c "
import re
with open('index.html', 'r') as f:
    content = f.read()
    
# Cek setiap section
categories = [
    ('paket-a', ['a-umum', 'a-abk']),
    ('paket-b', ['b-umum', 'b-abk']),
    ('paket-c', ['c-iis', 'c-mia', 'c-abk'])
]

for section, cats in categories:
    section_match = re.search(rf'<section[^>]*id=\"{section}\"', content)
    if section_match:
        section_start = section_match.start()
        section_end = content.find('</section>', section_start)
        section_content = content[section_start:section_end]
        
        # Hitung container opens dan closes
        container_opens = section_content.count('<div class=\"container\">')
        container_closes = section_content.count('</div>')
        
        # Cek apakah semua kategori dalam container
        containers = list(re.finditer(r'<div class=\"container\">', section_content))
        print(f'{section}: {len(containers)} container(s)')
        
        for cat in cats:
            cat_match = re.search(rf'<div[^>]*id=\"{cat}\"', section_content)
            if cat_match:
                cat_pos = cat_match.start()
                # Cek apakah dalam container
                before_cat = section_content[:cat_pos]
                open_containers = before_cat.count('<div class=\"container\">')
                close_containers = before_cat.count('</div>')
                if open_containers > close_containers:
                    print(f'  {cat}: INSIDE container ✓')
                else:
                    print(f'  {cat}: OUTSIDE container ✗')
"
```

## Hasil yang Diharapkan
Semua kategori harus menunjukkan `INSIDE container ✓`
