"use client";
import { useEffect, useState } from "react";

export default function PageGuard({ children }: { children: React.ReactNode }) {
    const [answer, setAnswer] = useState("");
    const [wrong, setWrong] = useState(0);
    const [time, setTime] = useState(30);
    const [pass, setPass] = useState(false);

    useEffect(() => {
        if (pass) return;
        const timer = setInterval(() => {
            setTime(t => {
                if (t <= 1) {
                    window.location.href = "/";
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [pass]);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (answer.toLowerCase().trim() === "dart vader") {
            setPass(true);
            return;
        }

        const count = wrong + 1;
        setWrong(count);
        setAnswer("");

        if (count >= 3) window.location.href = "/";
    };

    return (
        <>
            {children}

            {!pass && (
                <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl w-[350px]">
                        <h2 className="text-xl font-bold mb-4">Who are you?</h2>

                        <form onSubmit={submit}>
                            <input
                                value={answer}
                                onChange={e => setAnswer(e.target.value)}
                                className="border p-2 w-full rounded"
                                placeholder="Answer..."
                            />

                            <button className="bg-black text-white w-full mt-3 p-2 rounded">
                                Submit
                            </button>
                        </form>

                        <p className="mt-3 text-sm">
                            Wrong: {wrong}/3 <br />
                            Redirect: {time}s
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}