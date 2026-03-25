'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './inicio.module.css';

const NAV_LINKS = [
  { label: 'Aplicaciones', href: '#aplicaciones' },
  { label: 'Clientes',     href: '#clientes' },
  { label: 'Contacto',     href: '#contacto' },
];

const APPS = [
  {
    icon: 'storefront-outline',
    title: 'Tienda Online',
    desc: 'Catálogo digital con pedidos en tiempo real. Comparte el enlace y empieza a vender hoy mismo.',
    tag: 'E-commerce',
  },
  {
    icon: 'receipt-outline',
    title: 'Punto de Venta',
    desc: 'POS rápido desde el navegador. Sin instalar nada, sin complicaciones para tu equipo.',
    tag: 'Ventas',
  },
  {
    icon: 'document-text-outline',
    title: 'Contratos Digitales',
    desc: 'Crea, firma y administra contratos desde cualquier dispositivo. Todo digitalizado y seguro.',
    tag: 'Documentos',
  },
  {
    icon: 'flash-outline',
    title: 'Automatizaciones',
    desc: 'Flujos automáticos para tareas repetitivas. Tu negocio trabajando aunque no estés presente.',
    tag: 'Productividad',
  },
  {
    icon: 'card-outline',
    title: 'Créditos y Cartera',
    desc: 'Gestión de créditos, cuotas y mora automatizada. Control total de tu cartera de clientes.',
    tag: 'Finanzas',
  },
  {
    icon: 'construct-outline',
    title: 'Gestión de Obras',
    desc: 'Asistencia diaria, gastos y reportes de construcción organizados en un solo lugar.',
    tag: 'Construcción',
  },
  {
    icon: 'cube-outline',
    title: 'Inventario',
    desc: 'Stock, compras y proveedores con alertas automáticas. Nunca más te quedes sin producto.',
    tag: 'Gestión',
  },
  {
    icon: 'bar-chart-outline',
    title: 'Reportes',
    desc: 'Dashboards con los datos reales de tu negocio. Sin exportar, sin esperar.',
    tag: 'Analytics',
  },
  {
    icon: 'people-outline',
    title: 'CRM de Clientes',
    desc: 'Historial, seguimiento y comunicación con tus clientes reunidos en una sola vista.',
    tag: 'Clientes',
  },
];

const STATS = [
  { value: '500+',  label: 'Empresas conectadas' },
  { value: '10+',   label: 'Aplicaciones disponibles' },
  { value: '99.9%', label: 'Uptime garantizado' },
  { value: '24/7',  label: 'Soporte disponible' },
];

const MOCKUP_SIDEBAR = [
  { icon: 'grid-outline',       label: 'Dashboard' },
  { icon: 'storefront-outline', label: 'Ventas' },
  { icon: 'cube-outline',       label: 'Productos' },
  { icon: 'people-outline',     label: 'Clientes' },
  { icon: 'bar-chart-outline',  label: 'Reportes' },
];

const MOCKUP_CARDS = [
  { label: 'Ventas hoy', val: 'RD$48,200' },
  { label: 'Productos',  val: '1,234' },
  { label: 'Clientes',   val: '89' },
];

const CHART_BARS = [40, 65, 45, 80, 55, 90, 70];

const TESTIMONIALS = [
  {
    name: 'Carlos Méndez',
    role: 'Dueño de ferretería',
    text: 'Antes usaba Excel para todo. Ahora con Ambrysoft en 10 segundos sé exactamente cómo está mi negocio.',
  },
  {
    name: 'Daniela Roa',
    role: 'Directora financiera',
    text: 'La app de cartera de créditos nos ahorró horas cada semana. El sistema cobra solo, tú descansas.',
  },
  {
    name: 'Martín Sosa',
    role: 'Constructor',
    text: 'La app de obras es exactamente lo que buscaba. Asistencia, gastos y reportes en un lugar.',
  },
];

