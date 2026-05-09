'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().min(1, 'Event date is required'),
  location: z.string().min(2, 'Location is required'),
  message: z.string().min(10, 'Please tell us more about your vision'),
  budget: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitSuccess && (
        <div className="p-4 bg-accent/10 border border-accent text-accent rounded-sm">
          Thank you for reaching out! We&apos;ll be in touch within 24-48 hours.
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
            First Name
          </label>
          <input
            {...register('firstName')}
            type="text"
            placeholder="First name"
            className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-destructive">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
            Last Name
          </label>
          <input
            {...register('lastName')}
            type="text"
            placeholder="Last name"
            className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-destructive">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="(123) 456-7890"
            className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Event Type */}
      <div>
        <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
          Event Type
        </label>
        <select
          {...register('eventType')}
          className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        >
          <option value="">Select an event type</option>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate Event</option>
          <option value="celebration">Celebration/Anniversary</option>
          <option value="other">Other</option>
        </select>
        {errors.eventType && (
          <p className="mt-1 text-sm text-destructive">{errors.eventType.message}</p>
        )}
      </div>

      {/* Event Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
            Event Date (Approximate)
          </label>
          <input
            {...register('eventDate')}
            type="text"
            placeholder="e.g., June 2024"
            className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
          {errors.eventDate && (
            <p className="mt-1 text-sm text-destructive">{errors.eventDate.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
            Event Location
          </label>
          <input
            {...register('location')}
            type="text"
            placeholder="City, State"
            className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
          {errors.location && (
            <p className="mt-1 text-sm text-destructive">{errors.location.message}</p>
          )}
        </div>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
          Budget Range (Optional)
        </label>
        <select
          {...register('budget')}
          className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        >
          <option value="">No preference</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="over-50k">$50,000+</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Tell Us About Your Vision
        </label>
        <textarea
          {...register('message')}
          placeholder="Share details about your event, style preferences, and what you hope to achieve..."
          rows={6}
          className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}
