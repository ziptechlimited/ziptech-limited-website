export type ContactStatus = "idle" | "sending" | "sent" | "error";

export async function sendContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Contact form failed with ${res.status}`);
}
