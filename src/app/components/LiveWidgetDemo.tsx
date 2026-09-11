import { useState } from 'react';
import { Send, Sparkles, RefreshCw, Image as ImageIcon, ShieldCheck } from 'lucide-react';

interface MockProduct {
  name: string;
  sku: string;
  color: string;
  size: string;
  price: string;
  stock: number;
  image: string;
}

const mockInventory: MockProduct[] = [
  {
    name: 'Air Max Runner 2026',
    sku: 'RUN-2026-RED',
    color: 'Red',
    size: '42',
    price: '$149.00',
    stock: 3,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Air Max Runner 2026',
    sku: 'RUN-2026-BLK',
    color: 'Black',
    size: '43',
    price: '$149.00',
    stock: 0,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Minimalist Leather Tote',
    sku: 'BAG-LTH-BRN',
    color: 'Brown',
    size: 'One Size',
    price: '$189.00',
    stock: 12,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80',
  },
];

interface ChatMessage {
  sender: 'user' | 'ai';
  text?: string;
  image?: string;
  matchedProduct?: MockProduct;
  outOfStock?: boolean;
}

export default function LiveWidgetDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: '👋 Hi! I am your store assistant. Ask me anything about stock, size, color, or upload a photo of what you want!',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const sampleQueries = [
    'Do you have red sneakers in size 42?',
    'Is the brown leather tote bag in stock?',
    'Do you have black sneakers in size 43?',
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsSearching(true);

    setTimeout(() => {
      let aiResponse: ChatMessage;

      if (text.toLowerCase().includes('red') && text.includes('42')) {
        const item = mockInventory[0];
        aiResponse = {
          sender: 'ai',
          text: `Yes! We have ${item.stock} pairs of ${item.name} in ${item.color} (Size ${item.size}) in stock for ${item.price}.`,
          matchedProduct: item,
        };
      } else if (text.toLowerCase().includes('tote') || text.toLowerCase().includes('brown')) {
        const item = mockInventory[2];
        aiResponse = {
          sender: 'ai',
          text: `Yes! The ${item.name} in ${item.color} is currently in stock (${item.stock} units available at ${item.price}).`,
          matchedProduct: item,
        };
      } else if (text.toLowerCase().includes('black') || text.includes('43')) {
        const item = mockInventory[1];
        aiResponse = {
          sender: 'ai',
          text: `Sorry! The ${item.name} in ${item.color} (Size ${item.size}) is currently out of stock. Would you like to check size 42 in Red instead?`,
          matchedProduct: item,
          outOfStock: true,
        };
      } else {
        aiResponse = {
          sender: 'ai',
          text: `I checked your live Google Sheet inventory: We have 3 items matching your description. Would you like details on size or color availability?`,
          matchedProduct: mockInventory[0],
        };
      }

      setMessages((prev) => [...prev, aiResponse]);
      setIsSearching(false);
    }, 700);
  };

  const handlePhotoUploadSim = () => {
    const userMsg: ChatMessage = {
      sender: 'user',
      text: 'Uploaded a photo of red sneakers',
      image: mockInventory[0].image,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsSearching(true);

    setTimeout(() => {
      const item = mockInventory[0];
      const aiResponse: ChatMessage = {
        sender: 'ai',
        text: `Found a match! 🎯 We identified ${item.name} (${item.color}). We have ${item.stock} pairs in stock for ${item.price}.`,
        matchedProduct: item,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsSearching(false);
    }, 900);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 sm:py-24" id="live-demo">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xl overflow-hidden">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-100">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full mb-2">
              <Sparkles size={14} />
              Interactive Storefront Demo
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
              Try the AI Assistant Live
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              Connected live to mock Google Sheet inventory. Zero hallucination guaranteed.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-medium border border-emerald-100">
              <ShieldCheck size={16} />
              Live Sync Active (30s poll)
            </div>
            <button
              onClick={() => setMessages([{ sender: 'ai', text: '👋 Hi! I am your store assistant. Ask me anything!' }])}
              className="p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
              title="Reset Chat"
            >
              <RefreshCw size={18} />
            </button>
          </div>
        </div>

        {/* Chat & Spreadsheet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Chat Widget Container */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col h-[500px] shadow-inner overflow-hidden">
            {/* Widget Header */}
            <div className="bg-neutral-900 text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-sm">StockAgent Widget</span>
              </div>
              <span className="text-[11px] text-neutral-400 font-mono">v1.0 Script Tag</span>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-neutral-900 text-white rounded-br-none'
                        : 'bg-white text-neutral-800 border border-neutral-200 shadow-sm rounded-bl-none'
                    }`}
                  >
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="Uploaded preview"
                        className="w-40 h-28 object-cover rounded-xl mb-2 border border-neutral-300"
                      />
                    )}
                    <p>{msg.text}</p>

                    {/* Matched Product Card inside AI Response */}
                    {msg.matchedProduct && (
                      <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center gap-3 bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/80">
                        <img
                          src={msg.matchedProduct.image}
                          alt={msg.matchedProduct.name}
                          className="w-12 h-12 rounded-lg object-cover border border-neutral-200 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-neutral-900 truncate">
                            {msg.matchedProduct.name}
                          </p>
                          <p className="text-[11px] text-neutral-500">
                            Color: {msg.matchedProduct.color} | Size: {msg.matchedProduct.size}
                          </p>
                          <p className="text-xs font-bold text-neutral-900 mt-0.5">
                            {msg.matchedProduct.price}
                          </p>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-1 rounded-full shrink-0 ${
                            msg.outOfStock
                              ? 'bg-red-100 text-red-700'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {msg.outOfStock ? 'Out of Stock' : `${msg.matchedProduct.stock} Left`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isSearching && (
                <div className="flex items-center gap-2 bg-white text-neutral-500 border border-neutral-200 rounded-2xl p-3 text-xs w-fit">
                  <RefreshCw size={14} className="animate-spin text-accent" />
                  Searching live inventory Google Sheet...
                </div>
              )}
            </div>

            {/* Quick Sample Queries */}
            <div className="px-4 py-2 bg-white border-t border-neutral-200/80 flex items-center gap-2 overflow-x-auto text-xs text-neutral-600 no-scrollbar">
              <span className="text-[11px] font-semibold text-neutral-400 uppercase shrink-0">Try:</span>
              {sampleQueries.map((query, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(query)}
                  className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors"
                >
                  "{query}"
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-neutral-200 flex items-center gap-2">
              <button
                onClick={handlePhotoUploadSim}
                className="p-2.5 text-neutral-500 hover:text-accent bg-neutral-100 hover:bg-accent/10 rounded-xl transition-colors shrink-0"
                title="Simulate Photo Search"
              >
                <ImageIcon size={18} />
              </button>

              <input
                type="text"
                placeholder="Ask about stock, size, or color..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(inputQuery)}
                className="flex-1 bg-neutral-100 text-neutral-900 text-sm px-4 py-2.5 rounded-xl border border-transparent focus:border-accent focus:bg-white focus:outline-none transition-all"
              />

              <button
                onClick={() => handleSend(inputQuery)}
                disabled={!inputQuery.trim()}
                className="p-2.5 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white rounded-xl transition-colors shrink-0"
              >
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Right: Synced Google Sheet Visual Representation */}
          <div className="lg:col-span-5 flex flex-col h-[500px]">
            <div className="bg-emerald-950 text-emerald-200 rounded-2xl p-5 border border-emerald-800 shadow-md flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-xs text-white uppercase tracking-wider">
                      Live Store Inventory (Google Sheet)
                    </span>
                  </div>
                  <span className="text-[10px] bg-emerald-900/80 text-emerald-300 px-2 py-0.5 rounded font-mono">
                    Auto-Polling: 30s
                  </span>
                </div>

                <div className="overflow-x-auto text-xs">
                  <table className="w-full text-left text-emerald-100 border-collapse">
                    <thead>
                      <tr className="border-b border-emerald-800 text-[10px] text-emerald-400 uppercase font-mono">
                        <th className="pb-2">SKU</th>
                        <th className="pb-2">Name</th>
                        <th className="pb-2">Size</th>
                        <th className="pb-2">Color</th>
                        <th className="pb-2">Stock</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-900/60 font-mono text-[11px]">
                      {mockInventory.map((item, idx) => (
                        <tr key={idx} className="hover:bg-emerald-900/40">
                          <td className="py-2.5 font-bold text-emerald-300">{item.sku}</td>
                          <td className="py-2.5 text-white font-sans">{item.name}</td>
                          <td className="py-2.5">{item.size}</td>
                          <td className="py-2.5">{item.color}</td>
                          <td className="py-2.5">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                item.stock > 0
                                  ? 'bg-emerald-800 text-emerald-200'
                                  : 'bg-red-900/80 text-red-200'
                              }`}
                            >
                              {item.stock}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-900 text-[11px] text-emerald-400 flex items-center justify-between">
                <span>Ground Truth Guarantee</span>
                <span className="text-white font-semibold">FR-3 Zero Hallucination</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
