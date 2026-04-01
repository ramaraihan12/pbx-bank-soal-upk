// Ujian Pendidikan Kesetaraan - Main JavaScript
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
    _t['a-khusus'] = atob(_0x4b2a[_0x9c1d[1]]);
    _t['b-umum'] = atob(_0x4b2a[_0x9c1d[2]]);
    _t['b-khusus'] = atob(_0x4b2a[_0x9c1d[3]]);
    _t['c-iis'] = atob(_0x4b2a[_0x9c1d[4]]);
    _t['c-mia'] = atob(_0x4b2a[_0x9c1d[5]]);
    _t['c-khusus'] = atob(_0x4b2a[_0x9c1d[6]]);
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
    'a-khusus-islam': 'https://forms.gle/sPkZTXU8Su76Nq1t9',
    'a-khusus-kristen': 'https://forms.gle/Qasg274o7tRSTs4F7',
    'a-khusus-katolik': 'https://forms.gle/hzdh25JxNdT4iTw2A',
    'a-khusus-buddha': 'https://forms.gle/Urj6anGeEAy3mKM68',
    'a-khusus-hindu': 'https://forms.gle/3EXNoHB7wopsmSzD9',
    'a-khusus-ppkn': 'https://forms.gle/EkY2s5TncAZji5kg6',
    'a-khusus-ipas': 'https://forms.gle/Lue2RunN3XczYhKG9',
    'a-khusus-matematika': 'https://forms.gle/wdEMhXjjz2saA1HTA',
    'a-khusus-bi': 'https://forms.gle/UHy62ibhMwtfTmPa7',
    
    // Paket B Umum
    'b-umum-islam': 'https://forms.gle/MDzmKx6acT5r4KEaA',
    'b-umum-kristen': 'https://forms.gle/hM56zSKUpNir8uLu8',
    'b-umum-katolik': 'https://forms.gle/WSNxmUjQ7vqbvCm1A',
    'b-umum-buddha': 'https://forms.gle/yJUo5UJKppGjw57j9',
    'b-umum-hindu': 'https://forms.gle/kPscUBkxHH3mt8938',
    'b-umum-pkn': 'https://forms.gle/XQju3XupoxBgEKsU6',
    'b-umum-ipa': 'https://forms.gle/EKo2EJgRK4ACj2jA8',
    'b-umum-ips': 'https://docs.google.com/forms/d/e/1FAIpQLScWY5_19eyPuIQuWEVFuUVgnG4GqA0CtDHy84wczZqGe5VJ_A/viewform?usp=dialog',
    'b-umum-matematika': 'https://forms.gle/AqZ6ACX5TwAjLmkF8',
    'b-umum-bi': 'https://forms.gle/f4sta5YjRLaYtYk27',
    'b-umum-inggris': 'https://forms.gle/rF2GRby3yBBQpx377',
    
    // Paket B ABK
    'b-khusus-islam': 'https://forms.gle/hvqratg2gdN1qbRL8',
    'b-khusus-kristen': 'https://forms.gle/iQHVjQS7eU3b8gGE6',
    'b-khusus-katolik': 'https://forms.gle/n2m2WspAccbUrf7A6',
    'b-khusus-buddha': 'https://forms.gle/UdmrnYfAVXJ5jiSb9',
    'b-khusus-hindu': 'https://forms.gle/zY4Xp9fvtkWmw2e9A',
    'b-khusus-pkn': 'https://forms.gle/MYqGvacQXJAyWKmj9',
    'b-khusus-ipa': 'https://docs.google.com/forms/d/e/1FAIpQLSf39DTMw1gvy_Fmn7eJAkcCgrnJ66RFPR4_XRcemn98f7Hgtw/viewform?usp=publish-editor',
    'b-khusus-ips': 'https://docs.google.com/forms/d/e/1FAIpQLSed4f9ydP1p__ddPPkv6x3H9r00bmOZ0kSrYx4g7f3NyIKMsQ/viewform?usp=publish-editor',
    'b-khusus-matematika': 'https://forms.gle/KrdjnnbV45ypj6rc6',
    'b-khusus-bi': 'https://forms.gle/BzxgzpsBNcAHWtft7',
    'b-khusus-inggris': 'https://forms.gle/Sg9j7EiJymrYZFmE6',
    
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
    'c-khusus-islam': 'https://forms.gle/4mZ2cLethpgQ9ywc9',
    'c-khusus-kristen': 'https://forms.gle/8EgJ9tNL17oAmckm9',
    'c-khusus-katolik': 'https://forms.gle/5QniyXqNHU2AjfEs8',
    'c-khusus-pkn': 'https://forms.gle/yi8ckei7j76s7hez8',
    'c-khusus-matematika': 'https://forms.gle/3zWcuVJfmwN4QqC4A',
    'c-khusus-bi': 'https://forms.gle/kzmHkqKvEY2DE4SK6',
    'c-khusus-inggris': 'https://forms.gle/rnAfaLHBWrWMDdsw9'
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
    const categories = ['a-umum', 'a-khusus', 'b-umum', 'b-khusus', 'c-iis', 'c-mia', 'c-khusus'];
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

