// Bank Soal UPK - Main JavaScript
// Tema Oranye - Bank Link Google Form

// ============================================
// TOKEN SYSTEM - 7 Token untuk 7 Kategori
// Obfuscated dengan base64 + array manipulation
// ============================================
(function() {
    const _0x4b2a = ['QVVNMjZYOUs=', 'QUFCMjZZM00=', 'QlVNMjZaN1A=', 'QkFCMjZXMlE=', 'Q0lTMjZWNVI=', 'Q01JMjZVOFQ=', 'Q0FCMjZTNE4='];
    const _0x9c1d = [0, 1, 2, 3, 4, 5, 6];
    const _t = {};
    _t['a-umum'] = atob(_0x4b2a[_0x9c1d[0]]);
    _t['a-abk'] = atob(_0x4b2a[_0x9c1d[1]]);
    _t['b-umum'] = atob(_0x4b2a[_0x9c1d[2]]);
    _t['b-abk'] = atob(_0x4b2a[_0x9c1d[3]]);
    _t['c-iis'] = atob(_0x4b2a[_0x9c1d[4]]);
    _t['c-mia'] = atob(_0x4b2a[_0x9c1d[5]]);
    _t['c-abk'] = atob(_0x4b2a[_0x9c1d[6]]);
    window._categoryTokens = _t;
})();
const categoryTokens = window._categoryTokens;

// Session storage untuk kategori yang sudah diunlock
let unlockedCategories = new Set();
let currentTokenCategory = null;

