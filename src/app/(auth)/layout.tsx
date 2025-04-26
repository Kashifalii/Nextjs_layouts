import { Metadata } from "next";
import AuthFooter from "../_components/authFooter"
import "../globals.css";

export const metadata: Metadata = {
 title: {
    default: "Registrations to Next.js Layouts",
    template: "%s | Next.js Layouts",
  },
  description: "Next.js Layouts Registrations",
}


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}<AuthFooter/></body>
    </html>
  )
}
