import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import AnimatedSection from "@/components/sections/AnimatedSection";
import HummingbirdAnimation from "@/components/sections/HummingbirdAnimation";

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
    name: "",
    email: "",
    subject: "",
    message: "",
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

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    else if (formData.subject.length < 5)
      newErrors.subject = "Subject must be at least 5 characters";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
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
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
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
    <div className="min-h-screen bg-white text-driftwood-brown flex flex-col">
      <section id="contact" className="relative pt-40 pb-16 px-6 md:px-20 flex-grow">

        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900">🌴 Let's Connect</h2>
            <p className="mt-2 text-gray-600 px-4 md:px-0">The island breeze brought you here — now let's make something amazing together.</p>
          </div>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-4 md:space-y-6 pl-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "a2ramgoo@uwaterloo.ca",
                  href: "mailto:a2ramgoo@uwaterloo.ca",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1-437-667-7759",
                  href: "tel:+14376677759",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "ashvin-ramgoolam",
                  href: "https://www.linkedin.com/in/ashvin-ramgoolam/",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "@AshvinRamgo",
                  href: "https://github.com/AshvinRamgo",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-6"
                  target={
                    label === "LinkedIn" || label === "GitHub"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    label === "LinkedIn" || label === "GitHub"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span className="bg-yellow-100 p-3 rounded-full text-yellow-600 text-xl">
                    <Icon size={24} />
                  </span>
                  <div className="pl-2">
                    <h4 className="font-semibold text-teal-800">{label}</h4>
                    <p>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-up" delay={400}>
            <form onSubmit={handleSubmit} className="bg-[#ddf5f2] p-8 rounded-xl shadow-lg space-y-6">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <Input
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-teal-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none ${
                      errors[field as keyof FormErrors]
                        ? "border-sunset-coral"
                        : ""
                    }`}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  />
                  {errors[field as keyof FormErrors] && (
                    <p className="mt-1 text-sm text-sunset-coral">
                      {errors[field as keyof FormErrors]}
                    </p>
                  )}
                </div>
              ))}
              <div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-teal-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none ${errors.message ? "border-sunset-coral" : ""}`}
                  placeholder="Message"
                  rows={4}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-sunset-coral">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition transform hover:-translate-y-1 flex items-center gap-2"
              >
                ✉️ {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </AnimatedSection>
        </div>


        {/* Final Touch Quote with Hummingbird Background */}
        <div className="relative max-w-6xl mx-auto mt-20 mb-16">
          {/* Hummingbird positioned behind text - hidden on mobile */}
          <div className="hidden md:block absolute left-[35%] transform -translate-x-1/2 -top-60 w-[150px] h-[150px] pointer-events-none z-0">
            <HummingbirdAnimation className="transform scale-[2.5] -scale-x-150" />
          </div>
          
          {/* Quote text positioned in front */}
          <p className="text-sm text-center text-gray-400 italic px-4 md:px-0 relative z-10 font-medium">
            "Small wings. Big messages. Let's build something beautiful together."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
