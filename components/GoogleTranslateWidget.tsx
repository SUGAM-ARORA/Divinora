"use client";

import Script from "next/script";
import { useEffect } from "react";

export const GoogleTranslateWidget = () => {
  useEffect(() => {
    // Clean up previous widget if it exists
    return () => {
      const script = document.querySelector(
        'script[src="https://translate.google.com/translate_a/element.js"]'
      );
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="google-translate-container">
      <div id="google_translate_element" className="h-[40px] w-[120px]" />
      <Script
        id="google-translate-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en', includedLanguages: 'hi,sa' },
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
    </div>
  );
};