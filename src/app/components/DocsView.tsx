import { useState } from 'react';
import { Code2, Copy, Check, FileSpreadsheet, Server, BookOpen } from 'lucide-react';

export default function DocsView() {
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedApi, setCopiedApi] = useState(false);

  const scriptSnippet = `<script
  src="https://cdn.stockagent.ai/v1/widget.js"
  data-api-key="sk_live_demo_984f21"
  async
></script>`;

  const apiSnippet = `curl -X POST https://api.stockagent.ai/v1/chat/completions \\
  -H "Authorization: Bearer sk_live_demo_984f21" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "Do you have red sneakers in size 42?",
    "include_images": true
  }'`;

  const schemaColumns = [
    { name: 'Product name', purpose: 'What to call the item in AI answers' },
    { name: 'SKU / category', purpose: 'Unique identifier and category grouping' },
    { name: 'Size', purpose: 'For apparel/footwear-type stock matching' },
    { name: 'Colour', purpose: 'For text and photo matching' },
    { name: 'Price', purpose: 'For price questions and currency formatting' },
    { name: 'Quantity in stock', purpose: 'For live availability assertions' },
    { name: 'Product image URL', purpose: 'Enables photo-based visual matching' },
  ];

  const handleCopyScript = () => {
    navigator.clipboard.writeText(scriptSnippet);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const handleCopyApi = () => {
    navigator.clipboard.writeText(apiSnippet);
    setCopiedApi(true);
    setTimeout(() => setCopiedApi(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 sm:py-20 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-xs font-semibold text-neutral-700 mb-4 border border-neutral-200">
          <BookOpen size={14} className="text-accent" />
          Developer Documentation
        </div>
        <h1 
          className="text-4xl sm:text-6xl font-medium tracking-tight text-neutral-900"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          SDK & API{' '}
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>
            Quickstart
          </span>
        </h1>
        <p className="mt-4 text-neutral-600 text-base sm:text-lg">
          Add StockAgent to any storefront in minutes using a single script tag or our headless REST API.
        </p>
      </div>

      {/* Quickstart 1: Script Tag */}
      <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-neutral-100 rounded-xl text-neutral-800">
              <Code2 size={22} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-900">1. Embeddable Widget Snippet</h2>
              <p className="text-xs text-neutral-500">Paste this script tag inside your HTML &lt;head&gt; or before &lt;/body&gt;</p>
            </div>
          </div>
          <button
            onClick={handleCopyScript}
            className="flex items-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors"
          >
            {copiedScript ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            {copiedScript ? 'Copied!' : 'Copy Snippet'}
          </button>
        </div>

        <div className="bg-neutral-950 text-neutral-100 rounded-2xl p-4 font-mono text-xs overflow-x-auto border border-neutral-800 shadow-inner">
          <pre>{scriptSnippet}</pre>
        </div>
      </div>

      {/* Quickstart 2: REST API */}
      <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-neutral-100 rounded-xl text-neutral-800">
              <Server size={22} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-900">2. Headless REST API Query</h2>
              <p className="text-xs text-neutral-500">For custom mobile apps, React Native, or headless store builds</p>
            </div>
          </div>
          <button
            onClick={handleCopyApi}
            className="flex items-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors"
          >
            {copiedApi ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            {copiedApi ? 'Copied!' : 'Copy cURL'}
          </button>
        </div>

        <div className="bg-neutral-950 text-neutral-100 rounded-2xl p-4 font-mono text-xs overflow-x-auto border border-neutral-800 shadow-inner">
          <pre>{apiSnippet}</pre>
        </div>
      </div>

      {/* Quickstart 3: Google Sheet Schema */}
      <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-700 border border-emerald-100">
            <FileSpreadsheet size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-neutral-900">3. Spreadsheet Schema Standard</h2>
            <p className="text-xs text-neutral-500">Minimum required column header names for your Google Sheet inventory source</p>
          </div>
        </div>

        <div className="overflow-x-auto border border-neutral-200 rounded-2xl">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-50 text-neutral-700 text-xs uppercase font-mono border-b border-neutral-200">
              <tr>
                <th className="py-3 px-4">Column Header</th>
                <th className="py-3 px-4">Purpose / Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {schemaColumns.map((col, idx) => (
                <tr key={idx} className="hover:bg-neutral-50">
                  <td className="py-3 px-4 font-mono font-bold text-accent text-xs">
                    {col.name}
                  </td>
                  <td className="py-3 px-4 text-neutral-600 text-xs">
                    {col.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
