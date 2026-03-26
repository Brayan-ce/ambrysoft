'use client';
import { useState } from 'react';
import styles from './dashboard.module.css';

const stats = [
  { label: 'Usuarios activos', value: '1,284', sub: '↑ 12% este mes', subColor: '#1E6FFF' },
  { label: 'Mensajes hoy',     value: '342',   sub: '5 en vivo ahora', subColor: '#1E6FFF' },
  { label: 'Contratos activos',value: '47',    sub: '3 por vencer',    subColor: '#e8a020' },
  { label: 'Tiendas online',   value: '29',    sub: '↑ 2 nuevas hoy',  subColor: '#1E6FFF' },
];

const feed = [
  { initials: 'MR', name: 'María Rodríguez', text: 'Creó nueva tienda: "Tecno Express"', time: '2m',  color: '#0d2d5e', textColor: '#1E6FFF' },
  { initials: 'JL', name: 'José López',       text: 'Firmó contrato #19 digitalmente',   time: '15m', color: '#042820', textColor: '#00CFFF' },
  { initials: 'KP', name: 'Karen Paz',        text: 'Activó automatización de emails',   time: '1h',  color: '#0d2d5e', textColor: '#1E6FFF' },
  { initials: 'TS', name: 'Tomás Soria',      text: 'Nuevo post en foro: "APIs REST"',   time: '2h',  color: '#042820', textColor: '#00CFFF' },
  { initials: 'AL', name: 'Ana Lima',         text: 'Solicitud de autorización pendiente',time: '3h', color: '#0d2d5e', textColor: '#1E6FFF' },
];

const initialTasks = [
  { id: 1, text: 'Revisar contrato #22',             done: true,  tag: 'Contrato', tagStyle: 'blue' },
  { id: 2, text: 'Configurar tienda de María',        done: false, tag: 'Tienda',   tagStyle: 'cyan' },
  { id: 3, text: 'Validar integración Stripe',        done: false, tag: 'API',      tagStyle: 'blue' },
  { id: 4, text: 'Enviar propuesta cliente #8',       done: false, tag: 'Urgente',  tagStyle: 'warn' },
  { id: 5, text: 'Actualizar auto. de bienvenida',    done: true,  tag: 'Auto',     tagStyle: 'cyan' },
];

const chartData = [42, 67, 55, 88, 73, 95, 61, 108, 84, 120, 99, 115];
const chartLabels = ['L','M','X','J','V','S','D','L','M','X','J','V'];

const quickActions = [
  { label: 'Nueva tienda',    color: '#0d2d5e', iconColor: '#1E6FFF' },
  { label: 'Nuevo contrato',  color: '#042820', iconColor: '#00CFFF' },
  { label: 'Automatización',  color: '#0d2d5e', iconColor: '#1E6FFF' },
  { label: 'Invitar usuario', color: '#042820', iconColor: '#00CFFF' },
];

export default function DashboardPage() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const maxVal = Math.max(...chartData);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statCard}>
              <p className={styles.statLabel}>{s.label}</p>
              <p className={styles.statValue}>{s.value}</p>
              <p className={styles.statSub} style={{ color: s.subColor }}>{s.sub}</p>
            </div>
          ))}
        </div>

        <div className={styles.row2}>
          <div className={styles.card}>
            <div className={styles.cardHdr}>
              <span className={styles.cardTitle}>Actividad reciente</span>
              <span className={styles.cardLink}>Ver todo</span>
            </div>
            {feed.map((f, i) => (
              <div key={i} className={styles.feedItem}>
                <div className={styles.feedAv} style={{ background: f.color, color: f.textColor }}>{f.initials}</div>
                <div className={styles.feedBody}>
                  <p className={styles.feedName}>{f.name}</p>
                  <p className={styles.feedTxt}>{f.text}</p>
                </div>
                <span className={styles.feedTime}>{f.time}</span>
              </div>
            ))}
          </div>

          <div className={styles.card}>
            <div className={styles.cardHdr}>
              <span className={styles.cardTitle}>Tareas pendientes</span>
              <span className={styles.cardLink}>+ Añadir</span>
            </div>
            {tasks.map(t => (
              <div key={t.id} className={`${styles.task} ${t.done ? styles.done : ''}`}>
                <div className={`${styles.chk} ${t.done ? styles.chkDone : ''}`} onClick={() => toggleTask(t.id)} />
                <span className={styles.taskTxt}>{t.text}</span>
                <span className={`${styles.tag} ${styles[t.tagStyle]}`}>{t.tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.row3}>
          <div className={styles.card}>
            <div className={styles.cardHdr}>
              <span className={styles.cardTitle}>Usuarios nuevos por semana</span>
            </div>
            <div className={styles.chartBars}>
              {chartData.map((v, i) => (
                <div key={i} className={styles.barWrap}>
                  <div
                    className={`${styles.bar} ${i % 2 !== 0 ? styles.barCyan : ''}`}
                    style={{ height: `${Math.round((v / maxVal) * 80)}px` }}
                  />
                  <span className={styles.barLbl}>{chartLabels[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHdr}>
              <span className={styles.cardTitle}>Acciones rápidas</span>
            </div>
            <div className={styles.quickList}>
              {quickActions.map((q, i) => (
                <div key={i} className={styles.qlItem}>
                  <div className={styles.qlIc} style={{ background: q.color }} />
                  <span className={styles.qlTxt}>{q.label}</span>
                  <span className={styles.qlArr}>›</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}