// ============================================
// SKELETON LOADING SYSTEM
// ============================================

const SkeletonLoader = {
    // Global page loader
    hideGlobalLoader() {
        const loader = document.getElementById('globalLoader');
        if (loader) {
            loader.classList.add('hidden');
        }
    },

    // Show skeleton for specific category
    showSkeleton(categoryId) {
        const skeleton = document.getElementById(`skeleton-${categoryId}`);
        const grid = document.getElementById(`grid-${categoryId}`);
        
        if (skeleton) {
            skeleton.classList.add('active');
        }
        if (grid) {
            grid.style.display = 'none';
        }
    },

    // Hide skeleton and show content for specific category
    hideSkeleton(categoryId, delay = 300) {
        setTimeout(() => {
            const skeleton = document.getElementById(`skeleton-${categoryId}`);
            const grid = document.getElementById(`grid-${categoryId}`);
            
            if (skeleton) {
                skeleton.classList.remove('active');
            }
            if (grid) {
                grid.style.display = 'grid';
                // Add fade-in effect
                grid.style.opacity = '0';
                grid.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    grid.style.opacity = '1';
                }, 50);
            }
        }, delay);
    },

    // Show skeleton for search (all visible cards)
    showSearchSkeleton(pageId) {
        const page = document.getElementById(pageId);
        if (!page) return;
        
        const activeCategory = page.querySelector('.category-content.active');
        if (!activeCategory) return;
        
        const categoryId = activeCategory.dataset.category;
        if (categoryId) {
            this.showSkeleton(categoryId);
        }
    },

    // Hide skeleton after search
    hideSearchSkeleton(pageId) {
        const page = document.getElementById(pageId);
        if (!page) return;
        
        const activeCategory = page.querySelector('.category-content.active');
        if (!activeCategory) return;
        
        const categoryId = activeCategory.dataset.category;
        if (categoryId) {
            this.hideSkeleton(categoryId, 200);
        }
    }
};

// Override showCategory to add skeleton loading
const originalShowCategory = showCategory;
showCategory = function(categoryId) {
    // Show skeleton first
    SkeletonLoader.showSkeleton(categoryId);
    
    // Call original function
    originalShowCategory(categoryId);
    
    // Hide skeleton after content is ready
    SkeletonLoader.hideSkeleton(categoryId, 400);
};

// Override unlockCategory to add skeleton loading
const originalUnlockCategory = unlockCategory;
unlockCategory = function(categoryId) {
    // Show skeleton
    SkeletonLoader.showSkeleton(categoryId);
    
    // Call original function
    originalUnlockCategory(categoryId);
    
    // Hide skeleton after unlock
    SkeletonLoader.hideSkeleton(categoryId, 500);
};

// Search debounce timer
let searchDebounceTimer = null;

// Override searchMapel to add skeleton loading
const originalSearchMapel = searchMapel;
searchMapel = function(query, pageId) {
    // Clear existing timer
    if (searchDebounceTimer) {
        clearTimeout(searchDebounceTimer);
    }
    
    // Show skeleton immediately
    SkeletonLoader.showSearchSkeleton(pageId);
    
    // Debounce the actual search
    searchDebounceTimer = setTimeout(() => {
        originalSearchMapel(query, pageId);
        SkeletonLoader.hideSearchSkeleton(pageId);
    }, 300);
};

// Initialize skeleton system on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Hide global loader when everything is ready
    setTimeout(() => {
        SkeletonLoader.hideGlobalLoader();
    }, 800);
});

// Expose SkeletonLoader to global scope for debugging
window.SkeletonLoader = SkeletonLoader;
