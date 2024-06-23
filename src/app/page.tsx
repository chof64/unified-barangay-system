import React from "react";
import { Provider, Balancer } from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";

import { Button } from "~/components/ui/button";
import { BorderBeam } from "~/components/magicui/border-beam";

export default function Home() {
  return (
    <main className="mb-16">
      <section className="bg-slate-50">
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
            <Button variant={"secondary"}>
              <Link href="#learn">Learn More</Link>
            </Button>
            <Button>
              <Link href="/request">Request Documents</Link>
            </Button>
          </div>
          <div className="relative mt-8 aspect-[16/7.5] w-full rounded-2xl border">
            <Image
              className="rounded-2xl object-cover object-top"
              src="/image/hero-image.png"
              fill
              alt="Screenshot of interface."
            />
            <BorderBeam size={250} duration={4} delay={9} />
          </div>
        </div>
      </section>
      <section className="mt-32">
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
