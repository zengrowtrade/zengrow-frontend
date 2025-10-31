"use client";
import { useEffect, useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export default function HealthDebug() {
  const [result, setResult] = useState({});

  useEffect(() => {
    async function run() {
      const out = { API_BASE };
      try {
        const a = await fetch(`${API_BASE}/api/health/app/`);
        out.app_status = a.status;
        out.app_json = await a.text();
      } catch (e) { out.app_error = String(e); }

      try {
        const b = await fetch(`${API_BASE}/api/health/db/`);
        out.db_status = b.status;
        out.db_json = await b.text();
      } catch (e) { out.db_error = String(e); }

      setResult(out);
      console.log("HEALTH DEBUG:", out);
    }
    run();
  }, []);

  return (
    <pre style={{whiteSpace:"pre-wrap", padding:"16px", background:"#111", color:"#0f0"}}>
      {JSON.stringify(result, null, 2)}
    </pre>
  );
}
