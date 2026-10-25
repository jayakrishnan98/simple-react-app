import { useEffect, useId, useRef, useState } from "react";

const products = [
  {
    id: "ultra",
    name: "Galaxy S26 Ultra",
    tag: "Privacy Display. Nightography.",
    note: "Available now",
    price: 1299,
    blurb:
      "A thinner Ultra with a 200 MP camera, a privacy display, and a battery meant to last the day.",
    finishes: [
      { name: "Titanium Black", color: "#1c1c1e" },
      { name: "Titanium Silver", color: "#d5d6da" },
      { name: "Titanium Violet", color: "#6d5c86" },
    ],
  },
  {
    id: "fold",
    name: "Galaxy Z Fold8",
    tag: "The right screen, right when you need it.",
    price: 1899,
    blurb:
      "A 10:16 cover for the day, and a 4:3 inner screen when you want the movie, the article, or both.",
    finishes: [
      { name: "Silver Shadow", color: "#c8c9ce" },
      { name: "Navy", color: "#1e2a44" },
      { name: "Pink", color: "#f0c9cf" },
    ],
  },
  {
    id: "flip",
    name: "Galaxy Z Flip8",
    tag: "Compact until you open it.",
    price: 1099,
    blurb: "A pocket-size fold that opens into a full phone, with a cover screen for the quick glance.",
    finishes: [
      { name: "Blue", color: "#8eb4e8" },
      { name: "Mint", color: "#b7ddd0" },
      { name: "Yellow", color: "#f3e27a" },
    ],
  },
  {
    id: "plus",
    name: "Galaxy S26+",
    tag: "A larger screen. The same slim frame.",
    price: 999,
    blurb: "More display, a larger battery, and the Galaxy AI tools from the S26 series.",
    finishes: [
      { name: "Cobalt", color: "#2f3d66" },
      { name: "Silver", color: "#e4e5e8" },
      { name: "Black", color: "#1a1a1c" },
    ],
  },
  {
    id: "s26",
    name: "Galaxy S26",
    tag: "Slim design. Next-gen performance.",
    price: 799,
    blurb: "The everyday Galaxy, with a brighter camera and a battery sized for a full day.",
    finishes: [
      { name: "Icy Blue", color: "#c5d6ea" },
      { name: "Black", color: "#222226" },
      { name: "White", color: "#f4f4f6" },
    ],
  },
  {
    id: "a27",
    name: "Galaxy A27",
    tag: "Awesome essentials.",
    price: 399,
    blurb: "A durable Galaxy with a long-lasting battery and the features you use every day.",
    finishes: [
      { name: "Black", color: "#1d1d1f" },
      { name: "Light Blue", color: "#d5e4f4" },
      { name: "Olive", color: "#8d9474" },
    ],
  },
  {
    id: "watch",
    name: "Galaxy Watch Ultra2",
    tag: "Wellness, on the wrist.",
    price: 649,
    blurb: "A round watch for workouts, sleep, and the notifications you actually want to see.",
    finishes: [
      { name: "Titanium Gray", color: "#8e9196" },
      { name: "Titanium Silver", color: "#e6e7ea" },
    ],
  },
  {
    id: "buds",
    name: "Galaxy Buds4 Pro",
    tag: "Hi-Fi, tuned for Galaxy.",
    price: 249,
    blurb: "A blade-shaped bud with clearer calls and sound meant to stay close to the recording.",
    finishes: [{ name: "White", color: "#f7f7f8" }, { name: "Silver", color: "#c8c9ce" }],
  },
  {
    id: "tab",
    name: "Galaxy Tab S11",
    tag: "Galaxy AI, with an S Pen.",
    price: 799,
    blurb: "A thin tablet for notes, split screen, and the work you start on your phone.",
    finishes: [
      { name: "Silver", color: "#e7e8eb" },
      { name: "Gray", color: "#5c5e62" },
    ],
  },
  {
    id: "fe",
    name: "Galaxy S26 FE",
    tag: "Fan favorite features.",
    price: 649,
    blurb: "Flagship tools in a phone priced for the switch. Shown here as a preview of the offer.",
    finishes: [
      { name: "Black", color: "#1c1c1e" },
      { name: "Blue", color: "#9bb6dc" },
    ],
  },
];

const features = [
  { title: "Circle to Search", text: "Circle anything on the screen and look it up without leaving the page." },
  { title: "Live Translate", text: "Calls and conversations, translated as they happen. This preview does not connect a call." },
  { title: "Note Assist", text: "Summaries and formatting for notes you already wrote." },
  { title: "Photo Assist", text: "Move an object, fill the gap, and keep the rest of the picture." },
  { title: "Now Brief", text: "A short read of the day: weather, calendar, and what is next." },
  { title: "Browsing Assist", text: "A shorter version of a long page, still on the page you opened." },
];

