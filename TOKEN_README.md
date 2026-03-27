# 🔐 Token Akses Kategori Soal UPK

## Daftar Token (7 Kategori)

| Kategori | Token | Keterangan |
|----------|-------|------------|
| **Paket A - Umum** | `AUM26X9K` | SD Kelas Umum (9 Mapel) |
| **Paket A - ABK** | `AAB26Y3M` | SD Kelas ABK (9 Mapel) |
| **Paket B - Umum** | `BUM26Z7P` | SMP Kelas Umum (11 Mapel) |
| **Paket B - ABK** | `BAB26W2Q` | SMP Kelas ABK (11 Mapel) |
| **Paket C - IIS** | `CIS26V5R` | SMA Jurusan IIS (14 Mapel) |
| **Paket C - MIA** | `CMI26U8T` | SMA Jurusan MIA (14 Mapel) |
| **Paket C - ABK** | `CAB26S4N` | SMA Kelas ABK (11 Mapel) |

## Cara Penggunaan

1. Peserta memilih **Paket** (A/B/C) di menu navigasi
2. Peserta memilih **Kategori** (Umum/ABK/IIS/MIA)
3. Muncul tampilan 🔒 **TERKUNCI** dengan tombol "Masukkan Token"
4. Peserta memasukkan token sesuai kategori
5. Jika benar: Kategori terbuka, daftar soal muncul
6. Jika salah: Muncul pesan error "Token tidak valid"

## Catatan Keamanan

- Token tersimpan dengan **obfuscation** (kode diacak) di file JavaScript
- Token bersifat **case-insensitive** (huruf besar/kecil sama saja)
- Token tersimpan di **session** browser (hilang jika browser ditutup)
- Token tetap sama dan **tidak berubah-ubah**

## Admin Functions (via Console Browser)

```javascript
// Lihat semua token
showAllTokens()

// Update token (jika perlu diganti)
updateToken('a-umum', 'TOKENBARU123')

// Kunci ulang semua kategori
lockAllCategories()

// Lihat database link
getActiveLinks()
```

## Distribusi Token ke Peserta

Berikan token sesuai kategori masing-masing:
- **Paket A Umum** → `AUM26X9K`
- **Paket A ABK** → `AAB26Y3M`
- **Paket B Umum** → `BUM26Z7P`
- **Paket B ABK** → `BAB26W2Q`
- **Paket C IIS** → `CIS26V5R`
- **Paket C MIA** → `CMI26U8T`
- **Paket C ABK** → `CAB26S4N`

---
*Token generated: 2026 | PKBM Bank Soal UPK*
