import { useState } from "react"

function OtpGenerate() {
    const [otp, setOtp] = useState('')

    const generateOtp = () => {
        const randomOtp = Math.floor(100000 + Math.random() * 999999)
        setOtp(randomOtp)
    }

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <input
                    type="text"
                    placeholder="OTP"
                    value={otp}
                    readOnly
                    style={{ padding: "8px", fontSize: "16px", textAlign: "center" }}
                />
                <br />
                <button
                    onClick={generateOtp}
                    style={{
                        marginTop: "10px",
                        padding: "8px 16px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Generate OTP
                </button>
            </div>
        </>
    )
}

export default OtpGenerate