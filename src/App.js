import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, ChevronDown, ExternalLink, Moon, Sun, Globe } from 'lucide-react';

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('accueil');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('fr');

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const translations = {
        fr: {
            nav: {
                home: 'Accueil',
                about: 'À propos',
                projects: 'Réalisations',
                models: 'Maquettes',
                education: 'Formation',
                internships: 'Stages',
                contact: 'Contact'
            },
            hero: {
                title: 'Emma Nuzillat',
                subtitle: 'Étudiante en 1ère année de Bachelor à l\'ENTPE',
                description: 'Passionnée par l\'ingénierie et l\'architecture, je développe mes compétences à travers des projets innovants et des expériences enrichissantes.',
                cta: 'Me contacter'
            },
            about: {
                title: 'À propos',
                p1: 'Actuellement en 1ère année de Bachelor à l\'ENTPE (École Nationale des Travaux Publics de l\'État), je me forme aux métiers de l\'ingénierie et du génie civil.',
                p2: 'J\'ai obtenu un BAC STI2D à l\'école La Mache, ce qui m\'a donné une base solide en sciences et technologies industrielles.',
                p3: 'Mon parcours me permet de développer des compétences techniques solides tout en cultivant ma créativité à travers la réalisation de maquettes et de projets variés.',
                p4: '[Personnalisez cette section avec vos informations spécifiques : parcours, passions, objectifs...]'
            },
            projects: {
                title: 'Réalisations',
                projectTitle: 'Projet',
                description: 'Description du projet et des compétences mises en œuvre.',
                skill1: 'Compétence 1',
                skill2: 'Compétence 2',
                image: 'Image projet'
            },
            models: {
                title: 'Maquettes',
                modelTitle: 'Maquette',
                description: 'Description détaillée de la maquette, des matériaux utilisés et du processus de création.',
                materials: 'Matériaux : ...',
                scale: 'Échelle : ...',
                image: 'Image maquette'
            },
            education: {
                title: 'Formation',
                level: 'Niveau',
                period: 'Période',
                formations: [
                    {
                        school: 'ENTPE',
                        degree: 'Bachelor, Transition Écologique des Territoires',
                        period: 'Sept. 2025 - Présent',
                        level: '1ère année'
                    },
                    {
                        school: 'École La Mache',
                        degree: 'Baccalauréat, Sciences Technologiques de l\'Ingénierie et du Développement Durable',
                        period: 'Sept. 2022 - Juil. 2025',
                        level: 'Terminale'
                    }
                ]
            },
            internships: {
                title: 'Expériences & Stages',
                period: 'Période',
                stages: [
                    {
                        title: 'Stage de 3ème',
                        period: '1 semaine',
                        company: 'Arketypes',
                        description: 'Stage découverte en entreprise où j\'ai pu observer les différentes facettes du métier d\'architecte.'
                    },
                    {
                        title: 'Stage d\'observation',
                        period: '2 semaines',
                        company: 'Entreprise Y',
                        description: 'Description personnalisée du stage : missions, apprentissages et outils utilisés.'
                    }
                ]
            },
            contact: {
                title: 'Me contacter',
                description: 'N\'hésitez pas à me contacter pour discuter de projets ou d\'opportunités.',
                email: 'Email',
                linkedin: 'LinkedIn',
            }
        },
        en: {
            nav: {
                home: 'Home',
                about: 'About',
                projects: 'Projects',
                models: 'Models',
                education: 'Education',
                internships: 'Internships',
                contact: 'Contact'
            },
            hero: {
                title: 'Emma Nuzillat',
                subtitle: '1st Year Bachelor Student at ENTPE',
                description: 'Passionate about engineering and architecture, I develop my skills through innovative projects and enriching experiences.',
                cta: 'Contact me'
            },
            about: {
                title: 'About',
                p1: 'Currently in my 1st year of Bachelor at ENTPE (National School of Public Works), I am training in engineering and civil engineering professions.',
                p2: 'I obtained a STI2D BAC at La Mache school, which gave me a solid foundation in industrial sciences and technologies.',
                p3: 'My journey allows me to develop strong technical skills while cultivating my creativity through the creation of models and various projects.',
                p4: '[Customize this section with your specific information: background, passions, goals...]'
            },
            projects: {
                title: 'Projects',
                projectTitle: 'Project',
                description: 'Project description and skills implemented.',
                skill1: 'Skill 1',
                skill2: 'Skill 2',
                image: 'Project image'
            },
            models: {
                title: 'Models',
                modelTitle: 'Model',
                description: 'Detailed description of the model, materials used and creation process.',
                materials: 'Materials: ...',
                scale: 'Scale: ...',
                image: 'Model image'
            },
            education: {
                title: 'Education',
                level: 'Level',
                period: 'Period',
                formations: [
                    {
                        school: 'ENTPE',
                        degree: 'Bachelor\'s Degree, Ecological Transition of Territories',
                        period: 'Sept. 2025 - Present',
                        level: '1st year'
                    },
                    {
                        school: 'La Mache School',
                        degree: 'Baccalaureate, Technological Sciences of Engineering and Sustainable Development',
                        period: 'Sept. 2022 - Jul. 2025',
                        level: 'Senior year'
                    }
                ]
            },
            internships: {
                title: 'Experiences & Internships',
                period: 'Period',
                stages: [
                    {
                        title: '9th Grade Internship',
                        period: '1 week',
                        company: 'Arketypes',
                        description: 'Discovery internship in a company where I was able to observe the different facets of the architect profession.'
                    },
                    {
                        title: 'Observation Internship',
                        period: '2 weeks',
                        company: 'Company Y',
                        description: 'Personalized internship description: missions, learnings and tools used.'
                    }
                ]
            },
            contact: {
                title: 'Contact me',
                description: 'Feel free to contact me to discuss projects or opportunities.',
                email: 'Email',
                linkedin: 'LinkedIn',
            }
        }
    };

    const t = translations[language];

    const sections = [
        { id: 'accueil', label: t.nav.home },
        { id: 'apropos', label: t.nav.about },
        { id: 'realisations', label: t.nav.projects },
        { id: 'maquettes', label: t.nav.models },
        { id: 'formation', label: t.nav.education },
        { id: 'stages', label: t.nav.internships },
        { id: 'contact', label: t.nav.contact }
    ];

    const scrollToSection = (id) => {
        setIsTransitioning(true);
        setActiveSection(id);
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => setIsTransitioning(false), 300);
    };

    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

    return (
        <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
            darkMode
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
                : 'bg-gradient-to-br from-pink-50 via-white to-rose-50'
        }`}>
            {/* Floating blurred circles in background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className={`absolute w-96 h-96 rounded-full blur-3xl transition-colors duration-300 ${
                        darkMode ? 'bg-pink-500/10' : 'bg-pink-300/20'
                    }`}
                    style={{
                        top: '10%',
                        left: '5%',
                        transform: `translateY(${scrollY * 0.1}px)`
                    }}
                />
                <div
                    className={`absolute w-80 h-80 rounded-full blur-3xl transition-colors duration-300 ${
                        darkMode ? 'bg-rose-500/8' : 'bg-rose-300/15'
                    }`}
                    style={{
                        top: '40%',
                        right: '10%',
                        transform: `translateY(${scrollY * 0.15}px)`
                    }}
                />
                <div
                    className={`absolute w-72 h-72 rounded-full blur-3xl transition-colors duration-300 ${
                        darkMode ? 'bg-pink-600/10' : 'bg-pink-400/10'
                    }`}
                    style={{
                        bottom: '20%',
                        left: '15%',
                        transform: `translateY(${scrollY * -0.08}px)`
                    }}
                />
                <div
                    className={`absolute w-64 h-64 rounded-full blur-3xl transition-colors duration-300 ${
                        darkMode ? 'bg-rose-600/12' : 'bg-rose-200/20'
                    }`}
                    style={{
                        top: '60%',
                        right: '20%',
                        transform: `translateY(${scrollY * 0.12}px)`
                    }}
                />
                <div
                    className={`absolute w-56 h-56 rounded-full blur-3xl transition-colors duration-300 ${
                        darkMode ? 'bg-pink-500/8' : 'bg-pink-300/15'
                    }`}
                    style={{
                        bottom: '10%',
                        right: '5%',
                        transform: `translateY(${scrollY * -0.1}px)`
                    }}
                />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                    <div className="relative flex items-center justify-center">
                        {/* Theme and Language toggles - Desktop */}
                        <div className="hidden md:flex absolute left-0 gap-2">
                            <button
                                onClick={toggleDarkMode}
                                className={`p-2.5 rounded-2xl shadow-xl border transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-2xl ${
                                    darkMode
                                        ? 'bg-gray-800/30 backdrop-blur-2xl border-white/10 text-yellow-400 hover:bg-gray-800/40 shadow-pink-500/10'
                                        : 'bg-white/20 backdrop-blur-2xl border-white/40 text-gray-700 hover:bg-white/30 shadow-pink-500/20'
                                }`}
                                style={{
                                    backdropFilter: 'blur(20px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                                }}
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                onClick={toggleLanguage}
                                className={`px-3.5 py-2.5 rounded-2xl shadow-xl border transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-1.5 backdrop-blur-2xl ${
                                    darkMode
                                        ? 'bg-gray-800/30 backdrop-blur-2xl border-white/10 text-gray-200 hover:bg-gray-800/40 shadow-pink-500/10'
                                        : 'bg-white/20 backdrop-blur-2xl border-white/40 text-gray-700 hover:bg-white/30 shadow-pink-500/20'
                                }`}
                                style={{
                                    backdropFilter: 'blur(20px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                                }}
                            >
                                <Globe size={18} />
                                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className={`hidden md:flex gap-2 lg:gap-3 rounded-3xl px-8 py-3 shadow-2xl border backdrop-blur-2xl ${
                            darkMode
                                ? 'bg-gray-800/30 border-white/10 shadow-pink-500/10'
                                : 'bg-white/20 border-white/40 shadow-pink-500/20'
                        }`}
                             style={{
                                 backdropFilter: 'blur(20px) saturate(180%)',
                                 WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                             }}>
                            {sections.map(section => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`relative px-4 py-2 rounded-2xl transition-all duration-300 active:scale-95 ${
                                        activeSection === section.id
                                            ? 'text-white font-semibold'
                                            : darkMode
                                                ? 'text-gray-300 hover:text-pink-400 hover:bg-white/5'
                                                : 'text-gray-700 hover:text-pink-500 hover:bg-white/30'
                                    }`}
                                >
                                    {activeSection === section.id && (
                                        <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl -z-10 shadow-lg"></span>
                                    )}
                                    <span className="relative z-10">{section.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={`md:hidden absolute right-0 top-1/2 translate-y-2 p-2.5 rounded-2xl shadow-xl border backdrop-blur-2xl transition-all duration-300 ${
                                darkMode
                                    ? 'bg-gray-800/30 border-white/10 text-gray-200 hover:bg-gray-800/40 shadow-pink-500/10'
                                    : 'bg-white/20 border-white/40 text-gray-700 hover:bg-white/30 shadow-pink-500/20'
                            }`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                            }}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Theme and Language toggles - Mobile (top right, next to menu) */}
                        <div className="md:hidden absolute right-14 top-1/2 translate-y-2 flex gap-2">
                            <button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-2xl shadow-xl border backdrop-blur-2xl transition-all duration-300 ${
                                    darkMode
                                        ? 'bg-gray-800/30 border-white/10 text-yellow-400 shadow-pink-500/10'
                                        : 'bg-white/20 border-white/40 text-gray-700 shadow-pink-500/20'
                                }`}
                                style={{
                                    backdropFilter: 'blur(20px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                                }}
                            >
                                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <button
                                onClick={toggleLanguage}
                                className={`px-2 py-2 rounded-2xl shadow-xl border backdrop-blur-2xl transition-all duration-300 text-xs font-medium ${
                                    darkMode
                                        ? 'bg-gray-800/30 border-white/10 text-gray-200 shadow-pink-500/10'
                                        : 'bg-white/20 border-white/40 text-gray-700 shadow-pink-500/20'
                                }`}
                                style={{
                                    backdropFilter: 'blur(20px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                                }}
                            >
                                {language.toUpperCase()}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className={`md:hidden mt-4 pb-4 space-y-2 rounded-3xl p-4 shadow-2xl border backdrop-blur-2xl animate-fadeIn ${
                            darkMode
                                ? 'bg-gray-800/30 border-white/10 shadow-pink-500/10'
                                : 'bg-white/20 border-white/40 shadow-pink-500/20'
                        }`}
                             style={{
                                 backdropFilter: 'blur(20px) saturate(180%)',
                                 WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                             }}>
                            {sections.map(section => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block w-full text-left py-3 px-4 rounded-2xl transition-all duration-300 active:scale-95 ${
                                        activeSection === section.id
                                            ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-lg'
                                            : darkMode
                                                ? 'text-gray-300 hover:bg-white/5'
                                                : 'text-gray-700 hover:bg-white/30'
                                    }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="accueil" className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
                        <div
                            className="flex-1 text-center md:text-left"
                            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                        >
                            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
                                darkMode ? 'text-gray-100' : 'text-gray-800'
                            }`}>
                                {t.hero.title}
                            </h2>
                            <p className="text-lg sm:text-xl text-pink-500 mb-4 sm:mb-6">
                                {t.hero.subtitle}
                            </p>
                            <p className={`text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 ${
                                darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                {t.hero.description}
                            </p>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:shadow-lg transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
                            >
                                {t.hero.cta}
                            </button>
                        </div>

                        {/* Photo */}
                        <div
                            className="flex-1 flex justify-center"
                            style={{ transform: `translateY(${scrollY * -0.03}px)` }}
                        >
                            <div className="w-56 h-56 sm:w-60 sm:h-60 rounded-full flex items-center justify-center">
                                <img
                                    src="https://github.com/Luxinenglish/emma_portfolio/blob/master/public/img/me.jpg?raw=true"
                                    alt="Emma Nuzillat"
                                    className="w-full h-full object-cover rounded-full shadow-2xl"
                                    style={{ transform: 'translateY(30px)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="flex justify-center mt-12 sm:mt-16 animate-bounce">
                    <ChevronDown className="text-pink-400" size={32} style={{ transform: 'translateY(50px)' }} />
                </div>
            </section>

            {/* À propos */}
            <section id="apropos" className={`py-20 px-4 relative z-10 ${
                darkMode ? 'bg-gray-900/50' : 'bg-white'
            }`}>
                <div
                    className="max-w-4xl mx-auto"
                    style={{ transform: `translateY(${scrollY * 0.02}px)` }}
                >
                    <h2 className={`text-4xl font-bold mb-8 text-center ${
                        darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                        {t.about.title}
                    </h2>
                    <div className={`p-8 rounded-2xl ${
                        darkMode
                            ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50'
                            : 'bg-gradient-to-r from-pink-50 to-rose-50'
                    }`}>
                        <p className={`leading-relaxed mb-4 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            {t.about.p1}
                        </p>
                        <p className={`leading-relaxed mb-4 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            {t.about.p2}
                        </p>
                        <p className={`leading-relaxed mb-4 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            {t.about.p3}
                        </p>
                        <p className={`leading-relaxed ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            {t.about.p4}
                        </p>
                    </div>
                </div>
            </section>

            {/* Réalisations */}
            <section id="realisations" className="py-20 px-4 relative z-10">
                <div
                    className="max-w-6xl mx-auto"
                    style={{ transform: `translateY(${scrollY * 0.015}px)` }}
                >
                    <h2 className={`text-4xl font-bold mb-12 text-center ${
                        darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                        {t.projects.title}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 ${
                                darkMode ? 'bg-gray-800/50' : 'bg-white'
                            }`}>
                                <div className={`h-40 sm:h-48 flex items-center justify-center ${
                                    darkMode
                                        ? 'bg-gradient-to-br from-pink-900/30 to-rose-900/30'
                                        : 'bg-gradient-to-br from-pink-200 to-rose-200'
                                }`}>
                                    <span className={`text-sm sm:text-base ${
                                        darkMode ? 'text-gray-400' : 'text-white'
                                    }`}>{t.projects.image} {item}</span>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${
                                        darkMode ? 'text-gray-100' : 'text-gray-800'
                                    }`}>
                                        {t.projects.projectTitle} {item}
                                    </h3>
                                    <p className={`text-sm sm:text-base mb-4 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {t.projects.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
                                            darkMode
                                                ? 'bg-pink-900/30 text-pink-300'
                                                : 'bg-pink-100 text-pink-600'
                                        }`}>
                                            {t.projects.skill1}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
                                            darkMode
                                                ? 'bg-rose-900/30 text-rose-300'
                                                : 'bg-rose-100 text-rose-600'
                                        }`}>
                                            {t.projects.skill2}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Maquettes */}
            <section id="maquettes" className={`py-20 px-4 relative z-10 ${
                darkMode ? 'bg-gray-900/50' : 'bg-white'
            }`}>
                <div
                    className="max-w-6xl mx-auto"
                    style={{ transform: `translateY(${scrollY * 0.01}px)` }}
                >
                    <h2 className={`text-4xl font-bold mb-12 text-center ${
                        darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                        {t.models.title}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {[1, 2].map((item) => (
                            <div key={item} className={`rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all ${
                                darkMode
                                    ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50'
                                    : 'bg-gradient-to-br from-pink-50 to-rose-50'
                            }`}>
                                <div className={`h-48 sm:h-64 rounded-xl mb-4 flex items-center justify-center ${
                                    darkMode ? 'bg-gray-700/50' : 'bg-white'
                                }`}>
                                    <span className={`text-sm sm:text-base ${
                                        darkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`}>{t.models.image} {item}</span>
                                </div>
                                <h3 className={`text-xl sm:text-2xl font-semibold mb-3 ${
                                    darkMode ? 'text-gray-100' : 'text-gray-800'
                                }`}>
                                    {t.models.modelTitle} {item}
                                </h3>
                                <p className={`text-sm sm:text-base mb-4 ${
                                    darkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    {t.models.description}
                                </p>
                                <div className={`flex gap-2 text-xs sm:text-sm ${
                                    darkMode ? 'text-pink-400' : 'text-pink-600'
                                }`}>
                                    <span>•</span>
                                    <span>{t.models.materials}</span>
                                </div>
                                <div className={`flex gap-2 text-xs sm:text-sm ${
                                    darkMode ? 'text-pink-400' : 'text-pink-600'
                                }`}>
                                    <span>•</span>
                                    <span>{t.models.scale}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formation */}
            <section id="formation" className="py-20 px-4 relative z-10">
                <div
                    className="max-w-4xl mx-auto"
                    style={{ transform: `translateY(${scrollY * 0.012}px)` }}
                >
                    <h2 className={`text-4xl font-bold mb-12 text-center ${
                        darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                        {t.education.title}
                    </h2>
                    <div className="space-y-6">
                        {t.education.formations.map((formation, index) => (
                            <div key={index} className={`rounded-2xl p-8 shadow-lg border-l-4 border-pink-400 ${
                                darkMode ? 'bg-gray-800/50' : 'bg-white'
                            }`}>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className={`text-2xl font-semibold mb-2 ${
                                            darkMode ? 'text-gray-100' : 'text-gray-800'
                                        }`}>
                                            {formation.school}
                                        </h3>
                                        <p className={`text-lg mb-2 ${
                                            darkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                            {formation.degree}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                                        <span className="text-pink-500 font-medium mb-1">
                                            {formation.period}
                                        </span>
                                        <span className={`text-sm ${
                                            darkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {t.education.level} : {formation.level}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stages */}
            <section id="stages" className="py-20 px-4 relative z-10">
                <div
                    className="max-w-4xl mx-auto"
                    style={{ transform: `translateY(${scrollY * 0.008}px)` }}
                >
                    <h2 className={`text-4xl font-bold mb-12 text-center ${
                        darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                        {t.internships.title}
                    </h2>
                    <div className="space-y-6">
                        {t.internships.stages.map((stage, index) => (
                            <div key={index} className={`rounded-2xl p-8 shadow-lg border-l-4 border-pink-400 ${
                                darkMode ? 'bg-gray-800/50' : 'bg-white'
                            }`}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className={`text-2xl font-semibold ${
                                        darkMode ? 'text-gray-100' : 'text-gray-800'
                                    }`}>
                                        {stage.title}
                                    </h3>
                                    <span className="text-pink-500 font-medium">
                                        {t.internships.period} : {stage.period}
                                    </span>
                                </div>
                                <p className={`mb-2 ${
                                    darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    <strong>{stage.company}</strong>
                                </p>
                                <p className={`leading-relaxed ${
                                    darkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    {stage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className={`py-20 px-4 relative z-10 ${
                darkMode
                    ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50'
                    : 'bg-gradient-to-br from-pink-100 to-rose-100'
            }`}>
                <div
                    className="max-w-4xl mx-auto text-center"
                    style={{ transform: `translateY(${scrollY * 0.005}px)` }}
                >
                    <h2 className={`text-4xl font-bold mb-8 ${
                        darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                        {t.contact.title}
                    </h2>
                    <p className={`mb-12 text-lg ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        {t.contact.description}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                        <a
                            href="mailto:kamonman.nuzillat@lamache.org"
                            className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow transition-transform duration-200 active:scale-95 ${
                                darkMode ? 'bg-gray-800/50 text-gray-200' : 'bg-white text-gray-700'
                            }`}
                        >
                            <Mail className="text-pink-500" />
                            <span>{t.contact.email}</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kamonman-nuzillat-54b04630a/"
                            className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow transition-transform duration-200 active:scale-95 ${
                                darkMode ? 'bg-gray-800/50 text-gray-200' : 'bg-white text-gray-700'
                            }`}
                        >
                            <Linkedin className="text-pink-500" />
                            <span>{t.contact.linkedin}</span>
                        </a>
                    </div>


                </div>
            </section>

            {/* Footer */}
            <footer className={`py-8 px-4 relative z-10 ${
                darkMode ? 'bg-gray-950 text-gray-400' : 'bg-gray-900 text-white'
            }`}>
                <div className="max-w-6xl mx-auto text-center">
                    <p className={darkMode ? 'text-gray-500' : 'text-gray-400'}>
                        © 2025 <a href="https://www.linkedin.com/in/joam-brochard-290a2b2a0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">Lux_ <ExternalLink size={18} /></a>
                    </p>
                </div>
            </footer>

            {/* Page transition overlay */}
            <div className={`fixed inset-0 pointer-events-none transition-opacity duration-300 ${
                isTransitioning
                    ? darkMode
                        ? 'opacity-100 bg-gray-900/40 backdrop-blur-[2px]'
                        : 'opacity-100 bg-white/40 backdrop-blur-[2px]'
                    : 'opacity-0'
            }`} />
        </div>
    );
}