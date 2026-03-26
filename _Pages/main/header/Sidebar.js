'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Sidebar.module.css';

const navGroups = [
  {
    section: 'Principal',
    items: [
      { label: 'Inicio',     href: '/',           icon: 'home'          },
      { label: 'Comunidad',  href: '/comunidad',  icon: 'people',       badge: 12 },
      { label: 'Mensajes',   href: '/mensajes',   icon: 'chatbubbles',  badge: 3  },
    ],
  },
  {
    section: 'Herramientas',
    items: [
      { label: 'Tiendas',          href: '/tiendas',          icon: 'storefront'    },
      { label: 'Automatizaciones', href: '/automatizaciones', icon: 'flash'         },
      { label: 'Contratos',        href: '/contratos',        icon: 'document-text' },
      { label: 'Autorizaciones',   href: '/autorizaciones',   icon: 'lock-closed'   },
    ],
  },
  {
    section: 'Más',
    items: [
      { label: 'Foro',          href: '/foro',          icon: 'earth'       },
      { label: 'Integraciones', href: '/integraciones', icon: 'git-network' },
      { label: 'Configuración', href: '/configuracion', icon: 'settings'    },
    ],
  },
];

const bottomNav = [
  { label: 'Inicio',     href: '/',          icon: 'home'          },
  { label: 'Comunidad',  href: '/comunidad', icon: 'people'        },
  { label: 'Mensajes',   href: '/mensajes',  icon: 'chatbubbles'   },
  { label: 'Servicios',  href: '/tiendas',   icon: 'flash'         },
  { label: 'Perfil',     href: '/perfil',    icon: 'person-circle' },
];

export default function Sidebar({ drawerOpen = false, setDrawerOpen = () => {} }) {
  const pathname = usePathname();

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.top}>
          <div className={styles.logoWrap}>
            <Image src="/logo.png" alt="AmbrySOFT" width={28} height={28} className={styles.logoImg} />
          </div>
          <span className={styles.brand}>AmbrySOFT</span>
        </div>

        <nav className={styles.nav}>
          {navGroups.map((group) => (
            <div key={group.section}>
              <p className={styles.section}>{group.section}</p>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navItem} ${pathname === item.href ? styles.active : ''}`}
                >
                  <span className={styles.navIcon}><ion-icon name={item.icon} /></span>
                  <span className={styles.navLabel}>{item.label}</span>
                  {item.badge && <span className={styles.badge}>{item.badge}</span>}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className={styles.bottom}>
          <div className={styles.avatarRow}>
            <div className={styles.avatar}>AB</div>
            <div className={styles.avatarInfo}>
              <p className={styles.avatarName}>Alex Brito</p>
              <p className={styles.avatarRole}>Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {drawerOpen && <div className={styles.overlay} onClick={() => setDrawerOpen(false)} />}

      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerTop}>
          <div className={styles.drawerLogo}>
            <Image src="/logo.png" alt="AmbrySOFT" width={20} height={20} />
          </div>
          <span className={styles.drawerBrand}>AmbrySOFT</span>
          <button className={styles.drawerClose} onClick={() => setDrawerOpen(false)}>✕</button>
        </div>

        <div className={styles.drawerNav}>
          {navGroups.map((group) => (
            <div key={group.section}>
              <p className={styles.drawerSection}>{group.section}</p>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.drawerItem} ${pathname === item.href ? styles.active : ''}`}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ion-icon name={item.icon} />
                  <span>{item.label}</span>
                  {item.badge && <span className={styles.badge}>{item.badge}</span>}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.drawerBottom}>
          <div className={styles.avatarRow}>
            <div className={styles.avatar}>AB</div>
            <div className={styles.avatarInfo}>
              <p className={styles.avatarName}>Alex Brito</p>
              <p className={styles.avatarRole}>Admin</p>
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.bottomNav}>
        {bottomNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.bnItem} ${pathname === item.href ? styles.bnActive : ''}`}
          >
            <ion-icon name={item.icon} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}