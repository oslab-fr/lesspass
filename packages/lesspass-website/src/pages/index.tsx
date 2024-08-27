import React, { useEffect } from "react";
import { withPrefix } from "gatsby";
import Helmet from "react-helmet";
import GooglePlayBadge from "../images/google-play-badge.png";
import ApplePlayBadge from "../images/download-on-the-App-Store.png";
import FDroidBadge from "../images/get-it-on-fdroid.png";
import ChromeBadge from "../images/get-chrome-badge.png";
import AMOBadge from "../images/get-amo-badge.png";
import CLIBadge from "../images/cli-badge.png";
import HowItWorks from "../images/HowItWorks.png";

export default function IndexPage() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = withPrefix("lesspass.min.js");
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="relative bg-gray-800 overflow-hidden">
        <div className="relative pt-6">
          <header className="mx-auto max-w-7xl px-4">
            <h1 className="text-4xl tracking-tight text-white sm:leading-none lg:text-5xl xl:text-6xl">
              LessPass
            </h1>
          </header>
        </div>
      </div>
      <div className="relative bg-gray-800 overflow-hidden">
        <Helmet>
          <link href="lesspass.min.css" rel="stylesheet" />
        </Helmet>
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <div>
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                      <span className="md:block">Stateless</span>{" "}
                      <span className="md:block">password manager</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Stop wasting your time synchronizing your encrypted vault.
                      Remember one master password to access your passwords,
                      anywhere, anytime, from any device. No sync needed.
                    </p>
                  </div>
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                  <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                    <div
                      style={{ minHeight: "449px" }}
                      className="lesspass--unbordered lesspass--full-width"
                    >
                      <div id="lesspass"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="bg-gray-50 py-16 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Compute your password offline
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                LessPass computes a unique password using a site, login, and a
                master password. You don't need to sync a password vault across
                every device or to the cloud, because LessPass works offline!
              </p>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <img
                className="relative mx-auto"
                width={490}
                src={HowItWorks}
                alt="How it works"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Open Source
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              To us, a password manager is only as secure as it is transparent.
              That's why LessPass is fully open source. Don't just take our word
              for it, take a peek under the hood and see for yourself!
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Commits
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-gray-900">
                2200+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Contributors
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-gray-900">
                50+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Stars
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-gray-900">
                5k
              </dd>
            </div>
          </dl>
        </div>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Use it everywhere
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
              <div className="col-span-1 flex justify-center py-8 px-8">
                <a href="https://play.google.com/store/apps/details?id=com.lesspass.android&hl=en">
                  <img
                    className="max-h-20"
                    src={GooglePlayBadge}
                    alt="Google Play badge"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8">
                <a href="https://apps.apple.com/app/id1531215924">
                  <img
                    className="max-h-20"
                    src={ApplePlayBadge}
                    alt="Apple Play badge"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8">
                <a href="https://f-droid.org/en/packages/com.lesspass.android/">
                  <img
                    className="max-h-20"
                    src={FDroidBadge}
                    alt="FDroid badge"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8">
                <a href="https://chrome.google.com/webstore/detail/lesspass/lcmbpoclaodbgkbjafnkbbinogcbnjih">
                  <img
                    className="max-h-20"
                    src={ChromeBadge}
                    alt="Chrome badge"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8">
                <a href="https://addons.mozilla.org/en-US/firefox/addon/lesspass/">
                  <img className="max-h-16" src={AMOBadge} alt="AMO badge" />
                </a>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8">
                <a href="https://github.com/lesspass/lesspass#cli">
                  <img className="max-h-16" src={CLIBadge} alt="Cli badge" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Recent publications
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Read the latest blog posts from LessPass
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            <div>
              <div>
                <span className="bg-blue-100 text-blue-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium">
                  article
                </span>
              </div>
              <a
                href="https://blog.lesspass.com/2022-12-29/decommissioning-lesspass-database"
                className="block mt-4"
              >
                <p className="text-xl font-semibold text-gray-900">
                  Decommissioning LessPass Database
                </p>
                <p className="mt-3 text-base text-gray-500">
                  LessPass Database server was turned off on March 1th,
                  2023. The static version of LessPass, the web extension and
                  the mobile versions remain in place.
                </p>
              </a>
            </div>
            <div>
              <div>
                <span className="bg-blue-100 text-blue-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium">
                  article
                </span>
              </div>
              <a
                href="https://blog.lesspass.com/2016-11-10/why-lesspass-change-license"
                className="block mt-4"
              >
                <p className="text-xl font-semibold text-gray-900">
                  Why LessPass changed its license?
                </p>
                <p className="mt-3 text-base text-gray-500">
                  An open community starts with a good license. That’s why we
                  decided to change LessPass license from MIT to GPLv3.
                </p>
              </a>
            </div>
            <div>
              <div>
                <span className="bg-blue-100 text-blue-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium">
                  article
                </span>
              </div>
              <a
                href="https://blog.lesspass.com/2016-10-19/how-does-it-work"
                className="block mt-4"
              >
                <p className="text-xl font-semibold text-gray-900">
                  LessPass How Does It Work?
                </p>
                <p className="mt-3 text-base text-gray-500">
                  Managing your Internet passwords is not easy. You probably use
                  a password manager to help you. The system is simple, the tool
                  generates random passwords whenever you need them and saves
                  them into a file protected with a strong password. This system
                  is very robust, you only need to remember one password to rule
                  them all! Now you have a unique password for each site on the
                  Internet.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://twitter.com/guillaume20100"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://github.com/lesspass/lesspass/"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Github</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2015-{currentYear} LessPass. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
