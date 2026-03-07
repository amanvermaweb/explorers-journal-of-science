import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 w-3/4 mt-4 mx-auto flex items-center justify-between py-6 px-3 border border-gray-300 rounded-3xl bg-white/10 backdrop-blur-sm">
      <Link href="#hero">Hero</Link>
      <Link href="#about">About</Link>
      <Link href="#submission">Submission</Link>
      <Link href="#team">Team</Link>
      <Link href="#partners">Partners</Link>
      <Link href="#contact">Contact</Link>
      <Link href="#footer">Footer</Link>
    </div>
  );
}
