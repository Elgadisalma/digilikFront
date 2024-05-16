import React, { useState, useEffect } from "react";
import "../App.css";

const Reloader = () => {
  const [showReloader, setShowReloader] = useState(false);

  useEffect(() => {
    // Affiche le reloader lorsque le composant est monté
    setShowReloader(true);

    // Masque le reloader après 3 secondes
    const timer = setTimeout(() => {
      setShowReloader(false);
    }, 3000);

    return () => clearTimeout(timer); // Nettoie le timer lorsque le composant est démonté
  }, []);

  return (
    <div
      style={{
        display: showReloader ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 1)", // Fond noir transparent
        zIndex: 9999,
        textAlign: "center",
        flexDirection: "column",
        
      }} 
      className="pt-72 pb-20 h-full"
    >
  <section>
  <div class="loading loading06">
    <span data-text="D">D</span>
    <span data-text="i">i</span>
	<span data-text="G">G</span>
    <span data-text="i">i</span>
    <span data-text="l">l</span>
    <span data-text="i">i</span>
    <span data-text="k">k</span>
  </div>
</section>

    </div>
  );
};

export default Reloader;
