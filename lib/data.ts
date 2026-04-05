export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  yearsExperience: number;
  bio: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  url?: string;
  technologies: string[];
  impact: string;
  challenges?: string[];
  solutions?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  type: 'featured' | 'case-study';
}

export interface Skill {
  category: string;
  items: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: number;
  category: string;
  tags: string[];
}

export interface TrustMetric {
  label: string;
  value: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Muhammad Arslan',
  title: 'Back-End Engineer | Laravel & PHP Specialist | AWS',
  location: 'Gujranwala, Punjab, Pakistan',
  email: 'am1667099@gmail.com',
  phone: '+92 317 763 8978',
  linkedin: 'linkedin.com/in/muhammadarslan-390448213',
  yearsExperience: 3,
  bio: 'Experienced Back-End Engineer with 3+ years of expertise in building scalable, high-performance systems. Specialized in Laravel, PHP, and AWS cloud infrastructure. Proven track record of optimizing database queries, implementing secure payment systems, and delivering mission-critical applications that handle peak traffic seamlessly.',
};

export const experiences: Experience[] = [
  {
    id: 'hegemonic',
    company: 'Hegemonic Inc',
    position: 'Back-End Engineer',
    location: 'Remote, Houston TX',
    startDate: 'Sep 2023',
    endDate: 'Present',
    current: true,
    description: 'Leading backend development for multiple SaaS platforms, focusing on performance optimization, secure API architecture, and CRM integrations at scale.',
    achievements: [
      'Architected GoHighLevel CRM automations that reduced client onboarding time by 50%, enabling faster deployment for enterprise customers',
      'Designed and implemented middleware layers for encrypted data flow between PayYourCell and third-party services, ensuring PCI DSS compliance',
      'Optimized SQL queries and implemented strategic indexing, achieving 25% reduction in API response times across core endpoints',
      'Built robust REST API ecosystem handling 1000+ concurrent transactions daily with 99.9% uptime',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'GoHighLevel CRM', 'REST API', 'AWS', 'Redis'],
  },
  {
    id: 'codecapital',
    company: 'CodeCapital',
    position: 'Back-End Engineer PHP & Laravel',
    location: 'Gujranwala',
    startDate: 'Apr 2024',
    endDate: 'Oct 2024',
    current: false,
    description: 'Engineered backend systems for high-traffic applications with emphasis on performance optimization and caching strategies.',
    achievements: [
      'Maintained zero downtime deployment strategy during peak traffic periods, serving 50K+ daily active users',
      'Implemented Redis caching layer reducing database queries by 60%, improving application response times from 800ms to 300ms',
      'Accelerated feature delivery cycle by 30% through optimized development workflow and automated testing pipeline',
      'Architected queue-based job processing system handling 10K+ background jobs daily for batch operations',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'AWS', 'Git', 'CI/CD', 'Nginx'],
  },
  {
    id: 'hexatech',
    company: 'HexaTech Solution',
    position: 'Software Engineer',
    location: 'Lahore',
    startDate: 'Dec 2023',
    endDate: 'Apr 2024',
    current: false,
    description: 'Developed backend services for video recording and processing platform with custom payment integration.',
    achievements: [
      'Built custom payment gateway integration increasing transaction success rate by 45% through retry logic and error handling',
      'Implemented async background processing for video encoding and thumbnail generation using Laravel queues',
      'Reduced API latency by 20% through database query optimization and implementing Redis caching for frequently accessed data',
      'Developed webhook handlers for payment provider integration with automatic reconciliation and error logging',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'AWS', 'Redis', 'REST APIs', 'Webhooks'],
  },
  {
    id: 'appalo',
    company: 'Appalo Inc',
    position: 'Full-Stack Developer',
    location: 'Lahore',
    startDate: 'Nov 2022',
    endDate: 'Apr 2024',
    current: false,
    description: 'Developed full-stack features for location-based services platform with real-time tracking capabilities.',
    achievements: [
      'Implemented real-time location tracking system with geofencing capabilities serving 5K+ concurrent users',
      'Built push notification system using Firebase, delivering 100K+ notifications daily with 95% delivery rate',
      'Created responsive UI components with jQuery and Bootstrap, reducing frontend load time by 15%',
      'Developed REST APIs for mobile and web clients with comprehensive error handling and rate limiting',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'jQuery', 'Firebase', 'REST API'],
  },
  {
    id: 'unitsol',
    company: 'UnitSol',
    position: 'Software Engineer',
    location: 'Gujranwala',
    startDate: 'Apr 2023',
    endDate: 'Dec 2023',
    current: false,
    description: 'Engineered digital management system for educational institution with focus on performance and user experience.',
    achievements: [
      'Delivered comprehensive digital management platform for Speedo Training School improving administrative efficiency by 50%',
      'Optimized system performance through query optimization and caching, reducing dashboard load time from 2.5s to 1.2s',
      'Implemented role-based access control with granular permissions for staff, students, and administrators',
      'Built automated report generation system reducing manual reporting effort by 40%',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
  },
  {
    id: 'devzone',
    company: 'DevZone Solutions',
    position: 'Full-Stack Developer',
    location: 'Lahore',
    startDate: 'May 2022',
    endDate: 'Jan 2023',
    current: false,
    description: 'Developed e-commerce platform focusing on performance optimization and scalability.',
    achievements: [
      'Engineered e-commerce platform (Ylaa.com) achieving 30% improvement in page load times through image optimization and code splitting',
      'Implemented advanced caching strategy supporting 2x increase in concurrent users without infrastructure upgrade',
      'Created comprehensive product catalog system with advanced search and filtering capabilities',
      'Developed secure checkout flow reducing cart abandonment by 18% through UX improvements',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'jQuery', 'Redis', 'AWS'],
  },
];

export const projects: Project[] = [
  {
    id: 'payyourcell',
    title: 'PayYourCell - Mobile Payment Platform',
    type: 'case-study',
    shortDescription: 'Payment platform with CRM integration and secure middleware architecture',
    description:
      'PayYourCell is a comprehensive payment processing platform designed to streamline financial transactions for mobile service providers. Built with enterprise-grade security, the platform integrates with GoHighLevel CRM for automated customer workflows and implements secure middleware for encrypted data handling.',
    technologies: ['Laravel', 'PHP', 'GoHighLevel CRM', 'AWS', 'Redis', 'MySQL', 'REST API'],
    impact: '50% faster client onboarding | 25% reduction in API response times | 99.9% uptime maintained',
    challenges: [
      'Integrating GoHighLevel CRM with existing payment infrastructure while maintaining data integrity',
      'Ensuring PCI DSS compliance for secure payment data handling',
      'Optimizing API performance under peak transaction loads (1000+ concurrent transactions daily)',
    ],
    solutions: [
      'Architected middleware layer with encryption/decryption for secure data flow between services',
      'Implemented strategic database indexing and query optimization reducing response times by 25%',
      'Built queue-based job processing for background CRM sync operations',
      'Deployed across AWS with auto-scaling policies for traffic spikes',
    ],
    metrics: [
      { label: 'Client Onboarding Speed', value: '50%' },
      { label: 'API Response Improvement', value: '25%' },
      { label: 'Uptime SLA', value: '99.9%' },
      { label: 'Daily Transactions', value: '1000+' },
      { label: 'CRM Sync Success Rate', value: '99.5%' },
    ],
  },
  {
    id: 'noomerik',
    title: 'Noomerik.com - Scalable Service Platform',
    type: 'featured',
    shortDescription: 'Service marketplace with backend automation and REST API ecosystem',
    description:
      'Noomerik.com is a scalable service discovery and booking platform built on robust backend architecture. The platform provides comprehensive REST APIs for service providers and customers, implements automated CRM workflows, and handles high-volume concurrent requests.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Redis', 'AWS', 'REST API'],
    impact: 'Handles 50K+ daily active users | 99.9% API availability | Sub-second response times',
    metrics: [
      { label: 'Daily Active Users', value: '50K+' },
      { label: 'API Availability', value: '99.9%' },
      { label: 'Average Response Time', value: '<500ms' },
      { label: 'Monthly Transactions', value: '500K+' },
    ],
  },
  {
    id: 'loom',
    title: 'loom.dreamhoster.com - Video Platform',
    type: 'case-study',
    shortDescription: 'Video recording platform with async processing and custom payment gateway',
    description:
      'A video recording and sharing platform with professional-grade features including background video processing, custom payment gateway integration, and automated webhook handling for transaction reconciliation.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Redis', 'AWS', 'Webhooks'],
    impact: '45% increase in transaction success rate | 20% reduction in API latency | 99.8% uptime',
    challenges: [
      'Managing large-scale video file processing without blocking user requests',
      'Integrating custom payment gateway with robust error handling and reconciliation',
      'Maintaining database performance with growing video metadata and user activity',
    ],
    solutions: [
      'Implemented async job queue system for video encoding and thumbnail generation',
      'Built custom payment gateway middleware with retry logic and automatic reconciliation',
      'Optimized queries for video metadata retrieval using Redis caching layer',
      'Deployed webhook handlers for real-time payment status updates',
    ],
    metrics: [
      { label: 'Transaction Success Rate', value: '45%' },
      { label: 'API Latency Reduction', value: '20%' },
      { label: 'Platform Uptime', value: '99.8%' },
      { label: 'Monthly Video Uploads', value: '100K+' },
    ],
  },
  {
    id: 'ylaa',
    title: 'Ylaa.com - E-commerce Platform',
    type: 'featured',
    shortDescription: 'High-performance e-commerce platform with advanced caching',
    description:
      'Ylaa.com is a full-featured e-commerce platform delivering exceptional performance and user experience. Optimized for fast page loads and high concurrency, the platform supports thousands of concurrent shoppers with seamless checkout experience.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'jQuery', 'AWS'],
    impact: '30% faster page loads | 2x user capacity increase | 18% lower cart abandonment',
    metrics: [
      { label: 'Page Load Speed', value: '30%' },
      { label: 'User Capacity', value: '2x' },
      { label: 'Cart Abandonment Reduction', value: '18%' },
      { label: 'Daily Visitors', value: '25K+' },
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Backend Systems & API Architecture',
    items: [
      'Laravel Framework',
      'PHP (OOP, Design Patterns)',
      'REST API Design',
      'Middleware Development',
      'API Documentation',
      'Rate Limiting & Throttling',
      'Authentication & Authorization',
    ],
  },
  {
    category: 'Database & Performance',
    items: [
      'MySQL Query Optimization',
      'Database Indexing Strategies',
      'Redis Caching',
      'Query Analysis & EXPLAIN',
      'Database Architecture',
      'N+1 Query Problem Solving',
      'Connection Pooling',
    ],
  },
  {
    category: 'Payments & CRM',
    items: [
      'GoHighLevel CRM Integration',
      'Payment Gateway Integration',
      'Webhook Management',
      'Transaction Processing',
      'Payment Reconciliation',
      'PCI DSS Compliance',
      'Secure Payment Middleware',
    ],
  },
  {
    category: 'Cloud & Deployment',
    items: [
      'AWS EC2, RDS, S3',
      'CI/CD Pipelines',
      'Git Version Control',
      'Docker & Containerization',
      'Infrastructure as Code',
      'Auto-scaling Configuration',
      'Nginx Configuration',
    ],
  },
  {
    category: 'Real-Time & Background Processing',
    items: [
      'Laravel Queue System',
      'Background Job Processing',
      'Push Notifications',
      'WebSocket Implementation',
      'Real-time Location Tracking',
      'Async Processing',
      'Event-Driven Architecture',
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      'MySQL Workbench',
      'Postman (API Testing)',
      'Git (Version Control)',
      'Composer (PHP Package Manager)',
      'Linux/Ubuntu Server',
      'Apache & Nginx',
      'SSH & Deployment Tools',
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'mysql-query-optimization',
    title: 'Reducing MySQL Query Time by 60%: A Laravel Developer\'s Playbook',
    slug: 'reducing-mysql-query-time-by-60-percent',
    excerpt:
      'Learn the practical techniques and strategies that helped reduce database query time from 800ms to 300ms, including indexing strategies, query analysis, and caching implementations.',
    content: `Database performance is often the silent killer of web applications. I've spent countless hours optimizing MySQL queries across various Laravel projects, and I've learned that a structured approach can yield remarkable results. In this post, I'll share the exact techniques that reduced our query execution time by 60%.

## The Problem

When I started at CodeCapital, our dashboard was taking 800ms just to load initial data. With 50K daily active users, every millisecond matters. The application was suffering from N+1 query problems, missing indexes, and inefficient JOIN operations.

## Step 1: Profiling with MySQL EXPLAIN

The first step was understanding what's actually happening. Using the EXPLAIN statement revealed our queries were doing full table scans instead of using indexes.

\`\`\`sql
EXPLAIN SELECT * FROM orders WHERE customer_id = 123;
\`\`\`

This showed us queries were hitting full table scans (type: ALL) instead of using indexes (type: ref).

## Step 2: Strategic Indexing

I created composite indexes on frequently queried columns:

\`\`\`sql
ALTER TABLE orders ADD INDEX idx_customer_date (customer_id, created_at);
ALTER TABLE users ADD INDEX idx_email_active (email, active);
\`\`\`

This single change reduced average query time from 250ms to 150ms.

## Step 3: Query Optimization

In Laravel, I refactored N+1 queries:

\`\`\`php
// Before: N+1 problem
$orders = Order::all();
foreach ($orders as $order) {
    echo $order->customer->name;
}

// After: Using eager loading
$orders = Order::with('customer')->get();
foreach ($orders as $order) {
    echo $order->customer->name;
}
\`\`\`

## Step 4: Implementing Redis Caching

For frequently accessed but slowly changing data:

\`\`\`php
$customers = Cache::remember('customers.active', 3600, function () {
    return Customer::where('active', true)->get();
});
\`\`\`

## Results

After implementing these strategies:
- Average query time: 300ms (down from 800ms - 62.5% reduction)
- Dashboard load time: 1.2s (down from 2.5s)
- Database CPU usage: 35% reduction
- User experience: Noticeably snappier application

These techniques have become my standard approach for any Laravel project, and I recommend every backend developer understand query optimization fundamentals.`,
    date: '2024-03-15',
    readingTime: 8,
    category: 'Database Optimization',
    tags: ['MySQL', 'Laravel', 'Performance', 'Optimization', 'Indexing'],
  },
  {
    id: 'webhook-crm-automations',
    title: 'Building Webhook-Driven CRM Automations with GoHighLevel',
    slug: 'webhook-driven-crm-automations-gohighlevel',
    excerpt:
      'A deep dive into implementing robust webhook handlers for GoHighLevel CRM integration, including error handling, retry logic, and real-world patterns used at Hegemonic Inc.',
    content: `GoHighLevel is a powerful CRM platform, but integrating it seamlessly with your backend requires more than just API calls. Webhooks are the key to building truly automated systems. Let me share what I learned implementing GoHighLevel automations at Hegemonic Inc.

## What Are Webhooks?

Webhooks are event-driven callbacks - when something happens in GoHighLevel (contact created, deal updated, etc.), it makes an HTTP request to your backend with the event data. This is infinitely better than polling.

## Setting Up Webhook Endpoints

First, I created a Laravel endpoint to receive webhooks:

\`\`\`php
Route::post('/webhooks/gohighlevel', [WebhookController::class, 'handleGoHighLevel']);
\`\`\`

## Implementing Event Processing

For each event type, I created dedicated handlers:

\`\`\`php
class GoHighLevelWebhookHandler
{
    public function handle(array $payload): bool
    {
        match ($payload['event']) {
            'contact.created' => $this->handleContactCreated($payload),
            'contact.updated' => $this->handleContactUpdated($payload),
            'opportunity.created' => $this->handleOpportunityCreated($payload),
            default => false,
        };
    }

    private function handleContactCreated(array $payload): bool
    {
        $contact = Contact::create([
            'gohighlevel_id' => $payload['id'],
            'email' => $payload['email'],
            'phone' => $payload['phone'],
            'name' => $payload['name'],
        ]);

        return true;
    }
}
\`\`\`

## Handling Failures Gracefully

Webhooks can fail - network issues, processing errors, database constraints. I implemented a robust retry system:

\`\`\`php
class WebhookQueue implements ShouldQueue
{
    public int $tries = 5;
    public int $backoff = 60;

    public function handle(GoHighLevelEvent $event)
    {
        try {
            // Process webhook
            (new GoHighLevelWebhookHandler())->handle($event->payload);
        } catch (Exception $e) {
            Log::error('Webhook processing failed', ['error' => $e->getMessage()]);
            throw $e; // Retry through Laravel queue
        }
    }
}
\`\`\`

## Security Considerations

GoHighLevel signs webhooks with HMAC signatures. Always verify:

\`\`\`php
public function verifySignature(Request $request): bool
{
    $signature = $request->header('X-GHL-Signature');
    $payload = $request->getContent();

    $hash = hash_hmac('sha256', $payload, config('services.gohighlevel.webhook_secret'));

    return hash_equals($hash, $signature);
}
\`\`\`

## Real-World Impact

At Hegemonic Inc, implementing webhook-driven automations:
- Reduced manual data entry by 70%
- Enabled real-time customer onboarding (50% faster)
- Increased CRM data accuracy to 98%
- Reduced client support tickets by 25%

Webhooks are the backbone of modern automation. Mastering them is essential for any backend engineer working with external platforms.`,
    date: '2024-02-28',
    readingTime: 10,
    category: 'Integration & Automation',
    tags: ['GoHighLevel', 'Webhooks', 'CRM', 'Laravel', 'Automation'],
  },
  {
    id: 'redis-caching-patterns',
    title: 'Redis Caching Patterns That Eliminated Our Bottlenecks',
    slug: 'redis-caching-patterns-eliminated-bottlenecks',
    excerpt:
      'Explore the caching strategies that improved application performance by 60%, including cache invalidation patterns, cache warming, and real-time data synchronization.',
    content: `Redis is magical when used correctly. But misusing it can lead to stale data, cache stampedes, and other subtle bugs. Here are the patterns that helped CodeCapital scale to 50K daily active users.

## The Initial Problem

Our application had serious performance issues. Database queries were taking 800ms, users were frustrated, and our infrastructure was barely keeping up. We needed Redis, but we needed it done right.

## Pattern 1: Cache-Aside (Lazy Loading)

The simplest pattern - check cache first, hit database if miss:

\`\`\`php
public function getCustomerOrders($customerId)
{
    $cacheKey = "customer.orders.{$customerId}";

    return Cache::remember($cacheKey, 3600, function () use ($customerId) {
        return Order::where('customer_id', $customerId)
                   ->orderBy('created_at', 'desc')
                   ->get();
    });
}
\`\`\`

This reduced database load by 60% because 80% of traffic hit cached data.

## Pattern 2: Cache Invalidation

But cache-aside has a problem: stale data. Whenever an order is created, we must invalidate:

\`\`\`php
class Order extends Model
{
    protected static function booted()
    {
        static::created(function ($order) {
            Cache::forget("customer.orders.{$order->customer_id}");
        });

        static::updated(function ($order) {
            Cache::forget("customer.orders.{$order->customer_id}");
        });
    }
}
\`\`\`

## Pattern 3: Cache Warming

For critical data accessed by everyone, pre-populate Redis:

\`\`\`php
class CacheWarmerCommand extends Command
{
    public function handle()
    {
        $countries = Country::all();
        Cache::forever('countries.list', $countries);

        $statuses = Status::all();
        Cache::forever('order.statuses', $statuses);
    }
}

// Run daily via scheduler
$schedule->command('cache:warm')->daily();
\`\`\`

## Pattern 4: Preventing Cache Stampedes

When cache expires under high load, multiple requests hit database simultaneously. Use probabilistic expiration:

\`\`\`php
public function getPopularProducts()
{
    $cacheKey = 'products.popular';
    $ttl = 3600;

    return Cache::remember($cacheKey, $ttl + random_int(0, 300), function () {
        return Product::where('popular', true)
                      ->orderBy('sales', 'desc')
                      ->limit(20)
                      ->get();
    });
}
\`\`\`

Adding randomness (0-300 seconds) prevents all entries expiring simultaneously.

## Pattern 5: Tiered Caching

Different data needs different TTLs:

\`\`\`php
class CachingStrategy
{
    const NEVER_CHANGES = 0;        // Config, countries
    const RARELY_CHANGES = 86400;   // 24 hours
    const SOMETIMES_CHANGES = 3600; // 1 hour
    const FREQUENTLY_CHANGES = 300; // 5 minutes
}
\`\`\`

## Real Results

After implementing these patterns:
- Average query time: 300ms (down from 800ms)
- User capacity: 2x increase without infrastructure changes
- Peak traffic handling: Zero timeouts or errors
- Cache hit rate: 85% during normal load

Redis is not magic - it's a tool that requires thoughtful implementation. These patterns have saved countless applications from scaling nightmares.`,
    date: '2024-02-10',
    readingTime: 9,
    category: 'Performance',
    tags: ['Redis', 'Caching', 'Performance', 'Laravel', 'Optimization'],
  },
  {
    id: 'secure-payment-middleware',
    title: 'Designing Secure Payment Middleware in Laravel',
    slug: 'secure-payment-middleware-laravel',
    excerpt:
      'A comprehensive guide to building PCI DSS compliant payment middleware, including encryption, secure data handling, and implementation patterns learned from building PayYourCell.',
    content: `Payment processing is critical infrastructure. A single breach can destroy a company. In this post, I'll share the security architecture we implemented for PayYourCell that maintains PCI DSS compliance while processing thousands of transactions daily.

## The Challenge

Payment card data is the most sensitive information a business handles. PCI DSS requires that we never store, process, or transmit this data insecurely. Yet our payment gateway integration, CRM sync, and fraud detection all need access to transaction data.

## Principle: Defense in Depth

Never rely on a single security measure. Layer your defenses:

1. Encryption at rest and in transit
2. Secure key management
3. Data minimization
4. Access control
5. Audit logging

## Architecture Overview

\`\`\`
User Request → Validation Layer → Encryption Middleware →
Payment Gateway → Webhook Handler → Database (encrypted) → CRM Sync
\`\`\`

## Implementing Encryption

Never store sensitive data in plaintext. Use Laravel's encryption:

\`\`\`php
class PaymentEncryption
{
    public static function encryptCardData(array $card): string
    {
        return encrypt(json_encode($card));
    }

    public static function decryptCardData(string $encrypted): array
    {
        return json_decode(decrypt($encrypted), true);
    }
}

// In migration
Schema::create('payment_tokens', function (Blueprint $table) {
    $table->id();
    $table->string('transaction_id');
    $table->text('card_token')->encrypted(); // Encrypted in DB
    $table->timestamps();
});
\`\`\`

## Secure Middleware

Create middleware to sanitize payment data:

\`\`\`php
class PaymentSecurityMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Never log sensitive data
        if ($request->has('card_number')) {
            unset($request['card_number']);
        }

        // Validate SSL certificate
        if (!$request->secure() && app()->isProduction()) {
            abort(403, 'HTTPS required');
        }

        return $next($request);
    }
}
\`\`\`

## Secure Payment Processing

Never tokenize payment data yourself - delegate to your payment gateway:

\`\`\`php
class PaymentProcessor
{
    public function process(Order $order, array $cardData): Transaction
    {
        try {
            // Send to payment gateway (encrypted, HTTPS, PCI compliant)
            $result = $this->gateway->charge(
                amount: $order->total * 100,
                currency: 'USD',
                token: $this->tokenizeCard($cardData),
                metadata: ['order_id' => $order->id]
            );

            // Store only the token, never card details
            $transaction = Transaction::create([
                'order_id' => $order->id,
                'payment_token' => $result['token'],
                'status' => 'completed',
                'amount' => $order->total,
            ]);

            Log::info('Payment processed', ['transaction_id' => $transaction->id]);

            return $transaction;

        } catch (PaymentException $e) {
            Log::error('Payment failed', ['error' => $e->getMessage()]);
            throw $e;
        }
    }
}
\`\`\`

## Webhook Security

Always verify webhook signatures:

\`\`\`php
class PaymentWebhookController
{
    public function handle(Request $request)
    {
        // Verify signature
        if (!$this->verifySignature($request)) {
            abort(403, 'Invalid signature');
        }

        $event = json_decode($request->getContent());

        match ($event->type) {
            'charge.succeeded' => $this->handleChargeSucceeded($event),
            'charge.failed' => $this->handleChargeFailed($event),
            'charge.refunded' => $this->handleChargeRefunded($event),
        };

        return response()->json(['received' => true]);
    }

    private function verifySignature(Request $request): bool
    {
        $signature = $request->header('X-Payment-Signature');
        $payload = $request->getContent();

        $expected = hash_hmac(
            'sha256',
            $payload,
            config('payment.webhook_secret')
        );

        return hash_equals($expected, $signature);
    }
}
\`\`\`

## Audit Logging

Log everything (except sensitive data):

\`\`\`php
class PaymentAuditLog
{
    public static function log(string $action, Transaction $transaction, ?string $result = null)
    {
        Log::channel('payment_audit')->info('Payment action', [
            'action' => $action,
            'transaction_id' => $transaction->id,
            'amount' => $transaction->amount,
            'status' => $transaction->status,
            'result' => $result,
            'timestamp' => now(),
            'ip_address' => request()->ip(),
        ]);
    }
}
\`\`\`

## Real-World Impact

At Hegemonic Inc:
- Zero security breaches or PCI violations
- 99.9% transaction success rate (after retry logic)
- 2-second average transaction processing time
- Full audit trail for all transactions

Payment security is non-negotiable. Follow these principles religiously, and your payment infrastructure will be solid.`,
    date: '2024-01-20',
    readingTime: 12,
    category: 'Security & Compliance',
    tags: ['Payment Processing', 'Security', 'PCI DSS', 'Laravel', 'Encryption'],
  },
];

export const trustMetrics: TrustMetric[] = [
  {
    label: 'Years of Experience',
    value: '3+',
    description: 'Professional backend engineering experience',
  },
  {
    label: 'Projects Delivered',
    value: '15+',
    description: 'Successfully completed projects and features',
  },
  {
    label: 'Companies',
    value: '6',
    description: 'Worked across multiple companies and startups',
  },
  {
    label: 'Team Size Led',
    value: '8+',
    description: 'Collaborated and mentored on engineering teams',
  },
  {
    label: 'API Endpoints',
    value: '200+',
    description: 'REST APIs designed and deployed',
  },
  {
    label: 'Daily Users Supported',
    value: '50K+',
    description: 'Active users across all platforms combined',
  },
];
