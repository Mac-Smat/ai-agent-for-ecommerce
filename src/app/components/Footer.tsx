import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface FooterProps {
  onTabChange: (tab: 'home' | 'features' | 'pricing' | 'docs' | 'about' | 'contact') => void;
  onGetApiKey: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

/* --- Social icon cloud (inline SVG brand marks — lucide has no brand icons) --- */

const SOCIAL_LINKS: { label: string; path: string }[] = [
  {
    label: 'X',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    label: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
  {
    label: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Threads',
    path: 'M12.186 24h-.057C9.534 23.958 7.285 23.22 5.566 21.82c-1.56-1.288-2.594-2.98-3.032-4.99-.362-1.66-.364-3.245-.006-4.816.61-2.688 2.118-4.9 4.344-6.39C8.925 3.3 11.596 2.637 14.15 2.897c2.23.23 4.31 1.016 5.958 2.25l.078.058.032.09.04-.124c.394-1.225 1.027-2.36 1.885-3.36L23.85.277c.067-.067.16-.101.25-.082.09.02.166.077.205.156.41.823.665 1.708.754 2.614.052.53.023 1.064-.084 1.583-.031.15.002.305.093.428.093.125.226.192.36.205.106.01.212.016.318.02l.14.004v1.645l-.166.005c-.284.007-.57.028-.85.062-1.413.17-2.703.797-3.71 1.807-.316.317-.596.654-.843 1.008-.366.524-.665 1.078-.896 1.654-.364.915-.56 1.84-.59 2.75v.172l-.004.38-.002.38c0 2.243-.43 4.289-1.278 6.08-.783 1.653-1.916 3.048-3.375 4.152-1.502 1.138-3.22 1.81-5.104 1.998-.403.04-.806.06-1.207.06zm1.6-6.366c.94-.047 1.828-.323 2.596-.83.968-.637 1.677-1.578 2.083-2.763.33-.963.5-2.034.5-3.182v-.02c.01-.342.01-.698 0-1.065l-.008-.34c-.048-2.04-.77-3.923-2.126-5.55-1.02-1.225-2.354-2.08-3.872-2.53-1.668-.494-3.432-.427-5.026.193-1.543.6-2.84 1.57-3.824 2.857-1.028 1.347-1.62 2.973-1.71 4.697-.063 1.2.01 2.236.222 3.062.392 1.525 1.24 2.72 2.56 3.607 1.216.818 2.62 1.234 4.14 1.23.246 0 .494-.007.745-.02.775-.042 1.452-.15 2.02-.322.076-.023.154-.013.215.028.06.04.096.104.094.17-.007.183-.058.357-.147.503-.314.51-.86.896-1.557 1.105-.957.287-1.982.306-2.953.056-.498-.128-.963-.307-1.397-.527l-.102-.052-.088.064c-.367.27-.66.63-.855 1.043-.044.093-.034.202.026.286.06.083.155.133.255.135.644.012 1.27.116 1.866.31.847.276 1.676.45 2.478.52.22.02.44.028.66.028.42 0 .84-.028 1.255-.086 1.245-.17 2.374-.612 3.34-1.304 1.247-.893 2.17-2.116 2.72-3.586.42-1.12.657-2.323.697-3.55.012-.37.02-.74.02-1.108v-.21c0-.214.144-.4.35-.454.205-.053.423.007.57.156.147.15.207.366.153.57-.032.123-.05.248-.05.374v.28c-.06.905-.143 1.6-.27 2.21-.19.913-.472 1.68-.85 2.332-.22-.87-.577-1.66-1.057-2.37-.695-1.03-1.61-1.85-2.713-2.43-.49-.26-1.006-.455-1.535-.59-.545-.14-1.106-.206-1.672-.2-.73.007-1.437.126-2.1.352-.855.292-1.62.742-2.27 1.334-.66.6-1.17 1.318-1.51 2.125-.317.755-.477 1.56-.476 2.393 0 .59.076 1.17.228 1.727.31 1.136.967 2.08 1.94 2.795.94.692 2.02 1.048 3.15 1.042.204-.002.407-.014.606-.038zm-1.482-2.226c-.785-.032-1.495-.302-2.036-.776-.688-.604-1.083-1.428-1.11-2.32-.032-1.043.36-1.998 1.102-2.69.736-.687 1.736-1.062 2.814-1.057.353.002.7.047 1.03.133.815.212 1.51.643 2.036 1.26.44.516.744 1.11.906 1.758.06.24.103.482.128.726l.008.085c.004.416-.043.83-.14 1.236-.162.672-.49 1.28-.966 1.79-.475.51-1.078.885-1.78 1.11-.566.18-1.15.27-1.725.265-.085 0-.17-.003-.257-.008z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'YouTube',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
];

function SocialCloud({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map(({ label, path }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className="transition-colors hover:text-black dark:hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d={path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

export default function Footer({
  title = 'Let your shoppers ask anything.',
  onTabChange,
  onGetApiKey,
}: FooterProps & { title?: string }) {
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });

  return (
    <section className="py-12 px-4 [--color-primary:#ef4d23]">
      <motion.div
        className="container mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* 1. Upper div with noise and text */}
        <motion.div
          className="relative w-full overflow-hidden rounded-xl bg-[#ef4d23] h-[100px] md:h-[300px]"
          variants={itemVariants}
        >
          {/* SVG Noise Overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-90 pointer-events-none mix-blend-multiply"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <filter id="footerNoiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#footerNoiseFilter)" />
          </svg>

          {/* Centered Text */}
          <div
            ref={titleRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none px-4"
          >
            {isTitleInView && (
              <motion.div
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center flex flex-wrap justify-center gap-x-3"
                initial="hidden"
                animate="visible"
              >
                {title.split(' ').map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    custom={i}
                    variants={wordVariants}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* 2 & 3. Bottom Section */}
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-between gap-12 lg:gap-8">
          {/* 2. Below Left Section */}
          <motion.div
            className="flex flex-col justify-between space-y-12 lg:w-1/3"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black dark:text-white">Newsletter</h3>
              <form
                className="flex items-center gap-4 max-w-md"
                onSubmit={(e) => {
                  e.preventDefault();
                  onGetApiKey();
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  className="flex-1 rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-transparent dark:bg-neutral-900 text-black dark:text-white"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-black text-white dark:bg-white dark:text-black px-6 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="space-y-4 md:space-y-6">
              <SocialCloud className="text-neutral-500 dark:text-neutral-400 gap-4" />
              <p className="text-sm text-neutral-400 dark:text-neutral-600">
                &copy; {new Date().getFullYear()} StockAgent, All rights reserved
              </p>
            </div>
          </motion.div>

          {/* 3. Below Right Section */}
          <motion.div
            className="flex flex-wrap gap-8 lg:gap-24 lg:w-1/2 lg:justify-end"
            variants={itemVariants}
          >
            {/* Column 1: Product */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-bold text-black dark:text-white">Product</h4>
              <ul className="flex flex-col space-y-2 text-neutral-600 dark:text-neutral-400">
                <li>
                  <button
                    onClick={() => onTabChange('features')}
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                    Solution
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                    Customers
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => onTabChange('pricing')}
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-bold text-black dark:text-white">Company</h4>
              <ul className="flex flex-col space-y-2 text-neutral-600 dark:text-neutral-400">
                <li>
                  <button
                    onClick={() => onTabChange('about')}
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => onTabChange('contact')}
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Social */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-bold text-black dark:text-white">Social</h4>
              <ul className="flex flex-col space-y-2 text-neutral-600 dark:text-neutral-400">
                {['X', 'LinkedIn', 'Facebook', 'Threads', 'Instagram', 'YouTube'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}