const RAW = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
const API_BASE = RAW.startsWith("http") ? RAW.replace(/\/+$/,'') : `https://${RAW.replace(/\/+$/,'')}`;

useEffect(() => {
  (async () => {
    const out = { API_BASE };
    try {
      const a = await fetch(`${API_BASE}/api/app-health`);
      out.app_status = a.status; out.app_json = await a.text();
    } catch (e) { out.app_error = String(e); }
    try {
      const b = await fetch(`${API_BASE}/api/db-health`);
      out.db_status = b.status; out.db_json = await b.text();
    } catch (e) { out.db_error = String(e); }
    setResult(out);
    console.log("HEALTH DEBUG:", out);
  })();
}, []);
