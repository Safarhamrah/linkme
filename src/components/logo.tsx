import Link from "next/link"; import { Link2 } from "lucide-react";
export function Logo({ compact = false }: { compact?: boolean }) { return <Link href="/" className="logo" aria-label="Linkme home"><span className="logo-mark"><Link2 size={19} strokeWidth={2.6}/></span>{!compact && <span>Linkme</span>}</Link>; }
