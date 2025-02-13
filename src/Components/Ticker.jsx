import { useEffect, useRef } from "react";

const Ticker = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    widgetRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "BSE:ITC", title: "ITC" },
        { proName: "BSE:WIPRO", title: "WIPRO" },
        { proName: "BSE:INFY", title: "INFY" },
        { proName: "BSE:BAJFINANCE", title: "BAJFINANCE" },
        { proName: "BSE:WIPRO", title: "WIPRO" },
        { proName: "BSE:TATASTEEL", title: "TATASTEEL" },
        { proName: "BSE:ABCAPITAL", title: "ABCAPITAL" },
        { proName: "BSE:AMBUJACEM", title: "AMBUJACEM" },
        { proName: "BSE:TITAN", title: "TITAN" },
        { proName: "BSE:MARUTI", title: "MARUTI" },
        { proName: "BSE:SUNPHARMA", title: "SUNPHARMA" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    widgetRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={widgetRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default Ticker;
