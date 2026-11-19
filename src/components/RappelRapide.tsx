"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitCallback, type CallbackState } from "@/app/actions";
import { track } from "@/lib/track";

const INPUT_CLASS =
  "mt-1 w-full rounded-lg border border-neutral-100 px-3 py-2 text-sm outline-none focus:border-navy";

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-orange px-6 py-3 font-heading font-semibold text-white transition hover:brightness-95 disabled:opacity-60"
    >
      {pending ? "Envoi en cours..." : label}
    </button>
  );
}

const initialCallbackState: CallbackState = { status: "idle", message: "" };

/** Demande de rappel en trois champs, pour ceux qui ne veulent pas remplir le comparateur. */
export function RappelRapide({ source, intro }: { source: string; intro: string }) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(submitCallback, initialCallbackState);

  useEffect(() => {
    if (state.status === "success") track("generate_lead", { lead_source: "rappel_rapide" });
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl bg-navy/5 p-5 text-sm font-medium text-navy">{state.message}</div>
    );
  }

  return (
    <div className="rounded-2xl border border-navy/15 bg-navy/5 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-neutral-900">
          {intro} Appelez le{" "}
          <a href="tel:+33164248345" className="font-semibold text-navy underline">
            01 64 24 83 45
          </a>
          .
        </p>
        {!open && (
          <button
            type="button"
            onClick={() => {
              setOpen(true);
              track("rappel_rapide_ouvert");
            }}
            className="rounded-full border border-navy px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            Être rappelé
          </button>
        )}
      </div>

      {open && (
        <form action={formAction} className="mt-4 space-y-4">
          <input type="hidden" name="source" value={source} />
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="rr-firstname" className="text-sm font-medium text-neutral-900">Prénom</label>
              <input id="rr-firstname" name="firstname" type="text" required autoComplete="given-name" className={INPUT_CLASS} />
              {state.fieldErrors?.firstname && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.firstname}</p>}
            </div>
            <div>
              <label htmlFor="rr-phone" className="text-sm font-medium text-neutral-900">Téléphone</label>
              <input id="rr-phone" name="phone" type="tel" required autoComplete="tel" className={INPUT_CLASS} />
              {state.fieldErrors?.phone && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.phone}</p>}
            </div>
            <div>
              <label htmlFor="rr-email" className="text-sm font-medium text-neutral-900">E-mail</label>
              <input id="rr-email" name="email" type="email" required autoComplete="email" className={INPUT_CLASS} />
              {state.fieldErrors?.email && <p className="mt-1 text-sm text-red-600">{state.fieldErrors.email}</p>}
            </div>
          </div>
          {state.status === "error" && (
            <p className="text-sm text-red-600" role="alert" aria-live="polite">
              {state.message}
            </p>
          )}
          <p className="text-xs text-neutral-900/50">
            Vos coordonnées sont utilisées par CP Solutions uniquement pour vous rappeler, conformément à notre
            politique de confidentialité.
          </p>
          <SubmitButton label="Me faire rappeler" />
        </form>
      )}
    </div>
  );
}
