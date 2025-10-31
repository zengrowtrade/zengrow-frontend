"use client";

import { useEffect, useState } from "react";

const RAW = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
const API_BASE = RAW.startsWith("http") ? RAW.replace(/\/+$/, '') : `https://${RAW.replace(/\/+$/, '')}`;

export default function HealthDebug() {
  const [result, setResult] = useState({});

  useEffect(() => {
    (async () => {
      const out = { API_BASE };
      // App health
      try {
        const a = await fetch(`${API_BASE}/api/app-health`);
        out.app_status = a.status;
        out.app_data = await a.text();
      } catch (e) {
        out.app_error = String(e);
        out.app_status = "ERROR";
        out.app_data = null;
      }
      // DB health
      try {
        const b = await fetch(`${API_BASE}/api/db-health`);
        out.db_status = b.status;
        out.db_data = await b.text();
      } catch (e) {
        out.db_error = String(e);
        out.db_status = "ERROR";
        out.db_data = null;
      }
      setResult(out);
      console.log("HEALTH DEBUG:", out);
    })();
  }, []);

  return (
    <div>
      <h2>API Health Debug</h2>
      <div>API_BASE: {result.API_BASE}</div>
      <div>App Health: {result.app_status}</div>
      <pre>{result.app_data}</pre>
      <div>DB Health: {result.db_status}</div>
      <pre>{result.db_data}</pre>
      {result.app_error && <div className="text-red-600">App Error: {result.app_error}</div>}
      {result.db_error && <div className="text-red-600">DB Error: {result.db_error}</div>}
    </div>
  );
}
