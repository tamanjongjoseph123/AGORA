import { useTranslation } from 'react-i18next';
import { Mail, Phone, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agora-dark text-white">
      <div className="container-base section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AGORA%20LOGO-xt7P91EK6iX5SV7Hx9TLP7ThgRrlRs.jpeg"
              alt="AGORA"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400">{t('footer.company')}</p>
            <p className="text-xs text-gray-500 mt-2">
              {t('hero.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.quicklinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-agora-orange transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-agora-orange transition-colors">
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-agora-orange transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-agora-orange transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-agora-orange" />
                <a href="mailto:info@agoraevents.com" className="text-gray-400 hover:text-agora-orange">
                  info@agoraevents.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-agora-orange" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-agora-orange">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={18} className="text-agora-orange" />
                <a href="https://wa.me/1234567890" className="text-gray-400 hover:text-agora-orange">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.follow')}</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-700 hover:bg-agora-purple rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-700 hover:bg-agora-purple rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-700 hover:bg-agora-purple rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-700 hover:bg-agora-purple rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {currentYear} AGORA Events. {t('footer.copyright')}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
