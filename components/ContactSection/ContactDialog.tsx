"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

const ContactDialog = ({
  TriggerComponent,
}: {
  TriggerComponent: React.ReactNode;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {TriggerComponent}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-jost text-xl md:text2xl lg:text-3xl">
            Hello!
          </DialogTitle>
          <DialogDescription className="font-poppins text-sm ">
            Let&apos;s make something together!
          </DialogDescription>
        </DialogHeader>

        <ContactForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
