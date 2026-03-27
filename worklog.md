# Work Log - Bank Soal UPK

## Tanggal: 27 Maret 2026

---

## Ringkasan Pekerjaan
Pembuatan website Bank Soal UPK untuk Pusat Bimbingan Belajar. Website berfungsi sebagai bank link Google Form untuk ujian UPK Paket A, B, dan C.

---

## Detail Pekerjaan

### 1. Setup Awal Project
- Membuat struktur folder project
- Menyiapkan logo `logopbx.jpeg`

### 2. Pembuatan Halaman Web

#### HTML (index.html)
- **Halaman Beranda**: Hero section dengan logo, judul, deskripsi, dan tombol navigasi ke paket
- **Paket A**: 9 mapel untuk Umum dan ABK
- **Paket B**: 11 mapel untuk Umum dan ABK
- **Paket C**: 15 mapel untuk IIS, 15 mapel untuk MIA, dan 11 mapel untuk ABK

#### CSS (style.css)
- Tema warna **oranye** mengikuti logo (#f97316)
- Logo bulat dengan border oranye
- Navbar putih terpisah dari hero section
- Card mapel dengan layout horizontal
- Search bar untuk pencarian mapel
- Radio button selector untuk kategori (Umum/ABK/IIS/MIA)
- Responsive untuk mobile dan desktop

#### JavaScript (script.js)
- Database link untuk semua mapel
- Fungsi navigasi antar halaman
- Fungsi search mapel real-time
- Toast notification
- Admin functions untuk update link via console

### 3. Input Link Google Form

#### Paket A - Umum (9 link)
| No | Mapel | Link |
|----|-------|------|
| 1 | Agama Islam | https://forms.gle/mBNP6qyqJVWHk1Gv9 |
| 2 | Agama Kristen | https://forms.gle/VnqPuD7e3S9CFAW58 |
| 3 | Agama Katolik | https://forms.gle/UUxNcHc6nswB27Mr8 |
| 4 | Agama Buddha | https://forms.gle/T5t1mdszG7aTNZ3D9 |
| 5 | Agama Hindu | https://forms.gle/SXE7vPxjARhun6bQ9 |
| 6 | PPKN | https://forms.gle/uEMpjjPxLb8uV4S27 |
| 7 | IPAS | https://forms.gle/36jqRH1j7fqSXj5t8 |
| 8 | Matematika | https://forms.gle/q2URGs832jRU9jvt9 |
| 9 | Bahasa Indonesia | https://forms.gle/SJmLqAsXjVA7hze58 |

#### Paket A - ABK (8 link, 1 kosong)
| No | Mapel | Link |
|----|-------|------|
| 1 | Agama Islam | - |
| 2 | Agama Kristen | https://forms.gle/Qasg274o7tRSTs4F7 |
| 3 | Agama Katolik | https://forms.gle/hzdh25JxNdT4iTw2A |
| 4 | Agama Buddha | https://forms.gle/Urj6anGeEAy3mKM68 |
| 5 | Agama Hindu | https://forms.gle/3EXNoHB7wopsmSzD9 |
| 6 | PPKN | https://forms.gle/EkY2s5TncAZji5kg6 |
| 7 | IPAS | https://forms.gle/Lue2RunN3XczYhKG9 |
| 8 | Matematika | https://forms.gle/wdEMhXjjz2saA1HTA |
| 9 | Bahasa Indonesia | https://forms.gle/UHy62ibhMwtfTmPa7 |

#### Paket B - Umum (11 link)
| No | Mapel | Link |
|----|-------|------|
| 1 | Agama Islam | https://forms.office.com/r/wPAV7YYxG2 |
| 2 | Agama Kristen | https://forms.office.com/r/v66P1RcPbr |
| 3 | Agama Katolik | https://forms.office.com/r/EbLwJSM85B |
| 4 | Agama Buddha | https://forms.office.com/r/euJxGXGj9a |
| 5 | Agama Hindu | https://forms.office.com/r/sui2RAsLTF |
| 6 | PKN | https://forms.office.com/r/hJ6rwrhqKL |
| 7 | IPA | https://forms.office.com/r/9SSynDgVJy |
| 8 | IPS | https://forms.office.com/r/dhTNj1JG03 |
| 9 | Matematika | https://forms.office.com/r/7gLAM8hbiB |
| 10 | Bahasa Indonesia | https://forms.office.com/r/2Wx5UATdP9 |
| 11 | Bahasa Inggris | https://forms.office.com/r/GwPFVnb3mZ |

#### Paket B - ABK (10 link, 1 kosong)
| No | Mapel | Link |
|----|-------|------|
| 1 | Agama Islam | https://forms.office.com/r/kynUnRrcbr |
| 2 | Agama Kristen | https://forms.office.com/r/X9PSzVpYGU |
| 3 | Agama Katolik | - |
| 4 | Agama Buddha | https://forms.office.com/r/TjV23ZD89J |
| 5 | Agama Hindu | https://forms.office.com/r/9eNw18q6DQ |
| 6 | PKN | https://forms.office.com/r/kGNKmygw9G |
| 7 | IPA | https://forms.office.com/r/JgWfhx822w |
| 8 | IPS | https://forms.office.com/r/8VeCnWe00k |
| 9 | Matematika | https://forms.office.com/r/tecxVFRbyb |
| 10 | Bahasa Indonesia | https://forms.office.com/r/MakErmLxLG |
| 11 | Bahasa Inggris | https://forms.office.com/r/idG9UMyccp |

#### Paket C - IIS (11 link, 4 kosong)
| No | Mapel | Link |
|----|-------|------|
| 1 | Agama Katolik | https://forms.gle/W8Zr6G4nuwzCCKFZA |
| 2 | Agama Kristen | https://forms.gle/W8Zr6G4nuwzCCKFZA |
| 3 | Agama Islam | https://forms.gle/YHtPYLDYeVBPQcm7A |
| 4 | Pendidikan Pancasila | https://forms.gle/ougXXWJipnoVjuoF6 |
| 5 | Bahasa Indonesia | https://forms.gle/1Na54EKUPeFdbELJ8 |
| 6 | Matematika | https://forms.gle/JDWYCo8WVnZSmuY99 |
| 7 | Bahasa Inggris | https://forms.gle/ceGWhBAtLqDwihac6 |
| 8 | Mulok | - |
| 9 | Sosiologi | https://forms.gle/dcd4m4NEYcmeNveU6 |
| 10 | Ekonomi | https://forms.gle/EQrUvT49duVvSQUr7 |
| 11 | Geografi | https://forms.gle/9HyFpuSTvTPxxN5u6 |
| 12 | Sejarah Peminatan | https://forms.gle/EqNUxMiija9G362p8 |
| 13 | Pemberdayaan | - |
| 14 | Keterampilan Wajib | - |
| 15 | Keterampilan Pilihan | - |

#### Paket C - MIA (11 link, 4 kosong)
| No | Mapel | Link |
|----|-------|------|
| 1 | Agama Katolik | https://forms.gle/W8Zr6G4nuwzCCKFZA |
| 2 | Agama Kristen | https://forms.gle/W8Zr6G4nuwzCCKFZA |
| 3 | Agama Islam | https://forms.gle/YHtPYLDYeVBPQcm7A |
| 4 | Pendidikan Pancasila | https://forms.gle/ougXXWJipnoVjuoF6 |
| 5 | Bahasa Indonesia | https://forms.gle/1Na54EKUPeFdbELJ8 |
| 6 | Matematika | https://forms.gle/JDWYCo8WVnZSmuY99 |
| 7 | Bahasa Inggris | https://forms.gle/ceGWhBAtLqDwihac6 |
| 8 | Mulok | - |
| 9 | Matematika Peminatan | https://forms.gle/t8qcBv85FeQysqUaA |
| 10 | Biologi | https://forms.gle/cz3TZGBJUk6bHEfo6 |
| 11 | Kimia | https://forms.gle/TdoGz2qksPufrmmU8 |
| 12 | Fisika | https://forms.gle/FEBiYpwZqieip2Gc8 |
| 13 | Pemberdayaan | - |
| 14 | Keterampilan Wajib | - |
| 15 | Keterampilan Pilihan | - |

#### Paket C - ABK (7 link, 4 kosong)
| No | Mapel | Link |
|----|-------|------|
| 1 | Agama Islam | https://forms.gle/4mZ2cLethpgQ9ywc9 |
| 2 | Agama Kristen | https://forms.gle/8EgJ9tNL17oAmckm9 |
| 3 | Agama Katolik | https://forms.gle/5QniyXqNHU2AjfEs8 |
| 4 | Agama Buddha | - |
| 5 | Agama Hindu | - |
| 6 | PKN | https://forms.gle/yi8ckei7j76s7hez8 |
| 7 | IPA | - |
| 8 | IPS | - |
| 9 | Matematika | https://forms.gle/3zWcuVJfmwN4QqC4A |
| 10 | Bahasa Indonesia | https://forms.gle/kzmHkqKvEY2DE4SK6 |
| 11 | Bahasa Inggris | https://forms.gle/rnAfaLHBWrWMDdsw9 |

### 4. Revisi UI/UX
- Navbar putih terpisah dari hero section
- Tombol hero beranda menggunakan style outline transparan dengan hover putih
- Radio button selector untuk kategori dengan icon huruf
- Card mapel horizontal dengan status indicator

### 5. Update Footer
- Mengubah tahun dari 2025 menjadi 2026

---

## Total Link Aktif
- Paket A: 17/18 link
- Paket B: 21/22 link
- Paket C: 29/41 link
- **Total: 67/81 link aktif**

---

## File Project
```
web_SoalUPK/
├── index.html          (78 KB)
├── style.css           (18 KB)
├── script.js           (11 KB)
├── worklog.md          (This file)
└── assets/
    └── logopbx.jpeg    (10 KB)
```

---

## Status
**BELUM DEPLOY** - Menunggu persetujuan untuk deploy ke Vercel

## Todo Selanjutnya
1. Deploy ke Vercel
2. Menambahkan link yang masih kosong:
   - Paket A ABK: Agama Islam
   - Paket B ABK: Agama Katolik
   - Paket C IIS: Mulok, Pemberdayaan, Keterampilan Wajib, Keterampilan Pilihan
   - Paket C MIA: Mulok, Pemberdayaan, Keterampilan Wajib, Keterampilan Pilihan
   - Paket C ABK: Agama Buddha, Agama Hindu, IPA, IPS