// Database link (akan diisi admin)
const linkDatabase = {
    // Paket A Umum
    'a-umum-islam': 'https://forms.gle/mBNP6qyqJVWHk1Gv9',
    'a-umum-kristen': 'https://forms.gle/VnqPuD7e3S9CFAW58',
    'a-umum-katolik': 'https://forms.gle/UUxNcHc6nswB27Mr8',
    'a-umum-buddha': 'https://forms.gle/T5t1mdszG7aTNZ3D9',
    'a-umum-hindu': 'https://forms.gle/SXE7vPxjARhun6bQ9',
    'a-umum-ppkn': 'https://forms.gle/uEMpjjPxLb8uV4S27',
    'a-umum-ipas': 'https://forms.gle/36jqRH1j7fqSXj5t8',
    'a-umum-matematika': 'https://forms.gle/q2URGs832jRU9jvt9',
    'a-umum-bi': 'https://forms.gle/SJmLqAsXjVA7hze58',
    
    // Paket A ABK
    'a-abk-islam': '',
    'a-abk-kristen': 'https://forms.gle/Qasg274o7tRSTs4F7',
    'a-abk-katolik': 'https://forms.gle/hzdh25JxNdT4iTw2A',
    'a-abk-buddha': 'https://forms.gle/Urj6anGeEAy3mKM68',
    'a-abk-hindu': 'https://forms.gle/3EXNoHB7wopsmSzD9',
    'a-abk-ppkn': 'https://forms.gle/EkY2s5TncAZji5kg6',
    'a-abk-ipas': 'https://forms.gle/Lue2RunN3XczYhKG9',
    'a-abk-matematika': 'https://forms.gle/wdEMhXjjz2saA1HTA',
    'a-abk-bi': 'https://forms.gle/UHy62ibhMwtfTmPa7',
    
    // Paket B Umum
    'b-umum-islam': 'https://forms.office.com/r/wPAV7YYxG2',
    'b-umum-kristen': 'https://forms.office.com/r/v66P1RcPbr',
    'b-umum-katolik': 'https://forms.office.com/r/EbLwJSM85B',
    'b-umum-buddha': 'https://forms.office.com/r/euJxGXGj9a',
    'b-umum-hindu': 'https://forms.office.com/r/sui2RAsLTF',
    'b-umum-pkn': 'https://forms.office.com/r/hJ6rwrhqKL',
    'b-umum-ipa': 'https://forms.office.com/r/9SSynDgVJy',
    'b-umum-ips': 'https://forms.office.com/r/dhTNj1JG03',
    'b-umum-matematika': 'https://forms.office.com/r/7gLAM8hbiB',
    'b-umum-bi': 'https://forms.office.com/r/2Wx5UATdP9',
    'b-umum-inggris': 'https://forms.office.com/r/GwPFVnb3mZ',
    
    // Paket B ABK
    'b-abk-islam': 'https://forms.office.com/r/kynUnRrcbr',
    'b-abk-kristen': 'https://forms.office.com/r/X9PSzVpYGU',
    'b-abk-katolik': '',
    'b-abk-buddha': 'https://forms.office.com/r/TjV23ZD89J',
    'b-abk-hindu': 'https://forms.office.com/r/9eNw18q6DQ',
    'b-abk-pkn': 'https://forms.office.com/r/kGNKmygw9G',
    'b-abk-ipa': 'https://forms.office.com/r/JgWfhx822w',
    'b-abk-ips': 'https://forms.office.com/r/8VeCnWe00k',
    'b-abk-matematika': 'https://forms.office.com/r/tecxVFRbyb',
    'b-abk-bi': 'https://forms.office.com/r/MakErmLxLG',
    'b-abk-inggris': 'https://forms.office.com/r/idG9UMyccp',
    
    // Paket C IIS (IPS)
    'c-iis-katolik': 'https://forms.gle/W8Zr6G4nuwzCCKFZA',
    'c-iis-kristen': 'https://forms.gle/W8Zr6G4nuwzCCKFZA',
    'c-iis-islam': 'https://forms.gle/YHtPYLDYeVBPQcm7A',
    'c-iis-pancasila': 'https://forms.gle/ougXXWJipnoVjuoF6',
    'c-iis-bi': 'https://forms.gle/1Na54EKUPeFdbELJ8',
    'c-iis-matematika': 'https://forms.gle/JDWYCo8WVnZSmuY99',
    'c-iis-inggris': 'https://forms.gle/ceGWhBAtLqDwihac6',
    'c-iis-sosiologi': 'https://forms.gle/dcd4m4NEYcmeNveU6',
    'c-iis-ekonomi': 'https://forms.gle/EQrUvT49duVvSQUr7',
    'c-iis-geografi': 'https://forms.gle/9HyFpuSTvTPxxN5u6',
    'c-iis-sejarah': 'https://forms.gle/EqNUxMiija9G362p8',
    
    // Paket C MIA (IPA)
    'c-mia-katolik': 'https://forms.gle/W8Zr6G4nuwzCCKFZA',
    'c-mia-kristen': 'https://forms.gle/W8Zr6G4nuwzCCKFZA',
    'c-mia-islam': 'https://forms.gle/YHtPYLDYeVBPQcm7A',
    'c-mia-pancasila': 'https://forms.gle/ougXXWJipnoVjuoF6',
    'c-mia-bi': 'https://forms.gle/1Na54EKUPeFdbELJ8',
    'c-mia-matematika': 'https://forms.gle/JDWYCo8WVnZSmuY99',
    'c-mia-inggris': 'https://forms.gle/ceGWhBAtLqDwihac6',
    'c-mia-mat-peminatan': 'https://forms.gle/t8qcBv85FeQysqUaA',
    'c-mia-biologi': 'https://forms.gle/cz3TZGBJUk6bHEfo6',
    'c-mia-kimia': 'https://forms.gle/TdoGz2qksPufrmmU8',
    'c-mia-fisika': 'https://forms.gle/FEBiYpwZqieip2Gc8',
    
    // Paket C ABK
    'c-abk-islam': 'https://forms.gle/4mZ2cLethpgQ9ywc9',
    'c-abk-kristen': 'https://forms.gle/8EgJ9tNL17oAmckm9',
    'c-abk-katolik': 'https://forms.gle/5QniyXqNHU2AjfEs8',
    'c-abk-buddha': '',
    'c-abk-hindu': '',
    'c-abk-pkn': 'https://forms.gle/yi8ckei7j76s7hez8',
    'c-abk-ipa': '',
    'c-abk-ips': '',
    'c-abk-matematika': 'https://forms.gle/3zWcuVJfmwN4QqC4A',
    'c-abk-bi': 'https://forms.gle/kzmHkqKvEY2DE4SK6',
    'c-abk-inggris': 'https://forms.gle/rnAfaLHBWrWMDdsw9'
};

// Fungsi untuk update link (untuk admin)
function updateLink(key, url) {
    if (linkDatabase.hasOwnProperty(key)) {
        linkDatabase[key] = url;
        updateCardLink(key, url);
        return true;
    }
    return false;
}

// Fungsi untuk update tampilan card
function updateCardLink(key, url) {
    const card = document.querySelector(`.mapel-card[data-key="${key}"]`);
    if (!card) return;
    
    const statusText = card.querySelector('.mapel-status');
    const statusDot = card.querySelector('.status-dot');
    
    if (url && url.trim() !== '') {
        card.href = url;
        card.target = '_blank';
        card.classList.add('has-link');
        statusText.innerHTML = '<span class="status-dot"></span>Link aktif - Klik untuk ujian';
    } else {
        card.href = '#';
        card.target = '';
        card.classList.remove('has-link');
        statusText.innerHTML = '<span class="status-dot"></span>Link akan tersedia';
        
        // Add click handler untuk link yang belum tersedia
        card.onclick = function(e) {
            if (!linkDatabase[key]) {
                e.preventDefault();
                showToast('Link belum tersedia', 'error');
                return false;
            }
        };
    }
}