export default function LandingPage() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSlide,   setActiveSlide]   = useState(0);
  const [visibleCards,  setVisibleCards]  = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = cardRefs.current.indexOf(entry.target);
          if (idx !== -1) {
            setVisibleCards((prev) => prev.includes(idx) ? prev : [...prev, idx]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setActiveSlide((p) => (p + 1) % TESTIMONIALS.length),
      4500,
    );
    return () => clearInterval(id);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.root}>
      <div className={styles.mesh} aria-hidden="true" />

      <header className={[styles.nav, scrolled ? styles.navScrolled : ''].join(' ')}>
        <div className={styles.navInner}>

          <a href="/" className={styles.logo} aria-label="Ambrysoft inicio">
            <span className={styles.logoDot} aria-hidden="true" />
            Ambrysoft
          </a>

          <nav className={styles.navLinks} aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.navActions}>
            <a href="#contacto" className={styles.btnOutline}>Solicitar demo</a>
            <a href="#contacto" className={styles.btnPrimary}>Comenzar ahora</a>
          </div>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen((p) => !p)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <ion-icon name={menuOpen ? 'close-outline' : 'menu-outline'} />
          </button>
        </div>

        {menuOpen && (
          <nav className={styles.mobileMenu} aria-label="Menú móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className={[styles.btnPrimary, styles.mobileCta].join(' ')}
              onClick={() => setMenuOpen(false)}
            >
              Comenzar ahora
            </a>
          </nav>
        )}
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} aria-hidden="true" />
          Plataforma de aplicaciones empresariales
        </div>

        <h1 id="hero-title" className={styles.heroTitle}>
          Apps que hacen<br />
          <span className={styles.heroAccent}>crecer negocios.</span>
        </h1>

        <p className={styles.heroSub}>
          Conectamos empresas con las aplicaciones digitales exactas para su operación.
          Tiendas, contratos, créditos, obras y mucho más.
        </p>

        <div className={styles.heroCtas}>
          <a href="#contacto" className={[styles.btnPrimary, styles.btnLg].join(' ')}>
            Solicitar demo
            <ion-icon name="arrow-forward-outline" />
          </a>
          <a href="#aplicaciones" className={styles.btnGhost}>
            <ion-icon name="apps-outline" />
            Ver aplicaciones
          </a>
        </div>

        <div className={styles.heroStats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.heroStat}>
              <span className={styles.heroStatVal}>{s.value}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* mockup UI */}
        <div className={styles.heroMockup} aria-hidden="true">
          <div className={styles.mockupBar}>
            <span className={styles.mockupDot} />
            <span className={styles.mockupDot} />
            <span className={styles.mockupDot} />
            <div className={styles.mockupUrl}>ambrysoft.com/dashboard</div>
          </div>
          <div className={styles.mockupBody}>
            <div className={styles.mockupSidebar}>
              {MOCKUP_SIDEBAR.map((item, i) => (
                <div
                  key={item.label}
                  className={[
                    styles.mockupSideItem,
                    i === 0 ? styles.mockupSideActive : '',
                  ].join(' ')}
                >
                  <ion-icon name={item.icon} />
                  {item.label}
                </div>
              ))}
            </div>
            <div className={styles.mockupMain}>
              <div className={styles.mockupCards}>
                {MOCKUP_CARDS.map((c) => (
                  <div key={c.label} className={styles.mockupCard}>
                    <div className={styles.mockupCardLabel}>{c.label}</div>
                    <div className={styles.mockupCardVal}>{c.val}</div>
                  </div>
                ))}
              </div>
              <div className={styles.mockupChart}>
                {CHART_BARS.map((h, i) => (
                  <div
                    key={i}
                    className={styles.mockupBar2}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aplicaciones" className={styles.section} aria-labelledby="aplicaciones-title">
        <p className={styles.sectionLabel}>Lo que ofrecemos</p>
        <h2 id="aplicaciones-title" className={styles.sectionTitle}>
          Una app para<br />cada necesidad.
        </h2>
        <div className={styles.grid}>
          {APPS.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={[styles.card, visibleCards.includes(i) ? styles.cardVisible : ''].join(' ')}
              style={{ '--card-delay': `${i * 80}ms` }}
            >
              <p className={styles.cardTag}>{s.tag}</p>
              <div className={styles.cardIcon}>
                <ion-icon name={s.icon} />
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.cardLine} aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section id="clientes" className={styles.testimonialSection} aria-label="Testimonios">
        <div className={styles.testimonialInner}>
          <p className={styles.sectionLabel}>Lo que dicen</p>
          <h2 className={styles.sectionTitle}>
            Negocios reales,<br />resultados reales.
          </h2>
          <div className={styles.testimonialWrap}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={[
                  styles.testimonial,
                  i === activeSlide ? styles.testimonialActive : '',
                ].join(' ')}
                aria-hidden={i !== activeSlide}
              >
                <ion-icon name="chatbubble-ellipses-outline" />
                <p className={styles.testimonialText}>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <div>
                    <p className={styles.testimonialName}>{t.name}</p>
                    <p className={styles.testimonialRole}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.testimonialDots} role="tablist">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  role="tab"
                  aria-selected={i === activeSlide}
                  aria-label={`Ver testimonio de ${t.name}`}
                  className={[
                    styles.testimonialDot,
                    i === activeSlide ? styles.testimonialDotActive : '',
                  ].join(' ')}
                  onClick={() => setActiveSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className={styles.ctaBand} aria-labelledby="cta-title">
        <div className={styles.ctaGlow} aria-hidden="true" />
        <h2 id="cta-title" className={styles.ctaTitle}>
          Encuentra la app ideal para tu negocio
        </h2>
        <p className={styles.ctaSub}>Cuéntanos qué necesitas. Te conectamos con la solución correcta.</p>
        <form className={styles.ctaForm} onSubmit={handleFormSubmit} noValidate>
          <label className={styles.srOnly} htmlFor="cta-nombre">Nombre</label>
          <input
            id="cta-nombre"
            className={styles.ctaInput}
            type="text"
            placeholder="Tu nombre"
            autoComplete="name"
            required
          />
          <label className={styles.srOnly} htmlFor="cta-email">Correo</label>
          <input
            id="cta-email"
            className={styles.ctaInput}
            type="email"
            placeholder="Tu correo"
            autoComplete="email"
            required
          />
          <label className={styles.srOnly} htmlFor="cta-tel">WhatsApp</label>
          <input
            id="cta-tel"
            className={styles.ctaInput}
            type="tel"
            placeholder="WhatsApp"
            autoComplete="tel"
          />
          <button type="submit" className={[styles.btnPrimary, styles.btnLg].join(' ')}>
            Solicitar información
            <ion-icon name="send-outline" />
          </button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <a href="/" className={styles.logo} aria-label="Ambrysoft inicio">
            <span className={styles.logoDot} aria-hidden="true" />
            Ambrysoft
          </a>
          <p className={styles.footerTagline}>Aplicaciones digitales para negocios que crecen.</p>
          <nav className={styles.footerLinks} aria-label="Links del footer">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={styles.footerLink}>
                {link.label}
              </a>
            ))}
          </nav>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} Ambrysoft. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}