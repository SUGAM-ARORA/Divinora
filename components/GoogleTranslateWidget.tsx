"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { Languages, X } from "lucide-react";

export const GoogleTranslateWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => {
      const script = document.querySelector(
        'script[src="https://translate.google.com/translate_a/element.js"]'
      );
      if (script) script.remove();
    };
  }, []);

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[99999] bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:scale-105 transition-transform flex items-center justify-center group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Languages className="w-6 h-6 group-hover:animate-pulse" />}
      </button>

      {/* Translation Widget Panel */}
      <div 
        className={`fixed bottom-24 left-6 z-[99999] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-2xl transform origin-bottom-left transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-2 mb-3 px-1">
          <Languages className="w-5 h-5 text-orange-500" />
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            Select Language
          </h3>
        </div>
        
        {/* Google Translate Target Div */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-2 min-w-[200px] border border-slate-200 dark:border-slate-800">
          <div id="google_translate_element" className="w-full" />
        </div>
        
        <p className="text-[10px] text-slate-400 mt-3 text-center px-2">Translate website to Hindi, Sanskrit, or other regional languages instantly.</p>
      </div>

      <Script
        id="google-translate-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { 
                  pageLanguage: 'en', 
                  includedLanguages: 'hi,sa,ta,te,mr,gu,bn',
                  layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
                },
                'google_translate_element'
              );
            }
          `,
        }}
      />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* CSS to hide Google's messy top frame and clean up the dropdown */}
      <style jsx global>{`
        body { top: 0 !important; }
        .skiptranslate iframe.goog-te-banner-frame { display: none !important; }
        
        #google_translate_element select {
          width: 100%;
          padding: 8px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background-color: transparent;
          color: inherit;
          font-size: 14px;
          outline: none;
          cursor: pointer;
        }
        
        .dark #google_translate_element select {
          border-color: #1e293b;
          color: #f1f5f9;
        }

        .dark #google_translate_element select option {
          background-color: #0f172a;
          color: #f1f5f9;
        }

        /* Hide "Powered by Google" text */
        .goog-logo-link { display: none !important; }
        .goog-te-gadget { color: transparent !important; font-size: 0 !important; }
      `}</style>
    </>
  );
};