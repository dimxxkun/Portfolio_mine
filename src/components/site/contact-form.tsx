"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";

const CONTACT_EMAIL = "work.abdulfatai@gmail.com";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ email?: string; message?: string }>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        validateField(name as keyof typeof formData, value);
    };

    const validateField = (field: keyof typeof formData, value: string) => {
        setErrors((prev) => {
            const next = { ...prev };
            if (field === "email") {
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    next.email = "Enter a valid email address.";
                } else {
                    delete next.email;
                }
            }
            if (field === "message") {
                if (!value.trim()) {
                    next.message = "Please include a short message.";
                } else {
                    delete next.message;
                }
            }
            return next;
        });
    };

    const validateForm = () => {
        const nextErrors: typeof errors = {};
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            nextErrors.email = "Enter a valid email address.";
        }
        if (!formData.message.trim()) {
            nextErrors.message = "Please include a short message.";
        }
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateForm()) {
            setErrorMessage("Please fix the highlighted fields.");
            setStatus("error");
            return;
        }

        setStatus("loading");
        setErrorMessage(null);
        const subject = encodeURIComponent(
            `Portfolio inquiry from ${formData.name || "Visitor"}`
        );
        const bodyLines = [
            `Name: ${formData.name || "Not provided"}`,
            `Email: ${formData.email || "Not provided"}`,
            "",
            formData.message,
        ];
        const body = encodeURIComponent(bodyLines.join("\n"));
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    className={errors.email ? "border-red-500" : undefined}
                />
                {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                )}
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Share a bit about your project or question..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    className={errors.message ? "border-red-500" : undefined}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{formData.message.length}/1000</span>
                    {errors.message ? (
                        <span className="text-red-500">{errors.message}</span>
                    ) : (
                        <span>Share context or timelines if you have them.</span>
                    )}
                </div>
            </div>
            <Button
                type="submit"
                className="w-full gap-2"
                disabled={status === "loading"}
            >
                <Send className="h-4 w-4" />
                {status === "loading" ? "Opening email..." : "Send Message"}
            </Button>
            {status === "success" && (
                <p className="flex items-center justify-center gap-2 text-sm text-green-500" role="status" aria-live="polite">
                    <CheckCircle2 className="h-4 w-4" />
                    Thanks! Your email app should be open—send it whenever you&apos;re ready.
                </p>
            )}
            {status === "error" && errorMessage && (
                <p className="flex items-center justify-center gap-2 text-sm text-red-500" role="status" aria-live="assertive">
                    <AlertCircle className="h-4 w-4" />
                    {errorMessage}
                </p>
            )}
        </form>
    );
}

