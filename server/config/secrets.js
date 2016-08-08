module.exports = {

  db: process.env.MONGODB || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/stripe-membership',

  sessionSecret: process.env.SESSION_SECRET || 'narola21',

  mailgun: {
    user: process.env.MAILGUN_USER || '',
    password: process.env.MAILGUN_PASSWORD || ''
  },

  stripeOptions: {
    apiKey: process.env.STRIPE_KEY || 'sk_test_ULFCSlBLcOTkNloQV8WvuWSP',
    stripePubKey: process.env.STRIPE_PUB_KEY || 'pk_test_rIwyAO2KrzkgULDSxd9TQRsl',
    defaultPlan: 'free',
    plans: ['free', 'premium', 'developer', 'business'],
    planData: {
      'free': {
        name: 'Free',
        price: 0
      },
      'premium': {
        name: 'Premium',
        price: 69
      },
      'developer': {
        name: 'Developer',
        price: 89
      },
      'business': {
        name: 'Business',
        price: 129
      }
    }
  },

  googleAnalytics: process.env.GOOGLE_ANALYTICS || ''
};
