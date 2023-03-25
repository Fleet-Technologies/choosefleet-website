import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "preload",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Overpass&family=Rubik:wght@400;500;700&display=swap"
  },
  {
    rel: "manifest",
    href: "/favicons-v2/site.webmanifest"
  },
  {
    rel: "icon",
    type: 'image/x-icon',
    href: "/favicon.ico"
  },
  {
    rel: "icon",
    type: 'image/png',
    size: 16,
    href: "/favicons-v2/favicon-16x16.png"
  },
  {
    rel: "icon",
    type: 'image/png',
    size: 32,
    href: "/favicons-v2/favicon-32x32.png"
  },

  {
    rel: "apple-touch-icon",
    type: "image/png",
    href: "/apple-touch-icon.png"
  }
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Fleet Tech",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>

    </html>
  );
}
