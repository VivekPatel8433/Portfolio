import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-heading justify-center" data-num="03.">
          Get In Touch
        </h2>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          I'm always excited to connect! Whether you have a question, a project idea, or just want to chat tech, my inbox is open - let’s make something awesome happen!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="bg-secondary border-border focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-secondary border-border focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Your message..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="bg-secondary border-border focus:border-primary resize-none"
            />
          </div>
          <Button
            type="submit"
            variant="heroPrimary"
            size="lg"
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </Button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/VivekPatel8433"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-3 hover:-translate-y-1 transition-transform"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-patel-6b493b336/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-3 hover:-translate-y-1 transition-transform"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:vivekpatel8433@example.com"
            className="text-muted-foreground hover:text-primary transition-colors p-3 hover:-translate-y-1 transition-transform"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground text-sm">
          <MapPin size={16} />
          <span>Calgary</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
