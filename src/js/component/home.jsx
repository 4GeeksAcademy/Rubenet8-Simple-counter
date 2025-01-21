import React, { useState, useEffect } from "react";

// Código
const Counter = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        // Limpieza del intervalo
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="Counter"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#007bff",
                padding: "20px 40px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "200px",
                height: "80px",
                textAlign: "center",
            }}
        >
            {count}
        </div>
    );
};

// Export
export default Counter;