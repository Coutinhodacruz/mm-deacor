import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

type QuestionnaireData = {
  fullName: string;
  phone: string;
  email: string;
  eventDate: string;
  eventVenue: string;
  eventStartTime: string;
  eventEndTime: string;
  estimatedGuests: string;
  eventType: string;
  celebrantName?: string;
  vibeStyle?: string;
  theme?: string;
  colourPalette?: string;
  hasInspirationPhotos?: string;
  inspirationDetails?: string;
  stageBackdrop?: string;
  danceFloor?: string;
  entrance?: string;
  tablescape?: string;
  cakeTable?: string;
  ceilingDecor?: string;
  otherAreas?: string;
  mustHaveElements?: string;
  budgetRange?: string;
  additionalDetails?: string;
};

// ─── Shared Styles ───────────────────────────────────────────────────────────
const brandColor = '#b08d57'; // warm gold accent
const darkBg = '#1a1a1a';
const cardBg = '#f9f6f1';
const textColor = '#2d2d2d';
const mutedText = '#6b6b6b';

// ─── Helper: optional row ────────────────────────────────────────────────────
const row = (label: string, value?: string) =>
  value
    ? `<tr>
        <td style="padding:8px 12px;font-weight:600;color:${textColor};white-space:nowrap;vertical-align:top;border-bottom:1px solid #ebe7e0;">${label}</td>
        <td style="padding:8px 12px;color:${mutedText};border-bottom:1px solid #ebe7e0;">${value}</td>
      </tr>`
    : '';

