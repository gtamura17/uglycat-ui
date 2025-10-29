export declare const ROUTES: {
    readonly HOME: "/";
    readonly PRICING: "/pricing";
    readonly DOCS: "/docs";
    readonly SIGN_IN: "/sign-in";
    readonly SIGN_UP: "/sign-up";
    readonly DASHBOARD: "/dashboard";
    readonly INSTALLATIONS: "/dashboard/installations";
    readonly INSTALLATION_NEW: "/dashboard/installations/new";
    readonly INSTALLATION_DETAIL: (id: string) => string;
    readonly BILLING: "/dashboard/billing";
    readonly SETTINGS: "/dashboard/settings";
    readonly API_CHAT: (installationId: string) => string;
    readonly API_INSTALLATION_CONFIG: (installationId: string) => string;
    readonly API_EMBED: (installationId: string) => string;
    readonly WEBHOOK_STRIPE: "/api/webhooks/stripe";
    readonly WEBHOOK_CLERK: "/api/webhooks/clerk";
};
//# sourceMappingURL=routes.d.ts.map