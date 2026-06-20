
"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function QuoteModal() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    console.log({
      name,
      phone,
      email,
      service,
      from,
      to,
    });

    alert("Quote Request Submitted!");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Get Free Quote
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Get Free Quote
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          >
            <option value="">Select Service</option>
            <option>Home Shifting</option>
            <option>Office Relocation</option>
            <option>Local Moving</option>
            <option>Intercity Relocation</option>
            <option>Bike Transport</option>
            <option>Car Transport</option>
          </select>

          <input
            type="text"
            placeholder="Moving From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Moving To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Submit Request
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}