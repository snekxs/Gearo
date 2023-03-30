import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <div className="fourohfour">
        <h1>Oops.</h1>
        <h2>Page Not Found</h2>
        <Link className="back" href="/">
          Go Back
        </Link>
      </div>
    </>
  );
}
