import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

export function ProjectsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'completed'>('all');

  const filteredProjects = projects.filter(project =>
    filter === 'all' ? true : project.status === filter
  );

  const ongoingProjects = projects.filter(p => p.status === 'ongoing');
  const completedProjects = projects.filter(p => p.status === 'completed');

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-agora-purple to-agora-orange text-white section-padding">
        <div className="container-base text-center">
          <h1 className="text-5xl font-bold mb-4">Our Projects & Events</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            AGORA Events develops and manages structured youth initiatives across multiple sectors. 
            Below are our current and past projects that create lasting impact.
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-green-700 mb-2">{ongoingProjects.length}</h3>
              <p className="text-green-600">Ongoing Projects</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-blue-700 mb-2">{completedProjects.length}</h3>
              <p className="text-blue-600">Completed Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-base">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-agora-purple to-agora-orange text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('ongoing')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === 'ongoing'
                  ? 'bg-gradient-to-r from-agora-purple to-agora-orange text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Ongoing ({ongoingProjects.length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === 'completed'
                  ? 'bg-gradient-to-r from-agora-purple to-agora-orange text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Completed ({completedProjects.length})
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="card-base overflow-hidden hover:shadow-xl transition-all animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}>
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
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                    {project.type}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-agora-purple flex items-center gap-1">
                      <Calendar size={14} />
                      {project.year}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin size={14} />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-agora-orange mb-4">{project.impact}</p>
                    <div className="flex gap-2">
                      {project.websiteUrl ? (
                        <Link to={project.websiteUrl} className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                          View Details
                          <ExternalLink size={14} />
                        </Link>
                      ) : (
                        <button className="btn-outline text-sm py-2 px-4">
                          Learn More
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-agora-gradient text-white section-padding">
        <div className="container-base text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg mb-8 opacity-90">Let's work together to bring your vision to life</p>
          <Link to="/contact" className="btn-primary bg-white text-agora-purple hover:text-agora-purple">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
