import React from "react";
import { Provider, Balancer } from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";

import { Button } from "~/components/ui/button";
import { BorderBeam } from "~/components/magicui/border-beam";
import DotPattern from "~/components/magicui/dot-pattern";

export default function Home() {
  return (
    <main className="mb-16">
      <section className="relative">
        <DotPattern className="absolute -z-10 bg-slate-50 fill-neutral-300/60" />

        <div className="container pb-16 pt-32">
          <Provider>
            <h1 className="typography-h1 mx-auto max-w-4xl text-center">
              <Balancer>Barangay documents right at your fingertips.</Balancer>
            </h1>
            <p className="typography-lead mx-auto mt-6 max-w-4xl text-center leading-8">
              <Balancer>
                The Unified Barangay System is a web-based application that
                allows you to request your barangay documents online.
              </Balancer>
            </p>
          </Provider>
          <div className="mx-auto mt-6 flex w-fit gap-2">
            <Button>
              <Link href="/request">Request Documents</Link>
            </Button>
            <Button variant={"secondary"}>
              <Link href="#learn">Learn More</Link>
            </Button>
          </div>
          <div className="relative mt-8 aspect-[16/7.5] w-full rounded-xl border shadow-lg">
            <Image
              className="rounded-xl object-cover object-top"
              src="/image/hero-image.png"
              fill
              alt="Screenshot of interface."
            />
            <div className="absolute left-2.5 top-2.5 flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <BorderBeam size={250} duration={10} delay={9} />
          </div>
        </div>
      </section>
      <section className="my-32">
        <h2 className="typography-h2 border-none text-center">
          Request your documents online.
        </h2>
        <p className="typography-lead mx-auto mt-4 max-w-3xl text-center">
          Our goal is to make it easier for you to request your barangay
          document. Now possible with the Unified Barangay System.
        </p>
      </section>
    </main>
  );
}
