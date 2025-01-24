interface SubItem {
  text: string;
  path: string;
}

interface Item {
  text: string;
  path: string;
  icon: string;
  subItems?: SubItem[];
}

interface Group {
  groupName: string;
  groupLabel: string;
  items: Item[];
}
interface Menu {
  text: string;
  path: string;
  icon: string;
}

export const MenuItemsVio: (Group | Menu)[] = [
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: "line-md:folder-network-twotone",
  },
  {
    text: "Overview",
    path: "/overview",
    icon: "line-md:folder-network-twotone",
  },
  {
    groupName: "menu",
    groupLabel: "menu",
    items: [
      {
        text: "Manajemen Jaringan",
        path: "/dashboard/manajemen-jaringan",
        icon: "line-md:folder-network-twotone",
        subItems: [
          {
            text: "Konfigurasi Perangkat",
            path: "/dashboard/manajemen-jaringan/konfigurasi-perangkat",
          },
          {
            text: "Topologi Jaringan",
            path: "/dashboard/manajemen-jaringan/topologi-jaringan",
          },
          {
            text: "VLAN & IP",
            path: "/dashboard/manajemen-jaringan/pengaturan-vlan-ip",
          },
          {
            text: "Pemantauan Jaringan",
            path: "/dashboard/manajemen-jaringan/pemantauan-jaringan",
          },
        ],
      },
    ],
  },
];

export const MenuItemsBgv: Group[] = [
  {
    groupName: "menu",
    groupLabel: "menu",
    items: [
      {
        text: "Manajemen Jaringan",
        path: "/bgv/dashboard/manajemen-jaringan",
        icon: "line-md:folder-network-twotone",
        subItems: [
          {
            text: "Konfigurasi Perangkat",
            path: "/bgv/dashboard/manajemen-jaringan/konfigurasi-perangkat",
          },
          {
            text: "Topologi Jaringan",
            path: "/bgv/dashboard/manajemen-jaringan/topologi-jaringan",
          },
          {
            text: "VLAN & IP",
            path: "/bgv/dashboard/manajemen-jaringan/pengaturan-vlan-ip",
          },
          {
            text: "Pemantauan Jaringan",
            path: "/bgv/dashboard/manajemen-jaringan/pemantauan-jaringan",
          },
        ],
      },
      {
        text: "Billing & Pelanggan",
        path: "/bgv/dashboard/billing-pelanggan",
        icon: "line-md:text-box-multiple-twotone",
        subItems: [
          {
            text: "Manajemen Pelanggan",
            path: "/bgv/dashboard/billing-pelanggan/manajemen-pelanggan",
          },
          {
            text: "Penagihan",
            path: "/bgv/dashboard/billing-pelanggan/penagihan",
          },
          {
            text: "Paket Layanan",
            path: "/bgv/dashboard/billing-pelanggan/paket-layanan",
          },
          {
            text: "Pembayaran",
            path: "/bgv/dashboard/billing-pelanggan/pembayaran",
          },
        ],
      },
      {
        text: "Middleware IPTV & OTT",
        path: "/bgv/dashboard/middleware-iptv-ott",
        icon: "line-md:monitor-twotone",
        subItems: [
          {
            text: "Manajemen Konten",
            path: "/bgv/dashboard/middleware-iptv-ott/manajemen-konten",
          },
          {
            text: "Integrasi OTT",
            path: "/bgv/dashboard/middleware-iptv-ott/integrasi-ott",
          },
          {
            text: "Distribusi Konten",
            path: "/bgv/dashboard/middleware-iptv-ott/distribusi-konten",
          },
          {
            text: "Personal Recommendation",
            path: "/bgv/dashboard/middleware-iptv-ott/personal-recommendation",
          },
        ],
      },
      {
        text: "Otomasi & Monitoring",
        path: "/bgv/dashboard/otomasi-monitoring",
        icon: "line-md:gauge-full-twotone",
        subItems: [
          {
            text: "Manajemen Tugas Otomasi",
            path: "/bgv/dashboard/otomasi-monitoring/manajemen-tugas-otomasi",
          },
          {
            text: "Pemantauan Sistem",
            path: "/bgv/dashboard/otomasi-monitoring/pemantauan-sistem",
          },
          {
            text: "Alerting",
            path: "/bgv/dashboard/otomasi-monitoring/alerting",
          },
        ],
      },
      {
        text: "Support & Helpdesk",
        path: "/bgv/dashboard/support-helpdesk",
        icon: "line-md:phone-call-twotone",
        subItems: [
          {
            text: "Tiket Support",
            path: "/bgv/dashboard/support-helpdesk/tiket-support",
          },
          {
            text: "Knowledge Base",
            path: "/bgv/dashboard/support-helpdesk/knowledge-base",
          },
          {
            text: "Feedback & Survei",
            path: "/bgv/dashboard/support-helpdesk/feedback-survei",
          },
        ],
      },
      {
        text: "Analytics & Big Data",
        path: "/bgv/dashboard/analytics-big-data",
        icon: "line-md:cloud-alt-download-filled",
        subItems: [
          {
            text: "Laporan Penggunaan",
            path: "/bgv/dashboard/analytics-big-data/laporan-penggunaan",
          },
          {
            text: "Analisis Konten",
            path: "/bgv/dashboard/analytics-big-data/analisis-konten",
          },
          {
            text: "Analitik Prediktif",
            path: "/bgv/dashboard/analytics-big-data/analitik-prediktif",
          },
        ],
      },
    ],
  },
  // {
  //   groupName: "setting",
  //   groupLabel: "setting",
  //   items: [
  //     {
  //       text: "Manage Dashboard",
  //       path: "/manage",
  //       icon: "chart-simple",
  //       subItems: [
  //         { text: "Manage Product", path: "/manage/product" },
  //         { text: "Manage Article", path: "/manage/article" },
  //         { text: "Manage Post", path: "/manage/post" },
  //         { text: "Manage Hashtag", path: "/manage/hashtag" },
  //         { text: "Social Media Account", path: "/manage/account" },
  //         { text: "Social Media Grouping", path: "/manage/grouping" },
  //         { text: "Alert Notification", path: "/manage/alert" },
  //       ],
  //     },
  //     { text: "Setting", path: "/setting", icon: "gear" },
  //     {
  //       text: "Account",
  //       path: "/account",
  //       icon: "user",
  //       subItems: [
  //         { text: "Profile", path: "/account/profile" },
  //         { text: "Logout", path: "/errors/not-found" },
  //       ],
  //     },
  //   ],
  // },
];
