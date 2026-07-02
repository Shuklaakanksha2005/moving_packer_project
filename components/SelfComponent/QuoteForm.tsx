"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import {
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";

type QuoteFormProps = {
  closeDialog: () => void;
};

export default function QuoteForm({ closeDialog }: QuoteFormProps) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const formData = {
    name,
    phone,
    email,
    pickup,
    drop,
    moveDate: date,
    service,
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxO9nIV69rBzaMfxnxWz6yGZkpaGx8Bu-VOdKFnQHzUD9-bI3Ev61jaJfuyvnIAI-ff/exec",
      {
        method: "POST",
        headers: {
          // Using text/plain avoids the browser's CORS preflight
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      }
    );

    alert("Quote submitted successfully!");

    setName("");
    setPhone("");
    setEmail("");
    setPickup("");
    setDrop("");
    setDate("");
    setService("");

    closeDialog();

  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
}


  return (
    

        <Card className="rounded-6xl">

          <CardContent className="p-8">

            <h2 className="text-3xl font-bold mb-8">
              Get Your Free Moving Quote
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label>Name</label>

                  <Input
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label>Phone Number</label>

                  <Input
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

              </div>

              <div>

                <label>Email</label>

                <Input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>

                  <label>Pickup Location</label>

                  <div className="relative">

                    <MapPin
                      size={18}
                      className="absolute left-3 top-3 text-slate-400"
                    />

                    <Input
                      className="pl-10"
                      placeholder="Pickup location"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />

                  </div>

                </div>

                <div>

                  <label>Drop Location</label>

                  <div className="relative">

                    <MapPin
                      size={18}
                      className="absolute left-3 top-3 text-slate-400"
                    />

                    <Input
                      className="pl-10"
                      placeholder="Drop location"
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                    />

                  </div>

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>

                  <label>Move Date</label>

                  <div className="relative">

                    <Calendar
                      size={18}
                      className="absolute left-3 top-3 text-slate-400"
                    />

                    <Input
                      type="date"
                      className="pl-10"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />

                  </div>

                </div>

                <div>

                  <label>Service</label>

                  <Select onValueChange={setService}>

                    <SelectTrigger>

                      <SelectValue placeholder="Select Service" />

                    </SelectTrigger>

                    <SelectContent>

                      <SelectItem value="Home Shifting">
                        Home Shifting
                      </SelectItem>

                      <SelectItem value="Office Relocation">
                        Office Relocation
                      </SelectItem>

                      <SelectItem value="Bike Transport">
                        Bike Transport
                      </SelectItem>

                      <SelectItem value="Car Transport">
                        Car Transport
                      </SelectItem>

                      <SelectItem value="Packing & Unpacking">
                        Packing & Unpacking
                      </SelectItem>

                      <SelectItem value="Local Shifting">
                        Local Shifting
                      </SelectItem>

                    </SelectContent>

                  </Select>

                </div>

              </div>

              <Button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

            </form>

          </CardContent>

        </Card>

      
  );
}