const nav = [
  ["Galaxy S", "ultra"],
  ["Galaxy Z", "foldables"],
  ["Galaxy A", "a27"],
  ["Watch", "watch"],
  ["Buds", "buds"],
  ["Tab", "tab"],
  ["Galaxy AI", "ai"],
  ["Offers", "offers"],
  ["Support", "support"],
];

const footer = [
  {
    title: "Shop",
    links: [
      ["Galaxy S26 Ultra", "ultra"],
      ["Galaxy Z Fold8", "fold"],
      ["Galaxy Z Flip8", "flip"],
      ["Galaxy A27", "a27"],
      ["Offers", "offers"],
    ],
  },
  {
    title: "Galaxy",
    links: [
      ["Watch Ultra2", "watch"],
      ["Buds4 Pro", "buds"],
      ["Tab S11", "tab"],
      ["Galaxy AI", "ai"],
    ],
  },
  {
    title: "Support",
    links: [
      ["Repairs", "support"],
      ["Trade-in", "support"],
      ["Samsung Account", "support"],
    ],
  },
  {
    title: "About",
    links: [
      ["This page", "legal"],
      ["Support", "support"],
    ],
  },
];

const helpTopics = [
  {
    title: "Repairs",
    text: "Screen, battery, and hinge service would start here. This preview does not book an appointment.",
  },
  {
    title: "Trade-in",
    text: "A credit for an eligible phone would be estimated here. Nothing is collected from this page.",
  },
  {
    title: "Samsung Account",
    text: "Sign-in, devices, and recovery would live here. There is no account connected.",
  },
];

const anchors = {
  ultra: "ultra",
  fold: "fold",
  flip: "flip",
  plus: "plus",
  s26: "s26",
  a27: "a27",
  watch: "watch",
  buds: "buds",
  tab: "tab",
  fe: "offers",
};

function money(n) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function Phone({ color = "#1c1c1e", wallpaper = ["#142033", "#3d6ea8"], island = false, className = "" }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg className={`device phone ${className}`} viewBox="0 0 180 372" aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-w`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={wallpaper[0]} />
          <stop offset="100%" stopColor={wallpaper[1]} />
        </linearGradient>
      </defs>
      <rect x="8" y="6" width="164" height="360" rx="28" fill={color} />
      <rect x="16" y="14" width="148" height="344" rx="22" fill={`url(#${uid}-w)`} />
      {island ? (
        <g>
          <rect x="28" y="32" width="46" height="112" rx="16" fill="#101114" />
          <circle cx="51" cy="58" r="11" fill="#0a0a0c" stroke="#3a3a40" />
          <circle cx="51" cy="88" r="9" fill="#0a0a0c" stroke="#3a3a40" />
          <circle cx="51" cy="116" r="7" fill="#0a0a0c" stroke="#3a3a40" />
          <circle cx="51" cy="46" r="3" fill="#c9d4e4" opacity="0.7" />
        </g>
      ) : (
        <circle cx="90" cy="28" r="5" fill={color} />
      )}
    </svg>
  );
}

function Fold({ color = "#c8c9ce" }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg className="device fold" viewBox="0 0 520 300" aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a2744" />
          <stop offset="100%" stopColor="#6d8cff" />
        </linearGradient>
      </defs>
      <rect x="16" y="28" width="488" height="244" rx="22" fill={color} />
      <rect x="28" y="40" width="220" height="220" rx="8" fill={`url(#${uid}-s)`} />
      <rect x="272" y="40" width="220" height="220" rx="8" fill="#101826" />
      <rect x="254" y="40" width="12" height="220" fill="#8d8e94" />
      <text x="48" y="150" fill="#fff" fontSize="18" fontFamily="Arial, sans-serif">
        Cover
      </text>
      <text x="300" y="150" fill="#fff" fontSize="18" fontFamily="Arial, sans-serif">
        4:3
      </text>
    </svg>
  );
}

function Flip({ color = "#8eb4e8" }) {
  return (
    <svg className="device flip" viewBox="0 0 220 280" aria-hidden="true">
      <rect x="36" y="18" width="148" height="118" rx="22" fill={color} />
      <rect x="48" y="30" width="124" height="94" rx="16" fill="#101418" />
      <circle cx="110" cy="76" r="16" fill="none" stroke="#d7dde6" strokeWidth="3" />
      <rect x="36" y="144" width="148" height="118" rx="22" fill={color} />
      <path d="M52 144h116" stroke="#6d6e74" strokeWidth="4" />
    </svg>
  );
}

