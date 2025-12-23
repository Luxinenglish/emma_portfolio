import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, ChevronDown, ExternalLink } from 'lucide-react';

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('accueil');
const [isTransitioning, setIsTransitioning] = useState(false);
    const sections = [
        { id: 'accueil', label: 'Accueil' },
        { id: 'apropos', label: 'À propos' },
        { id: 'realisations', label: 'Réalisations' },
        { id: 'maquettes', label: 'Maquettes' },
        { id: 'stages', label: 'Stages' },
        { id: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (id) => {
        setIsTransitioning(true);
        setActiveSection(id);
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => setIsTransitioning(false), 300);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                    <div className="relative flex items-center justify-center">

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-4 lg:gap-6 bg-white/40 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-white/30">
                            {sections.map(section => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`relative px-3 py-1.5 rounded-full transition-all duration-300 active:scale-95 ${
                                        activeSection === section.id
                                            ? 'text-white font-semibold'
                                            : 'text-gray-700 hover:text-pink-500'
                                    }`}
                                >
                                    {activeSection === section.id && (
                                        <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full -z-10 shadow-md"></span>
                                    )}
                                    <span className="relative z-10">{section.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden absolute right-0 top-1/2 translate-y-2 text-gray-700 bg-white/40 backdrop-blur-md p-2 rounded-full shadow-md border border-white/30 hover:bg-white/60 transition-all"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="md:hidden mt-4 pb-4 space-y-2 bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/30 animate-fadeIn">
                            {sections.map(section => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 active:scale-95 ${
                                        activeSection === section.id
                                            ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-md'
                                            : 'text-gray-700 hover:bg-white/50'
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
            <section id="accueil" className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
                                Emma Nuzillat
                            </h2>
                            <p className="text-lg sm:text-xl text-pink-500 mb-4 sm:mb-6">
                                Étudiante en 1ère année de Bachelor à l'ENTPE
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                                Passionnée par l'ingénierie et l'architecture, je développe mes compétences
                                à travers des projets innovants et des expériences enrichissantes.
                            </p>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:shadow-lg transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
                            >
                                Me contacter
                            </button>
                        </div>

                        {/* Photo */}
                        <div className="flex-1 flex justify-center">
                            <div className="w-64 h-64 rounded-full  flex items-center justify-center ">
                <span className="text-white text-lg text-center px-4">
                                                            <img
                                                                src="https://github.com/Luxinenglish/emma_portfolio/blob/master/public/img/me.jpg?raw=true"
                                                                alt="Emma Nuzillat"
                                                                className="w-full h-full object-cover rounded-full"
                                                                style={{ transform: 'translateY(30px)' }}
                                                            />
                </span>
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
            <section id="apropos" className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
                        À propos
                    </h2>
                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-2xl">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Actuellement en 1ère année de Bachelor à l'ENTPE (École Nationale des Travaux Publics de l'État),
                            je me forme aux métiers de l'ingénierie et du génie civil.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            J'ai obtenu un BAC STI2D à l'école La Mache, ce qui m'a donné une base solide en sciences et technologies industrielles.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Mon parcours me permet de développer des compétences techniques solides tout en cultivant
                            ma créativité à travers la réalisation de maquettes et de projets variés.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            [Personnalisez cette section avec vos informations spécifiques : parcours, passions, objectifs...]
                        </p>
                    </div>
                    </div>
            </section>

            {/* Réalisations */}
            <section id="realisations" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
                        Réalisations
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                                <div className="h-40 sm:h-48 bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center">
                                    <span className="text-white text-sm sm:text-base">Image projet {item}</span>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                                        Projet {item}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                                        Description du projet et des compétences mises en œuvre.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs sm:text-sm">
                      Compétence 1
                    </span>
                                        <span className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-xs sm:text-sm">
                      Compétence 2
                    </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                </div>
            </section>

            {/* Maquettes */}
            <section id="maquettes" className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
                        Maquettes
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {[1, 2].map((item) => (
                            <div key={item} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
                                <div className="h-48 sm:h-64 bg-white rounded-xl mb-4 flex items-center justify-center">
                                    <span className="text-gray-400 text-sm sm:text-base">Image maquette {item}</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">
                                    Maquette {item}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-700 mb-4">
                                    Description détaillée de la maquette, des matériaux utilisés et du processus de création.
                                </p>
                                <div className="flex gap-2 text-xs sm:text-sm text-pink-600">
                                    <span>•</span>
                                    <span>Matériaux : ...</span>
                                </div>
                                <div className="flex gap-2 text-xs sm:text-sm text-pink-600">
                                    <span>•</span>
                                    <span>Échelle : ...</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stages */}
            {(() => {
                const stagesData = [
                    {
                        id: 1,
                        title: 'Stage de 3ème',
                        period: '1 semaine',
                        company: 'Arketypes',
                        description: "Stage découverte en entreprise où j'ai pu observer les différentes facettes du métier d'architecte."
                    },
                    {
                        id: 2,
                        title: 'Stage d\'observation',
                        period: '2 semaines',
                        company: 'Entreprise Y',
                        description: "Description personnalisée du stage : missions, apprentissages et outils utilisés."
                    }
                ];

                return (
            <section id="stages" className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
                                Expériences &amp; Stages
                    </h2>
                    <div className="space-y-6">
                                {stagesData.map((stage) => (
                                    <div key={stage.id} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-pink-400">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-2xl font-semibold text-gray-800">
                                                {stage.title}
                                    </h3>
                                    <span className="text-pink-500 font-medium">
                                                Période : {stage.period}
                  </span>
                                </div>
                                <p className="text-gray-600 mb-2">
                                            <strong>{stage.company}</strong>
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                            {stage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
                );
            })()}

            {/* Contact */}
            <section id="contact" className="py-20 px-4 bg-gradient-to-br from-pink-100 to-rose-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800">
                        Me contacter
                    </h2>
                    <p className="text-gray-700 mb-12 text-lg">
                        N'hésitez pas à me contacter pour discuter de projets ou d'opportunités.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                        <a
                            href="mailto:kamonman.nuzillat@lamache.org"
                            className="flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow transition-transform duration-200 active:scale-95"
                        >
                            <Mail className="text-pink-500" />
                            <span className="text-gray-700">Email</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kamonman-nuzillat-54b04630a/"
                            className="flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow transition-transform duration-200 active:scale-95"
                        >
                            <Linkedin className="text-pink-500" />
                            <span className="text-gray-700">LinkedIn</span>
                        </a>
                    </div>

                    <div className="bg-white/50 backdrop-blur p-6 rounded-2xl inline-block">
                        <p className="text-gray-600">
                            [Ajoutez vos coordonnées personnalisées ici]
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2025 <a href="https://www.linkedin.com/in/joam-brochard-290a2b2a0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">Lux_ <ExternalLink size={18} /></a>
                    </p>
                </div>
            </footer>
        {/* Page transition overlay */}
        <div className={`fixed inset-0 pointer-events-none transition-opacity duration-300 ${isTransitioning ? 'opacity-100 bg-white/40 backdrop-blur-[2px]' : 'opacity-0'}`} />
        </div>
    );
}