import type {
  LoaderArgs,
  V2_MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";
import i18next from "./i18n/i18n.server";


type LoaderData = { locale: string };

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Remix i18n' },
    { name: 'description', content: 'Remix i18n sample app' },
  ]
}

export const loader = async ({ request }: LoaderArgs) => {
  let locale = await i18next.getLocale(request);
  return json<LoaderData>({ locale });
};

export const handle = {
  i18n: "common",
}

export default function Root() {
  // Get the locale from the loader
  let { locale } = useLoaderData<LoaderData>();
  let { i18n } = useTranslation('common');

  useChangeLanguage(locale);

  return (
    <html lang={i18n.resolvedLanguage} dir={i18n.dir()}>
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