import React, { useEffect, useState } from "react";
export default function App() {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);
    console.log(offset);
    return (
        <div>
            {Array(100)
                .fill()
                .map((_, i) => (
                    <p>{i}</p>
                ))}
        </div>
    );
}