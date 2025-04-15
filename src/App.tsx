
import React from 'react'
import './App.css'
import Index from "@/pages/Index";
import Analytics from "@/pages/Analytics";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Market from "@/pages/Market";
import Clients from "@/pages/Clients";
import Developers from "@/pages/Developers";
import MLS from "@/pages/MLS";
import Deals from "@/pages/Deals";
import Transactions from "@/pages/Transactions";
import DueDiligence from "@/pages/DueDiligence";
import Knowledge from "@/pages/Knowledge";
import Settings from "@/pages/Settings";
import Support from "@/pages/Support";
import ListingPerformance from "@/pages/ListingPerformance";
import Search from "@/pages/Search";

function App() {
  return (
    <div className="App min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <RouterProvider router={createBrowserRouter([
        {
          path: "/",
          element: <Index />
        },
        {
          path: "/analytics",
          element: <Analytics />
        },
        {
          path: "/ListingPerformance",
          element: <ListingPerformance />
        },
        {
          path: "/market",
          element: <Market />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/clients",
          element: <Clients />
        },
        {
          path: "/developers",
          element: <Developers />
        },
        {
          path: "/mls",
          element: <MLS />
        },
        {
          path: "/deals",
          element: <Deals />
        },
        {
          path: "/transactions",
          element: <Transactions />
        },
        {
          path: "/due-diligence",
          element: <DueDiligence />
        },
        {
          path: "/knowledge",
          element: <Knowledge />
        },
        {
          path: "/settings",
          element: <Settings />
        },
        {
          path: "/support",
          element: <Support />
        }
      ])}/>
    </div>
  )
}

export default App
