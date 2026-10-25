import { useEffect, useId, useRef, useState } from "react";

const products = [
  {
    id: "duo",
    name: "iPhone Duo",
    tag: "Hello, hello. Hello, Hello. hello.",
    note: "Available starting 10.23",
    price: 799,
    blurb:
      "Two finishes, one familiar shape. A new iPhone made to be matched, shared, and carried in color.",
    finishes: [
      { name: "Blush", color: "#f7c3cf" },
      { name: "Sky", color: "#9fd0fb" },
      { name: "Midnight", color: "#2a2a2e" },
    ],
  },
  {
    id: "pro",
    name: "iPhone 18 Pro",
    tag: "Pro further.",
    price: 1199,
    blurb:
      "A titanium frame, a larger camera plateau, and the brightest display on an iPhone.",
    finishes: [
      { name: "Natural", color: "#c2b6a6" },
      { name: "Black", color: "#3a3a3c" },
      { name: "White", color: "#f2f2f4" },
    ],
  },
  {
    id: "upgrade",
    name: "Apple Upgrade",
    tag: "Love it. Lease it. Upgrade it.",
    price: 0,
    blurb:
      "Keep a new device, then move to the next one when you are ready. Shown here as a preview of the leasing offer.",
    finishes: [],
  },
  {
    id: "home",
    name: "Apple HomeView",
    tag: "Designed for life at home.",
    note: "Available starting 11.13",
    price: 299,
    blurb:
      "A display for the rooms you actually live in. Photos, controls, and a calendar that stays out of the way.",
    finishes: [
      { name: "White", color: "#f7f4ef" },
      { name: "Black", color: "#1d1d1f" },
    ],
  },
  {
    id: "series",
    name: "Apple Watch Series 12",
    tag: "The most accurate heart rate sensing in a wearable.",
    price: 399,
    blurb:
      "A thinner case and a brighter face, with heart-rate sensing for workouts and rest.",
    finishes: [
      { name: "Silver", color: "#e8e8ed" },
      { name: "Midnight", color: "#1d1d1f" },
      { name: "Starlight", color: "#f3e6d4" },
    ],
  },
  {
    id: "ultra",
    name: "Apple Watch Ultra 4",
    tag: "A battery you can’t outrun.",
    price: 799,
    blurb: "The rugged watch, built for long days outside.",
    finishes: [
      { name: "Natural", color: "#d7d7dc" },
      { name: "Black", color: "#1c1c1e" },
    ],
  },
  {
    id: "ipad",
    name: "iPad Air",
    tag: "Now supercharged by M4.",
    price: 599,
    blurb: "Thin, light, and fast enough for the work you used to save for a laptop.",
    finishes: [
      { name: "Blue", color: "#8aafd4" },
      { name: "Purple", color: "#c3b4dc" },
      { name: "Space Gray", color: "#7d7e80" },
    ],
  },
  {
    id: "mac",
    name: "MacBook Pro",
    tag: "Pro performance. All day.",
    price: 1599,
    blurb:
      "A brilliant display and a quiet aluminum body for editing, code, and everything between.",
    finishes: [
      { name: "Silver", color: "#e6e7ea" },
      { name: "Space Black", color: "#2b2b2e" },
    ],
  },
  {
    id: "airpods",
    name: "AirPods Pro",
    tag: "Immersive sound. Tuned for you.",
    price: 249,
    blurb: "Active noise cancellation, Transparency mode, and a case that charges on a puck.",
    finishes: [{ name: "White", color: "#f5f5f7" }],
  },
  {
    id: "vision",
    name: "Apple Vision Pro",
    tag: "Spatial computing, in the room with you.",
    price: 3499,
    blurb: "A personal theater and a private workspace, floating in the space around you.",
    finishes: [{ name: "Silver", color: "#d8d8dc" }],
  },
  {
    id: "accessories",
    name: "Accessories",
    tag: "Pair it. Carry it. Charge it.",
    price: 59,
    blurb: "Cases, bands, and charging, made to match the device you already use.",
    finishes: [
      { name: "White", color: "#f5f5f7" },
      { name: "Black", color: "#1d1d1f" },
    ],
  },
];

