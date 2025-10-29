export declare const PLANS: {
    readonly FREE: {
        readonly id: "FREE";
        readonly name: "Free";
        readonly price: 0;
        readonly messageLimit: 100;
        readonly installationLimit: 1;
        readonly features: readonly ["100 messages/month", "1 installation", "Basic analytics", "Email support"];
    };
    readonly STARTER: {
        readonly id: "STARTER";
        readonly name: "Starter";
        readonly price: 99;
        readonly messageLimit: 5000;
        readonly installationLimit: 3;
        readonly stripePriceId: string | undefined;
        readonly features: readonly ["5,000 messages/month", "3 installations", "Advanced analytics", "Priority email support", "Custom branding"];
    };
    readonly PRO: {
        readonly id: "PRO";
        readonly name: "Pro";
        readonly price: 299;
        readonly messageLimit: 20000;
        readonly installationLimit: 10;
        readonly stripePriceId: string | undefined;
        readonly features: readonly ["20,000 messages/month", "10 installations", "Full analytics dashboard", "Priority support", "White label", "API access"];
    };
    readonly ENTERPRISE: {
        readonly id: "ENTERPRISE";
        readonly name: "Enterprise";
        readonly price: 999;
        readonly messageLimit: -1;
        readonly installationLimit: -1;
        readonly stripePriceId: string | undefined;
        readonly features: readonly ["Unlimited messages", "Unlimited installations", "Custom integrations", "Dedicated support", "SLA guarantee", "On-premise option"];
    };
};
export type PlanId = keyof typeof PLANS;
//# sourceMappingURL=plans.d.ts.map