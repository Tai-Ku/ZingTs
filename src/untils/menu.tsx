import { SidebarMenuItem } from "../store/IRoot";

export const sidebarMenu: SidebarMenuItem[] = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icons: <i className="fa-solid fa-music"></i>,
  },
  {
    path: "",
    text: "Khám Phá",
    icons: <i className="fa-solid fa-compact-disc"></i>,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icons: <i className="fa-solid fa-chart-pie"></i>,
  },
  {
    path: "follow",
    text: "Theo dõi",
    icons: <i className="fa-regular fa-newspaper"></i>,
  },
];
export const searchMenu = [
  {
    path: "tat-ca",
    text: "TẤT CẢ",
  },
  {
    path: "bai-hat",
    text: "BÀI HÁT",
  },
  {
    path: "playlist",
    text: "PLAYLIST",
  },
];
