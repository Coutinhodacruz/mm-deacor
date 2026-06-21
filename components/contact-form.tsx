'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const questionnaireSchema = z.object({
  // Contact Information
  fullName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(7, 'Phone number is required'),
  email: z.string().email('Valid email is required'),

  // Event Details
  eventDate: z.string().min(1, 'Event date is required'),
  eventVenue: z.string().min(2, 'Event location / venue is required'),
  eventStartTime: z.string().min(1, 'Start time is required'),
  eventEndTime: z.string().min(1, 'End time is required'),

  // Guest Information
  estimatedGuests: z.string().min(1, 'Estimated guest count is required'),
  eventType: z.string().min(1, 'Type of event is required'),

  // Celebrant Details
  celebrantName: z.string().optional(),
  vibeStyle: z.string().optional(),

  // Theme & Colours
  theme: z.string().optional(),
  colourPalette: z.string().optional(),
  hasInspirationPhotos: z.enum(['Yes', 'No']).optional(),
  inspirationDetails: z.string().optional(),

  // Areas to be Decorated
  stageBackdrop: z.string().optional(),
  danceFloor: z.string().optional(),
  entrance: z.string().optional(),
  tablescape: z.string().optional(),
  cakeTable: z.string().optional(),
  ceilingDecor: z.string().optional(),
  otherAreas: z.string().optional(),

  // Must-Have Elements
  mustHaveElements: z.string().optional(),

  // Budget
  budgetRange: z.string().optional(),

  // Additional Notes
  additionalDetails: z.string().optional(),
});

type QuestionnaireData = z.infer<typeof questionnaireSchema>;

const inputClass =
  'w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200 text-sm';
const labelClass = 'block text-sm font-medium text-foreground mb-1.5';
const errorClass = 'mt-1 text-xs text-destructive';

// ─── Snackbar Component ─────────────────────────────────────────────────────
type SnackbarProps = {
  message: string;
  type: 'success' | 'error';
  visible: boolean;
  onClose: () => void;
};

