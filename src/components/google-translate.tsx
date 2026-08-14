"use client";

import Script from "next/script";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
            layout?: unknown;
          },
          element: string,
        ) => void;
      };
    };
  }
}

export function GoogleTranslate() {
  return (
    <>
      <div id="google_translate_element" aria-hidden="true" />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,fr,es',
              autoDisplay: false
            }, 'google_translate_element');
          };
        `}
      </Script>
      <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
    </>
  );
}
