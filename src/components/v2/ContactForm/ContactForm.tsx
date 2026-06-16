"use client";
import { useState } from "react";

const PROJECT_TYPES = [
    "Shopify Store / Theme",
    "Shopify Private App",
    "Web App / Dashboard",
    "ERP / Inventory System",
    "POS System",
    "Landing Page",
    "Template Customization",
    "Other",
];

const BUDGETS = [
    "< Rp 2 jt",
    "Rp 2–5 jt",
    "Rp 5–10 jt",
    "Rp 10–20 jt",
    "> Rp 20 jt",
    "Let's discuss",
];

// ── update these two constants ─────────────────────────────────────────────
const MY_EMAIL   = "hello@kitadevelopers.com";
const WA_NUMBER  = "62XXXXXXXXXX"; // international format, no +
// ──────────────────────────────────────────────────────────────────────────

interface FormData {
    name: string;
    email: string;
    whatsapp: string;
    projectType: string;
    budget: string;
    message: string;
}

const INITIAL: FormData = {
    name: "",
    email: "",
    whatsapp: "",
    projectType: "",
    budget: "",
    message: "",
};

export default function ContactForm() {
    const [form, setForm]     = useState<FormData>(INITIAL);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [sent, setSent]     = useState(false);

    /* ── validation ────────────────────────────────────────────────────── */
    const validate = () => {
        const e: Partial<FormData> = {};
        if (!form.name.trim())
            e.name = "Name is required";
        if (!form.email.trim() && !form.whatsapp.trim())
            e.email = "Provide at least your email or WhatsApp";
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            e.email = "Invalid email address";
        if (!form.projectType)
            e.projectType = "Please select a project type";
        if (!form.message.trim())
            e.message = "Tell me a little about your project";
        return e;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData])
            setErrors(prev => ({ ...prev, [name]: undefined }));
    };

    /* ── build mailto href ─────────────────────────────────────────────── */
    const buildMailto = () => {
        const subject = encodeURIComponent(
            `[KitaDev] New project inquiry — ${form.projectType || "General"}`
        );
        const body = encodeURIComponent(
            `Hi Oki,\n\n` +
            `I found your website and I'm interested in working together.\n\n` +
            `────────────────────────\n` +
            `Name        : ${form.name}\n` +
            `Email       : ${form.email || "—"}\n` +
            `WhatsApp    : ${form.whatsapp ? `+62${form.whatsapp}` : "—"}\n` +
            `Project type: ${form.projectType}\n` +
            `Budget      : ${form.budget || "Not specified"}\n` +
            `────────────────────────\n\n` +
            `Message:\n${form.message}\n\n` +
            `—\nSent via kitadevelopers.com`
        );
        return `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
    };

    /* ── build WhatsApp href ───────────────────────────────────────────── */
    const buildWA = () => {
        const text = encodeURIComponent(
            `Hi Oki! I found your website and I'm interested in your services.\n\n` +
            `*Name*: ${form.name || "—"}\n` +
            `*Project*: ${form.projectType || "—"}\n` +
            `*Budget*: ${form.budget || "—"}\n\n` +
            `${form.message || ""}`
        );
        return `https://wa.me/${WA_NUMBER}?text=${text}`;
    };

    /* ── submit → open mailto ──────────────────────────────────────────── */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }
        window.location.href = buildMailto();
        setSent(true);
    };

    /* ── input styles ──────────────────────────────────────────────────── */
    const inputCls = (field: keyof FormData) =>
        `w-full px-4 py-3 rounded-xl border text-sm bg-white text-[#0d0d0d] ` +
        `placeholder:text-[#aaa] outline-none transition-all duration-200 ` +
        `focus:ring-2 focus:ring-[#e8461e]/30 focus:border-[#e8461e] ` +
        (errors[field]
            ? "border-red-400 bg-red-50"
            : "border-black/15 hover:border-black/30");

    /* ── success state ─────────────────────────────────────────────────── */
    if (sent) {
        return (
            <div className="bg-[#edf7f2] border border-[#1a7a4a]/30 rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-display text-2xl font-bold text-[#0d0d0d] mb-2">
                    Your email app should be opening…
                </h3>
                <p className="text-[#4a4a4a] text-sm mb-6 max-w-sm mx-auto">
                    If nothing opened, email me directly at{" "}
                    <a href={`mailto:${MY_EMAIL}`} className="font-semibold underline text-[#0d0d0d]">
                        {MY_EMAIL}
                    </a>
                    . You can also reach me on WhatsApp below.
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                    <a
                        href={buildWA()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1ebe5c] transition-colors duration-200"
                    >
                        <WAIcon /> Chat on WhatsApp instead
                    </a>
                    <button
                        onClick={() => { setSent(false); setForm(INITIAL); }}
                        className="text-sm text-[#4a4a4a] underline underline-offset-2"
                    >
                        Fill form again
                    </button>
                </div>
            </div>
        );
    }

    /* ── form ──────────────────────────────────────────────────────────── */
    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">

            {/* NAME */}
            <div>
                <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
                    Your Name <span className="text-[#e8461e]">*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Budi Santoso"
                    className={inputCls("name")}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* EMAIL + WHATSAPP */}
            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputCls("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                    <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
                        WhatsApp Number
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#4a4a4a] font-medium select-none">
                            +62
                        </span>
                        <input
                            type="tel"
                            name="whatsapp"
                            value={form.whatsapp}
                            onChange={handleChange}
                            placeholder="8123456789"
                            className={`${inputCls("whatsapp")} pl-12`}
                        />
                    </div>
                </div>
            </div>
            <p className="text-[12px] text-[#8a8a8a] -mt-2">
                Provide at least one — email or WhatsApp.
            </p>

            {/* PROJECT TYPE + BUDGET */}
            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
                        Project Type <span className="text-[#e8461e]">*</span>
                    </label>
                    <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className={`${inputCls("projectType")} appearance-none cursor-pointer`}
                    >
                        <option value="">Select a service…</option>
                        {PROJECT_TYPES.map(pt => (
                            <option key={pt} value={pt}>{pt}</option>
                        ))}
                    </select>
                    {errors.projectType && (
                        <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
                        Estimated Budget
                    </label>
                    <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={`${inputCls("budget")} appearance-none cursor-pointer`}
                    >
                        <option value="">Select a range…</option>
                        {BUDGETS.map(b => (
                            <option key={b} value={b}>{b}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* MESSAGE */}
            <div>
                <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
                    Tell me about your project <span className="text-[#e8461e]">*</span>
                </label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What are you building? What problem does it solve? Any deadline or specific requirements?"
                    className={`${inputCls("message")} resize-none`}
                />
                {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
            </div>

            {/* SUBMIT BUTTONS */}
            <div className="flex gap-3 flex-wrap pt-1">
                <button
                    type="submit"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#e8461e] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-0.5"
                >
                    Send via Email →
                </button>

                <a
                    href={buildWA()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#1ebe5c] hover:-translate-y-0.5"
                >
                    <WAIcon /> WhatsApp Instead
                </a>
            </div>

            <p className="text-[12px] text-[#8a8a8a]">
                "Send via Email" opens your email app pre-filled with your message. "WhatsApp Instead" opens WhatsApp with a pre-written message.
            </p>
        </form>
    );
}

function WAIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}
// "use client";
// import { useState } from "react";

// const PROJECT_TYPES = [
//     "Shopify Store / Theme",
//     "Shopify Private App",
//     "Web App / Dashboard",
//     "ERP / Inventory System",
//     "POS System",
//     "Landing Page",
//     "Template Customization",
//     "Other",
// ];

// const BUDGETS = [
//     "< Rp 2 jt",
//     "Rp 2–5 jt",
//     "Rp 5–10 jt",
//     "Rp 10–20 jt",
//     "> Rp 20 jt",
//     "Let's discuss",
// ];

// type Status = "idle" | "loading" | "success" | "error";

// interface FormData {
//     name: string;
//     email: string;
//     whatsapp: string;
//     projectType: string;
//     budget: string;
//     message: string;
// }

// const INITIAL: FormData = {
//     name: "",
//     email: "",
//     whatsapp: "",
//     projectType: "",
//     budget: "",
//     message: "",
// };

// // ─── replace with your actual Formspree form ID ───────────────────────────
// const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
// // ─── replace with your WhatsApp number (international format, no +) ───────
// const WA_NUMBER = "62XXXXXXXXXX";
// // ──────────────────────────────────────────────────────────────────────────

// export default function ContactForm() {
//     const [form, setForm] = useState<FormData>(INITIAL);
//     const [status, setStatus] = useState<Status>("idle");
//     const [errors, setErrors] = useState<Partial<FormData>>({});

//     const validate = () => {
//         const e: Partial<FormData> = {};
//         if (!form.name.trim()) e.name = "Name is required";
//         if (!form.email.trim() && !form.whatsapp.trim())
//             e.email = "Provide at least email or WhatsApp";
//         if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//             e.email = "Invalid email address";
//         if (!form.projectType) e.projectType = "Please select a project type";
//         if (!form.message.trim()) e.message = "Tell me a little about your project";
//         return e;
//     };

//     const handleChange = (
//         e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//     ) => {
//         const { name, value } = e.target;
//         setForm((prev) => ({ ...prev, [name]: value }));
//         if (errors[name as keyof FormData]) {
//             setErrors((prev) => ({ ...prev, [name]: undefined }));
//         }
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const errs = validate();
//         if (Object.keys(errs).length) {
//             setErrors(errs);
//             return;
//         }

//         setStatus("loading");

//         try {
//             const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json", Accept: "application/json" },
//                 body: JSON.stringify({
//                     name: form.name,
//                     email: form.email || "(not provided)",
//                     whatsapp: form.whatsapp || "(not provided)",
//                     project_type: form.projectType,
//                     budget: form.budget || "Not specified",
//                     message: form.message,
//                 }),
//             });

//             if (res.ok) {
//                 setStatus("success");
//                 setForm(INITIAL);
//             } else {
//                 setStatus("error");
//             }
//         } catch {
//             setStatus("error");
//         }
//     };

//     // Build a pre-filled WhatsApp message so client can also reach via WA
//     const waMessage = encodeURIComponent(
//         `Hi Oki! I'm interested in your services.\n\n` +
//         `Name: ${form.name || "-"}\n` +
//         `Project: ${form.projectType || "-"}\n` +
//         `Budget: ${form.budget || "-"}\n\n` +
//         `${form.message || ""}`
//     );
//     const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

//     const inputClass = (field: keyof FormData) =>
//         `w-full px-4 py-3 rounded-xl border text-sm bg-white text-[#0d0d0d] placeholder:text-[#aaa] outline-none transition-all duration-200 focus:ring-2 focus:ring-[#e8461e]/30 focus:border-[#e8461e] ${
//             errors[field]
//                 ? "border-red-400 bg-red-50"
//                 : "border-black/15 hover:border-black/30"
//         }`;

//     return (
//         <div className="w-full max-w-2xl mx-auto">
//             {status === "success" ? (
//                 <div className="bg-[#edf7f2] border border-[#1a7a4a]/30 rounded-2xl p-10 text-center">
//                     <div className="text-4xl mb-4">✅</div>
//                     <h3 className="font-display text-2xl font-bold text-[#0d0d0d] mb-2">
//                         Message sent!
//                     </h3>
//                     <p className="text-[#4a4a4a] text-sm mb-6">
//                         I'll get back to you within a few hours. You can also reach me directly on WhatsApp.
//                     </p>
//                     <div className="flex gap-3 justify-center flex-wrap">
//                         <a
//                             href={waUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1ebe5c] transition-colors duration-200"
//                         >
//                             <WhatsAppIcon />
//                             Continue on WhatsApp
//                         </a>
//                         <button
//                             onClick={() => setStatus("idle")}
//                             className="text-sm text-[#4a4a4a] underline underline-offset-2"
//                         >
//                             Send another message
//                         </button>
//                     </div>
//                 </div>
//             ) : (
//                 <form onSubmit={handleSubmit} noValidate className="space-y-5">

//                     {/* NAME */}
//                     <div>
//                         <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
//                             Your Name <span className="text-[#e8461e]">*</span>
//                         </label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={form.name}
//                             onChange={handleChange}
//                             placeholder="e.g. Budi Santoso"
//                             className={inputClass("name")}
//                         />
//                         {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//                     </div>

//                     {/* EMAIL + WHATSAPP */}
//                     <div className="grid sm:grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
//                                 Email Address
//                             </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={form.email}
//                                 onChange={handleChange}
//                                 placeholder="you@example.com"
//                                 className={inputClass("email")}
//                             />
//                             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                         </div>
//                         <div>
//                             <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
//                                 WhatsApp Number
//                             </label>
//                             <div className="relative">
//                                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#4a4a4a] font-medium">
//                                     +62
//                                 </span>
//                                 <input
//                                     type="tel"
//                                     name="whatsapp"
//                                     value={form.whatsapp}
//                                     onChange={handleChange}
//                                     placeholder="8123456789"
//                                     className={`${inputClass("whatsapp")} pl-12`}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <p className="text-[12px] text-[#8a8a8a] -mt-2">
//                         At least one contact method (email or WhatsApp) is required.
//                     </p>

//                     {/* PROJECT TYPE + BUDGET */}
//                     <div className="grid sm:grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
//                                 Project Type <span className="text-[#e8461e]">*</span>
//                             </label>
//                             <select
//                                 name="projectType"
//                                 value={form.projectType}
//                                 onChange={handleChange}
//                                 className={`${inputClass("projectType")} appearance-none cursor-pointer`}
//                             >
//                                 <option value="">Select a service...</option>
//                                 {PROJECT_TYPES.map((pt) => (
//                                     <option key={pt} value={pt}>{pt}</option>
//                                 ))}
//                             </select>
//                             {errors.projectType && (
//                                 <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
//                             )}
//                         </div>
//                         <div>
//                             <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
//                                 Estimated Budget
//                             </label>
//                             <select
//                                 name="budget"
//                                 value={form.budget}
//                                 onChange={handleChange}
//                                 className={`${inputClass("budget")} appearance-none cursor-pointer`}
//                             >
//                                 <option value="">Select a range...</option>
//                                 {BUDGETS.map((b) => (
//                                     <option key={b} value={b}>{b}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                     {/* MESSAGE */}
//                     <div>
//                         <label className="block text-sm font-semibold text-[#0d0d0d] mb-1.5">
//                             Tell me about your project <span className="text-[#e8461e]">*</span>
//                         </label>
//                         <textarea
//                             name="message"
//                             value={form.message}
//                             onChange={handleChange}
//                             rows={5}
//                             placeholder="What are you building? What problem does it solve? Any deadline or specific requirements?"
//                             className={`${inputClass("message")} resize-none`}
//                         />
//                         {errors.message && (
//                             <p className="text-red-500 text-xs mt-1">{errors.message}</p>
//                         )}
//                     </div>

//                     {/* SUBMIT BUTTONS */}
//                     <div className="flex gap-3 flex-wrap pt-1">
//                         <button
//                             type="submit"
//                             disabled={status === "loading"}
//                             className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#e8461e] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#c93a18] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
//                         >
//                             {status === "loading" ? (
//                                 <>
//                                     <SpinnerIcon />
//                                     Sending...
//                                 </>
//                             ) : (
//                                 "Send Message →"
//                             )}
//                         </button>

//                         <a
//                             href={waUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:bg-[#1ebe5c] hover:-translate-y-0.5"
//                         >
//                             <WhatsAppIcon />
//                             WhatsApp Instead
//                         </a>
//                     </div>

//                     {status === "error" && (
//                         <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
//                             Something went wrong. Please try again or reach me directly at{" "}
//                             <a href="mailto:hello@kitadevelopers.com" className="underline font-semibold">
//                                 hello@kitadevelopers.com
//                             </a>
//                         </div>
//                     )}
//                 </form>
//             )}
//         </div>
//     );
// }

// function WhatsAppIcon() {
//     return (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//         </svg>
//     );
// }

// function SpinnerIcon() {
//     return (
//         <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//         </svg>
//     );
// }