// ─── Notification Email (to business owner) ─────────────────────────────────
const createNotificationEmail = (data: QuestionnaireData) => {
  const decorationAreas = [
    { label: 'Stage / Backdrop', value: data.stageBackdrop },
    { label: 'Dance Floor', value: data.danceFloor },
    { label: 'Entrance', value: data.entrance },
    { label: 'Tablescape', value: data.tablescape },
    { label: 'Cake Table', value: data.cakeTable },
    { label: 'Ceiling Décor', value: data.ceilingDecor },
    { label: 'Other Areas', value: data.otherAreas },
  ]
    .filter((a) => a.value)
    .map((a) => row(a.label, a.value))
    .join('');

  return {
    subject: `✨ New Event Inquiry — ${data.fullName} | ${data.eventType}`,
    text: `New Event Design Questionnaire from ${data.fullName}\n\nContact: ${data.email} | ${data.phone}\nEvent: ${data.eventType} on ${data.eventDate}\nVenue: ${data.eventVenue}\nTime: ${data.eventStartTime} – ${data.eventEndTime}\nGuests: ${data.estimatedGuests}\n${data.celebrantName ? `Celebrant: ${data.celebrantName}\n` : ''}${data.vibeStyle ? `Vibe: ${data.vibeStyle}\n` : ''}${data.theme ? `Theme: ${data.theme}\n` : ''}${data.colourPalette ? `Colours: ${data.colourPalette}\n` : ''}${data.budgetRange ? `Budget: ${data.budgetRange}\n` : ''}${data.mustHaveElements ? `Must-Haves: ${data.mustHaveElements}\n` : ''}${data.additionalDetails ? `Notes: ${data.additionalDetails}\n` : ''}`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:${darkBg};font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:640px;margin:0 auto;padding:40px 20px;">

    <!-- Header -->
    <div style="text-align:center;padding:32px 0;">
      <h1 style="margin:0;font-size:28px;font-weight:300;color:#ffffff;letter-spacing:4px;">mmmdecors</h1>
      <p style="margin:8px 0 0;font-size:12px;color:${brandColor};letter-spacing:3px;text-transform:uppercase;">Memorable · Magical · Moments</p>
    </div>

    <!-- Main Card -->
    <div style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.15);">
      
      <!-- Gold Banner -->
      <div style="background:linear-gradient(135deg,${brandColor},#c9a96e);padding:24px 32px;">
        <h2 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">New Event Design Questionnaire</h2>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Submitted on ${new Date().toLocaleDateString('en-CA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div style="padding:32px;">

        <!-- Section: Contact -->
        <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:${brandColor};border-bottom:2px solid ${brandColor};padding-bottom:6px;">Contact Information</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:28px;font-size:14px;">
          ${row('Full Name', data.fullName)}
          ${row('Email', `<a href="mailto:${data.email}" style="color:${brandColor};">${data.email}</a>`)}
          ${row('Phone', data.phone)}
        </table>

        <!-- Section: Event Details -->
        <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:${brandColor};border-bottom:2px solid ${brandColor};padding-bottom:6px;">Event Details</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:28px;font-size:14px;">
          ${row('Event Type', data.eventType)}
          ${row('Event Date', data.eventDate)}
          ${row('Venue', data.eventVenue)}
          ${row('Time', `${data.eventStartTime} – ${data.eventEndTime}`)}
          ${row('Estimated Guests', data.estimatedGuests)}
        </table>

        <!-- Section: Celebrant & Style -->
        ${data.celebrantName || data.vibeStyle ? `
        <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:${brandColor};border-bottom:2px solid ${brandColor};padding-bottom:6px;">Celebrant & Style</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:28px;font-size:14px;">
          ${row('Celebrant', data.celebrantName)}
          ${row('Vibe / Style', data.vibeStyle)}
        </table>
        ` : ''}

        <!-- Section: Theme & Colours -->
        ${data.theme || data.colourPalette || data.hasInspirationPhotos ? `
        <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:${brandColor};border-bottom:2px solid ${brandColor};padding-bottom:6px;">Theme & Colours</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:28px;font-size:14px;">
          ${row('Theme', data.theme)}
          ${row('Colour Palette', data.colourPalette)}
          ${row('Inspiration Photos', data.hasInspirationPhotos)}
          ${row('Inspiration Details', data.inspirationDetails)}
        </table>
        ` : ''}

        <!-- Section: Decoration Areas -->
        ${decorationAreas ? `
        <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:${brandColor};border-bottom:2px solid ${brandColor};padding-bottom:6px;">Areas to be Decorated</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:28px;font-size:14px;">
          ${decorationAreas}
        </table>
        ` : ''}

        <!-- Section: Must-Haves -->
        ${data.mustHaveElements ? `
        <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:${brandColor};border-bottom:2px solid ${brandColor};padding-bottom:6px;">Must-Have Elements</h3>
        <div style="background:${cardBg};padding:16px;border-radius:8px;margin-bottom:28px;font-size:14px;color:${textColor};line-height:1.6;">
          ${data.mustHaveElements}
        </div>
        ` : ''}

        <!-- Section: Budget -->
        ${data.budgetRange ? `
        <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:${brandColor};border-bottom:2px solid ${brandColor};padding-bottom:6px;">Budget</h3>
        <div style="background:${cardBg};padding:16px;border-radius:8px;margin-bottom:28px;font-size:14px;color:${textColor};">
          ${data.budgetRange}
        </div>
        ` : ''}

        <!-- Section: Additional Notes -->
        ${data.additionalDetails ? `
        <h3 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:${brandColor};border-bottom:2px solid ${brandColor};padding-bottom:6px;">Additional Notes</h3>
        <div style="background:${cardBg};padding:16px;border-radius:8px;margin-bottom:28px;font-size:14px;color:${textColor};line-height:1.6;">
          ${data.additionalDetails}
        </div>
        ` : ''}

        <!-- CTA -->
        <div style="text-align:center;padding-top:12px;">
          <a href="mailto:${data.email}" style="display:inline-block;background:${brandColor};color:#ffffff;padding:14px 36px;border-radius:50px;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:1px;">Reply to ${data.fullName.split(' ')[0]}</a>
        </div>

      </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding:24px 0;font-size:11px;color:rgba(255,255,255,0.4);">
      <p style="margin:0;">This is an automated notification from the mmmdecors website.</p>
    </div>
  </div>
</body>
</html>`,
  };
};

// ─── Auto-Reply Email (to client) ────────────────────────────────────────────
const createAutoReplyEmail = (data: QuestionnaireData) => {
  const firstName = data.fullName ? data.fullName.split(' ')[0] : 'there';

  return {
    from: `"mmmdecors" <${process.env.EMAIL_REPLY}>`,
    to: data.email,
    subject: `Thank You, ${firstName} — We've Received Your Event Inquiry ✨`,
    text: `Hello ${firstName},

Thank you so much for completing the mmmdecors Event Design Questionnaire! We're thrilled that you're considering us to help bring your vision to life.

Here's what happens next:

1. Our team will carefully review your questionnaire responses.
2. Within 24–48 hours, we will reach out to schedule a complimentary Zoom consultation.
3. During the consultation, we'll present a custom design concept tailored to your event, along with an associated quote.

Your Event Summary:
- Event Type: ${data.eventType}
- Event Date: ${data.eventDate}
- Venue: ${data.eventVenue}
- Estimated Guests: ${data.estimatedGuests}

In the meantime, feel free to explore our work on Instagram (@mmmdecors) for more inspiration.

We look forward to creating something truly memorable, magical, and momentous with you.

With warmth,
Nikie & The mmmdecors Team

📧 nikie@mmmdecors.ca
📸 @mmmdecors
🌐 mmmdecors.ca`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f1ec;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">

    <!-- Header -->
    <div style="text-align:center;padding:32px 0;">
      <h1 style="margin:0;font-size:28px;font-weight:300;color:${darkBg};letter-spacing:4px;">mmmdecors</h1>
      <p style="margin:8px 0 0;font-size:11px;color:${brandColor};letter-spacing:3px;text-transform:uppercase;">Memorable · Magical · Moments</p>
    </div>

    <!-- Main Card -->
    <div style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.08);">

      <!-- Gold top accent -->
      <div style="height:4px;background:linear-gradient(90deg,${brandColor},#c9a96e,${brandColor});"></div>

      <div style="padding:40px 36px;">

        <h2 style="margin:0 0 8px;font-size:22px;font-weight:600;color:${textColor};">Thank You, ${firstName}! ✨</h2>
        <p style="margin:0 0 24px;font-size:14px;color:${mutedText};line-height:1.7;">
          We're so excited that you're considering mmmdecors to help bring your event vision to life. Your questionnaire has been received, and we can't wait to learn more about your celebration.
        </p>

        <!-- What's Next -->
        <div style="background:${cardBg};border-radius:12px;padding:24px;margin-bottom:28px;">
          <h3 style="margin:0 0 16px;font-size:14px;text-transform:uppercase;letter-spacing:2px;color:${brandColor};">What Happens Next</h3>
          
          <div style="display:flex;margin-bottom:14px;">
            <div style="flex-shrink:0;width:28px;height:28px;border-radius:50%;background:${brandColor};color:#fff;text-align:center;line-height:28px;font-size:13px;font-weight:700;margin-right:14px;">1</div>
            <div style="font-size:14px;color:${textColor};line-height:1.6;padding-top:3px;">
              <strong>Review</strong> — Our team will carefully review your responses and event details.
            </div>
          </div>

          <div style="display:flex;margin-bottom:14px;">
            <div style="flex-shrink:0;width:28px;height:28px;border-radius:50%;background:${brandColor};color:#fff;text-align:center;line-height:28px;font-size:13px;font-weight:700;margin-right:14px;">2</div>
            <div style="font-size:14px;color:${textColor};line-height:1.6;padding-top:3px;">
              <strong>Schedule</strong> — Within 24–48 hours, we'll reach out to book a complimentary Zoom consultation.
            </div>
          </div>

          <div style="display:flex;">
            <div style="flex-shrink:0;width:28px;height:28px;border-radius:50%;background:${brandColor};color:#fff;text-align:center;line-height:28px;font-size:13px;font-weight:700;margin-right:14px;">3</div>
            <div style="font-size:14px;color:${textColor};line-height:1.6;padding-top:3px;">
              <strong>Design Concept</strong> — During the consultation, we'll present a custom design concept and quote tailored to your vision.
            </div>
          </div>
        </div>

        <!-- Event Summary -->
        <div style="border:1px solid #ebe7e0;border-radius:12px;padding:24px;margin-bottom:28px;">
          <h3 style="margin:0 0 16px;font-size:14px;text-transform:uppercase;letter-spacing:2px;color:${brandColor};">Your Event at a Glance</h3>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${row('Event Type', data.eventType)}
            ${row('Date', data.eventDate)}
            ${row('Venue', data.eventVenue)}
            ${row('Time', `${data.eventStartTime} – ${data.eventEndTime}`)}
            ${row('Guests', data.estimatedGuests)}
            ${data.theme ? row('Theme', data.theme) : ''}
            ${data.colourPalette ? row('Colours', data.colourPalette) : ''}
          </table>
        </div>

        <!-- CTA -->
        <div style="text-align:center;margin-bottom:28px;">
          <a href="https://instagram.com/mmmdecors" style="display:inline-block;background:${brandColor};color:#ffffff;padding:14px 36px;border-radius:50px;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:1px;">Explore Our Work on Instagram →</a>
        </div>

        <!-- Sign off -->
        <p style="font-size:14px;color:${textColor};line-height:1.7;margin:0 0 6px;">
          We look forward to creating something truly <strong>memorable</strong>, <strong>magical</strong>, and <strong>momentous</strong> with you.
        </p>
        <p style="font-size:14px;color:${textColor};line-height:1.7;margin:0;">
          With warmth,<br/>
          <strong>Nikie & The mmmdecors Team</strong>
        </p>
      </div>

      <!-- Footer bar -->
      <div style="background:${darkBg};padding:20px 36px;text-align:center;">
        <p style="margin:0 0 4px;font-size:12px;color:rgba(255,255,255,0.6);">
          📧 <a href="mailto:nikie@mmmdecors.ca" style="color:${brandColor};text-decoration:none;">nikie@mmmdecors.ca</a> &nbsp;·&nbsp; 📸 <a href="https://instagram.com/mmmdecors" style="color:${brandColor};text-decoration:none;">@mmmdecors</a>
        </p>
        <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.35);">
          © ${new Date().getFullYear()} mmmdecors — Memorable Magical Moments. All rights reserved.
        </p>
      </div>
    </div>

    <!-- Unsubscribe note -->
    <div style="text-align:center;padding:16px 0;font-size:11px;color:#999;">
      <p style="margin:0;">This is a one-time confirmation email. You will not receive marketing emails unless you subscribe.</p>
    </div>
  </div>
</body>
</html>`,
  };
};

// ─── POST Handler ────────────────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const data: QuestionnaireData = await request.json();

    // Validate required fields
    if (!data.fullName || !data.email || !data.phone) {
      return NextResponse.json(
        { success: false, message: 'Missing required contact information.' },
        { status: 400 }
      );
    }

    // 1. Send notification email to business owner
    const notification = createNotificationEmail(data);

    await transporter.sendMail({
      from: `"mmmdecors Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: data.email,
      ...notification,
    });

    console.log('Notification email sent to:', process.env.EMAIL_RECEIVER);

    // 2. Send auto-reply to the client
    try {
      const autoReply = createAutoReplyEmail(data);

      await transporter.sendMail({
        ...autoReply,
        from: `"mmmdecors" <${process.env.EMAIL_USER}>`,
      });

      console.log('Auto-reply sent to:', data.email);
    } catch (replyError) {
      console.error('Failed to send auto-reply:', replyError);
      // Don't fail the main request if auto-reply fails
    }

    return NextResponse.json({
      success: true,
      message: 'Your questionnaire has been submitted successfully.',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit questionnaire. Please try again.' },
      { status: 500 }
    );
  }
}
