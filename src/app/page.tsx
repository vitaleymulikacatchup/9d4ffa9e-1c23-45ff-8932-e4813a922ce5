"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Zap, Palette, BookOpen, Layers, Play, CreditCard, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="floatingGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="MVP"
          button={{
            text: "Get Started",
            href: "https://github.com/mvp-ui-library"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Build Faster with Prebuilt UI Components"
          description="MVP is a comprehensive UI library designed for developers who want to create stunning interfaces without starting from scratch. Save hours of development time with our battle-tested, production-ready components."
          tag="Prebuilt & Ready"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832611533-d1jb38ms.jpg"
          imageAlt="Modern UI library showcase"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            {
              text: "Explore Components",
              href: "#features"
            },
            {
              text: "View Docs",
              href: "https://docs.example.com"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Why Choose MVP? We believe in making UI development faster, easier, and more enjoyable. Our library provides everything developers need to build beautiful, functional interfaces with confidence."
          features={[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Prebuilt components that work out of the box. No configuration needed. Start building immediately and ship faster."
            },
            {
              icon: Palette,
              title: "Fully Customizable",
              description: "Adapt every component to your brand. Complete control over colors, spacing, and styling with intuitive APIs."
            },
            {
              icon: BookOpen,
              title: "Well Documented",
              description: "Clear examples and comprehensive docs for every component. Learn through interactive demos and code snippets."
            },
            {
              icon: Layers,
              title: "Production Ready",
              description: "Battle-tested components used in production by thousands of developers. Reliability you can trust."
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Component Showcase"
          description="Explore our extensive library of UI components and see how they work in real applications"
          tag="Interactive Demo"
          tagIcon={Play}
          features={[
            {
              id: 1,
              title: "Form Components",
              description: "Beautiful, accessible form elements with built-in validation, error handling, and multiple input types. Customizable styling to match any design system.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832612135-b8zfwkst.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832612919-8svdzv28.jpg"
              }
            },
            {
              id: 2,
              title: "Navigation Patterns",
              description: "Flexible navigation components including sidebars, tabs, and breadcrumbs. Responsive design that adapts perfectly to mobile and desktop.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832612135-b8zfwkst.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832612919-8svdzv28.jpg"
              }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          buttons={[
            {
              text: "View All Components",
              href: "#"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Developers"
          description="See what developers think about MVP and how it's transforming their workflow"
          tag="Developer Stories"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Frontend Engineer",
              testimonial: "MVP saved us weeks of development time. The components are beautifully designed and so easy to customize. It's become our go-to library for every project.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832613454-e7qeuz17.jpg"
            },
            {
              id: "2",
              name: "Marcus Thompson",
              role: "Lead Developer",
              testimonial: "The documentation is exceptional. Even junior developers on our team were able to integrate components without any issues. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832614227-o39tp0ns.jpg"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Product Designer",
              testimonial: "As a designer, I appreciate how much control MVP gives us over the look and feel. Perfect balance between structure and flexibility.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832615211-msnl7jjp.png"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Full Stack Developer",
              testimonial: "The components are production-ready and handle edge cases beautifully. We've integrated MVP into 5 projects already this year.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832615768-2e7eq60n.jpg"
            },
            {
              id: "5",
              name: "Lisa Park",
              role: "Tech Lead",
              testimonial: "Outstanding support and active community. When we had questions, the team was responsive and helpful. This is professional-grade tooling.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832616682-wdnhiefq.jpg"
            },
            {
              id: "6",
              name: "David Kumar",
              role: "Startup Founder",
              testimonial: "MVP allowed us to launch our MVP faster and focus on building our core product. Best decision for our tech stack.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832617236-l2w2cvei.jpg"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that works best for your needs. All plans include access to our full component library."
          tag="Pricing Plans"
          tagIcon={CreditCard}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Starter",
              badgeIcon: Zap,
              price: "Free",
              subtitle: "Perfect for getting started",
              buttons: [
                {
                  text: "Get Started",
                  href: "#"
                }
              ],
              features: [
                "50+ UI components",
                "Basic customization",
                "Community support",
                "MIT License"
              ]
            },
            {
              id: "pro",
              badge: "Professional",
              badgeIcon: Star,
              price: "$29/mo",
              subtitle: "For growing projects",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "#"
                }
              ],
              features: [
                "200+ UI components",
                "Advanced customization",
                "Priority support",
                "Component variants",
                "Theme builder",
                "Analytics dashboard"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              badgeIcon: Sparkles,
              price: "Custom",
              subtitle: "For large teams",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "#contact"
                }
              ],
              features: [
                "All Pro features",
                "Custom components",
                "Dedicated support",
                "SLA guarantee",
                "Private hosting",
                "Team collaboration tools"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Everything you need to know about MVP and how to get started with our component library."
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Can I use MVP in commercial projects?",
              content: "Yes, absolutely! MVP is available under the MIT License, which allows commercial use. Our Pro and Enterprise plans include additional features and support for commercial projects."
            },
            {
              id: "2",
              title: "How often are components updated?",
              content: "We release updates regularly with new components and improvements. Pro and Enterprise subscribers get priority access to new features and updates. The community edition is updated monthly."
            },
            {
              id: "3",
              title: "Do you provide support?",
              content: "Free tier users have access to community support via our Discord. Pro users get priority email support. Enterprise customers receive dedicated support with guaranteed response times."
            },
            {
              id: "4",
              title: "Can I customize the components?",
              content: "Yes, all components are fully customizable. You can modify colors, spacing, typography, and behavior to match your design system. We provide CSS variables and props for easy customization."
            },
            {
              id: "5",
              title: "What frameworks do you support?",
              content: "MVP is built with React and fully compatible with Next.js, React Native, and other React-based frameworks. We're working on Vue and Angular versions."
            },
            {
              id: "6",
              title: "How do I get started?",
              content: "Install via npm or yarn, import components, and start using them in your project. Our documentation includes setup guides, examples, and live demos for every component."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Updated"
          title="Get the Latest MVP Updates"
          description="Subscribe to our newsletter to receive new component releases, tips, and best practices delivered to your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763832618360-fdjt8j7b.jpg"
          imageAlt="Component library showcase"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="MVP"
          copyrightText="© 2025 MVP UI Library. Built for developers."
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Components",
                  href: "#features"
                },
                {
                  label: "Pricing",
                  href: "#pricing"
                },
                {
                  label: "Documentation",
                  href: "https://docs.example.com"
                },
                {
                  label: "Changelog",
                  href: "https://changelog.example.com"
                }
              ]
            },
            {
              title: "Community",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/mvp-ui-library"
                },
                {
                  label: "Discord",
                  href: "https://discord.gg/mvp"
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/mvp"
                },
                {
                  label: "Discussions",
                  href: "https://github.com/mvp-ui-library/discussions"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About",
                  href: "#about"
                },
                {
                  label: "Blog",
                  href: "https://blog.example.com"
                },
                {
                  label: "Contact",
                  href: "#contact"
                },
                {
                  label: "Status",
                  href: "https://status.example.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}