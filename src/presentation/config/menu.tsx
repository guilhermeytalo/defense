import { HomeIcon } from "@components/icons/home";
import { SidebarResource } from "@components/core/sidebar/types";
import { DiagramProjectIcon } from "@components/icons/diagram-project";

export const MENU_RESOURCES_CONFIGS: SidebarResource[] = [
  {
    id: "inicio",
    title: "Início",
    item: <HomeIcon customSize="2.3rem" />,
    path: "/",
  },
  {
    id: "centrals",
    title: "Centrais",
    item: <DiagramProjectIcon customSize="2.3rem" />,
    path: "/centrals",
  },
];
