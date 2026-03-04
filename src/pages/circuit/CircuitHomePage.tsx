import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Trophy, Target, Users, Zap, Calendar, Award } from 'lucide-react';

export function CircuitHomePage() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-agora-gradient text-white min-h-screen flex items-center justify-center">
        <div className="container-base section-padding text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              L'Ascension Commence Ici.
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              The Official AGORA University Circuit
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-4 opacity-85">
              Compete monthly. Earn points. Climb the rankings. Qualify for the Grand Final Showdown.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/circuit/register" className="btn-primary">
                Register Now
              </Link>
              <Link to="/circuit/rankings" className="btn-secondary text-agora-purple">
                View Rankings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Circuit */}
      <section className="bg-white section-padding">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">About the Circuit</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The AGORA University Circuit is a multi-month competitive football platform designed for university teams. Each month, teams compete in open-entry tournaments that contribute to a cumulative season ranking.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The best teams qualify for the Grand Final Showdown hosted in a major stadium venue with massive prize pools and exposure.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-agora-purple" size={24} />
                  <span className="font-semibold">Monthly Tournaments</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="text-agora-orange" size={24} />
                  <span className="font-semibold">Grand Final Showdown</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-agora-red" size={24} />
                  <span className="font-semibold">16+ Universities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-agora-purple" size={24} />
                  <span className="font-semibold">1M+ FCFA Prizes</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"
                alt="University Football Circuit"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Competition Format */}
      <section className="bg-gray-50 section-padding">
        <div className="container-base">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Competition Format</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-base p-8 text-center">
              <div className="bg-gradient-to-r from-agora-purple to-agora-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Monthly Structure</h3>
              <p className="text-gray-600">
                Open registration for university teams each month with group stages and knockout rounds.
              </p>
            </div>

            <div className="card-base p-8 text-center">
              <div className="bg-gradient-to-r from-agora-purple to-agora-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Match Points</h3>
              <p className="text-gray-600">
                Win: 3 points | Draw: 1 point | Loss: 0 points
              </p>
            </div>

            <div className="card-base p-8 text-center">
              <div className="bg-gradient-to-r from-agora-purple to-agora-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Season Ranking</h3>
              <p className="text-gray-600">
                Champion: 100pts | Runner-up: 70pts | 3rd: 50pts
              </p>
            </div>

            <div className="card-base p-8 text-center">
              <div className="bg-gradient-to-r from-agora-purple to-agora-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Grand Final</h3>
              <p className="text-gray-600">
                Top teams qualify for the championship showdown
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-agora-dark text-white section-padding">
        <div className="container-base">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">16+</div>
              <p className="text-lg opacity-90">Universities</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <p className="text-lg opacity-90">Athletes</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">1M+</div>
              <p className="text-lg opacity-90">FCFA Prize Pool</p>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">6</div>
              <p className="text-lg opacity-90">Monthly Tournaments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Season Info */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Season 2026</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="card-base p-6 border-l-4 border-agora-purple">
                  <h3 className="font-bold text-xl mb-2 text-agora-purple">Monthly Tournaments</h3>
                  <p className="text-gray-600">Open entry competitions held monthly across university venues</p>
                </div>
                <div className="card-base p-6 border-l-4 border-agora-orange">
                  <h3 className="font-bold text-xl mb-2 text-agora-orange">Season Points</h3>
                  <p className="text-gray-600">Points accumulate throughout the season for overall ranking</p>
                </div>
                <div className="card-base p-6 border-l-4 border-agora-red">
                  <h3 className="font-bold text-xl mb-2 text-agora-red">Grand Final Showdown</h3>
                  <p className="text-gray-600">Top 8 teams compete for the championship title</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-agora-purple/10 to-agora-orange/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-agora-dark">Prize Distribution</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold">Champion</span>
                  <span className="text-agora-purple font-bold">500,000 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold">Runner-up</span>
                  <span className="text-agora-orange font-bold">300,000 FCFA</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold">3rd Place</span>
                  <span className="text-agora-red font-bold">200,000 FCFA</span>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">*Prizes may vary depending on sponsor agreements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-agora-light section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Circuit Navigation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/circuit/rankings" className="card-base p-8 text-center hover:shadow-lg transition-all group">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-agora-orange transition-colors">
                Rankings
              </h3>
              <p className="text-gray-600">Current team standings</p>
            </Link>

            <Link to="/circuit/schedule" className="card-base p-8 text-center hover:shadow-lg transition-all group">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-agora-orange transition-colors">
                Schedule
              </h3>
              <p className="text-gray-600">Match fixtures & results</p>
            </Link>

            <Link to="/circuit/register" className="card-base p-8 text-center hover:shadow-lg transition-all group">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-agora-orange transition-colors">
                Register
              </h3>
              <p className="text-gray-600">Join the competition</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-agora-gradient-reverse text-white section-padding">
        <div className="container-base text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write History?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join the most competitive university football circuit in Central Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/circuit/register" className="btn-primary bg-white text-agora-purple hover:text-agora-purple">
              Register Your Team
            </Link>
            <Link to="/circuit/rules" className="btn-secondary text-white border-white hover:bg-white hover:text-agora-purple">
              View Rules
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
