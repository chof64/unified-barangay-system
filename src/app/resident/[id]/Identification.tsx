"use client";

import React from "react";

import RegisterId from "./RegisterId";

export default function Identification() {
  return (
    <section className="my-16 border-t pt-16">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-8">
        <div className="lg:w-1/2">
          <div className="max-w-md">
            <h1 className="typography-h5">Identification</h1>
            <p className="typography-small mt-3 text-neutral-500">
              Verified identification cards and documents of the resident.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div></div>
          <div>
            <RegisterId />
          </div>
        </div>
      </div>
    </section>
  );
}
