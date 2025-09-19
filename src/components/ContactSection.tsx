import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Instagram,
  Youtube,
  Send,
  Map
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // EmailJS configuration
    const serviceId = 'service_iukembw';
    const templateId = 'template_pj57gyo';
    const publicKey = 'Y72sFnnf56xkkZC1u';
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'eswar.investments@gmail.com', // Your email address
        },
        publicKey
      );
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const message = `Hello! I'm interested in LIC policies and would like to discuss my insurance needs.`;
    window.open(`https://wa.me/919248426946?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Let's Secure Your
            <span className="block text-gold">Family's Future</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-navy/70 max-w-3xl mx-auto">
            Ready to take the first step towards financial security? Get in touch for 
            personalized advice, free consultation, and the best LIC policies for your family.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-navy mb-6">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Office Address</h4>
                  <p className="text-navy/70">
                    LIC Branch Office<br />
                    Main Road, Chimakurthy<br />
                    Prakasam District, AP - 523226
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Phone</h4>
                  <p className="text-navy/70">
                    <a href="tel:+919248426946" className="hover:text-gold transition-colors">
                      +91 92484 26946
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Email</h4>
                  <p className="text-navy/70">
                    <a href="mailto:eswar.investments@gmail.com" className="hover:text-gold transition-colors">
                      eswar.investments@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Office Hours</h4>
                  <p className="text-navy/70">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-navy">Follow Me On</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  title="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://youtube.com/@eswar_maddali?si=NctORLDLkYVBn-V-" 
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  title="YouTube"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </a>
                <button
                  onClick={openWhatsApp}
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </button>
                <a
                  href="https://maps.app.goo.gl/RQVLGb3ry1FjS2RG6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  title="Open in Google Maps"
                >
                  <Map className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Highlighted Services List moved to its own section */}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-card">
              <h3 className="text-2xl font-bold text-navy mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-navy/20 focus:border-gold"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-navy/20 focus:border-gold"
                      placeholder="+91 92484 26946"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-navy/20 focus:border-gold"
                    placeholder="eswar.investments@gmail.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-navy/20 focus:border-gold resize-none"
                    placeholder="Tell me about your insurance needs, family situation, and financial goals..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-hero"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/20">
                <p className="text-sm text-navy/80 text-center">
                  <strong>Quick Response Guarantee:</strong> I personally respond to every inquiry within 24 hours. 
                  For immediate assistance, please call or WhatsApp me directly.
                </p>
              </div>
            </Card>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <Button
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                size="lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Start WhatsApp Chat - Get Instant Response
              </Button>
            </div>

            {/* Google Maps - moved below the form */}
            <div className="mt-10">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-navy mb-2">Visit Our Office</h3>
                <p className="text-navy/70">LIC Office by Maddali Sreehari, Chimakurthy</p>
              </div>
              <Card className="p-3 bg-white shadow-card">
                <div className="h-80 md:h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15315.524915465473!2d80.34269897779542!3d15.408020900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b73e6b8b8b8b8%3A0x8e8e8e8e8e8e8e8e!2sChimakurthy%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1642584760000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="LIC Office Location - Chimakurthy, Andhra Pradesh"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;