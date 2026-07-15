import type { AnalyticsEvent, LinkItem, Profile, SubscriptionPlan } from "./types";
export const initialLinks: LinkItem[] = [
  { id: "1", title: "Designing calmer digital products", description: "My latest field guide for thoughtful teams", url: "https://example.com/guide", icon: "book", badge: "Featured", clicks: 2841, enabled: true },
  { id: "2", title: "Work with Northline Studio", description: "Brand, product, and creative direction", url: "https://example.com/studio", icon: "sparkles", badge: "Popular", clicks: 1947, enabled: true },
  { id: "3", title: "The Sunday Edit", description: "Ideas on design, travel, and living well", url: "https://example.com/newsletter", icon: "mail", badge: "New", clicks: 1218, enabled: true },
  { id: "4", title: "Book a creative session", description: "30 minutes to unlock your next move", url: "https://example.com/book", icon: "calendar", clicks: 806, enabled: true },
];
export const profile: Profile = { id: "safar", name: "Safar Noor", username: "safar", bio: "Creative director, product thinker, and collector of good ideas. Building more human corners of the internet.", location: "Denver - Available worldwide", verified: true, views: 42892, links: initialLinks };
export const analytics: AnalyticsEvent[] = [
  { date: "Mon", views: 920, clicks: 413 }, { date: "Tue", views: 1180, clicks: 506 }, { date: "Wed", views: 1050, clicks: 488 }, { date: "Thu", views: 1420, clicks: 681 }, { date: "Fri", views: 1660, clicks: 748 }, { date: "Sat", views: 1340, clicks: 602 }, { date: "Sun", views: 1890, clicks: 892 },
];
export const plans: SubscriptionPlan[] = [
  { name: "Free", monthly: 0, yearly: 0, features: ["Unlimited links", "Essential themes", "Basic analytics", "Linkme branding"] },
  { name: "Pro", monthly: 12, yearly: 9, features: ["Advanced themes", "Detailed analytics", "AI writing tools", "Email collection", "Scheduled links"] },
  { name: "Business", monthly: 29, yearly: 23, features: ["Multiple profiles", "Team members", "Custom domains", "Conversion tracking", "White label"] },
];
