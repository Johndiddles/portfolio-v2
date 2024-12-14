"use client";
import React, { useEffect, useRef, useState } from "react";
import { PillButton } from "../Buttons/Buttons";
import { useToast } from "@/hooks/use-toast";
import { emailRegex } from "@/lib/utils";

const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const { toast } = useToast();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const clearErrors = () => setFormErrors({ name: "", email: "", message: "" });

  const clearForm = () =>
    setFormDetails({
      name: "",
      email: "",
      message: "",
    });

  const onSubmit = async () => {
    clearErrors();
    try {
      if (!validateForm()) {
        return;
      }
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formDetails),
      });
      const data = await response.json();
      console.log({ data });

      if (data.status === "success") {
        toast({
          title: "Thanks for reaching out 🎉!",
          description:
            "Your message was received successfully. Expect a response shortly.",
        });
        clearForm();
        onClose();
      } else {
        toast({
          title: "Oooops 😢!",
          description:
            "Sorry we couldn't deliver that message, please try again shortly",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const validateForm = () => {
    if (!formDetails?.name) {
      toast({
        title: "Name is required!",
        description: "Please enter your name",
        variant: "destructive",
      });
      setFormErrors((prev) => ({
        ...prev,
        name: "Name is required!",
      }));
      return false;
    }

    if (formDetails?.name?.length < 2) {
      toast({
        title: "Name is required!",
        description: "Please a valid name",
        variant: "destructive",
      });
      setFormErrors((prev) => ({
        ...prev,
        name: "Please, enter a valid name!",
      }));
      return false;
    }

    if (!formDetails?.email) {
      toast({
        title: "Email is required!",
        description: "Please enter your email",
        variant: "destructive",
      });
      setFormErrors((prev) => ({
        ...prev,
        email: "Email is required",
      }));
      return false;
    }
    if (!emailRegex.test(formDetails?.email)) {
      toast({
        title: "Email is required!",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setFormErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address!",
      }));
      return false;
    }

    if (!formDetails?.message) {
      toast({
        title: "Message is required!",
        description: "Please enter your message",
        variant: "destructive",
      });
      setFormErrors((prev) => ({ ...prev, message: "Message is required." }));
      return false;
    }
    if (formDetails?.message?.split(" ").length < 5) {
      toast({
        title: "Message is too short!",
        description: "Please enter a valid message",
        variant: "destructive",
      });
      setFormErrors((prev) => ({ ...prev, message: "Message is too short!" }));
      return false;
    }
    if (formDetails?.message?.split(" ").length > 300) {
      toast({
        title: "Message is too long!",
        description: "Please consider sending a concise message!",
        variant: "destructive",
      });
      setFormErrors((prev) => ({ ...prev, message: "Message is too long." }));
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (!!formErrors.name && nameRef.current) {
      nameRef.current.focus();
      return;
    }
    if (!!formErrors.email && emailRef.current) {
      emailRef.current.focus();
      return;
    }
    if (!!formErrors.message && messageRef.current) {
      messageRef.current.focus();
      return;
    }
  }, [formErrors, nameRef, emailRef, messageRef]);

  return (
    <div className="flex flex-col gap-4 md:gap-8 mt-8">
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="font-jost font-semibold text-sm uppercase"
        >
          Name
        </label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          id="name"
          value={formDetails.name}
          onChange={(e) =>
            setFormDetails({ ...formDetails, name: e.target.value })
          }
          placeholder="Your Name"
          className="border-b border-[#1E1E1E] rounded-md p-3 font-poppins text-sm md:text-base outline-none focus:border-b-[#C47B54]"
        />
        {!!formErrors.name && <FormInputErrorText error={formErrors.name} />}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="font-jost font-semibold text-sm uppercase"
        >
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          value={formDetails.email}
          onChange={(e) =>
            setFormDetails({ ...formDetails, email: e.target.value })
          }
          placeholder="name@email.com"
          className="border-b border-[#1E1E1E] rounded-md p-3 font-poppins text-sm md:text-base outline-none focus:border-b-[#C47B54]"
        />

        {!!formErrors.email && <FormInputErrorText error={formErrors.email} />}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="font-jost font-semibold text-sm uppercase"
        >
          Message
        </label>
        <textarea
          ref={messageRef}
          name="message"
          id="message"
          value={formDetails.message}
          onChange={(e) =>
            setFormDetails({ ...formDetails, message: e.target.value })
          }
          placeholder="What would like us to work on together?"
          className="border-b border-[#1E1E1E] rounded-md p-3 font-poppins text-sm md:text-base outline-none focus:border-b-[#C47B54]"
          rows={4}
        />
        {!!formErrors.message && (
          <FormInputErrorText error={formErrors.message} />
        )}
      </div>

      <PillButton
        variant="fill"
        text="Submit"
        customStyle="font-bold font-poppins"
        onClick={onSubmit}
      />
    </div>
  );
};

export default ContactForm;

const FormInputErrorText = ({ error }: { error: string }) => {
  return (
    <p className="text-red-700 font-inter text-sm font-semibold mt-2">
      {error}
    </p>
  );
};
