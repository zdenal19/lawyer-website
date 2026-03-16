"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { sendContactEmail, type ContactFormData } from "@/lib/email";

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setError(null);
    try {
      const response = await sendContactEmail(data);
      if (response.success) {
        setIsSuccess(true);
        setSuccessMessage(response.message);
        reset();
      } else {
        setError(response.message || "Doslo k chybe pri odesilani zpravy.");
      }
    } catch {
      setError("Doslo k neocekovane chybe. Zkuste to prosim znovu.");
    }
  };

  const inputClasses =
    "w-full bg-[#141414] border border-[#333] rounded-lg px-4 py-3 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C] transition-colors";
  const labelClasses =
    "block text-sm text-gray-400 uppercase tracking-wider mb-2";
  const errorClasses = "text-red-400 text-sm mt-1";

  if (isSuccess) {
    return (
      <div className="bg-[#141414] border border-[#1a1a1a] rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-serif text-2xl text-[#F5F0E8] mb-2">
          Zprava odeslana
        </h3>
        <p className="text-gray-400">{successMessage}</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-[#C9A84C] hover:text-[#b8993f] underline underline-offset-4 transition-colors"
        >
          Odeslat dalsi zpravu
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#141414] border border-[#1a1a1a] rounded-2xl p-8 space-y-6"
      noValidate
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClasses}>
          Jmeno a prijmeni
        </label>
        <input
          id="name"
          type="text"
          placeholder="Jan Novak"
          className={inputClasses}
          {...register("name", {
            required: "Jmeno je povinne",
          })}
        />
        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="jan@priklad.cz"
          className={inputClasses}
          {...register("email", {
            required: "E-mail je povinny",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Zadejte platnou e-mailovou adresu",
            },
          })}
        />
        {errors.email && (
          <p className={errorClasses}>{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClasses}>
          Telefon (volitelne)
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+420 123 456 789"
          className={inputClasses}
          {...register("phone")}
        />
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className={labelClasses}>
          Typ sluzby
        </label>
        <select
          id="serviceType"
          className={inputClasses}
          {...register("serviceType")}
        >
          <option value="">Vyberte sluzbu</option>
          <option value="obcanske">Občanské právo</option>
          <option value="rodinne">Rodinné právo</option>
          <option value="pracovni">Pracovní právo</option>
          <option value="obchodni">Obchodní právo</option>
          <option value="trestni">Trestní právo</option>
          <option value="spravni">Správní právo</option>
          <option value="jine">Jiné</option>
          <option value="druzstevni">Druzstevni byty</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Zprava
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Popiste svuj pozadavek..."
          className={`${inputClasses} resize-none`}
          {...register("message", {
            required: "Zprava je povinna",
            minLength: {
              value: 10,
              message: "Zprava musi mit alespon 10 znaku",
            },
          })}
        />
        {errors.message && (
          <p className={errorClasses}>{errors.message.message}</p>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8993f] disabled:opacity-50 disabled:cursor-not-allowed text-[#0A0A0A] font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Odesilam...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Odeslat zpravu
          </>
        )}
      </button>
    </form>
  );
}
