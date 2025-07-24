// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { TestTube, CheckCircle, Bug, Target, Users, Star, User, Shield, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['feature-card-0', 'feature-card-1', 'feature-card-2', 'feature-card-3'];
  return ids[index] || 'noID';
};

const getServiceCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['service-card-0', 'service-card-1', 'service-card-2', 'service-card-3'];
  return ids[index] || 'noID';
};

const getTestTypeId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['test-type-0', 'test-type-1', 'test-type-2', 'test-type-3', 'test-type-4', 'test-type-5'];
  return ids[index] || 'noID';
};

const getTestBadgeId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['test-badge-0', 'test-badge-1', 'test-badge-2', 'test-badge-3', 'test-badge-4', 'test-badge-5'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <TestTube className="w-8 h-8 text-blue-500" />,
      title: "Comprehensive Testing",
      description: "Full-stack website testing including functionality, performance, and security assessments"
    },
    {
      icon: <Bug className="w-8 h-8 text-red-500" />,
      title: "Bug Detection",
      description: "Advanced bug detection and reporting with detailed analysis and reproduction steps"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: "Performance Analysis",
      description: "In-depth performance testing with load testing, speed optimization, and bottleneck identification"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Security Testing",
      description: "Comprehensive security audits to identify vulnerabilities and ensure data protection"
    }
  ];

  const services = [
    {
      icon: <Target className="w-12 h-12 text-orange-500" />,
      title: "Functional Testing",
      description: "Verify that all website features work as intended across different browsers and devices",
      features: ["Cross-browser testing", "Mobile responsiveness", "Form validation", "Navigation testing"]
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Performance Testing",
      description: "Ensure your website loads quickly and handles traffic efficiently",
      features: ["Load testing", "Speed optimization", "Resource analysis", "CDN evaluation"]
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Security Testing",
      description: "Protect your website and users with comprehensive security assessments",
      features: ["Vulnerability scanning", "SQL injection testing", "XSS protection", "Data encryption"]
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
      title: "Usability Testing",
      description: "Optimize user experience with detailed usability and accessibility testing",
      features: ["User journey analysis", "Accessibility compliance", "UI/UX evaluation", "A/B testing"]
    }
  ];

  const stats = [
    { label: "Tests Completed", value: "10K+" },
    { label: "Bugs Found", value: "25K+" },
    { label: "Websites Tested", value: "500+" },
    { label: "Client Satisfaction", value: "99%" }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with gradient background"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Primary site header with navigation"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Company logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <TestTube className="w-5 h-5 text-white" />
            </Div>
            <Span 
              devId="brand-name" 
              devName="Brand Name" 
              devDescription="TestPro website testing platform brand name"
              className="text-xl font-bold text-white"
            >
              TestPro
            </Span>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="docs-button" 
              devName="Docs Button" 
              devDescription="Link to testing documentation"
              variant="ghost" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Documentation
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated user"
                  className="text-gray-300"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button in navigation header for authenticated users"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for unauthenticated users"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button in navigation header"
                    variant="ghost" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Get started button in navigation header"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Start Testing
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero Section with title and call-to-action"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title showcasing website testing services"
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Professional 
              <Span 
                devId="testing-highlight" 
                devName="Testing Highlight" 
                devDescription="Highlighted website testing text in gradient"
                className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
              >
                {' '}Website Testing
              </Span>
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero Section description explaining testing services"
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Comprehensive website testing platform for functionality, performance, security, and usability. 
              Ensure your website delivers exceptional user experiences across all devices and browsers.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons in hero Section"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button 
                    devId="hero-start-testing"
                    devName="Start Testing Button"
                    devDescription="Primary call-to-action button for starting website testing"
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/register">
                  <Button 
                    devId="hero-start-testing"
                    devName="Start Testing Button"
                    devDescription="Primary call-to-action button for starting website testing"
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Start Testing Now
                  </Button>
                </Link>
              )}
              <Button 
                devId="hero-learn-more-button"
                devName="Learn More Button"
                devDescription="Secondary button to learn more about testing services"
                variant="outline"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Learn More
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics Section showing testing metrics"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for statistics cards"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <CardContent devId="noID"  className="p-0">
                  <Div devId="noID" className="text-2xl font-bold text-white mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-gray-400">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Features Section */}
      <Container componentId="features-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Why Choose TestPro?</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive testing solutions to ensure your website performs flawlessly
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                devId={getFeatureCardId(index)}
                devName={`${feature.title} Feature Card`}
                devDescription={`Feature card highlighting ${feature.title}: ${feature.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{feature.icon}</Div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <P devId="noID" className="text-gray-400">{feature.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Services Section */}
      <Container componentId="services-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Our Testing Services</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Complete testing solutions for every aspect of your website
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                devId={getServiceCardId(index)}
                devName={`${service.title} Service Card`}
                devDescription={`Service card for ${service.title}: ${service.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-semibold text-white ml-4">{service.title}</h3>
                  </Div>
                  <P devId="noID" className="text-gray-400 mb-6">{service.description}</P>
                  <Div devId="noID" className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <Div key={featureIndex} devId="noID" className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </Div>
                    ))}
                  </Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Testing Types Section */}
      <Container componentId="testing-types-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Testing Capabilities</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Advanced testing methodologies and tools for comprehensive website analysis
            </P>
          </Div>
          <Div devId="noID" className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { name: "Functional", color: "from-blue-400 to-blue-500" },
              { name: "Performance", color: "from-yellow-400 to-orange-500" },
              { name: "Security", color: "from-red-400 to-red-500" },
              { name: "Usability", color: "from-green-400 to-green-500" },
              { name: "Mobile", color: "from-purple-400 to-purple-500" },
              { name: "API", color: "from-teal-400 to-teal-500" }
            ].map((testType, index) => (
              <Div key={index} devId="noID" className="text-center">
                <Div devId={getTestTypeId(index)} className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${testType.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{testType.name[0]}</span>
                </Div>
                <Badge 
                  devId={getTestBadgeId(index)}
                  devName={`${testType.name} Testing Badge`}
                  devDescription={`Testing type badge for ${testType.name}`}
                  className="text-gray-300 font-medium bg-transparent border-none"
                >
                  {testType.name}
                </Badge>
              </Div>
            ))}
          </Div>
        </Section>
      </Container>

      {/* CTA Section */}
      <Container componentId="cta-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl p-12 text-center border border-blue-500/30">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Ready to Test Your Website?</H2>
            <P devId="noID" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start comprehensive testing today and ensure your website delivers exceptional user experiences
            </P>
            <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                devId="cta-start-testing"
                devName="Start Testing Button"
                devDescription="Primary CTA button to start website testing"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <TestTube className="w-5 h-5" />
                  Start Testing
                </span>
              </Button>
              <Button 
                devId="cta-contact-us"
                devName="Contact Us Button"
                devDescription="Secondary CTA button to contact for custom testing"
                variant="outline"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Contact Us
                </span>
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Site footer with links and copyright"
        className="container mx-auto px-4 py-8 border-t border-white/10"
      >
        <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
          <Div devId="noID" className="text-gray-400 mb-4 md:mb-0">
            © 2024 TestPro. Professional website testing solutions.
          </Div>
          <Div devId="noID" className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">API</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
          </Div>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};