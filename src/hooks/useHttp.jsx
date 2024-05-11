import { useState, useCallback, useEffect } from "react";
import { useAuth } from "../contexts/auth";
import { useToast } from "../components/Toast/Toast";

export const useHttp = () => {
    const showToast = useToast();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const { token } = useAuth();

    const sendRequest = useCallback(async (url, method = "GET", body = null, headers = {}) => {
        setLoading(true);
        try {
            if (body) {
                body = JSON.stringify(body);
                headers["Content-Type"] = "application/json";
            }

            if (method === "GET") {
                body = null;
            }

            if (token) {
                headers.Authorization = token;
            }

            const response = await fetch(process.env.BACKEND_URL
                + url, { method, body, headers });
            const responseData = await response.json();

            if (!response.ok) {
                setError(responseData.error || responseData.message || "Something went wrong");
                showToast(responseData.error || responseData.message || "Something went wrong", "error");
                setLoading(false);
                return;
            } else {
                if (responseData.message) {
                    showToast(responseData.message && responseData.message, "success");
                };
            }
            setData(responseData);
            setLoading(false);
            return responseData;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }, [token]);

    const clearError = () => setError(null);

    useEffect(() => {
        return () => {
            setLoading(false);
            setError(null);
            setData(null);
        };
    }, []);

    return { loading, sendRequest, error, clearError, data };
};