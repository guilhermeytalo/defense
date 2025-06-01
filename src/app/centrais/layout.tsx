import { Sidebar } from "@components/core/sidebar";
import { MENU_RESOURCES_CONFIGS } from "@config/menu";
import { ReactNode } from "react";
import * as styles from "./styles.css";

export default function CentraisLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.centraisLayoutStyle}>
      <Sidebar.Root>
        <Sidebar.Menu resources={MENU_RESOURCES_CONFIGS} />
      </Sidebar.Root>
      <div className={styles.containerPageStyles}>
        {children}
      </div>
    </main>
  );
}
