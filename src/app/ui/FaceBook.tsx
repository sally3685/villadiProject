"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbAsyncInit?: () => void;
    FB: {
      init: (options: {
        appId: string;
        autoLogAppEvents: boolean;
        xfbml: boolean;
        version: string;
      }) => void;
      XFBML: {
        parse: (element?: HTMLElement) => void;
      };
    };
  }
}

export default function FacebookFeed() {
  useEffect(() => {
    // Function to load the SDK and initialize FB
    const loadFbSdk = () => {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "YOUR-PROJECT-ID-HERE", // Replace with your Facebook App ID
          autoLogAppEvents: true,
          xfbml: true,
          version: "v20.0", // Ensure this is up-to-date with Facebook's current SDK version
        });

        // Parse the FB elements in the document after initialization
        window.FB.XFBML.parse();
      };

      // Load the SDK asynchronously
      ((d: Document, s: string, id: string) => {
        let js: HTMLScriptElement | null = d.getElementById(
          id
        ) as HTMLScriptElement | null;
        const fjs = d.getElementsByTagName(s)[0];
        if (js) return;
        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode?.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    };

    // Check if the SDK is already loaded, if not, load it
    if (typeof window.FB === "undefined") {
      loadFbSdk();
    } else {
      // Parse the FB elements in the document again (for page re-visits)
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="w-full h-full">
      <div
        className="fb-page w-full h-full"
        data-href="https://www.facebook.com/sallo.sesop/"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </div>
  );
}
