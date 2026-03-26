'use client';
import { useState } from 'react';
import Sidebar from "@/_Pages/main/header/Sidebar";
import Topbar from '@/_Pages/main/header/top/Topbar';
import ClienteWrapper from "@/_EXTRAS/LadoCliente/ClienteWraper";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ClienteWrapper>
      <div className={styles.layout}>
        <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <main className={styles.main}>
          <Topbar onMenuClick={() => setDrawerOpen(true)} />
          {children}
        </main>
      </div>
    </ClienteWrapper>
  );
}