<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Yönetici Paneli - Zentrasmp</title>
  <link rel="stylesheet" href="/css/style.css" />
</head>
<body>
  <header class="topbar">
    <div class="container topbar-inner">
      <div class="brand-wrap">
        <h1>Yönetici Paneli</h1>
      </div>
      <div class="header-actions">
        <a href="/" class="link-btn">Oyuncu Destek</a>
      </div>
    </div>
  </header>

  <main class="container admin-wrap">
    <section id="login-panel" class="card auth-box">
      <h2>Yönetici Girişi</h2>
      <form id="admin-login-form">
        <label>Kullanıcı Adı</label>
        <input id="admin-username" required />

        <label>Şifre</label>
        <input id="admin-password" type="password" required />

        <button type="submit" class="btn primary">Giriş Yap</button>
      </form>
    </section>

    <section id="admin-panel" class="hidden">
      <div class="admin-header card">
        <div>
          <h2>Gelen Kutusu</h2>
          <div class="small" id="admin-status">Yönetici giriş yapıldı.</div>
        </div>
        <button id="logout-btn" class="btn secondary">Çıkış</button>
      </div>

      <div id="admin-list" class="ticket-list"></div>
    </section>
  </main>

  <div id="admin-modal" class="modal hidden">
    <div class="modal-content card">
      <button id="close-admin-modal" class="close">Kapat</button>
      <div id="admin-ticket-view"></div>
    </div>
  </div>

  <script src="/js/admin.js"></script>
</body>
</html>