function Watch({ color = "#8e9196" }) {
  return (
    <svg className="device watch" viewBox="0 0 220 300" aria-hidden="true">
      <rect x="78" y="8" width="64" height="70" rx="16" fill="#2a2a2e" />
      <rect x="78" y="222" width="64" height="70" rx="16" fill="#2a2a2e" />
      <circle cx="110" cy="150" r="78" fill={color} />
      <circle cx="110" cy="150" r="62" fill="#0e0e10" />
      <circle cx="110" cy="150" r="4" fill="#fff" />
      <path d="M110 150 V108" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M110 150 L142 162" stroke="#7eb6ff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function Buds() {
  return (
    <svg className="device buds" viewBox="0 0 360 220" aria-hidden="true">
      <rect x="120" y="48" width="120" height="140" rx="28" fill="#fbfbfd" stroke="#dedee3" />
      <path d="M132 118h96" stroke="#e4e4e8" />
      <g fill="#f4f4f6" stroke="#c8c8ce">
        <path d="M70 70c18-28 48-8 42 22-8 36-52 40-58 8-4-18 2-22 16-30z" />
        <path d="M290 70c-18-28-48-8-42 22 8 36 52 40 58 8 4-18-2-22-16-30z" />
      </g>
    </svg>
  );
}

function Tab({ color = "#e7e8eb" }) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg className="device tab" viewBox="0 0 640 420" aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#16324f" />
          <stop offset="100%" stopColor="#7aa2ff" />
        </linearGradient>
      </defs>
      <rect x="24" y="36" width="560" height="348" rx="18" fill={color} />
      <rect x="40" y="52" width="528" height="316" rx="8" fill={`url(#${uid}-s)`} />
      <rect x="592" y="150" width="18" height="120" rx="4" fill="#f2f2f4" stroke="#bdbdc2" />
      <circle cx="304" cy="64" r="4" fill="#1d1d1f" opacity="0.45" />
    </svg>
  );
}

function ProductArt({ id, color }) {
  switch (id) {
    case "fold":
      return <Fold color={color || "#c8c9ce"} />;
    case "flip":
      return <Flip color={color || "#8eb4e8"} />;
    case "watch":
      return <Watch color={color || "#8e9196"} />;
    case "buds":
      return <Buds />;
    case "tab":
      return <Tab color={color || "#e7e8eb"} />;
    case "ultra":
      return <Phone color={color || "#1c1c1e"} wallpaper={["#101820", "#315f9a"]} island />;
    default:
      return <Phone color={color || "#1c1c1e"} wallpaper={["#1b2433", "#8ea4c4"]} />;
  }
}