const posters = [
  { title: "High Camp", genre: "Drama", stops: ["#16384a", "#e25b38"] },
  { title: "The Inner Office", genre: "Thriller", stops: ["#101410", "#5d6b52"] },
  { title: "Match Day", genre: "Sports", stops: ["#083526", "#d6ff4a"] },
  { title: "Table for Six", genre: "Comedy", stops: ["#f2c14e", "#c2412d"] },
  { title: "Closed Circle", genre: "Mystery", stops: ["#161222", "#8d74ff"] },
  { title: "Far Shore", genre: "Sci-Fi", stops: ["#07111f", "#49d0ff"] },
];

const nav = [
  ["Store", "top"],
  ["Mac", "mac"],
  ["iPad", "ipad"],
  ["iPhone", "iphone"],
  ["Watch", "watch"],
  ["Vision", "vision"],
  ["AirPods", "airpods"],
  ["TV & Home", "home"],
  ["Entertainment", "entertainment"],
  ["Accessories", "accessories"],
  ["Support", "support"],
];

const footer = [
  {
    title: "Shop and Learn",
    links: [
      ["Store", "top"],
      ["Mac", "mac"],
      ["iPad", "ipad"],
      ["iPhone", "iphone"],
      ["Watch", "watch"],
      ["Vision", "vision"],
      ["AirPods", "airpods"],
      ["TV & Home", "home"],
      ["Accessories", "accessories"],
    ],
  },
  {
    title: "Apple Wallet",
    links: [
      ["Apple Upgrade", "upgrade"],
      ["Apple HomeView", "home"],
      ["Carrier Deals", "deals"],
    ],
  },
  {
    title: "Account",
    links: [
      ["Manage Your Apple Account", "support"],
      ["Apple Store Account", "support"],
    ],
  },
  {
    title: "Entertainment",
    links: [
      ["Apple TV", "entertainment"],
      ["Apple Music", "entertainment"],
      ["Apple Arcade", "entertainment"],
    ],
  },
  {
    title: "About",
    links: [
      ["Apple Support", "support"],
      ["This page", "legal"],
    ],
  },
];

const helpTopics = [
  {
    title: "Repairs",
    text: "Battery, screen, and accident coverage would start here. This preview has no service appointments.",
  },
  {
    title: "Billing",
    text: "Subscriptions, leases, and carrier credits would be listed on an account. Nothing is billed from this page.",
  },
  {
    title: "Apple Account",
    text: "Sign-in, devices, and recovery would live here. There is no account connected.",
  },
];

const anchors = {
  duo: "iphone",
  pro: "iphone-pro",
  upgrade: "upgrade",
  home: "home",
  series: "series",
  ultra: "ultra",
  ipad: "ipad",
  mac: "mac",
  airpods: "airpods",
  vision: "vision",
  accessories: "accessories",
};

function money(n) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function Logo() {
  return (
    <svg className="logo" viewBox="0 0 17 20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.93 10.55c-.02-2.27 1.86-3.36 1.94-3.41-1.06-1.55-2.71-1.76-3.3-1.79-1.4-.14-2.74.83-3.45.83-.71 0-1.81-.81-2.98-.79-1.53.02-2.95.89-3.74 2.27-1.6 2.77-.41 6.87 1.15 9.12.76 1.1 1.66 2.33 2.85 2.29 1.14-.05 1.57-.74 2.95-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.22.87-1.27 1.23-2.5 1.25-2.56-.03-.01-2.39-.92-2.41-3.72zM11.7 3.9c.63-.76 1.05-1.82.94-2.88-1 .04-2.01.6-2.66 1.36-.58.68-1.1 1.76-.96 2.8 1.02.08 2.06-.51 2.68-1.28z"
      />
    </svg>
  );
}

