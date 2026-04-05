"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

/* ============================================
   PAYYOURCELL CASE STUDY PAGE
   ============================================ */
export default function PayYourCellPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#2563EB] font-medium mb-8 hover:gap-3 transition-all"
            >
              ← Back to Projects
            </Link>

            <div className="mb-6 flex flex-wrap gap-2">
              <Badge variant="accent">Payment Platform</Badge>
              <Badge variant="default">Enterprise</Badge>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 font-sora leading-tight">
              PayYourCell
            </h1>

            <p className="text-xl text-[#475569] mb-8 leading-relaxed">
              Building a secure, enterprise-grade payment platform that integrates with GoHighLevel CRM,
              serving thousands of users with optimized infrastructure and 50% faster onboarding.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#E2E8F0]">
              <div>
                <p className="text-xs uppercase text-[#64748B] font-semibold tracking-wide mb-2">
                  Employer
                </p>
                <p className="text-lg font-bold text-[#0F172A]">Hegemonic Inc</p>
              </div>
              <div>
                <p className="text-xs uppercase text-[#64748B] font-semibold tracking-wide mb-2">
                  Timeline
                </p>
                <p className="text-lg font-bold text-[#0F172A]">Sep 2023–Present</p>
              </div>
              <div>
                <p className="text-xs uppercase text-[#64748B] font-semibold tracking-wide mb-2">
                  Role
                </p>
                <p className="text-lg font-bold text-[#0F172A]">Backend Engineer</p>
              </div>
              <div>
                <p className="text-xs uppercase text-[#64748B] font-semibold tracking-wide mb-2">
                  Status
                </p>
                <p className="text-lg font-bold text-[#0F172A]">Active</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Overview */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4 font-sora">Overview</h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              PayYourCell is an enterprise-grade payment platform built to handle complex payment workflows,
              CRM integration, and high-throughput transaction processing. The platform serves thousands of active users
              and required robust middleware layers, optimized database queries, and a scalable REST API architecture.
              The challenge was to build a system that could handle enterprise-scale operations while maintaining
              security and providing rapid integration with GoHighLevel CRM.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div variants={itemVariants} className="mb-16 grid grid-cols-3 gap-6 p-8 bg-white rounded-xl border border-[#E2E8F0]">
            <div>
              <p className="text-xs uppercase text-[#64748B] font-semibold tracking-wide mb-3">
                Active Users
              </p>
              <p className="text-3xl lg:text-4xl font-bold text-[#2563EB]">Thousands</p>
            </div>
            <div>
              <p className="text-xs uppercase text-[#64748B] font-semibold tracking-wide mb-3">
                Onboarding Speed
              </p>
              <p className="text-3xl lg:text-4xl font-bold text-[#2563EB]">50% Faster</p>
            </div>
            <div>
              <p className="text-xs uppercase text-[#64748B] font-semibold tracking-wide mb-3">
                Response Time
              </p>
              <p className="text-3xl lg:text-4xl font-bold text-[#2563EB]">25% Reduction</p>
            </div>
          </motion.div>

          {/* The Challenge */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4 font-sora">The Challenge</h2>
            <div className="space-y-4 text-[#475569] text-base leading-relaxed">
              <p>
                The initial platform struggled with several critical issues:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Slow payment processing workflows causing client onboarding delays</li>
                <li>Inadequate CRM integration, requiring manual data synchronization</li>
                <li>Unoptimized database queries leading to performance bottlenecks</li>
                <li>Lack of secure middleware layers for sensitive payment data</li>
                <li>API response times that couldn't scale with user growth</li>
              </ul>
              <p>
                The team needed a comprehensive overhaul of the backend architecture to support enterprise clients
                who demanded both performance and security.
              </p>
            </div>
          </motion.div>

          {/* Architecture & Solution */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6 font-sora">Architecture & Solution</h2>

            <div className="space-y-8">
              {/* CRM Integration */}
              <div className="border-l-4 border-[#2563EB] pl-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">GoHighLevel CRM Integration</h3>
                <p className="text-[#475569] leading-relaxed mb-3">
                  Built a seamless integration with GoHighLevel CRM using webhooks and REST APIs. The system
                  automatically synchronizes customer data, payment history, and transaction states in real-time.
                  This eliminated manual data entry and reduced onboarding time by 50%.
                </p>
                <p className="text-[#64748B] text-sm italic">
                  Implementation: Event-driven architecture with queued webhook handlers ensuring reliable, idempotent data sync.
                </p>
              </div>

              {/* Secure Middleware */}
              <div className="border-l-4 border-[#2563EB] pl-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Encrypted Middleware Layers</h3>
                <p className="text-[#475569] leading-relaxed mb-3">
                  Implemented multi-layer encryption for payment data in transit. Each payment request flows through
                  encrypted middleware that validates, sanitizes, and secures data before it reaches the payment processing core.
                  This ensures PCI compliance and customer data protection.
                </p>
                <p className="text-[#64748B] text-sm italic">
                  Technology: Laravel middleware stack with AES-256 encryption, HTTPS/TLS, and request signing.
                </p>
              </div>

              {/* Database Optimization */}
              <div className="border-l-4 border-[#2563EB] pl-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">SQL Query Optimization & Indexing</h3>
                <p className="text-[#475569] leading-relaxed mb-3">
                  Analyzed and optimized database queries achieving a 25% reduction in API response times.
                  Applied strategic indexing on frequently queried columns, refactored N+1 queries, and implemented
                  database caching for repeated lookups.
                </p>
                <p className="text-[#64748B] text-sm italic">
                  Techniques: EXPLAIN analysis, composite indexing, eager loading, query result caching with Redis.
                </p>
              </div>

              {/* Payment Pipeline */}
              <div className="border-l-4 border-[#2563EB] pl-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">Scalable Payment Processing Pipeline</h3>
                <p className="text-[#475569] leading-relaxed mb-3">
                  Designed a modular payment processing system that handles multiple payment gateways, currency conversions,
                  and transaction routing. The architecture supports horizontal scaling for peak demand periods.
                </p>
                <p className="text-[#64748B] text-sm italic">
                  Architecture: Queue-based job processing, stateless API endpoints, load balancing across multiple servers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Technical Deep Dive */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6 font-sora">Technical Deep Dive</h2>

            {/* Code Snippet */}
            <div className="mb-8 bg-[#0F172A] rounded-xl p-6 overflow-x-auto">
              <p className="text-xs text-[#64748B] mb-4 font-mono">PaymentController.php</p>
              <pre className="text-sm text-[#E2E8F0] font-mono leading-relaxed">
{`<?php

namespace App\\Http\\Controllers;

use App\\Models\\Payment;
use App\\Jobs\\ProcessPayment;
use App\\Services\\PaymentEncryption;
use Illuminate\\Http\\Request;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        // Validate payment input
        $validated = $request->validate([
            'amount' => 'required|numeric|min:0.01',
            'customer_id' => 'required|exists:customers,id',
            'payment_method' => 'required|in:card,bank,wallet',
        ]);

        // Encrypt sensitive payment data
        $encrypted = PaymentEncryption::encrypt([
            'card_token' => $validated['card_token'],
            'cvv' => $validated['cvv'],
        ]);

        // Create payment record
        $payment = Payment::create([
            'customer_id' => $validated['customer_id'],
            'amount' => $validated['amount'],
            'encrypted_data' => $encrypted,
            'status' => 'pending',
        ]);

        // Queue async payment processing
        ProcessPayment::dispatch($payment)
            ->onQueue('payments')
            ->delay(now());

        return response()->json([
            'id' => $payment->id,
            'status' => 'processing',
        ], 201);
    }

    public function callback(Request $request)
    {
        $paymentId = $request->input('payment_id');
        $payment = Payment::findOrFail($paymentId);

        // Verify webhook signature
        if (!$this->verifySignature($request)) {
            return response()->json(['error' => 'Invalid signature'], 401);
        }

        // Update payment status
        $payment->update([
            'status' => $request->input('status'),
            'transaction_id' => $request->input('transaction_id'),
        ]);

        // Sync with GoHighLevel CRM
        event(new PaymentCompleted($payment));

        return response()->json(['success' => true]);
    }
}
`}
              </pre>
            </div>

            <div className="space-y-4 text-[#475569] text-base leading-relaxed">
              <h3 className="text-lg font-bold text-[#0F172A]">Key Implementation Details</h3>

              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Queue-Based Job Processing</p>
                <p>
                  Payment processing is decoupled from the HTTP request using Laravel's queue system. Each payment
                  is dispatched as a job on the "payments" queue, allowing the API to respond immediately while
                  background workers handle the actual processing. This architecture supports burst traffic without
                  timeouts.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Encryption & Security</p>
                <p>
                  Sensitive payment data is encrypted using AES-256 before storage. The PaymentEncryption service
                  ensures that card tokens and CVV codes are never stored in plaintext, and decryption happens only
                  during actual payment processing in isolated jobs.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Webhook Signature Verification</p>
                <p>
                  All incoming webhooks from payment gateways are cryptographically verified to prevent replay attacks
                  and ensure data integrity. The system rejects any unverified callback, maintaining a secure event
                  processing pipeline.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Event-Driven CRM Sync</p>
                <p>
                  When a payment completes, a PaymentCompleted event is fired. Listeners handle CRM synchronization,
                  email notifications, and billing updates. This decoupled approach keeps the core payment logic clean
                  and allows independent scaling of CRM integrations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Results & Impact */}
          <motion.div variants={itemVariants} className="mb-16 bg-gradient-to-br from-[#DBEAFE] to-[#F0F9FF] rounded-xl p-8 border border-[#BFDBFE]">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6 font-sora">Results & Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-[#2563EB] mb-2">50%</p>
                <p className="text-[#475569] font-medium">Faster Client Onboarding</p>
                <p className="text-sm text-[#64748B] mt-2">
                  Automated CRM integration and secure data pipelines reduced onboarding from weeks to days.
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-[#2563EB] mb-2">25%</p>
                <p className="text-[#475569] font-medium">API Response Time Reduction</p>
                <p className="text-sm text-[#64748B] mt-2">
                  Database optimization and query refactoring improved end-to-end performance significantly.
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-[#2563EB] mb-2">Thousands</p>
                <p className="text-[#475569] font-medium">Active Users Supported</p>
                <p className="text-sm text-[#64748B] mt-2">
                  Scalable architecture handles enterprise-level traffic with consistent performance.
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-[#2563EB] mb-2">PCI-Compliant</p>
                <p className="text-[#475569] font-medium">Secure & Encrypted</p>
                <p className="text-sm text-[#64748B] mt-2">
                  Multi-layer encryption and middleware ensure customer data security and regulatory compliance.
                </p>
              </div>
            </div>

            <p className="mt-8 text-[#475569] leading-relaxed">
              The platform now processes thousands of payments monthly with enterprise-grade reliability.
              Clients onboard faster, the system scales with demand, and sensitive data remains secure throughout
              the payment lifecycle.
            </p>
          </motion.div>

          {/* Technology Stack */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6 font-sora">Technology Stack</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Laravel Framework",
                "PHP 8.1+",
                "MySQL 8.0",
                "AWS Infrastructure",
                "REST APIs",
                "Redis Caching",
                "GoHighLevel CRM",
                "Stripe API",
                "Queue Workers",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#0F172A] font-medium text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Back to Projects */}
          <motion.div variants={itemVariants} className="pt-8 border-t border-[#E2E8F0]">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all"
            >
              ← Back to Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
