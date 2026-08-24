// api/scan.js - Dynamic QR Short Link Router for Santhi Ganesh Bakery
const SUPABASE_URL = 'https://hkkdeowfoyejfifeftme.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhra2Rlb3dmb3llamZpZmVmdG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1MjQ1NzYsImV4cCI6MjA5OTEwMDU3Nn0.EBw0t2IZoM8koDaV2AOFj6rQbyQINSo_mkrvhhhd0nU';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle POST: Update the dynamic redirect destination from Admin Panel
  if (req.method === 'POST') {
    try {
      const { destination } = req.body || {};
      if (!destination || typeof destination !== 'string') {
        return res.status(400).json({ error: 'Destination URL is required' });
      }

      const cleanDestination = destination.trim();
      const response = await fetch(`${SUPABASE_URL}/rest/v1/admin_settings`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          key: 'dynamic_scan_redirect',
          value: cleanDestination,
          updated_at: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Supabase returned ${response.status}`);
      }

      return res.status(200).json({
        success: true,
        destination: cleanDestination,
        message: 'Dynamic QR short link destination updated successfully'
      });
    } catch (err) {
      console.error('Failed to update scan redirect:', err);
      return res.status(500).json({ error: err.message });
    }
  }

  // Handle GET: Perform HTTP 307 Redirect (or return JSON if requested)
  let destination = 'https://santhiganeshbakery.in/menu';
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/admin_settings?key=eq.dynamic_scan_redirect&select=value`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0 && data[0].value) {
        destination = data[0].value.trim();
      }
    }
  } catch (err) {
    console.error('Error fetching dynamic scan redirect:', err);
  }

  // Format relative paths to full domain
  if (destination.startsWith('/')) {
    destination = `https://santhiganeshbakery.in${destination}`;
  }

  // If queried via AJAX/API, return JSON
  if (req.query && (req.query.json === 'true' || req.query.format === 'json')) {
    return res.status(200).json({ destination });
  }

  // Fast HTTP 307 Temporary Redirect for phone cameras / browsers
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  return res.redirect(307, destination);
}
