import { describe,expect,it } from "vitest"; import { analytics } from "./mock"; import { analyticsCsv,calculateCtr,destinationForDevice,isScheduledLinkVisible,moveLink } from "./utils"; import type { LinkItem } from "./types";
const link:LinkItem={id:"a",title:"Test",description:"",url:"https://desktop.test",icon:"link",clicks:0,enabled:true};
describe("Linkme domain utilities",()=>{
 it("filters disabled and scheduled links",()=>{expect(isScheduledLinkVisible(link,new Date("2026-01-01"))).toBe(true);expect(isScheduledLinkVisible({...link,enabled:false})).toBe(false);expect(isScheduledLinkVisible({...link,scheduledAt:"2027-01-01"} as LinkItem,new Date("2026-01-01"))).toBe(false)});
 it("selects device destinations with fallback",()=>{expect(destinationForDevice({...link,iphoneUrl:"https://ios.test"},"iphone")).toBe("https://ios.test");expect(destinationForDevice(link,"android")).toBe(link.url)});
 it("calculates engagement and exports CSV",()=>{expect(calculateCtr(analytics)).toBeGreaterThan(40);expect(analyticsCsv(analytics)).toContain("Mon,920,413")});
 it("reorders without mutating original",()=>{const two={...link,id:"b"};expect(moveLink([link,two],0,1).map(x=>x.id)).toEqual(["b","a"]);expect(link.id).toBe("a")});
});
