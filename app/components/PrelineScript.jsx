"use client";

import { useEffect } from "react";

export default function PrelineScript() {
    useEffect(() => {
        const loadPreline = async () => {
            await import("preline/preline");
            window.HSStaticMethods.autoInit();
        };
        loadPreline();
    }, []);
    return null;
}
