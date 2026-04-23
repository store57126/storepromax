// TECHSTORE - Database using localStorage
const DB = {
  // Initialize default data
  init() {
    if (!localStorage.getItem('ts_initialized')) {
      this.set('ts_products', [
        { id: 1, name: 'iPhone 15 Pro Max', category: 'phones', price: 67999, oldPrice: 79999, images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600'], rating: 4.8, reviews: 128, stock: 50, description: 'iPhone 15 Pro Max يجمع بين الأداء الخارق والتصميم الفاخر، مع شريحة A17 Pro وكاميرا احترافية لتجربة لا مثيل لها.', colors: [{name:'أزرق تيتانيوم', hex:'#4A6FA5', price:0}, {name:'أسود تيتانيوم', hex:'#2C2C2E', price:0}, {name:'فضي تيتانيوم', hex:'#C0C0C0', price:0}, {name:'طبيعي تيتانيوم', hex:'#D4C5A9', price:0}], storage: [{size:'256GB', price:0}, {size:'512GB', price:5000}, {size:'1TB', price:10000}], featured: true, discount: 15 },
        { id: 2, name: 'AirPods Pro 2', category: 'accessories', price: 1999, oldPrice: null, images: ['https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600'], rating: 4.9, reviews: 89, stock: 5, description: 'AirPods Pro الجيل الثاني مع إلغاء ضجيج نشط وجودة صوت استثنائية.', colors: [{name:'أبيض', hex:'#FFFFFF', price:0}], storage: [], featured: true, discount: 0 },
        { id: 3, name: 'Samsung S24 Ultra', category: 'phones', price: 54999, oldPrice: null, images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600'], rating: 4.7, reviews: 64, stock: 30, description: 'سامسونج S24 Ultra بقلم S-Pen وكاميرا 200 ميجابكسل.', colors: [{name:'أسود', hex:'#1C1C1E', price:0}, {name:'بنفسجي', hex:'#9B59B6', price:0}], storage: [{size:'256GB', price:0}, {size:'512GB', price:4000}], featured: false, discount: 0 },
        { id: 4, name: 'Apple Watch Ultra 2', category: 'watches', price: 24999, oldPrice: null, images: ['https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600'], rating: 4.8, reviews: 45, stock: 20, description: 'Apple Watch Ultra 2 للمغامرين والرياضيين بمتانة استثنائية.', colors: [{name:'تيتانيوم', hex:'#A9A9A9', price:0}], storage: [], featured: true, discount: 0 },
        { id: 5, name: 'MacBook Air M2', category: 'laptops', price: 44999, oldPrice: null, images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600'], rating: 4.9, reviews: 112, stock: 15, description: 'MacBook Air بشريحة M2 - رفيع وخفيف وأداء لا يصدق.', colors: [{name:'فضي', hex:'#C0C0C0', price:0}, {name:'ذهبي', hex:'#D4AF37', price:0}, {name:'رمادي', hex:'#808080', price:0}], storage: [{size:'256GB', price:0}, {size:'512GB', price:3000}, {size:'1TB', price:6000}], featured: true, discount: 0 },
        { id: 6, name: 'Dell XPS 15', category: 'laptops', price: 54999, oldPrice: null, images: ['https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600'], rating: 4.7, reviews: 78, stock: 8, description: 'Dell XPS 15 بشاشة OLED وأداء احترافي للمبدعين.', colors: [{name:'فضي', hex:'#C0C0C0', price:0}, {name:'أسود', hex:'#1C1C1E', price:0}], storage: [{size:'512GB', price:0}, {size:'1TB', price:5000}], featured: false, discount: 0 },
        { id: 7, name: 'Sony WH-1000XM5', category: 'headphones', price: 8999, oldPrice: null, images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600'], rating: 4.8, reviews: 203, stock: 3, description: 'سماعات سوني بأفضل إلغاء ضجيج في السوق.', colors: [{name:'أسود', hex:'#1C1C1E', price:0}, {name:'فضي', hex:'#C0C0C0', price:0}], storage: [], featured: false, discount: 0 },
        { id: 8, name: 'iPad Pro M2', category: 'tablets', price: 34999, oldPrice: null, images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600'], rating: 4.9, reviews: 156, stock: 12, description: 'iPad Pro بشريحة M2 وشاشة Liquid Retina XDR.', colors: [{name:'فضي', hex:'#C0C0C0', price:0}, {name:'رمادي', hex:'#808080', price:0}], storage: [{size:'128GB', price:0}, {size:'256GB', price:3000}, {size:'512GB', price:7000}, {size:'1TB', price:12000}], featured: false, discount: 0 },
        { id: 9, name: 'Samsung 4K Monitor 27"', category: 'screens', price: 12999, oldPrice: null, images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600'], rating: 4.6, reviews: 67, stock: 25, description: 'شاشة سامسونج 4K بتقنية QLED وألوان زاهية مذهلة.', colors: [{name:'أسود', hex:'#1C1C1E', price:0}], storage: [], featured: false, discount: 0 },
      ]);

      this.set('ts_admins', [{ username: 'loay', password: '11211', name: 'لؤي', role: 'super' }]);
      this.set('ts_users', []);
      this.set('ts_orders', []);
      this.set('ts_coupons', [{ code: 'TECH20', discount: 20, type: 'percent', active: true }, { code: 'SAVE2000', discount: 2000, type: 'fixed', active: true }]);
      this.set('ts_reviews', [
        { id: 1, productId: 1, userId: null, name: 'أحمد محمد', rating: 5, comment: 'هاتف رائع بكل المقاييس، الكاميرا والأداء خيالي 🔥', date: '2024-05-20' },
        { id: 2, productId: 1, userId: null, name: 'سارة علي', rating: 5, comment: 'أفضل هاتف استخدمته، البطارية ممتازة والشاشة مذهلة ✨', date: '2024-05-18' },
        { id: 3, productId: 1, userId: null, name: 'محمد خالد', rating: 4, comment: 'منتج ممتاز لكن السعر مرتفع قليلاً', date: '2024-05-15' },
      ]);
      this.set('ts_categories', [
        { id: 'phones', name: 'هواتف', icon: '📱' },
        { id: 'laptops', name: 'لابتوبات', icon: '💻' },
        { id: 'headphones', name: 'سماعات', icon: '🎧' },
        { id: 'screens', name: 'شاشات', icon: '🖥️' },
        { id: 'tablets', name: 'أجهزة لوحية', icon: '📟' },
        { id: 'accessories', name: 'إكسسوارات', icon: '⌚' },
        { id: 'watches', name: 'ساعات', icon: '⌚' },
      ]);
      this.set('ts_initialized', true);
    }
  },

  get(key) {
    try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
  },
  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  },

  // Products
  getProducts(filters = {}) {
    let products = this.get('ts_products') || [];
    if (filters.category) products = products.filter(p => p.category === filters.category);
    if (filters.search) products = products.filter(p => p.name.toLowerCase().includes(filters.search.toLowerCase()));
    if (filters.featured) products = products.filter(p => p.featured);
    return products;
  },
  getProduct(id) {
    return (this.get('ts_products') || []).find(p => p.id == id);
  },
  saveProduct(product) {
    let products = this.get('ts_products') || [];
    const idx = products.findIndex(p => p.id == product.id);
    if (idx >= 0) products[idx] = product;
    else { product.id = Date.now(); products.push(product); }
    this.set('ts_products', products);
    return product;
  },
  deleteProduct(id) {
    let products = this.get('ts_products') || [];
    this.set('ts_products', products.filter(p => p.id != id));
  },

  // Cart
  getCart() { return this.get('ts_cart') || []; },
  addToCart(productId, qty=1, color=null, storage=null) {
    let cart = this.getCart();
    const key = `${productId}-${color}-${storage}`;
    const existing = cart.find(i => i.key === key);
    if (existing) existing.qty += qty;
    else cart.push({ key, productId, qty, color, storage });
    this.set('ts_cart', cart);
    updateCartCount();
  },
  updateCartQty(key, qty) {
    let cart = this.getCart();
    const item = cart.find(i => i.key === key);
    if (item) { if (qty <= 0) cart = cart.filter(i => i.key !== key); else item.qty = qty; }
    this.set('ts_cart', cart);
    updateCartCount();
  },
  clearCart() { this.set('ts_cart', []); updateCartCount(); },

  // Wishlist
  getWishlist() { return this.get('ts_wishlist') || []; },
  toggleWishlist(productId) {
    let w = this.getWishlist();
    const idx = w.indexOf(productId);
    if (idx >= 0) w.splice(idx, 1); else w.push(productId);
    this.set('ts_wishlist', w);
    return idx < 0;
  },
  isWishlisted(productId) { return (this.getWishlist()).includes(productId); },

  // Users
  getUser() { return this.get('ts_currentUser'); },
  login(user) { this.set('ts_currentUser', user); },
  logout() { localStorage.removeItem('ts_currentUser'); },
  register(userData) {
    let users = this.get('ts_users') || [];
    if (users.find(u => u.email === userData.email)) return { error: 'البريد الإلكتروني مستخدم بالفعل' };
    userData.id = Date.now();
    userData.joinDate = new Date().toISOString();
    userData.orders = [];
    users.push(userData);
    this.set('ts_users', users);
    this.login(userData);
    return { success: true, user: userData };
  },
  loginUser(email, password) {
    const users = this.get('ts_users') || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { error: 'بيانات خاطئة' };
    this.login(user);
    return { success: true, user };
  },

  // Orders
  createOrder(orderData) {
    let orders = this.get('ts_orders') || [];
    const order = { ...orderData, id: Date.now(), status: 'new', date: new Date().toISOString(), statusHistory: [{ status: 'new', date: new Date().toISOString() }] };
    orders.push(order);
    this.set('ts_orders', orders);
    // Update stats
    const currentUser = this.getUser();
    if (currentUser) {
      let users = this.get('ts_users') || [];
      const u = users.find(u => u.id === currentUser.id);
      if (u) { u.orders = u.orders || []; u.orders.push(order.id); this.set('ts_users', users); this.login(u); }
    }
    return order;
  },
  getOrders(userId = null) {
    let orders = this.get('ts_orders') || [];
    if (userId) orders = orders.filter(o => o.userId === userId);
    return orders;
  },
  updateOrderStatus(orderId, status) {
    let orders = this.get('ts_orders') || [];
    const order = orders.find(o => o.id == orderId);
    if (order) {
      order.status = status;
      order.statusHistory = order.statusHistory || [];
      order.statusHistory.push({ status, date: new Date().toISOString() });
    }
    this.set('ts_orders', orders);
  },

  // Coupons
  validateCoupon(code) {
    const coupons = this.get('ts_coupons') || [];
    return coupons.find(c => c.code === code.toUpperCase() && c.active);
  },

  // Reviews
  getReviews(productId) { return (this.get('ts_reviews') || []).filter(r => r.productId == productId); },
  addReview(review) {
    let reviews = this.get('ts_reviews') || [];
    review.id = Date.now();
    review.date = new Date().toLocaleDateString('ar-EG');
    reviews.push(review);
    this.set('ts_reviews', reviews);
  },

  // Admin
  getAdminUser() { return this.get('ts_adminUser'); },
  adminLogin(username, password) {
    const admins = this.get('ts_admins') || [];
    const admin = admins.find(a => a.username === username && a.password === password);
    if (!admin) return false;
    this.set('ts_adminUser', admin);
    return admin;
  },
  adminLogout() { localStorage.removeItem('ts_adminUser'); },
  getAdmins() { return this.get('ts_admins') || []; },
  saveAdmin(admin) {
    let admins = this.get('ts_admins') || [];
    const idx = admins.findIndex(a => a.username === admin.username);
    if (idx >= 0) admins[idx] = admin; else admins.push(admin);
    this.set('ts_admins', admins);
  },
  deleteAdmin(username) {
    if (username === 'loay') return false;
    let admins = this.get('ts_admins') || [];
    this.set('ts_admins', admins.filter(a => a.username !== username));
    return true;
  },

  // Stats
  getStats() {
    const products = this.get('ts_products') || [];
    const orders = this.get('ts_orders') || [];
    const users = this.get('ts_users') || [];
    const totalRevenue = orders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + (o.total || 0), 0);
    return { products: products.length, orders: orders.length, users: users.length, revenue: totalRevenue };
  }
};

function updateCartCount() {
  const cart = DB.getCart();
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function showToast(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `ts-toast ts-toast-${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span> ${msg}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
}

function formatPrice(p) { return p.toLocaleString('ar-EG') + ' جنيه'; }
function statusLabel(s) {
  const map = { new: ['جديد', '#3B82F6'], preparing: ['جاري التجهيز', '#F59E0B'], shipped: ['في الطريق', '#8B5CF6'], delivered: ['تم التوصيل', '#10B981'], cancelled: ['ملغي', '#EF4444'] };
  return map[s] || ['غير معروف', '#6B7280'];
}

// Init on load
DB.init();