function Snackbar({ message, type, visible, onClose }: SnackbarProps) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ease-out ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-sm min-w-[320px] max-w-[90vw] ${
          type === 'success'
            ? 'bg-emerald-600/95 text-white'
            : 'bg-red-600/95 text-white'
        }`}
      >
        <span className="text-xl flex-shrink-0">
          {type === 'success' ? '✓' : '✕'}
        </span>
        <p className="text-sm font-medium flex-1 leading-snug">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Dismiss"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 mt-10 first:mt-0">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">
        {number}
      </div>
      <h3 className="text-base font-serif font-bold text-foreground tracking-wide uppercase">{title}</h3>
      <div className="flex-1 h-px bg-accent/20" />
    </div>
  );
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error'; visible: boolean }>({
    message: '',
    type: 'success',
    visible: false,
  });

  const showSnackbar = (message: string, type: 'success' | 'error') => {
    setSnackbar({ message, type, visible: true });
  };

  const hideSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, visible: false }));
  };

  // Auto-dismiss after 6 seconds
  useEffect(() => {
    if (snackbar.visible) {
      const timer = setTimeout(hideSnackbar, 6000);
      return () => clearTimeout(timer);
    }
  }, [snackbar.visible]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<QuestionnaireData>({
    resolver: zodResolver(questionnaireSchema),
  });

  const hasPhotos = watch('hasInspirationPhotos');

  const onSubmit = async (data: QuestionnaireData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong.');
      }

      reset();
      showSnackbar('Thank you! Your questionnaire has been submitted successfully. We\'ll be in touch within 24–48 hours.', 'success');
    } catch (error) {
      console.error('Submission error:', error);
      showSnackbar(
        error instanceof Error
          ? error.message
          : 'Failed to submit. Please try again or email us directly at nikie@mmmdecors.ca',
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">

      {/* 1. Contact Information */}
      <SectionHeader number="1" title="Contact Information" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <label className={labelClass}>Full Name <span className="text-accent">*</span></label>
          <input {...register('fullName')} type="text" placeholder="Your full name" className={inputClass} />
          {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone Number <span className="text-accent">*</span></label>
          <input {...register('phone')} type="tel" placeholder="e.g. (416) 555-0100" className={inputClass} />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email Address <span className="text-accent">*</span></label>
          <input {...register('email')} type="email" placeholder="your@email.com" className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* 2. Event Details */}
      <SectionHeader number="2" title="Event Details" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Event Date <span className="text-accent">*</span></label>
          <input {...register('eventDate')} type="text" placeholder="e.g. September 14, 2025" className={inputClass} />
          {errors.eventDate && <p className={errorClass}>{errors.eventDate.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Event Location / Venue <span className="text-accent">*</span></label>
          <input {...register('eventVenue')} type="text" placeholder="Venue name & city" className={inputClass} />
          {errors.eventVenue && <p className={errorClass}>{errors.eventVenue.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Event Start Time <span className="text-accent">*</span></label>
          <input {...register('eventStartTime')} type="text" placeholder="e.g. 5:00 PM" className={inputClass} />
          {errors.eventStartTime && <p className={errorClass}>{errors.eventStartTime.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Event End Time <span className="text-accent">*</span></label>
          <input {...register('eventEndTime')} type="text" placeholder="e.g. 11:00 PM" className={inputClass} />
          {errors.eventEndTime && <p className={errorClass}>{errors.eventEndTime.message}</p>}
        </div>
      </div>

      {/* 3. Guest Information */}
      <SectionHeader number="3" title="Guest Information" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Estimated Guests <span className="text-accent">*</span></label>
          <input {...register('estimatedGuests')} type="text" placeholder="e.g. 150" className={inputClass} />
          {errors.estimatedGuests && <p className={errorClass}>{errors.estimatedGuests.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Type of Event <span className="text-accent">*</span></label>
          <select {...register('eventType')} className={inputClass}>
            <option value="">Select event type</option>
            <option value="Wedding">Wedding</option>
            <option value="Milestone Birthday">Milestone Birthday</option>
            <option value="Bridal Shower">Bridal Shower</option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Graduation">Graduation</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Gala / Fundraiser">Gala / Fundraiser</option>
            <option value="Church Event">Church Event</option>
            <option value="Cultural Celebration">Cultural Celebration</option>
            <option value="Other">Other</option>
          </select>
          {errors.eventType && <p className={errorClass}>{errors.eventType.message}</p>}
        </div>
      </div>

      {/* 4. Celebrant Details */}
      <SectionHeader number="4" title="Celebrant Details" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Name of Celebrant</label>
          <input {...register('celebrantName')} type="text" placeholder="Who is being celebrated?" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Vibe / Style</label>
          <input {...register('vibeStyle')} type="text" placeholder="e.g. Elegant, Romantic, Bold & Glamorous" className={inputClass} />
        </div>
      </div>

      {/* 5. Theme & Colours */}
      <SectionHeader number="5" title="Theme & Colours" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Theme</label>
          <input {...register('theme')} type="text" placeholder="e.g. Garden Romance, Black Tie, Rustic Luxe" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Colour Palette</label>
          <input {...register('colourPalette')} type="text" placeholder="e.g. Blush, Gold & Ivory" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Inspiration Photos Available?</label>
          <select {...register('hasInspirationPhotos')} className={inputClass}>
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {hasPhotos === 'Yes' && (
          <div>
            <label className={labelClass}>Please Share / Describe Your Inspiration</label>
            <input {...register('inspirationDetails')} type="text" placeholder="Links to Pinterest, Instagram, or describe" className={inputClass} />
          </div>
        )}
      </div>

      {/* 6. Areas to be Decorated */}
      <SectionHeader number="6" title="Areas to be Decorated" />
      <p className="text-xs text-muted-foreground mb-4 -mt-2">
        Describe your vision for each area, or leave blank if not applicable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { field: 'stageBackdrop', label: 'Stage / Backdrop' },
          { field: 'danceFloor', label: 'Dance Floor' },
          { field: 'entrance', label: 'Entrance' },
          { field: 'tablescape', label: 'Tablescape' },
          { field: 'cakeTable', label: 'Cake Table' },
          { field: 'ceilingDecor', label: 'Ceiling Décor' },
        ].map(({ field, label }) => (
          <div key={field}>
            <label className={labelClass}>{label}</label>
            <input
              {...register(field as keyof QuestionnaireData)}
              type="text"
              placeholder={`Describe your ${label.toLowerCase()} vision`}
              className={inputClass}
            />
          </div>
        ))}
        <div className="md:col-span-2">
          <label className={labelClass}>Other Areas</label>
          <input {...register('otherAreas')} type="text" placeholder="Any other areas to be decorated?" className={inputClass} />
        </div>
      </div>

      {/* 7. Must-Have Elements */}
      <SectionHeader number="7" title="Must-Have Elements" />
      <div>
        <label className={labelClass}>List Your Must-Have Elements</label>
        <textarea
          {...register('mustHaveElements')}
          rows={3}
          placeholder="e.g. Floral arch, gold charger plates, neon sign, balloon garland..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* 8. Budget */}
      <SectionHeader number="8" title="Budget" />
      <div>
        <label className={labelClass}>Budget Range</label>
        <select {...register('budgetRange')} className={inputClass}>
          <option value="">Select a range</option>
          <option value="Under $2,000">Under $2,000</option>
          <option value="$2,000 – $5,000">$2,000 – $5,000</option>
          <option value="$5,000 – $10,000">$5,000 – $10,000</option>
          <option value="$10,000 – $20,000">$10,000 – $20,000</option>
          <option value="$20,000+">$20,000+</option>
          <option value="Not sure yet">Not sure yet — open to a quote</option>
        </select>
      </div>

      {/* 9. Additional Notes */}
      <SectionHeader number="9" title="Additional Notes" />
      <div>
        <label className={labelClass}>Additional Details</label>
        <textarea
          {...register('additionalDetails')}
          rows={4}
          placeholder="Anything else we should know? Special requests, accessibility needs, cultural considerations..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-accent-foreground px-6 py-4 rounded-full font-bold text-base hover:opacity-90 hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Questionnaire'}
        </button>
        <p className="text-center text-xs text-muted-foreground mt-4">
          Once submitted, we will schedule a Zoom consultation to present your custom design concept and quote.
        </p>
      </div>
      {/* Snackbar Toast */}
      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        visible={snackbar.visible}
        onClose={hideSnackbar}
      />
    </form>
  );
}
