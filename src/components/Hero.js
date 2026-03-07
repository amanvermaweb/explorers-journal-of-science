import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6 pb-16 pt-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-black leading-tight text-primary sm:text-5xl lg:text-6xl dark:text-text-primary">
          The Explorer&#39;s Journal of Science
        </h1>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-secondary/80" />
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg dark:text-text-secondary">
          A global student-led scientific journal dedicated to empowering the next
          generation of researchers. The Explorer&#39;s Journal of Science
          provides a platform for students worldwide to publish research, share
          ideas, and contribute to the advancement of scientific knowledge. Our
          mission is to make scientific publishing accessible to young researchers
          and foster a collaborative global STEM community.
        </p>
      </div>
    </section>
  );
}
