import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Sparkles, Users, Target, Building, Trophy } from 'lucide-react';

export function HomePage() {

  const featuredProjects = projects.slice(0, 3);
  const ongoingProjects = projects.filter(p => p.status === 'ongoing');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-agora-gradient text-white min-h-screen flex items-center justify-center">
        <div className="container-base section-padding text-center">
          <div className="animate-fadeInUp max-w-6xl mx-auto">
            <div className="relative mb-6">
              <img
                src="/images/AGORA LOGO.jpeg"
                alt="AGORA Logo"
                className="h-48 w-auto mx-auto animate-logo-float"
              />
              <div className="absolute inset-0 h-48 w-auto mx-auto animate-logo-glow">
                <div className="w-full h-full bg-agora-orange opacity-20 blur-xl rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
              <Link to="/projects" className="btn-primary">
                Discover Our Projects
              </Link>
              <Link to="/partners" className="btn-secondary text-agora-purple">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="container-base">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card-base p-6 text-center">
              <Building size={40} className="text-agora-purple mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">{ongoingProjects.length}</h3>
              <p className="text-gray-600">Active Projects</p>
            </div>
            <div className="card-base p-6 text-center">
              <Users size={40} className="text-agora-orange mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">Athletes & Participants</p>
            </div>
            <div className="card-base p-6 text-center">
              <Trophy size={40} className="text-agora-red mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">16+</h3>
              <p className="text-gray-600">University Partners</p>
            </div>
            <div className="card-base p-6 text-center">
              <Target size={40} className="text-agora-purple mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">1M+</h3>
              <p className="text-gray-600">FCFA Prize Distribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* About AGORA Section */}
      <section className="py-12 bg-white">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-agora-dark">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                AGORA Events is an independent youth-driven organization committed to developing structured, high-impact events across universities and communities. Our focus is to transform passion into opportunity through well-organized competitive platforms.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-agora-purple rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-agora-dark">Our Vision</h4>
                    <p className="text-gray-600">To become a leading youth event platform in Central Africa, connecting talent, sponsors, institutions, and communities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-agora-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-agora-dark">Our Mission</h4>
                    <p className="text-gray-600">Create structured competitive environments, promote discipline, leadership and excellence, provide visibility for emerging talent, and deliver value to partners and sponsors.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-agora-purple/10 to-agora-orange/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-agora-dark">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Excellence', 'Transparency', 'Innovation', 'Fair Play', 'Community Impact', 'Leadership'].map((value, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Sparkles size={16} className="text-agora-purple" />
                    <span className="font-medium text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 bg-gray-50">
        <div className="container-base">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Our Projects & Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AGORA Events develops and manages structured youth initiatives across multiple sectors. Below are our current and past projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`card-base overflow-hidden animate-fadeInUp hover:shadow-xl transition-all`}
                style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                    project.status === 'ongoing'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-agora-purple">{project.year}</span>
                    <span className="text-xs text-gray-500">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-agora-orange mb-3">{project.impact}</p>
                    {project.websiteUrl ? (
                      <Link to={project.websiteUrl} className="btn-primary text-sm py-2 px-4">
                        View Details
                      </Link>
                    ) : (
                      <button className="btn-outline text-sm py-2 px-4">
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Preview */}
      <section className="py-12 bg-white">
        <div className="container-base">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Partners & Sponsors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with institutions, brands, and organizations that believe in youth empowerment and structured opportunity.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-agora-purple/5 to-agora-orange/5 p-8 rounded-xl text-center">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              {['University Partners', 'Corporate Sponsors', 'Media Partners', 'Community Organizations'].map((partner, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Building size={24} className="text-gray-500" />
                  </div>
                  <p className="font-semibold text-gray-700">{partner}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/partners" className="btn-primary">
                Why Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-agora-gradient-reverse text-white py-12">
        <div className="container-base text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Create Impact Together?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join us in our mission to build platforms that elevate youth talent and create lasting community impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-agora-purple hover:text-agora-purple">
              Get Started Today
            </Link>
            <Link to="/projects" className="btn-secondary text-white border-white hover:bg-white hover:text-agora-purple">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
