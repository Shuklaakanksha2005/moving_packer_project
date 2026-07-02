"use client";

import { useState } from "react";
import { Dialog,DialogHeader, DialogTitle ,DialogContent } from "@/components/ui/dialog";
import QuoteForm from "./QuoteForm";

type QuoteDialogProps = {
  children: React.ReactNode;
};

export default function QuoteDialog({
  children,
}: QuoteDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)}>
        {children}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
       <DialogContent className="max-w-4xl p-0 border-0 bg-transparent shadow-none">

  <DialogHeader>
    <DialogTitle className="hidden">
      Get Free Quote
    </DialogTitle>
  </DialogHeader>

  <QuoteForm closeDialog={() => setOpen(false)} />

</DialogContent>
      </Dialog>
    </>
  );
}