import Link from "next/link";

export default function Success() {
    return (
        <main>
            <h1>Message sent successfully!</h1>
            <Link className="btn" href="/">Back Home</Link>
        </main>
    )
}