// Initialize semua card
function initCards() {
    const cards = document.querySelectorAll('.mapel-card');
    cards.forEach(card => {
        const key = card.dataset.key;
        if (key && linkDatabase.hasOwnProperty(key)) {
            updateCardLink(key, linkDatabase[key]);
        }
    });
}

// Navigation - Show Page
function showPage(pageId) {
    // Sembunyikan semua page
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Tampilkan page target
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update nav link active
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });
    
    // Scroll ke atas
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}

// Show Category - Updated untuk radio button
function showCategory(categoryId) {
    // Get the page section that contains this category
    const targetContent = document.getElementById(categoryId);
    if (!targetContent) return;
    
    const parentSection = targetContent.closest('.page');
    if (!parentSection) return;
    
    // Sembunyikan semua category content di parent section
    const contents = parentSection.querySelectorAll('.category-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Tampilkan target content
    targetContent.classList.add('active');
    
    // Update radio button state
    const radioGroup = parentSection.querySelectorAll('input[type="radio"]');
    radioGroup.forEach(radio => {
        if (radio.value === categoryId) {
            radio.checked = true;
        }
    });
    
    // Reset search input
    const searchInput = parentSection.querySelector('.search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Show all cards in the active category
    const activeCards = targetContent.querySelectorAll('.mapel-card');
    activeCards.forEach(card => card.classList.remove('hidden'));
}

// Search Mapel
function searchMapel(query, pageId) {
    const page = document.getElementById(pageId);
    if (!page) return;
    
    const activeCategory = page.querySelector('.category-content.active');
    if (!activeCategory) return;
    
    const cards = activeCategory.querySelectorAll('.mapel-card');
    const searchTerm = query.toLowerCase().trim();
    
    cards.forEach(card => {
        const mapelName = card.dataset.name.toLowerCase();
        if (mapelName.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Toast Notification
function showToast(message, type = '') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.className = 'toast';
    
    if (type) {
        toast.classList.add(type);
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Admin Functions
// Fungsi untuk set link (bisa dipanggil di console)
function setLink(key, url) {
    if (updateLink(key, url)) {
        showToast(`Link untuk ${key} berhasil diupdate`, 'success');
        return true;
    } else {
        showToast(`Key ${key} tidak ditemukan`, 'error');
        return false;
    }
}

// Fungsi untuk set multiple links sekaligus
function setLinks(linksObj) {
    let successCount = 0;
    let failCount = 0;
    
    for (const [key, url] of Object.entries(linksObj)) {
        if (updateLink(key, url)) {
            successCount++;
        } else {
            failCount++;
        }
    }
    
    showToast(`${successCount} link berhasil diupdate, ${failCount} gagal`, successCount > 0 ? 'success' : 'error');
    return { success: successCount, failed: failCount };
}

// Fungsi untuk melihat semua link yang sudah diisi
function getActiveLinks() {
    const active = {};
    for (const [key, url] of Object.entries(linkDatabase)) {
        if (url && url.trim() !== '') {
            active[key] = url;
        }
    }
    console.table(active);
    return active;
}

// Fungsi untuk export database link
function exportLinkDatabase() {
    const dataStr = JSON.stringify(linkDatabase, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'upk-link-database.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Database link berhasil diexport', 'success');
}

// Fungsi untuk import database link
function importLinkDatabase(jsonStr) {
    try {
        const data = JSON.parse(jsonStr);
        let updated = 0;
        
        for (const [key, url] of Object.entries(data)) {
            if (linkDatabase.hasOwnProperty(key)) {
                linkDatabase[key] = url;
                updateCardLink(key, url);
                updated++;
            }
        }
        
        showToast(`${updated} link berhasil diimport`, 'success');
        return true;
    } catch (e) {
        showToast('Gagal import: Format JSON tidak valid', 'error');
        return false;
    }
}

// Fungsi untuk clear semua link
function clearAllLinks() {
    if (confirm('Yakin ingin menghapus semua link?')) {
        for (const key in linkDatabase) {
            linkDatabase[key] = '';
            updateCardLink(key, '');
        }
        showToast('Semua link telah dihapus', 'success');
    }
}

// ============================================
// TOKEN SYSTEM FUNCTIONS
// ============================================

// Cek apakah kategori sudah diunlock
function isCategoryUnlocked(categoryId) {
    return unlockedCategories.has(categoryId);
}

// Unlock kategori
function unlockCategory(categoryId) {
    unlockedCategories.add(categoryId);
    updateCategoryLockUI(categoryId);
    showToast('Kategori berhasil dibuka!', 'success');
}

// Update tampilan lock/unlock untuk kategori
function updateCategoryLockUI(categoryId) {
    const lockedEl = document.getElementById(`lock-${categoryId}`);
    const contentEl = document.getElementById(`content-${categoryId}`);
    
    if (!lockedEl || !contentEl) return;
    
    if (isCategoryUnlocked(categoryId)) {
        lockedEl.style.display = 'none';
        contentEl.style.display = 'block';
    } else {
        lockedEl.style.display = 'flex';
        contentEl.style.display = 'none';
    }
}

// Inisialisasi semua kategori lock
function initCategoryLocks() {
    const categories = ['a-umum', 'a-abk', 'b-umum', 'b-abk', 'c-iis', 'c-mia', 'c-abk'];
    categories.forEach(cat => updateCategoryLockUI(cat));
}

// Show Token Modal
function showTokenModal(categoryId) {
    currentTokenCategory = categoryId;
    const modal = document.getElementById('tokenModal');
    const input = document.getElementById('tokenInput');
    const error = document.getElementById('tokenError');
    
    input.value = '';
    error.style.display = 'none';
    modal.classList.add('show');
    input.focus();
}

// Close Token Modal
function closeTokenModal() {
    const modal = document.getElementById('tokenModal');
    modal.classList.remove('show');
    currentTokenCategory = null;
}

// Submit Token
function submitToken() {
    if (!currentTokenCategory) return;
    
    const input = document.getElementById('tokenInput');
    const error = document.getElementById('tokenError');
    const enteredToken = input.value.trim().toUpperCase();
    
    if (!enteredToken) {
        error.textContent = 'Token tidak boleh kosong';
        error.style.display = 'block';
        return;
    }
    
    const correctToken = categoryTokens[currentTokenCategory];
    
    if (enteredToken === correctToken) {
        unlockCategory(currentTokenCategory);
        closeTokenModal();
    } else {
        error.textContent = 'Token tidak valid';
        error.style.display = 'block';
        input.select();
    }
}

// Handle Enter key di input token
document.addEventListener('DOMContentLoaded', function() {
    const tokenInput = document.getElementById('tokenInput');
    if (tokenInput) {
        tokenInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitToken();
            }
        });
    }
});

// Admin: Lihat semua token
function showAllTokens() {
    console.log('=== TOKEN KATEGORI ===');
    console.table(categoryTokens);
    return categoryTokens;
}

// Admin: Update token
function updateToken(categoryId, newToken) {
    if (categoryTokens.hasOwnProperty(categoryId)) {
        categoryTokens[categoryId] = newToken.toUpperCase();
        showToast(`Token untuk ${categoryId} diupdate`, 'success');
        return true;
    }
    showToast(`Kategori ${categoryId} tidak ditemukan`, 'error');
    return false;
}

// Admin: Reset semua unlock (lock semua kategori lagi)
function lockAllCategories() {
    unlockedCategories.clear();
    initCategoryLocks();
    showToast('Semua kategori telah dikunci kembali', 'success');
}

// ============================================
// Initialize saat DOM ready
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initCards();
    initCategoryLocks();
    
    // Close mobile menu saat klik di luar
    document.addEventListener('click', function(e) {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        
        if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
            mobileMenu.classList.remove('show');
        }
    });
});

// Expose functions ke global scope untuk admin
window.showPage = showPage;
window.showCategory = showCategory;
window.searchMapel = searchMapel;
window.toggleMobileMenu = toggleMobileMenu;
window.showToast = showToast;
window.setLink = setLink;
window.setLinks = setLinks;
window.getActiveLinks = getActiveLinks;
window.exportLinkDatabase = exportLinkDatabase;
window.importLinkDatabase = importLinkDatabase;
window.clearAllLinks = clearAllLinks;
window.linkDatabase = linkDatabase;

// Token System Admin Functions
window.showAllTokens = showAllTokens;
window.updateToken = updateToken;
window.lockAllCategories = lockAllCategories;
window.showTokenModal = showTokenModal;
window.closeTokenModal = closeTokenModal;
window.submitToken = submitToken;
