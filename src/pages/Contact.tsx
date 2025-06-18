import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    } else {
      console.error("EmailJS public key is missing.");
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email';

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    else if (formData.subject.length < 5) newErrors.subject = 'Subject must be at least 5 characters';

    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        variant: "default",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("EmailJS send error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have a question or want to work together? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-200 mb-6">Contact Information</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, need help with a technical challenge,
                or just want to say hello, I'd love to hear from you.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "a2ramgoo@uwaterloo.ca",
                    href: "mailto:a2ramgoo@uwaterloo.ca"
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+1-437-667-7759",
                    href: "tel:+14376677759"
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "ashvin-ramgoolam",
                    href: "https://www.linkedin.com/in/ashvin-ramgoolam/"
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "@AshvinRamgo",
                    href: "https://github.com/AshvinRamgo"
                  }
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group"
                     target={label === "LinkedIn" || label === "GitHub" ? "_blank" : undefined}
                     rel={label === "LinkedIn" || label === "GitHub" ? "noopener noreferrer" : undefined}>
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <Icon className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">{label}</div>
                      <div className="text-slate-400">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "subject"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-slate-200 mb-2">
                      {field[0].toUpperCase() + field.slice(1)}
                    </label>
                    <Input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      className={`bg-slate-900/50 border-slate-700 text-slate-200 placeholder:text-slate-500 ${
                        errors[field as keyof FormErrors] ? "border-red-500" : ""
                      }`}
                      placeholder={`Your ${field}`}
                    />
                    {errors[field as keyof FormErrors] && (
                      <p className="mt-1 text-sm text-red-500">{errors[field as keyof FormErrors]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-slate-900/50 border-slate-700 text-slate-200 placeholder:text-slate-500 min-h-[150px] ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3 rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
