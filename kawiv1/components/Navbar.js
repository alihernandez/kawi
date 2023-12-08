import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/careers">Careers</Link>
                </li>
            </ul>
        </div>
    )
}