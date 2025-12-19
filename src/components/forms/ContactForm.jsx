import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm('service_qktxqs8', 'template_rq4fuo8', form.current, {
        publicKey: '8OXEv7ui-BaczjD7f'
      })
      .then(
        () => {
          setSubmitStatus('success');
          reset();
        },
        (error) => {
          console.error('Error submitting form:', error);
          setSubmitStatus('error');
        },
      );

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={form} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
          Name *
        </label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent transition"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-300">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
          Email *
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent transition"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>
        )}
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className="block text-sm font-semibold text-white mb-2">
          Organization
        </label>
        <input
          {...register('organization')}
          type="text"
          id="organization"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent transition"
          placeholder="University, Company, or Spin-off"
        />
      </div>

      {/* Research Area */}
      <div>
        <label htmlFor="researchArea" className="block text-sm font-semibold text-white mb-2">
          Research Area
        </label>
        <input
          {...register('researchArea')}
          type="text"
          id="researchArea"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent transition"
          placeholder="e.g., Medtech, Photonic integrated circuits, Quantum, AI/ML"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
          Message *
        </label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          id="message"
          rows="5"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent transition resize-none"
          placeholder="Tell us about your deep tech research and validation needs..."
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-300">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Start Your Validation Journey'}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-center"
        >
          Thank you! We'll be in touch soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-center"
        >
          Something went wrong. Please try again or email us directly.
        </motion.div>
      )}
    </form>
  );
};

export default ContactForm;