function PhoneFace({ bezel = "#1c1c1e", stops = ["#f4b8c8", "#f6d7a6"], className = "" }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg className={`device phone ${className}`} viewBox="0 0 180 372" aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-w`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={stops[0]} />
          <stop offset="100%" stopColor={stops[1]} />
        </linearGradient>
        <clipPath id={`${uid}-c`}>
          <rect x="12" y="12" width="156" height="348" rx="26" />
        </clipPath>
      </defs>
      <rect x="6" y="4" width="168" height="364" rx="34" fill={bezel} />
      <rect x="12" y="12" width="156" height="348" rx="26" fill={`url(#${uid}-w)`} />
      <g clipPath={`url(#${uid}-c)`}>
        <path d="M18 20h70L78 360H18z" fill="#fff" opacity="0.16" />
      </g>
      <rect x="64" y="22" width="52" height="16" rx="8" fill={bezel} />
      <rect x="2" y="96" width="4" height="22" rx="1.5" fill="#4a4a4e" />
      <rect x="2" y="128" width="4" height="42" rx="1.5" fill="#4a4a4e" />
      <rect x="174" y="140" width="4" height="58" rx="1.5" fill="#4a4a4e" />
    </svg>
  );
}

function Duo({ accent = "#f7c3cf" }) {
  return (
    <div className="duo-art">
      <PhoneFace className="back" stops={[accent, "#f6e2c4"]} />
      <PhoneFace className="front" stops={["#b7d9fb", "#e3d4fb"]} />
    </div>
  );
}

function PhonePro({ color = "#c2b6a6" }) {
  const uid = useId().replace(/:/g, "");
  const light = color === "#f2f2f4";
  const glass = light ? "#f4f4f6" : "#161618";
  const plate = light ? "#e6e6ea" : "#0c0c0e";
  return (
    <svg className="device pro" viewBox="0 0 220 450" aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={light ? "#fff" : "#2a2a2e"} />
          <stop offset="48%" stopColor={glass} />
          <stop offset="100%" stopColor={light ? "#e5e5e8" : "#121214"} />
        </linearGradient>
      </defs>
      <rect x="6" y="4" width="208" height="442" rx="40" fill={color} />
      <rect x="14" y="12" width="192" height="426" rx="34" fill={`url(#${uid}-g)`} />
      <rect x="26" y="28" width="104" height="122" rx="26" fill={plate} />
      <circle cx="54" cy="66" r="18" fill="#050506" stroke="#3a3a3e" strokeWidth="3" />
      <circle cx="100" cy="66" r="18" fill="#050506" stroke="#3a3a3e" strokeWidth="3" />
      <circle cx="54" cy="114" r="18" fill="#050506" stroke="#3a3a3e" strokeWidth="3" />
      <circle cx="98" cy="116" r="7" fill="#2c2c30" />
      <circle cx="48" cy="60" r="5" fill="#8ec5ff" opacity="0.45" />
      <circle cx="94" cy="60" r="4" fill="#fff" opacity="0.25" />
      <rect x="1" y="120" width="5" height="28" rx="1.5" fill={color} />
      <rect x="1" y="158" width="5" height="48" rx="1.5" fill={color} />
      <rect x="214" y="168" width="5" height="64" rx="1.5" fill={color} />
    </svg>
  );
}

function Watch({ caseColor = "#e8e8ed", band = "#1c1c1e", ultra = false }) {
  return (
    <svg className="device watch" viewBox="0 0 200 340" aria-hidden="true">
      <rect x="68" y="6" width="64" height="78" rx="14" fill={band} />
      <rect x="68" y="256" width="64" height="78" rx="14" fill={band} />
      <rect x="74" y="18" width="52" height="8" rx="2" fill="#000" opacity="0.25" />
      <rect x="74" y="40" width="52" height="8" rx="2" fill="#000" opacity="0.25" />
      <rect x="74" y="268" width="52" height="8" rx="2" fill="#000" opacity="0.25" />
      <rect x="74" y="290" width="52" height="8" rx="2" fill="#000" opacity="0.25" />
      <rect x="34" y="70" width="132" height="168" rx="38" fill={caseColor} />
      <rect x="46" y="82" width="108" height="144" rx="30" fill="#0c0c0e" />
      <g stroke="#fff" strokeLinecap="round" fill="none">
        <path d="M100 104 v8 M100 196 v8 M64 154 h8 M128 154 h8" opacity="0.7" strokeWidth="2" />
      </g>
      <line x1="100" y1="154" x2="100" y2="112" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="154" x2="132" y2="164" stroke={ultra ? "#ff7a1a" : "#fff"} strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="154" r="3" fill="#fff" />
      {ultra ? (
        <rect x="166" y="118" width="12" height="40" rx="3" fill="#ff6a00" />
      ) : (
        <rect x="166" y="124" width="8" height="28" rx="3" fill="#c8c8ce" />
      )}
      <circle cx="170" cy="108" r="7" fill={ultra ? "#ff8a33" : "#d0d0d6"} />
    </svg>
  );
}

