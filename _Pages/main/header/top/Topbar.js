'use client';
import styles from './Topbar.module.css';

export default function Topbar({ title = 'Inicio', onMenuClick }) {
  return (
    <header className={styles.topbar}>
      <button className={styles.hamburger} onClick={onMenuClick} aria-label="Abrir menú">
        <span /><span /><span />
      </button>

      <span className={styles.title}>{title}</span>

      <div className={styles.search}>
        <ion-icon name="search-outline" style={{ fontSize: '13px' }} />
        <input placeholder="Buscar..." />
      </div>

      <button className={styles.newBtn}>
        <ion-icon name="add-outline" style={{ fontSize: '15px' }} />
        <span>Nuevo</span>
      </button>

      <button className={styles.iconBtn} title="Notificaciones">
        <ion-icon name="notifications-outline" style={{ fontSize: '16px' }} />
        <span className={styles.dot} />
      </button>

      <button className={styles.iconBtn} title="Mensajes">
        <ion-icon name="chatbubble-outline" style={{ fontSize: '16px' }} />
        <span className={styles.dot} />
      </button>

      <div className={styles.avatar} title="Perfil">AB</div>
    </header>
  );
}