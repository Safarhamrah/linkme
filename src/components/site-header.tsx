"use client";
import Link from "next/link"; import { Menu, Moon, Sun, X } from "lucide-react"; import { useEffect, useState } from "react"; import { Logo } from "./logo";
export function SiteHeader() {
  const [open,setOpen]=useState(false),[dark,setDark]=useState(false);
  useEffect(()=>{document.documentElement.classList.toggle("dark",localStorage.getItem("linkme-theme")==="dark")},[]);
  function toggle(){const next=!dark;setDark(next);document.documentElement.classList.toggle("dark",next);localStorage.setItem("linkme-theme",next?"dark":"light")}
  return <header className="site-header"><div className="nav-shell"><Logo/><nav className={open?"nav-links open":"nav-links"} aria-label="Main navigation"><Link href="/#features">Features</Link><Link href="/pricing">Pricing</Link><Link href="/safar">Demo</Link><Link className="mobile-only" href="/login">Log in</Link><Link className="btn primary mobile-only" href="/register">Start free</Link></nav><div className="nav-actions"><button className="icon-btn" onClick={toggle} aria-label="Toggle color theme">{dark?<Sun size={18}/>:<Moon size={18}/>}</button><Link className="login-link" href="/login">Log in</Link><Link className="btn primary top-cta" href="/register">Start for free</Link><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div></div></header>;
}
