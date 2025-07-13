'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <main 
      className="min-h-screen py-12 px-6 lg:px-16"
      style={{ backgroundColor: 'var(--bg-background)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Privacy Policy
          </h1>
          <p 
            className="text-lg lg:text-xl"
            style={{ color: 'var(--text-primary)', opacity: 0.8 }}
          >
            Your privacy is important to us. This policy explains our commitment to protecting your privacy by not collecting any personal information.
          </p>
        </div>

        <Card 
          className="shadow-lg border-2"
          style={{ 
            backgroundColor: 'var(--bg-surface)', 
            borderColor: 'var(--border-color)',
            color: 'var(--text-primary)'
          }}
        >
          <CardHeader className="text-center border-b" style={{ borderColor: 'var(--border-color)' }}>
            <CardTitle className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
              Morf Privacy Policy
            </CardTitle>
            <div className="flex justify-center items-center gap-4 text-sm" style={{ color: 'var(--text-primary)', opacity: 0.7 }}>
              <span>Version 1.0</span>
              <span>•</span>
              <span>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </CardHeader>

          <CardContent className="space-y-8" style={{ color: 'var(--text-primary)' }}>
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </h2>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              1. No Personal Information Collected
            </h2>
            <p className="mb-4" style={{ opacity: 0.9 }}>
              <strong>We do not collect, store, or process any personal information from users of our mobile app.</strong> This includes:
            </p>
            <ul className="list-disc ml-6 space-y-2" style={{ opacity: 0.9 }}>
              <li>No account creation or login required</li>
              <li>No personal details (name, email, phone number, etc.)</li>
              <li>No fitness data or workout information</li>
              <li>No photos, measurements, or progress tracking</li>
              <li>No device identifiers or usage analytics</li>
              <li>No location data or health information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              2. How the App Works
            </h2>
            <p style={{ opacity: 0.9 }}>
              Our mobile app operates entirely on your device without requiring any data to be sent to our servers. All AI-powered workout recommendations and app functionality work locally on your device, ensuring complete privacy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              3. Website Analytics
            </h2>
            <p style={{ opacity: 0.9 }}>
              This website may use basic analytics to understand general traffic patterns (such as page views and general location data). However, no personal information is collected or stored, and this data cannot be used to identify individual users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              4. Third-Party Services
            </h2>
            <p className="mb-4" style={{ opacity: 0.9 }}>
              Our app does not integrate with any third-party services that would collect your data. We do not use:
            </p>
            <ul className="list-disc ml-6 space-y-2" style={{ opacity: 0.9 }}>
              <li>Analytics or tracking services</li>
              <li>Cloud storage for user data</li>
              <li>Social media integrations</li>
              <li>Payment processors</li>
              <li>Advertising networks</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              5. Children's Privacy
            </h2>
            <p style={{ opacity: 0.9 }}>
              Since we do not collect any personal information from anyone, including children under 13, our app is safe for users of all ages from a privacy perspective.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              6. Changes to This Policy
            </h2>
            <p style={{ opacity: 0.9 }}>
              If we ever change our approach and begin collecting any user data, we will update this privacy policy and notify users through the app and on this website with prominent notice of the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              7. Contact Us
            </h2>
            <p className="mb-4" style={{ opacity: 0.9 }}>
              If you have any questions about this privacy policy, please contact us:
            </p>
            <div className="space-y-2" style={{ opacity: 0.9 }}>
              <p>Email: <a href="mailto:connornusser@gmail.com" className="hover:underline" style={{ color: 'var(--color-primary)' }}>connornusser@gmail.com</a></p>
              <p>Subject: Privacy Policy Inquiry</p>
            </div>
          </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 