function IPad({ color = "#8aafd4" }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg className="device ipad" viewBox="0 0 640 460" aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7aa2ff" />
          <stop offset="50%" stopColor="#f2b4d0" />
          <stop offset="100%" stopColor="#ffe29a" />
        </linearGradient>
      </defs>
      <rect x="20" y="30" width="600" height="400" rx="28" fill={color} />
      <rect x="36" y="46" width="568" height="368" rx="14" fill={`url(#${uid}-s)`} />
      <circle cx="320" cy="58" r="4" fill="#1d1d1f" opacity="0.45" />
    </svg>
  );
}

function MacBook({ color = "#e6e7ea" }) {
  const uid = useId().replace(/:/g, "");
  const dark = color === "#2b2b2e";
  return (
    <svg className="device mac" viewBox="0 0 680 420" aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b1d33" />
          <stop offset="100%" stopColor="#2458ff" />
        </linearGradient>
      </defs>
      <rect x="86" y="18" width="508" height="312" rx="14" fill={dark ? "#1a1a1c" : "#c5c6ca"} />
      <rect x="100" y="32" width="480" height="284" rx="4" fill={`url(#${uid}-s)`} />
      <path d="M46 332h588l28 42H18z" fill={dark ? "#3a3a3e" : "#ececef"} />
      <path d="M250 332h180v10H250z" fill={dark ? "#111" : "#c8c8cc"} />
    </svg>
  );
}

function Buds() {
  return (
    <svg className="device pods" viewBox="0 0 420 280" aria-hidden="true">
      <rect x="150" y="78" width="120" height="168" rx="28" fill="#fbfbfd" stroke="#e1e1e6" />
      <path d="M162 158h96" stroke="#dddde2" />
      <rect x="168" y="92" width="84" height="58" rx="16" fill="#f3f3f6" />
      <g fill="#f7f7fa" stroke="#d0d0d6">
        <rect x="78" y="86" width="28" height="92" rx="14" />
        <rect x="314" y="86" width="28" height="92" rx="14" />
        <ellipse cx="92" cy="86" rx="30" ry="34" />
        <ellipse cx="328" cy="86" rx="30" ry="34" />
      </g>
      <ellipse cx="82" cy="80" rx="10" ry="14" fill="#1d1d1f" />
      <ellipse cx="338" cy="80" rx="10" ry="14" fill="#1d1d1f" />
    </svg>
  );
}

