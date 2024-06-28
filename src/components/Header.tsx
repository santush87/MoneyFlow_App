import { Link, useNavigate } from "react-router-dom";
import TheLogo from "../Logo.jpg";
import {
  TEXT_COLOR_HEADER_FOOTER,
  BACKGROUND_COLOR_HEADER_FOOTER,
  TEXT_COLOR_HEADER_FOOTER_LIGHT,
  BACKGROUND_COLOR_HEADER_FOOTER_LIGHT
} from '../constants/colors.js'
import { useState } from "react";
import {
  Dialog,
  // Disclosure,
  Popover,
  Transition
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useAppDispatch, useAppSelector } from "../store/hooks.js";
import { logout, selectAuth } from "../store/auth-slice.js";
import { BASE_URL } from "../constants/url.js";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const isAuth = useAppSelector(selectAuth)
  console.log("theAuth is " + isAuth)

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function onLogout(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      await fetch(`${BASE_URL}/user/logout`, {
        method: "POST",
      });
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  }

  return (
    <header className={darkMode ? BACKGROUND_COLOR_HEADER_FOOTER
      : BACKGROUND_COLOR_HEADER_FOOTER_LIGHT}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* LOGO */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Money Flow</span>
            <img className="h-8 w-auto" src={TheLogo} alt="Logo" />
          </Link>
        </div>
        {/* EO: LOGO */}

        {/* Show the menu in small width */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${darkMode ? TEXT_COLOR_HEADER_FOOTER : TEXT_COLOR_HEADER_FOOTER_LIGHT}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* EO: Show the menu in small width */}

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/home"
            className={`text-lg font-semibold leading-6 ${darkMode ? TEXT_COLOR_HEADER_FOOTER : TEXT_COLOR_HEADER_FOOTER_LIGHT}`}
          >
            Home
          </Link>
          {isAuth && <Link
            to="/profile"
            className={`text-lg font-semibold leading-6 ${darkMode ? TEXT_COLOR_HEADER_FOOTER : TEXT_COLOR_HEADER_FOOTER_LIGHT}`}
          >
            Profile
          </Link>}
          {!isAuth && <Link
            to="/register"
            className={`text-lg font-semibold leading-6 ${darkMode ? TEXT_COLOR_HEADER_FOOTER : TEXT_COLOR_HEADER_FOOTER_LIGHT}`}
          >
            Register
          </Link>}
        </Popover.Group>


        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!isAuth && <Link
            to="/login"
            className={`text-lg font-semibold leading-6 ${darkMode ? TEXT_COLOR_HEADER_FOOTER : TEXT_COLOR_HEADER_FOOTER_LIGHT}`}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>}
          {isAuth &&
            <button
              onClick={onLogout}
              className={`text-lg font-semibold leading-6 ${darkMode ? TEXT_COLOR_HEADER_FOOTER : TEXT_COLOR_HEADER_FOOTER_LIGHT}`}
            >
              ИЗХОД
            </button>}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Money Flow</span>
              <img
                className="h-8 w-auto"
                src={TheLogo}
                alt="Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                {!isAuth && <Link
                  to="/register"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Register
                </Link>}
              </div>
              <div className="py-6">
                {!isAuth && <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>}
                {isAuth &&
                  <button
                    onClick={onLogout}
                    className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50`}
                  >
                    ИЗХОД
                  </button>}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
