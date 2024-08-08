import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  DatabaseIcon,
  LockIcon,
  MousePointerClickIcon,
  RssIcon,
} from "lucide-react"

import { Button } from "~/components/ui/button"
import { BorderBeam } from "~/components/magicui/border-beam"
import DotPattern from "~/components/magicui/dot-pattern"

export default function Home() {
  return (
    <main>
      <section className="relative">
        <DotPattern className="absolute -z-10 bg-slate-50 fill-neutral-300/60" />

        <div className="container pb-16 pt-32">
          <div className="mx-auto max-w-4xl">
            <h1 className="typography-h1 mx-auto max-w-4xl text-center">
              Our goal is to make Barangay transactions easier for all, one step
              at a time.
            </h1>
            <p className="typography-lead mx-auto mt-6 max-w-4xl text-center leading-8">
              Unified Barangay System is a platform that aims bring barangay
              transactions online. Streamlining the process of transactions
              between the barangay and its residents.
            </p>
          </div>
          <div className="mx-auto mt-6 flex w-fit gap-2">
            <Button>
              <Link href="/request">Get Started</Link>
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
      <section className="container my-24">
        <h2 className="typography-h5 border-none pb-0 text-center">
          About Us<span className="text-primary">.</span>
        </h2>
        <div className="my-16 mt-24 flex w-full justify-between">
          <h3 className="typography-h4 w-96">
            An extension project of the{" "}
            <span className="text-primary">College of Computer Studies</span> of
            the <span className="text-primary">University of Antique</span>.
          </h3>
          <div className="w-1/2">
            <p className="typography-p">
              Unified Barangay System is an extension project of the College of
              Computer Studies. The project aims to streamline the process of
              barangay transactions by bringing it online. The project is an
              initiative of the College of Computer Studies of the University of
              Antique.
            </p>
            <p className="typography-p">
              This extension project benefits the residents of Barangay Catungan
              IV as the identified pilot barangay.
            </p>
          </div>
        </div>
        <div className="my-16 mt-24 flex w-full justify-between">
          <h3 className="typography-h4 w-96">
            Made by <span className="text-primary">students</span> for the
            benefit of the <span className="text-primary">community</span>.
          </h3>
          <div className="w-1/2">
            <p className="typography-p">
              Our team is composed of BS Information Technology students from
              the College of Computer Studies. We are passionate about using
              technology to solve real-world problems and make a positive impact
              on the community.
            </p>
            <p className="typography-p">
              Guided by our instructors and mentors, we developed the Unified
              Barangay System to make an impact. We believe that technology can
              be a powerful tool if used correctly and responsibly.
            </p>
          </div>
        </div>
      </section>
      <section className="my-24 bg-gray-50 py-32">
        <h2 className="typography-h5 container border-none pb-0 text-center">
          Features<span className="text-primary">.</span>
        </h2>
        <div className="container mt-24 grid grid-cols-4 gap-6">
          <div className="flex h-80 flex-col justify-between rounded border bg-white p-6 shadow">
            <div className="w-fit rounded bg-primary p-2">
              <DatabaseIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="typography-large">
                Centralized <span className="text-primary">database</span> of
                resident <span className="text-primary">profiles</span>.
              </h3>
              <p className="mt-4 text-balance text-sm">
                Search for residents and view their profiles. One place to view
                all the information you need to process transactions.
              </p>
            </div>
          </div>
          <div className="flex h-80 flex-col justify-between rounded border bg-white p-6 shadow">
            <div className="w-fit rounded bg-primary p-2">
              <MousePointerClickIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="typography-large">
                Process <span className="text-primary">transactions</span> with
                a few <span className="text-primary">clicks</span>.
              </h3>
              <p className="mt-4 text-balance text-sm">
                No need to fill out forms manually. With a few clicks, documents
                can be requested, proccessed, and printed.
              </p>
            </div>
          </div>
          <div className="flex h-80 flex-col justify-between rounded border bg-white p-6 shadow">
            <div className="w-fit rounded bg-primary p-2">
              <LockIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="typography-large">
                Secured by design with{" "}
                <span className="text-primary">encryption</span> and{" "}
                <span className="text-primary">authentication</span>.
              </h3>
              <p className="mt-4 text-balance text-sm">
                Only authorized users with an account can access the platform.
                And all transactions and data only accessible to authorized
                users.
              </p>
            </div>
          </div>
          <div className="flex h-80 flex-col justify-between rounded border bg-white p-6 shadow">
            <div className="w-fit rounded bg-primary p-2">
              <RssIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="typography-large">
                <span className="text-primary">Accessible</span> anytime,{" "}
                <span className="text-primary">anywhere</span>, on any device.
              </h3>
              <p className="mt-4 text-balance text-sm">
                The platform is accessible anywhere and anytime with an internet
                connection. Just log in with your account and start processing
                transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container my-24">
        <div className="flex w-full justify-between">
          <h3 className="typography-h4 w-96">
            Made with the latest technologies for a{" "}
            <span className="text-primary">secure</span> and{" "}
            <span className="text-primary">reliable</span> experience.
          </h3>
          <div className="w-1/2">
            <p className="typography-p">
              Our priority throughout the development of this project is
              security and reliability. We made sure that the platform is secure
              and well protected from any potential threats. We also made sure
              that the platform is reliable and can handle the demands of the
              users.
            </p>
            <p className="typography-p">
              This is done by using the latest technologies and best practices
              in development. We also test and validate the platform to ensure
              that it is secure and reliable. A crucial part of the development
              process is iterating and improving the platform based on feedback
              from users and stakeholders.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container max-w-4xl">
          <h2 className="typography-h5 container border-none pb-0 text-center">
            Under Active Development<span className="text-primary">.</span>
          </h2>
          <p className="typography-lead mx-auto mt-4 text-center">
            The Unified Barangay System is currently under active development.
            We are continuously improving the platform and adding new features.
            Our goal is to make the platform better and more useful for the
            residents of Barangay Catungan IV.
          </p>
        </div>
      </section>
    </main>
  )
}