function Tile({ id, product, tone = "light", hero = false, onOpen, children }) {
  return (
    <section id={id} className={`tile ${tone} ${hero ? "hero" : ""}`}>
      <div className="copy">
        <p className="eyebrow">Galaxy</p>
        <h2>{product.name}</h2>
        <p className="tag">{product.tag}</p>
        {product.note ? <p className="note">{product.note}</p> : null}
        <p className="cta">
          <button type="button" className="pill" onClick={() => onOpen(product)}>
            Learn more
          </button>
          <button type="button" className="pill solid" onClick={() => onOpen(product)}>
            Buy
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
  const [feature, setFeature] = useState(null);
  const [toast, setToast] = useState("");
  const searchRef = useRef(null);

  const count = bag.reduce((sum, item) => sum + item.qty, 0);
  const total = bag.reduce((sum, item) => sum + item.qty * item.price, 0);
  const results = products.filter((item) => {
    const hay = `${item.name} ${item.tag}`.toLowerCase();
    return hay.includes(query.trim().toLowerCase());
  });

  useEffect(() => {
    const locked = menuOpen || searchOpen || bagOpen || sheet || help || feature;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen, bagOpen, sheet, help, feature]);

  useEffect(() => {
    function onKey(event) {
      if (event.key !== "Escape") return;
      if (feature) setFeature(null);
      else if (sheet) setSheet(null);
      else if (help) setHelp(false);
      else if (bagOpen) setBagOpen(false);
      else if (searchOpen) setSearchOpen(false);
      else if (menuOpen) setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [feature, sheet, help, bagOpen, searchOpen, menuOpen]);

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
      <h1 className="sr-only">Samsung Galaxy mobile</h1>
      <header className="nav">
        <div className="nav-inner">
          <button type="button" className="wordmark" onClick={() => go("top")}>
            SAMSUNG
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
                <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M10.4 10.4 L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              className="cart-btn"
              aria-label={count ? `Cart, ${count} ${count === 1 ? "item" : "items"}` : "Cart"}
              onClick={() => {
                setBagOpen(true);
                setMenuOpen(false);
                setSearchOpen(false);
              }}
            >
              <svg className="icon" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 4h10l-1 8H4L3 4z" fill="none" stroke="currentColor" strokeWidth="1.3" />
                <path d="M6 4a2 2 0 0 1 4 0" fill="none" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              {count > 0 ? <span className="cart-count">{count}</span> : null}
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
            placeholder="Search Galaxy"
            aria-label="Search"
            autoComplete="off"
          />
          {!query.trim() ? <small>Suggested</small> : null}
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
          <Tile id="ultra" product={products[0]} hero tone="dark" onOpen={openProduct}>
            <Phone color="#1c1c1e" wallpaper={["#101820", "#315f9a"]} island />
          </Tile>

          <div className="pair" id="foldables">
            <Tile id="fold" product={products[1]} onOpen={openProduct}>
              <Fold />
            </Tile>
            <Tile id="flip" product={products[2]} tone="dark" onOpen={openProduct}>
              <Flip color="#d7dde8" />
            </Tile>
          </div>

          <div className="pair">
            <Tile id="plus" product={products[3]} onOpen={openProduct}>
              <Phone color="#2f3d66" wallpaper={["#1a2744", "#9eb6e6"]} />
            </Tile>
            <Tile id="s26" product={products[4]} onOpen={openProduct}>
              <Phone color="#c5d6ea" wallpaper={["#dfeaf6", "#8ea4c8"]} />
            </Tile>
          </div>

          <Tile id="a27" product={products[5]} onOpen={openProduct}>
            <Phone color="#1d1d1f" wallpaper={["#243044", "#8d9474"]} />
          </Tile>

          <div className="pair">
            <Tile id="watch" product={products[6]} tone="dark" onOpen={openProduct}>
              <Watch />
            </Tile>
            <Tile id="buds" product={products[7]} onOpen={openProduct}>
              <Buds />
            </Tile>
          </div>

          <Tile id="tab" product={products[8]} onOpen={openProduct}>
            <Tab />
          </Tile>

          <section className="tile light centerpiece" id="offers">
            <div className="copy">
              <p className="eyebrow">Shop</p>
              <h2>Buy direct. Get more.</h2>
              <p className="tag">Sample offers on Galaxy S26 FE, foldables, and add-ons. Nothing is discounted from this page.</p>
              <p className="cta">
                <button type="button" className="pill solid" onClick={() => openProduct(products[9])}>
                  Shop Galaxy S26 FE
                </button>
              </p>
            </div>
          </section>

          <section className="features" id="ai">
            <h2>Galaxy AI</h2>
            <p className="tag">Practical help for the day you already have.</p>
            <div className="feature-row">
              {features.map((item) => (
                <button key={item.title} type="button" className="feature" onClick={() => setFeature(item)}>
                  <strong>{item.title}</strong>
                  <span>Learn more</span>
                </button>
              ))}
            </div>
          </section>

          <section className="tile dark centerpiece" id="support">
            <div className="copy">
              <p className="eyebrow">Support</p>
              <h2>We’re here to help.</h2>
              <p className="tag">Repairs, trade-in, and your Samsung Account.</p>
              <p className="cta">
                <button type="button" className="pill solid" onClick={() => setHelp(true)}>
                  Get support
                </button>
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <p className="foot-note" id="legal">
          A local design study modeled on Samsung’s public mobile page as of October 2026.
          Product names follow that page. Prices here are samples. Not affiliated with Samsung Electronics.
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
          <button type="button" className="link" onClick={() => go("legal")}>
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
              <p className="eyebrow">Galaxy</p>
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
              <button type="button" className="buy-btn" onClick={sheet.price > 0 ? addCurrent : () => setSheet(null)}>
                {sheet.price > 0 ? "Add to cart" : "Done"}
              </button>
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
              <h2 id="help-title">Support</h2>
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

      {feature ? (
        <div className="backdrop" onClick={() => setFeature(null)}>
          <div
            className="sheet feature-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="feature-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="close" aria-label="Close" onClick={() => setFeature(null)}>
              ×
            </button>
            <div className="sheet-copy" style={{ gridColumn: "1 / -1" }}>
              <p className="eyebrow">Galaxy AI</p>
              <h2 id="feature-title">{feature.title}</h2>
              <p className="blurb">{feature.text}</p>
              <button type="button" className="buy-btn" onClick={() => setFeature(null)}>
                Done
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {bagOpen ? (
        <div className="backdrop cart-backdrop" onClick={() => setBagOpen(false)}>
          <aside
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bag-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header>
              <h2 id="bag-title">{ordered ? "Preview complete" : "Cart"}</h2>
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
                  Continue shopping
                </button>
              </>
            ) : bag.length === 0 ? (
              <p className="empty">Your cart is empty.</p>
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
                  Checkout
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