function Vision() {
  return (
    <svg className="device vision" viewBox="0 0 520 240" aria-hidden="true">
      <path
        d="M70 120c10-62 80-88 190-88s180 26 190 88c-10 62-80 88-190 88S80 182 70 120z"
        fill="#d8d8de"
      />
      <ellipse cx="190" cy="120" rx="86" ry="58" fill="#101114" />
      <ellipse cx="330" cy="120" rx="86" ry="58" fill="#101114" />
      <ellipse cx="168" cy="104" rx="28" ry="16" fill="#fff" opacity="0.18" />
      <rect x="246" y="104" width="28" height="32" rx="6" fill="#b9b9c0" />
      <path d="M40 126c18 8 28 8 36-8" fill="none" stroke="#c4c4ca" strokeWidth="8" strokeLinecap="round" />
      <path d="M480 126c-18 8-28 8-36-8" fill="none" stroke="#c4c4ca" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function HomeView({ color = "#f7f4ef" }) {
  const uid = useId().replace(/:/g, "");
  const dark = color === "#1d1d1f";
  return (
    <svg className="device home" viewBox="0 0 560 360" aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-r`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd9a0" />
          <stop offset="55%" stopColor="#f7a1b4" />
          <stop offset="100%" stopColor="#8eb6ff" />
        </linearGradient>
      </defs>
      <rect x="70" y="28" width="420" height="250" rx="22" fill={dark ? "#1d1d1f" : "#f6f1ea"} stroke="#e4ddd4" />
      <rect x="88" y="46" width="384" height="214" rx="10" fill={`url(#${uid}-r)`} />
      <rect x="248" y="278" width="64" height="40" fill={dark ? "#2c2c2e" : "#efe8df"} />
      <rect x="190" y="316" width="180" height="12" rx="6" fill={dark ? "#3a3a3c" : "#e3dbd1"} />
    </svg>
  );
}

function UpgradeMark() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg className="device bits" viewBox="0 0 460 260" aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-c`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7f7f8" />
          <stop offset="50%" stopColor="#c8c8ce" />
          <stop offset="100%" stopColor="#8e8e96" />
        </linearGradient>
      </defs>
      <rect x="40" y="48" width="380" height="180" rx="18" fill={`url(#${uid}-c)`} />
      <circle cx="92" cy="138" r="18" fill="#e8e8ee" stroke="#9a9aa2" />
      <text x="130" y="112" fill="#1d1d1f" fontSize="22" fontFamily="inherit" fontWeight="600">
        Upgrade
      </text>
      <text x="130" y="142" fill="#424245" fontSize="14" fontFamily="inherit">
        Lease. Return. Repeat.
      </text>
    </svg>
  );
}

function Bits({ color = "#f5f5f7" }) {
  return (
    <svg className="device bits" viewBox="0 0 420 240" aria-hidden="true">
      <rect x="40" y="36" width="150" height="180" rx="28" fill={color} stroke="#d2d2d7" />
      <circle cx="270" cy="120" r="72" fill="#f2f2f6" stroke="#dedee4" />
      <circle cx="270" cy="120" r="26" fill="none" stroke="#c8c8d0" strokeWidth="8" />
      <rect x="330" y="70" width="52" height="110" rx="16" fill="#1d1d1f" />
    </svg>
  );
}

function ProductArt({ id, color }) {
  switch (id) {
    case "duo":
      return <Duo accent={color} />;
    case "pro":
      return <PhonePro color={color} />;
    case "upgrade":
      return <UpgradeMark />;
    case "home":
      return <HomeView color={color} />;
    case "series":
      return <Watch caseColor={color} band={color === "#1d1d1f" ? "#3a3a3c" : "#f2d6cf"} />;
    case "ultra":
      return <Watch caseColor={color} band="#3a342c" ultra />;
    case "ipad":
      return <IPad color={color} />;
    case "mac":
      return <MacBook color={color} />;
    case "airpods":
      return <Buds />;
    case "vision":
      return <Vision />;
    default:
      return <Bits color={color} />;
  }
}

function Tile({ id, product, tone = "light", hero = false, onOpen, children }) {
  return (
    <section id={id} className={`tile ${tone} ${hero ? "hero" : ""}`}>
      <div className="copy">
        <h2>{product.name}</h2>
        <p className="tag">{product.tag}</p>
        {product.note ? <p className="note">{product.note}</p> : null}
        <p className="cta">
          <button type="button" className="text-link" onClick={() => onOpen(product)}>
            Learn more <span aria-hidden="true">›</span>
          </button>
          <button type="button" className="text-link" onClick={() => onOpen(product)}>
            Buy <span aria-hidden="true">›</span>
          </button>
        </p>
      </div>
      <div className="art">{children}</div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [bagOpen, setBagOpen] = useState(false);
  const [bag, setBag] = useState([]);
  const [ordered, setOrdered] = useState(false);
  const [sheet, setSheet] = useState(null);
  const [finish, setFinish] = useState(0);
  const [help, setHelp] = useState(false);
  const [topic, setTopic] = useState(0);
  const [poster, setPoster] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [toast, setToast] = useState("");
  const searchRef = useRef(null);

  const count = bag.reduce((sum, item) => sum + item.qty, 0);
  const total = bag.reduce((sum, item) => sum + item.qty * item.price, 0);
  const results = products.filter((item) => {
    const hay = `${item.name} ${item.tag}`.toLowerCase();
    return hay.includes(query.trim().toLowerCase());
  });

  useEffect(() => {
    const locked = menuOpen || searchOpen || bagOpen || sheet || help || poster;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen, bagOpen, sheet, help, poster]);

  useEffect(() => {
    function onKey(event) {
      if (event.key !== "Escape") return;
      if (poster) setPoster(null);
      else if (sheet) setSheet(null);
      else if (help) setHelp(false);
      else if (bagOpen) setBagOpen(false);
      else if (searchOpen) setSearchOpen(false);
      else if (menuOpen) setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [poster, sheet, help, bagOpen, searchOpen, menuOpen]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const controller = new AbortController();
    const base = String(import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

    fetch(`${base}/hello?name=world`, {
      headers: { accept: "*/*" },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Hello request failed (${response.status})`);
        return response.json();
      })
      .then((data) => {
        if (data?.message) setToast(data.message);
      })
      .catch((error) => {
        if (error.name === "AbortError") return;
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(""), 6000);
    return () => clearTimeout(timer);
  }, [toast]);

  function go(id) {
    setMenuOpen(false);
    setSearchOpen(false);
    setBagOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openProduct(product) {
    setSheet(product);
    setFinish(0);
    setMenuOpen(false);
    setSearchOpen(false);
  }

  function addCurrent() {
    if (!sheet || sheet.price <= 0) return;
    const chosen = sheet.finishes[finish];
    const key = `${sheet.id}-${chosen?.name || "default"}`;
    setBag((items) => {
      const found = items.find((item) => item.key === key);
      if (found) {
        return items.map((item) => (item.key === key ? { ...item, qty: item.qty + 1 } : item));
      }
      return [
        ...items,
        {
          key,
          id: sheet.id,
          name: sheet.name,
          finish: chosen?.name || "Standard",
          color: chosen?.color,
          price: sheet.price,
          qty: 1,
        },
      ];
    });
    setOrdered(false);
    setSheet(null);
    setBagOpen(true);
  }

  function changeQty(key, delta) {
    setBag((items) =>
      items
        .map((item) => (item.key === key ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  }

  const activeFinish = sheet?.finishes[finish];

  return (
    <>
      <h1 className="sr-only">Apple</h1>
      <header className="nav">
        <div className="nav-inner">
          <button type="button" className="logo-btn" aria-label="Apple" onClick={() => go("top")}>
            <Logo />
          </button>
          <nav className="nav-links" aria-label="Primary">
            {nav.map(([label, id]) => (
              <button key={label} type="button" onClick={() => go(id)}>
                {label}
              </button>
            ))}
          </nav>
          <div className="nav-tools">
            <button
              type="button"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => {
                setSearchOpen((open) => !open);
                setMenuOpen(false);
                setQuery("");
              }}
            >
              <svg className="icon" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="currentColor" strokeWidth="1.3" />
                <path d="M10.4 10.4 L14 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              className="bag-btn"
              aria-label={count ? `Bag, ${count} ${count === 1 ? "item" : "items"}` : "Bag"}
              onClick={() => {
                setBagOpen(true);
                setMenuOpen(false);
                setSearchOpen(false);
              }}
            >
              <svg className="icon" viewBox="0 0 14 17" aria-hidden="true">
                <path
                  d="M2.2 5.4h9.6l-.7 9.2H2.9L2.2 5.4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M4.4 5.3V4a2.6 2.6 0 0 1 5.2 0v1.3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              {count > 0 ? <span className="bag-count">{count}</span> : null}
            </button>
            <button
              type="button"
              className="menu-btn"
              aria-label={menuOpen ? "Close menu" : "Menu"}
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((open) => !open);
                setSearchOpen(false);
              }}
            >
              <span className="menu-bars" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="menu">
          {nav.map(([label, id]) => (
            <button key={label} type="button" onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </div>
      ) : null}

      {searchOpen ? (
        <div className="search-panel">
          <input
            ref={searchRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            aria-label="Search"
            autoComplete="off"
          />
          {!query.trim() ? <small>Quick Links</small> : null}
          <ul>
            {(query.trim() ? results : products.slice(0, 5)).map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    go(anchors[item.id]);
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
            {query.trim() && results.length === 0 ? (
              <li className="muted">No results for “{query.trim()}”.</li>
            ) : null}
          </ul>
        </div>
      ) : null}

      <main id="top">
        <div className="stage">
          <Tile id="iphone" product={products[0]} hero onOpen={openProduct}>
            <Duo />
          </Tile>
          <Tile id="iphone-pro" product={products[1]} tone="dark" onOpen={openProduct}>
            <PhonePro />
          </Tile>

          <div className="pair">
            <Tile id="upgrade" product={products[2]} onOpen={openProduct}>
              <UpgradeMark />
            </Tile>
            <Tile id="home" product={products[3]} onOpen={openProduct}>
              <HomeView />
            </Tile>
          </div>

          <div className="pair" id="watch">
            <Tile id="series" product={products[4]} onOpen={openProduct}>
              <Watch band="#f2d6cf" />
            </Tile>
            <Tile id="ultra" product={products[5]} tone="dark" onOpen={openProduct}>
              <Watch band="#3a342c" caseColor="#d7d7dc" ultra />
            </Tile>
          </div>

          <Tile id="ipad" product={products[6]} onOpen={openProduct}>
            <IPad />
          </Tile>

          <div className="pair">
            <Tile id="mac" product={products[7]} tone="ink" onOpen={openProduct}>
              <MacBook color="#2b2b2e" />
            </Tile>
            <Tile id="airpods" product={products[8]} onOpen={openProduct}>
              <Buds />
            </Tile>
          </div>

          <div className="pair">
            <Tile id="vision" product={products[9]} tone="dark" onOpen={openProduct}>
              <Vision />
            </Tile>
            <Tile id="accessories" product={products[10]} onOpen={openProduct}>
              <Bits />
            </Tile>
          </div>

          <section className="tile light centerpiece" id="deals">
            <div className="copy">
              <h2>Incredible carrier deals at Apple.</h2>
              <p className="tag">
                Explore deals that accept eligible trade-in devices in any condition.
              </p>
              <p className="cta">
                <button type="button" className="text-link" onClick={() => openProduct({
                  id: "deals",
                  name: "Carrier deals",
                  tag: "Trade in a phone in any condition.",
                  price: 0,
                  blurb:
                    "Credits with AT&T, T-Mobile, and Verizon depend on plan, model, and trade-in condition. This page does not connect to a carrier.",
                  finishes: [],
                })}>
                  Learn more <span aria-hidden="true">›</span>
                </button>
              </p>
            </div>
          </section>

          <section className="entertainment" id="entertainment">
            <h2>Endless entertainment.</h2>
            <div className="posters">
              {posters.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className="poster"
                  style={{
                    background: `linear-gradient(160deg, ${item.stops[0]}, ${item.stops[1]})`,
                  }}
                  onClick={() => {
                    setPoster(item);
                    setPlaying(false);
                  }}
                >
                  <span>{item.genre}</span>
                  <strong>{item.title}</strong>
                  <em>Stream now</em>
                </button>
              ))}
            </div>
          </section>

          <section className="tile light centerpiece" id="support">
            <div className="copy">
              <h2>Apple Support</h2>
              <p className="tag">We’re here to help.</p>
              <p className="cta">
                <button type="button" className="text-link" onClick={() => setHelp(true)}>
                  Get support <span aria-hidden="true">›</span>
                </button>
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <p className="foot-note" id="legal">
          A local design study modeled on Apple’s public homepage as of October 2026.
          Product names follow that page. Prices here are samples. Not affiliated with Apple Inc.
        </p>
        <div className="foot-grid">
          {footer.map((column) => (
            <div key={column.title}>
              <h2>{column.title}</h2>
              {column.links.map(([label, id]) => (
                <button key={label} type="button" onClick={() => go(id)}>
                  {label}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="foot-base">
          <span>Copyright © 2026 design study.</span>
          <button type="button" className="text-link" style={{ fontSize: 12 }} onClick={() => go("legal")}>
            Legal
          </button>
        </div>
      </footer>

      {sheet ? (
        <div className="backdrop" onClick={() => setSheet(null)}>
          <div
            className="sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sheet-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="close" aria-label="Close" onClick={() => setSheet(null)}>
              ×
            </button>
            <div className="sheet-art">
              <ProductArt id={sheet.id} color={activeFinish?.color} />
            </div>
            <div className="sheet-copy">
              <h2 id="sheet-title">{sheet.name}</h2>
              <p className="tag">{sheet.tag}</p>
              <p className="blurb">{sheet.blurb}</p>
              {sheet.price > 0 ? <p className="price">From {money(sheet.price)}</p> : null}
              <p className="fine">Sample price for this design study. Nothing is sold or shipped.</p>
              {sheet.finishes.length > 0 ? (
                <>
                  <ul className="finishes">
                    {sheet.finishes.map((item, index) => (
                      <li key={item.name}>
                        <button
                          type="button"
                          aria-label={item.name}
                          aria-pressed={index === finish}
                          style={{ "--swatch": item.color }}
                          onClick={() => setFinish(index)}
                        />
                      </li>
                    ))}
                  </ul>
                  <p className="finish-name">{activeFinish?.name}</p>
                </>
              ) : null}
              {sheet.price > 0 ? (
                <button type="button" className="buy-btn" onClick={addCurrent}>
                  Add to Bag
                </button>
              ) : (
                <button type="button" className="buy-btn" onClick={() => setSheet(null)}>
                  Done
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {help ? (
        <div className="backdrop" onClick={() => setHelp(false)}>
          <div
            className="sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="help-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="close" aria-label="Close" onClick={() => setHelp(false)}>
              ×
            </button>
            <div className="sheet-copy" style={{ gridColumn: "1 / -1" }}>
              <h2 id="help-title">Apple Support</h2>
              <p className="tag">{helpTopics[topic].title}</p>
              <p className="blurb">{helpTopics[topic].text}</p>
              <div className="topics">
                {helpTopics.map((item, index) => (
                  <button key={item.title} type="button" onClick={() => setTopic(index)}>
                    {item.title}
                    <span>Preview answer</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {poster ? (
        <div className="backdrop" onClick={() => setPoster(null)}>
          <div
            className="player"
            role="dialog"
            aria-modal="true"
            aria-labelledby="player-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="player-art"
              style={{
                background: `linear-gradient(160deg, ${poster.stops[0]}, ${poster.stops[1]})`,
              }}
            >
              <span className="stream-kicker">{poster.genre}</span>
              <strong id="player-title">{poster.title}</strong>
            </div>
            <div className="player-controls">
              <button type="button" onClick={() => setPlaying((on) => !on)}>
                {playing ? "Pause" : "Play"}
              </button>
              <div className="track" aria-hidden="true">
                <span className={playing ? "on" : ""} />
              </div>
              <button type="button" onClick={() => setPoster(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {bagOpen ? (
        <div className="backdrop" style={{ justifyContent: "end", padding: 0 }} onClick={() => setBagOpen(false)}>
          <aside
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bag-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header>
              <h2 id="bag-title">{ordered ? "Preview complete" : "Bag"}</h2>
              <button type="button" onClick={() => setBagOpen(false)}>
                Close
              </button>
            </header>
            {ordered ? (
              <>
                <p className="empty">Nothing was charged. This study does not take payment.</p>
                <button
                  type="button"
                  className="buy-btn"
                  onClick={() => {
                    setBag([]);
                    setOrdered(false);
                    setBagOpen(false);
                  }}
                >
                  Continue Shopping
                </button>
              </>
            ) : bag.length === 0 ? (
              <p className="empty">Your Bag is empty.</p>
            ) : (
              <>
                <ul className="bag-list">
                  {bag.map((item) => (
                    <li key={item.key}>
                      <p>
                        <strong>{item.name}</strong>
                        <span className="muted"> {item.finish}</span>
                      </p>
                      <p>{money(item.price * item.qty)}</p>
                      <div className="qty">
                        <button type="button" aria-label={`Decrease ${item.name}`} onClick={() => changeQty(item.key, -1)}>
                          –
                        </button>
                        <span>{item.qty}</span>
                        <button type="button" aria-label={`Increase ${item.name}`} onClick={() => changeQty(item.key, 1)}>
                          +
                        </button>
                      </div>
                      <button type="button" className="remove" onClick={() => changeQty(item.key, -item.qty)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="subtotal">
                  <span>Subtotal</span>
                  <strong>{money(total)}</strong>
                </p>
                <button type="button" className="buy-btn" onClick={() => setOrdered(true)}>
                  Check Out
                </button>
                <p className="fine">Sample prices. Checkout ends in this preview.</p>
              </>
            )}
          </aside>
        </div>
      ) : null}

      {toast ? (
        <div className="toaster" role="status" aria-live="polite">
          <p>{toast}</p>
          <button type="button" aria-label="Dismiss notification" onClick={() => setToast("")}>
            ×
          </button>
        </div>
      ) : null}
    </>
  );
}
