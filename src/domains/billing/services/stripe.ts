import Stripe from 'stripe'

export function createStripeClient(): Stripe {
  return new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2025-09-30.clover' })
}

export async function ensureCustomer(stripe: Stripe, email: string, userId: string): Promise<string> {
  const customer = await stripe.customers.create({ email, metadata: { userId } })
  return customer.id
}

export async function createCheckoutSession(stripe: Stripe, customerId: string, priceId: string, successUrl: string, cancelUrl: string, clientRefId: string) {
  return stripe.checkout.sessions.create({
    mode: 'subscription',
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: successUrl,
    cancel_url: cancelUrl,
    client_reference_id: clientRefId,
  })
}

export async function createPortalSession(stripe: Stripe, customerId: string, returnUrl: string) {
  return stripe.billingPortal.sessions.create({ customer: customerId, return_url: returnUrl })
}

export function constructEvent(stripe: Stripe, buf: Buffer, signature: string) {
  return stripe.webhooks.constructEvent(buf, signature, process.env.STRIPE_WEBHOOK_SECRET as string)
}
