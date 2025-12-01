import React from "react";

interface Props {
    children: React.ReactNode;
}

// Toggle maintenance mode here
const MAINTENANCE_MODE = true;
// Set to false to restore website instantly

const MaintenanceWrapper: React.FC<Props> = ({ children }) => {
    if (MAINTENANCE_MODE) {
        return (
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "20px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    zIndex: 9999,
                    overflow: "hidden"
                }}
            >
                {/* Animated background circles */}
                <div
                    style={{
                        position: "absolute",
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.1)",
                        top: "-150px",
                        right: "-150px",
                        animation: "pulse 4s ease-in-out infinite"
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.1)",
                        bottom: "-100px",
                        left: "-100px",
                        animation: "pulse 3s ease-in-out infinite"
                    }}
                />

                {/* Main content */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        maxWidth: "600px",
                        background: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "20px",
                        padding: "60px 40px",
                        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                        backdropFilter: "blur(10px)"
                    }}
                >
                    {/* Animated spinner */}
                    <div
                        style={{
                            width: "80px",
                            height: "80px",
                            margin: "0 auto 30px",
                            border: "6px solid #f3f3f3",
                            borderTop: "6px solid #667eea",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite"
                        }}
                    />

                    <h1
                        style={{
                            fontSize: "42px",
                            fontWeight: "bold",
                            marginBottom: "20px",
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            lineHeight: "1.2"
                        }}
                    >
                        We'll be back soon!
                    </h1>

                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: "28px",
                            color: "#4a5568",
                            marginBottom: "30px"
                        }}
                    >
                        Our website is currently undergoing scheduled maintenance
                        to bring you an even better experience.
                    </p>

                    <p
                        style={{
                            fontSize: "16px",
                            color: "#718096",
                            lineHeight: "24px"
                        }}
                    >
                        We apologize for any inconvenience and appreciate your patience.
                        Please check back shortly.
                    </p>

                    {/* Progress bar animation */}
                    <div
                        style={{
                            marginTop: "40px",
                            width: "100%",
                            height: "4px",
                            background: "#e2e8f0",
                            borderRadius: "2px",
                            overflow: "hidden"
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                                borderRadius: "2px",
                                animation: "progress 2s ease-in-out infinite"
                            }}
                        />
                    </div>
                </div>

                {/* CSS Animations */}
                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    @keyframes pulse {
                        0%, 100% { transform: scale(1); opacity: 0.5; }
                        50% { transform: scale(1.1); opacity: 0.8; }
                    }
                    @keyframes progress {
                        0% { transform: translateX(-100%); }
                        50% { transform: translateX(0%); }
                        100% { transform: translateX(100%); }
                    }
                `}</style>
            </div>
        );
    }

    return <>{children}</>;
};

export default MaintenanceWrapper;
