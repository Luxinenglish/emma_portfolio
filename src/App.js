import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, Github, ChevronDown } from 'lucide-react';

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('accueil');

    const sections = [
        { id: 'accueil', label: 'Accueil' },
        { id: 'apropos', label: 'À propos' },
        { id: 'realisations', label: 'Réalisations' },
        { id: 'maquettes', label: 'Maquettes' },
        { id: 'stages', label: 'Stages' },
        { id: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (id) => {
        setActiveSection(id);
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                            Emma Nuzillat
                        </h1>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-6">
                            {sections.map(section => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`transition-colors ${
                                        activeSection === section.id
                                            ? 'text-pink-500 font-semibold'
                                            : 'text-gray-600 hover:text-pink-400'
                                    }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-600"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="md:hidden mt-4 pb-4 space-y-3">
                            {sections.map(section => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="block w-full text-left py-2 text-gray-600 hover:text-pink-500"
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="accueil" className="pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-5xl font-bold mb-4 text-gray-800">
                                Emma Nuzillat
                            </h2>
                            <p className="text-xl text-pink-500 mb-6">
                                Étudiante en 1ère année de Bachelor à l'ENTPE
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Passionnée par l'ingénierie et l'architecture, je développe mes compétences
                                à travers des projets innovants et des expériences enrichissantes.
                            </p>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-shadow"
                            >
                                Me contacter
                            </button>
                        </div>

                        {/* Photo placeholder */}
                        <div className="flex-1 flex justify-center">
                            <div className="w-64 h-64 rounded-full  flex items-center justify-center ">
                <span className="text-white text-lg text-center px-4">
                                                            <img
                                                                src="/src/img/me.jpg"
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
                <div className="flex justify-center mt-16 animate-bounce">
                    <ChevronDown className="text-pink-400" size={32} />
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="h-48 bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center">
                                    <span className="text-white">Image projet {item}</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                        Projet {item}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Description du projet et des compétences mises en œuvre.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                      Compétence 1
                    </span>
                                        <span className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm">
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
                    <div className="grid md:grid-cols-2 gap-8">
                        {[1, 2].map((item) => (
                            <div key={item} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-lg">
                                <div className="h-64 bg-white rounded-xl mb-4 flex items-center justify-center">
                                    <span className="text-gray-400">Image maquette {item}</span>
                                </div>
                                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                                    Maquette {item}
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Description détaillée de la maquette, des matériaux utilisés et du processus de création.
                                </p>
                                <div className="flex gap-2 text-sm text-pink-600">
                                    <span>•</span>
                                    <span>Matériaux : ...</span>
                                </div>
                                <div className="flex gap-2 text-sm text-pink-600">
                                    <span>•</span>
                                    <span>Échelle : ...</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stages */}
            <section id="stages" className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
                        Expériences & Stages
                    </h2>
                    <div className="space-y-6">
                        {[1, 2].map((item) => (
                            <div key={item} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-pink-400">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-2xl font-semibold text-gray-800">
                                        Titre du stage {item}
                                    </h3>
                                    <span className="text-pink-500 font-medium">
                    Période
                  </span>
                                </div>
                                <p className="text-gray-600 mb-2">
                                    <strong>Entreprise/Organisation</strong>
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Description des missions, des compétences développées et des résultats obtenus
                                    durant ce stage.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                            href="mailto:emma.nuzillat@example.com"
                            className="flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <Mail className="text-pink-500" />
                            <span className="text-gray-700">Email</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
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
                        © 2025 Lux_
                    </p>
                </div>
            </footer>
        </div>
    );
}