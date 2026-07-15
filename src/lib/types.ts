export type LinkItem = { id: string; title: string; description: string; url: string; icon: string; badge?: "New" | "Popular" | "Featured"; clicks: number; enabled: boolean };
export type Profile = { id: string; name: string; username: string; bio: string; location: string; verified: boolean; views: number; links: LinkItem[] };
export type Theme = { id: string; name: string; background: string; accent: string; radius: "soft" | "round" | "pill" };
export type User = { id: string; name: string; email: string; plan: "Free" | "Pro" | "Business" };
export type SocialAccount = { platform: string; url: string; handle: string };
export type ContentBlock = { id: string; type: "link" | "video" | "music" | "product" | "form" | "faq"; title: string; enabled: boolean };
export type AnalyticsEvent = { date: string; views: number; clicks: number };
export type Subscriber = { id: string; email: string; joinedAt: string };
export type QRCode = { id: string; profileId: string; scans: number };
export type Integration = { id: string; name: string; connected: boolean };
export type CustomDomain = { id: string; domain: string; status: "pending" | "verified" };
export type SubscriptionPlan = { name: string; monthly: number; yearly: number; features: string[] };
export interface ProfileRepository { get(): Promise<Profile>; save(profile: Profile): Promise<Profile> }
