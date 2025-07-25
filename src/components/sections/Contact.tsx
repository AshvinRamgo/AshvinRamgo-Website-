
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-xl text-stone-600 text-center mb-16 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a great conversation about technology and innovation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Get in touch</h3>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Let's create something amazing together!
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "your.email@example.com",
                    href: "mailto:your.email@example.com"
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "/in/yourname",
                    href: "https://linkedin.com/in/yourname"
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "@yourusername",
                    href: "https://github.com/yourusername"
                  }
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                      <Icon className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-800">{label}</div>
                      <div className="text-stone-600">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-stone-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-stone-800">Send a Message</CardTitle>
                <CardDescription className="text-stone-600">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="First Name"
                        required
                        className="border-stone-200 focus:border-purple-300 focus:ring-purple-300"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Last Name"
                        required
                        className="border-stone-200 focus:border-purple-300 focus:ring-purple-300"
                      />
                    </div>
                  </div>
                  
                  <Input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="border-stone-200 focus:border-purple-300 focus:ring-purple-300"
                  />
                  
                  <Input
                    placeholder="Subject"
                    required
                    className="border-stone-200 focus:border-purple-300 focus:ring-purple-300"
                  />
                  
                  <Textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="border-stone-200 focus:border-purple-300 focus:ring-purple-300 resize-none"
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:scale-100"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
