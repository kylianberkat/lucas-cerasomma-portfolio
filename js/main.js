/**
 * main.js — Portfolio Lucas Cerasomma Ribeiro
 * JavaScript vanilla ES6+ pour toutes les interactions du site
 * Pas de dependance externe
 */

/* ==========================================================================
   1. TRADUCTIONS (FR / EN / ES)
   ========================================================================== */

const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'A propos',
      education: 'Formation',
      experience: 'Parcours',
      skills: 'Competences',
      future: 'Futur',
      commitments: 'Engagements',
      travel: 'Voyages',
      contact: 'Contact',
      wikipedia: 'Wikipedia',
      downloadCV: 'Telecharger mon CV'
    },
    hero: {
      title: 'Lucas Cerasomma Ribeiro',
      subtitle: 'Bachelor Management International • Finance, coordination et relation client',
      quote: 'Un profil fiable, dynamique et oriente terrain.',
      description: 'Etudiant a l ESSCA, je construis un parcours entre gestion operationnelle, service client et organisation d activites.',
      cta1: 'Me decouvrir',
      cta2: 'Telecharger mon CV',
      cta3: 'Ma page Wikipedia',
      miniCards: [
        { title: 'Base a Septemes', value: 'Etudiant ESSCA' },
        { title: 'Focus', value: 'Finance & evenementiel' }
      ],
      keywords: ['Relation client', 'Gestion', 'Coordination']
    },
    about: {
      title: 'A propos',
      content: 'Je suis un etudiant relationnel, rigoureux et adaptable. J aime le travail en equipe et les environnements ou il faut organiser, coordonner et avancer concretement.',
      note: 'Mon objectif est de rejoindre une alternance en septembre 2026 pour renforcer mes competences en finance de gestion ou en coordination evenementielle.',
      qualities: [
        { title: 'Ecoute active', icon: 'users' },
        { title: 'Adaptabilite', icon: 'refresh' },
        { title: 'Rigueur', icon: 'target' },
        { title: 'Esprit d equipe', icon: 'heart' },
        { title: 'Ponctualite', icon: 'zap' },
        { title: 'Sens des responsabilites', icon: 'search' }
      ]
    },
    education: {
      title: 'Formation',
      items: [
        {
          period: '2024-2027',
          degree: 'Bachelor Management International',
          school: 'ESSCA',
          description: 'Gestion, marketing, relation client, travail en equipe multiculturel.',
          status: 'En cours'
        },
        {
          period: '2024',
          degree: 'Baccalaureat',
          school: 'Lycee Saint-Louis Sainte-Marie - Gignac-la-Nerthe',
          description: 'Parcours general, solide culture generale et appui en geographie.',
          status: 'Obtenu'
        }
      ]
    },
    experience: {
      title: 'Parcours & Experiences',
      items: [
        {
          period: 'Juil.-Aout 2025',
          duration: '2 mois',
          role: 'Teleconseiller CRC',
          company: 'Groupe ETIC',
          location: 'Marseille',
          description: 'Traitement des demandes clients par messagerie, appels prospects et application des procedures de relation client.'
        },
        {
          period: 'Ete 2024',
          duration: '2 mois',
          role: 'Animateur en centre de loisirs',
          company: 'Mairie de Septemes-les-Vallons',
          location: 'Septemes',
          description: 'Planification d activites educatives et sportives, animation de groupes et respect du cadre pedagogique.'
        },
        {
          period: 'Ete 2023',
          duration: '2 mois',
          role: 'Animateur (10-12 ans)',
          company: 'Planet Jeunes - Luynes',
          location: 'Luynes',
          description: 'Encadrement d enfants, creation d activites collectives et gestion des situations imprévues avec sang-froid.'
        },
        {
          period: '2024',
          duration: '8 semaines',
          role: 'Stagiaire operationnel',
          company: 'Mon Club Football',
          location: 'Bouc-Bel-Air',
          description: 'Gestion des factures, reservations, appels clients, disponibilites des terrains, stocks et caisse.'
        },
        {
          period: '2023-2024',
          duration: '1 an',
          role: 'Achat-revente en ligne',
          company: 'Activite personnelle - Vinted',
          location: 'Remote',
          description: 'Sourcing produits, negociation, suivi des ventes, optimisation de marge et logistique expedition.'
        }
      ]
    },
    skills: {
      title: 'Competences',
      professional: 'Competences professionnelles',
      personal: 'Aptitudes personnelles',
      languages: 'Langues',
      proSkills: [
        'Relation client',
        'Gestion de planning',
        'Suivi administratif & facturation',
        'Gestion de stock et caisse',
        'Coordination terrain',
        'Canva & communication digitale'
      ],
      softSkills: ['Esprit d equipe', 'Adaptabilite', 'Rigueur', 'Sens du relationnel', 'Patience', 'Ponctualite'],
      langs: [
        { lang: 'Francais', level: 'Langue maternelle' },
        { lang: 'Anglais', level: 'B2' },
        { lang: 'Espagnol', level: 'A2' }
      ]
    },
    future: {
      title: 'Futur, projets & ambitions',
      intro: 'Je recherche une alternance a partir de septembre 2026 pour continuer a apprendre sur le terrain dans la finance ou l evenementiel.',
      cards: [
        {
          title: 'Etudes visees',
          description: 'Finaliser mon Bachelor puis poursuivre en Master oriente finance ou management.'
        },
        {
          title: 'Ce que je veux developper',
          description: 'Renforcer la gestion d activite, l organisation, le reporting et la coordination de projets.'
        },
        {
          title: 'Projet professionnel',
          description: 'Evoluer vers un poste de pilotage operationnel, gestion ou coordination evenementielle.'
        }
      ]
    },
    commitments: {
      title: 'Engagements',
      subtitle: 'Des engagements qui refletent mes valeurs et ma regularite',
      items: [
        {
          title: 'Les Chats de Marie-Helene',
          description: 'Soutien a des actions en faveur de la protection animale.'
        },
        {
          title: 'Don du sang regulier',
          description: 'Donateur regulier a la Maison du Sang de Marseille.'
        },
        {
          title: 'Medecins Sans Frontieres',
          description: 'Soutien a une cause humanitaire en tant que donateur.'
        }
      ]
    },
    travel: {
      title: 'Voyages & ouverture',
      subtitle: 'Des voyages qui renforcent ma curiosite, mon adaptation et mon ouverture.',
      countries: [
        { name: 'Espagne', code: 'ES' },
        { name: 'Japon', code: 'JP' },
        { name: 'Republique Tcheque', code: 'CZ' },
        { name: 'Suisse', code: 'CH' },
        { name: 'Portugal', code: 'PT' },
        { name: 'Italie', code: 'IT' }
      ]
    },
    contact: {
      title: 'Me retrouver',
      subtitle: 'Disponible pour echanger sur mon parcours et mes opportunites d alternance a partir de septembre 2026.',
      location: 'Septemes 13240',
      email: 'M envoyer un email',
      linkedin: 'Voir mon LinkedIn',
      downloadCV: 'Telecharger mon CV'
    },
    footer: {
      description: 'Portfolio etudiant',
      rights: 'Tous droits reserves'
    },
    wiki: {
      back: 'Retour au portfolio',
      title: 'Lucas Cerasomma Ribeiro',
      subtitle: 'Notice biographique inspiree d une page encyclopedique',
      intro: 'est un etudiant francais base a Septemes. Son parcours combine relation client, gestion operationnelle et coordination terrain.',
      tocTitle: 'Sommaire',
      toc: { identity: 'Identite', education: 'Formation', experience: 'Parcours', skills: 'Competences', commitments: 'Engagements', interests: 'Ouverture' },
      infobox: { status: 'Etudiant', field: 'Finance, gestion, evenementiel', location: 'Septemes, France', languages: 'Francais, anglais, espagnol' },
      sections: {
        identity: { title: 'Identite', content: 'Etudiant a l ESSCA, Lucas Cerasomma Ribeiro developpe un profil professionnel axe sur la gestion et la relation client.' },
        education: { title: 'Formation', content: 'Il suit un Bachelor en Management International apres l obtention de son baccalaureat.' },
        experience: { title: 'Parcours', content: 'Ses experiences couvrent la relation client, l animation, la gestion operationnelle et la coordination quotidienne.' },
        skills: { title: 'Competences', content: 'Il mobilise des competences en organisation, suivi administratif, communication et travail d equipe.' },
        commitments: { title: 'Engagements', content: 'Il s implique dans des actions associatives et solidaires, notamment via des dons reguliers.' },
        interests: { title: 'Ouverture internationale', content: 'Ses voyages nourrissent son adaptation et sa capacite a evoluer dans des contextes varies.' }
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      experience: 'Journey',
      skills: 'Skills',
      future: 'Future',
      commitments: 'Commitments',
      travel: 'Travel',
      contact: 'Contact',
      wikipedia: 'Wikipedia',
      downloadCV: 'Download CV'
    },
    hero: {
      title: 'Lucas Cerasomma Ribeiro',
      subtitle: 'International Management Bachelor • Finance, coordination and client relations',
      quote: 'A reliable and dynamic profile focused on execution.',
      description: 'ESSCA student building practical experience in operations, client service and activity coordination.',
      cta1: 'Discover',
      cta2: 'Download CV',
      cta3: 'My Wikipedia page',
      miniCards: [
        { title: 'Based in Septemes', value: 'ESSCA student' },
        { title: 'Focus', value: 'Finance & events' }
      ],
      keywords: ['Client relations', 'Operations', 'Coordination']
    },
    about: {
      title: 'About',
      content: 'I am a people-oriented, disciplined and adaptable student. I enjoy teamwork and hands-on environments where organization and reliability matter.',
      note: 'My objective is to secure a work-study position from September 2026 in finance management or event coordination.',
      qualities: [
        { title: 'Active listening', icon: 'users' },
        { title: 'Adaptability', icon: 'refresh' },
        { title: 'Discipline', icon: 'target' },
        { title: 'Team spirit', icon: 'heart' },
        { title: 'Punctuality', icon: 'zap' },
        { title: 'Responsibility', icon: 'search' }
      ]
    },
    education: {
      title: 'Education',
      items: [
        { period: '2024-2027', degree: 'International Management Bachelor', school: 'ESSCA', description: 'Management, marketing, client relations and teamwork.', status: 'In progress' },
        { period: '2024', degree: 'Baccalaureate', school: 'Lycee Saint-Louis Sainte-Marie - Gignac-la-Nerthe', description: 'General track with strong general knowledge.', status: 'Completed' }
      ]
    },
    experience: {
      title: 'Journey & Experience',
      items: [
        { period: 'Jul-Aug 2025', duration: '2 months', role: 'CRC Call Center Advisor', company: 'Groupe ETIC', location: 'Marseille', description: 'Handled client requests via messaging and outbound prospect calls following internal standards.' },
        { period: 'Summer 2024', duration: '2 months', role: 'Leisure Center Facilitator', company: 'City of Septemes-les-Vallons', location: 'Septemes', description: 'Planned educational and sports activities and supervised groups within a pedagogical framework.' },
        { period: 'Summer 2023', duration: '2 months', role: 'Activity Facilitator (Ages 10-12)', company: 'Planet Jeunes - Luynes', location: 'Luynes', description: 'Managed group activities, supervision and incident response in a structured setting.' },
        { period: '2024', duration: '8 weeks', role: 'Operations Intern', company: 'Mon Club Football', location: 'Bouc-Bel-Air', description: 'Managed invoices, bookings, incoming calls, field availability, stock and cash desk support.' },
        { period: '2023-2024', duration: '1 year', role: 'Online Resale Activity', company: 'Personal project - Vinted', location: 'Remote', description: 'Managed sourcing, pricing, margin, negotiation, customer follow-up and shipping workflow.' }
      ]
    },
    skills: {
      title: 'Skills',
      professional: 'Professional skills',
      personal: 'Personal strengths',
      languages: 'Languages',
      proSkills: ['Client relations', 'Scheduling', 'Administrative follow-up & invoicing', 'Stock and cash management', 'Field coordination', 'Canva & digital communication'],
      softSkills: ['Team spirit', 'Adaptability', 'Discipline', 'People skills', 'Patience', 'Punctuality'],
      langs: [
        { lang: 'French', level: 'Native' },
        { lang: 'English', level: 'B2' },
        { lang: 'Spanish', level: 'A2' }
      ]
    },
    future: {
      title: 'Future, projects & ambitions',
      intro: 'I am looking for a work-study role starting in September 2026 to keep learning through practical responsibilities in finance or events.',
      cards: [
        { title: 'Academic path', description: 'Complete my Bachelor, then move on to a Master in finance or management.' },
        { title: 'Skills to build', description: 'Develop activity management, reporting, planning and project coordination.' },
        { title: 'Career goal', description: 'Grow toward operations, activity management or event coordination roles.' }
      ]
    },
    commitments: {
      title: 'Commitments',
      subtitle: 'Commitments that reflect consistency and values',
      items: [
        { title: 'Les Chats de Marie-Helene', description: 'Support for local animal welfare initiatives.' },
        { title: 'Regular blood donor', description: 'Regular donor at Maison du Sang de Marseille.' },
        { title: 'Doctors Without Borders', description: 'Supporter and donor of humanitarian initiatives.' }
      ]
    },
    travel: {
      title: 'Travel & openness',
      subtitle: 'Travel experiences that strengthen adaptability and global awareness.',
      countries: [
        { name: 'Spain', code: 'ES' },
        { name: 'Japan', code: 'JP' },
        { name: 'Czech Republic', code: 'CZ' },
        { name: 'Switzerland', code: 'CH' },
        { name: 'Portugal', code: 'PT' },
        { name: 'Italy', code: 'IT' }
      ]
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'Available to discuss my profile and work-study opportunities from September 2026.',
      location: 'Septemes 13240',
      email: 'Send me an email',
      linkedin: 'See my LinkedIn',
      downloadCV: 'Download CV'
    },
    footer: {
      description: 'Student portfolio',
      rights: 'All rights reserved'
    },
    wiki: {
      back: 'Back to portfolio',
      title: 'Lucas Cerasomma Ribeiro',
      subtitle: 'Biography inspired by an encyclopedia page',
      intro: 'is a French student based in Septemes with a profile focused on operations, client service and coordination.',
      tocTitle: 'Contents',
      toc: { identity: 'Identity', education: 'Education', experience: 'Journey', skills: 'Skills', commitments: 'Commitments', interests: 'Openness' },
      infobox: { status: 'Student', field: 'Finance, management, events', location: 'Septemes, France', languages: 'French, English, Spanish' },
      sections: {
        identity: { title: 'Identity', content: 'ESSCA student developing a practical profile in management and client-focused operations.' },
        education: { title: 'Education', content: 'Currently enrolled in an International Management Bachelor after completing baccalaureate studies.' },
        experience: { title: 'Journey', content: 'Experience across customer service, youth facilitation, operational support and activity management.' },
        skills: { title: 'Skills', content: 'Competencies in organization, scheduling, administrative follow-up, communication and teamwork.' },
        commitments: { title: 'Commitments', content: 'Engaged in social and solidarity actions with consistent involvement.' },
        interests: { title: 'International openness', content: 'Travel contributes to adaptability, perspective and cultural openness.' }
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mi',
      education: 'Formacion',
      experience: 'Recorrido',
      skills: 'Competencias',
      future: 'Futuro',
      commitments: 'Compromisos',
      travel: 'Viajes',
      contact: 'Contacto',
      wikipedia: 'Wikipedia',
      downloadCV: 'Descargar CV'
    },
    hero: {
      title: 'Lucas Cerasomma Ribeiro',
      subtitle: 'Bachelor en Management Internacional • Finanzas, coordinacion y relacion con clientes',
      quote: 'Un perfil fiable, dinamico y orientado a la accion.',
      description: 'Estudiante de ESSCA con experiencia practica en gestion operativa, atencion al cliente y coordinacion.',
      cta1: 'Descubrir',
      cta2: 'Descargar CV',
      cta3: 'Mi pagina Wikipedia',
      miniCards: [
        { title: 'Basado en Septemes', value: 'Estudiante ESSCA' },
        { title: 'Enfoque', value: 'Finanzas y eventos' }
      ],
      keywords: ['Relacion cliente', 'Gestion', 'Coordinacion']
    },
    about: {
      title: 'Sobre mi',
      content: 'Soy un estudiante adaptable, organizado y orientado al trabajo en equipo. Me gustan los entornos concretos con responsabilidades reales.',
      note: 'Busco una alternancia desde septiembre de 2026 en finanzas de gestion o coordinacion de eventos.',
      qualities: [
        { title: 'Escucha activa', icon: 'users' },
        { title: 'Adaptabilidad', icon: 'refresh' },
        { title: 'Rigor', icon: 'target' },
        { title: 'Trabajo en equipo', icon: 'heart' },
        { title: 'Puntualidad', icon: 'zap' },
        { title: 'Responsabilidad', icon: 'search' }
      ]
    },
    education: {
      title: 'Formacion',
      items: [
        { period: '2024-2027', degree: 'Bachelor en Management Internacional', school: 'ESSCA', description: 'Gestion, marketing, relacion cliente y trabajo en equipo.', status: 'En curso' },
        { period: '2024', degree: 'Bachillerato', school: 'Lycee Saint-Louis Sainte-Marie - Gignac-la-Nerthe', description: 'Formacion general y buena cultura general.', status: 'Obtenido' }
      ]
    },
    experience: {
      title: 'Recorrido y experiencia',
      items: [
        { period: 'Jul-Ago 2025', duration: '2 meses', role: 'Teleoperador CRC', company: 'Groupe ETIC', location: 'Marsella', description: 'Gestion de solicitudes por mensajeria y llamadas a prospectos segun objetivos.' },
        { period: 'Verano 2024', duration: '2 meses', role: 'Animador en centro de ocio', company: 'Ayuntamiento de Septemes-les-Vallons', location: 'Septemes', description: 'Planificacion de actividades deportivas y educativas con supervision de grupos.' },
        { period: 'Verano 2023', duration: '2 meses', role: 'Animador (10-12 anos)', company: 'Planet Jeunes - Luynes', location: 'Luynes', description: 'Animacion de grupos, organizacion de actividades y reaccion ante imprevistos.' },
        { period: '2024', duration: '8 semanas', role: 'Practicante operativo', company: 'Mon Club Football', location: 'Bouc-Bel-Air', description: 'Facturas, reservas, llamadas, disponibilidad de campos, stock y caja.' },
        { period: '2023-2024', duration: '1 ano', role: 'Compra-venta online', company: 'Proyecto personal - Vinted', location: 'Remote', description: 'Busqueda de productos, negociacion, gestion de margen, seguimiento y envios.' }
      ]
    },
    skills: {
      title: 'Competencias',
      professional: 'Competencias profesionales',
      personal: 'Aptitudes personales',
      languages: 'Idiomas',
      proSkills: ['Relacion con clientes', 'Gestion de horarios', 'Seguimiento administrativo y facturacion', 'Gestion de stock y caja', 'Coordinacion operativa', 'Canva y comunicacion digital'],
      softSkills: ['Trabajo en equipo', 'Adaptabilidad', 'Rigor', 'Relacion interpersonal', 'Paciencia', 'Puntualidad'],
      langs: [
        { lang: 'Frances', level: 'Lengua materna' },
        { lang: 'Ingles', level: 'B2' },
        { lang: 'Espanol', level: 'A2' }
      ]
    },
    future: {
      title: 'Futuro, proyectos y ambiciones',
      intro: 'Busco una alternancia desde septiembre de 2026 para seguir aprendiendo en finanzas o coordinacion de eventos.',
      cards: [
        { title: 'Estudios', description: 'Terminar el Bachelor y continuar con un Master en finanzas o management.' },
        { title: 'Competencias a desarrollar', description: 'Reforzar gestion de actividad, organizacion, reporting y coordinacion de proyectos.' },
        { title: 'Objetivo profesional', description: 'Evolucionar hacia funciones de gestion operativa o coordinacion de eventos.' }
      ]
    },
    commitments: {
      title: 'Compromisos',
      subtitle: 'Compromisos que reflejan constancia y valores',
      items: [
        { title: 'Les Chats de Marie-Helene', description: 'Apoyo a iniciativas de proteccion animal.' },
        { title: 'Donante regular de sangre', description: 'Donaciones regulares en Maison du Sang de Marsella.' },
        { title: 'Medicos Sin Fronteras', description: 'Apoyo a acciones humanitarias como donante.' }
      ]
    },
    travel: {
      title: 'Viajes y apertura',
      subtitle: 'Experiencias de viaje que fortalecen adaptacion y apertura cultural.',
      countries: [
        { name: 'Espana', code: 'ES' },
        { name: 'Japon', code: 'JP' },
        { name: 'Republica Checa', code: 'CZ' },
        { name: 'Suiza', code: 'CH' },
        { name: 'Portugal', code: 'PT' },
        { name: 'Italia', code: 'IT' }
      ]
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Disponible para hablar sobre mi perfil y oportunidades de alternancia desde septiembre de 2026.',
      location: 'Septemes 13240',
      email: 'Enviarme un email',
      linkedin: 'Ver mi LinkedIn',
      downloadCV: 'Descargar CV'
    },
    footer: {
      description: 'Portfolio estudiantil',
      rights: 'Todos los derechos reservados'
    },
    wiki: {
      back: 'Volver al portfolio',
      title: 'Lucas Cerasomma Ribeiro',
      subtitle: 'Biografia inspirada en una pagina enciclopedica',
      intro: 'es un estudiante frances con base en Septemes y un perfil orientado a gestion, servicio al cliente y coordinacion.',
      tocTitle: 'Contenido',
      toc: { identity: 'Identidad', education: 'Formacion', experience: 'Recorrido', skills: 'Competencias', commitments: 'Compromisos', interests: 'Apertura' },
      infobox: { status: 'Estudiante', field: 'Finanzas, gestion, eventos', location: 'Septemes, Francia', languages: 'Frances, ingles, espanol' },
      sections: {
        identity: { title: 'Identidad', content: 'Estudiante de ESSCA con orientacion practica en gestion y operaciones centradas en el cliente.' },
        education: { title: 'Formacion', content: 'Actualmente cursa un Bachelor en Management Internacional despues del bachillerato.' },
        experience: { title: 'Recorrido', content: 'Experiencia en atencion al cliente, animacion, apoyo operativo y gestion diaria.' },
        skills: { title: 'Competencias', content: 'Competencias en organizacion, planificacion, seguimiento administrativo y trabajo en equipo.' },
        commitments: { title: 'Compromisos', content: 'Implicacion regular en acciones solidarias y asociativas.' },
        interests: { title: 'Apertura internacional', content: 'Los viajes refuerzan su adaptabilidad y su apertura cultural.' }
      }
    }
  }
};

/* ==========================================================================
   2. VARIABLES GLOBALES
   ========================================================================== */

let currentLang = 'fr';
const NAVBAR_OFFSET = 80;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ==========================================================================
   3. SYSTEME I18N
   ========================================================================== */

/**
 * Accede a une valeur imbriquee dans un objet via une cle a points
 * Ex: getNestedValue(obj, 'hero.title') => obj.hero.title
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc === null || acc === undefined) return null;
    return acc[key] !== undefined ? acc[key] : null;
  }, obj);
}

/**
 * Met a jour tous les elements ayant un attribut data-i18n
 * Exclut le logo navbar qui ne doit pas etre traduit
 */
function updateTranslations(t) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    // Ne pas modifier le logo "KB"
    if (el.classList.contains('navbar__logo')) return;

    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(t, key);
    if (value !== null && typeof value === 'string') {
      el.textContent = value;
    }
  });

  // Mettre a jour les noms de pays (attribut data-i18n-name)
  document.querySelectorAll('[data-i18n-name]').forEach(el => {
    const key = el.getAttribute('data-i18n-name');
    const value = getNestedValue(t, key);
    if (value !== null && typeof value === 'string') {
      const nameEl = el.querySelector('.travel__country-name');
      if (nameEl) nameEl.textContent = value;
    }
  });
}

/**
 * Fonction principale de changement de langue
 */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  const t = translations[lang];

  // Mettre a jour l'attribut lang du document
  document.documentElement.lang = lang;

  // Mettre a jour tous les textes traduits
  updateTranslations(t);

  // Mettre a jour l'etat actif des boutons de langue
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Sauvegarder en localStorage
  try {
    localStorage.setItem('language', lang);
  } catch (e) {
    // Silencieux si localStorage non disponible
  }
}

/**
 * Charger la langue sauvegardee ou utiliser le francais par defaut
 */
function loadSavedLanguage() {
  try {
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) {
      currentLang = saved;
    }
  } catch (e) {
    // Silencieux
  }
  setLanguage(currentLang);
}

/* ==========================================================================
   4. NAVIGATION MOBILE
   ========================================================================== */

function initMobileMenu() {
  const burger = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!burger || !mobileMenu) return;

  const menuIcon = burger.querySelector('.icon--menu');
  const closeIcon = burger.querySelector('.icon--close');

  function toggleMenu(open) {
    const isOpen = typeof open === 'boolean' ? open : mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', !isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    if (menuIcon) menuIcon.classList.toggle('hidden', isOpen);
    if (closeIcon) closeIcon.classList.toggle('hidden', !isOpen);
  }

  // Toggle du menu au clic sur le burger
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Fermer quand on clique un lien dans le menu mobile
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Fermer quand on clique en dehors du menu
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden') &&
        !mobileMenu.contains(e.target) &&
        !burger.contains(e.target)) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   5. SMOOTH SCROLL
   ========================================================================== */

function initSmoothScroll() {
  // Gerer les liens navbar desktop et mobile qui pointent vers des ancres (#section)
  const allNavLinks = document.querySelectorAll('.navbar__link, .navbar__mobile-link, .hero__ctas .btn');

  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  });

  // Lien du logo "KB" vers le haut
  const logo = document.querySelector('.navbar__logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }
}

/* ==========================================================================
   6. ANIMATIONS AU SCROLL (IntersectionObserver)
   ========================================================================== */

function initScrollAnimations() {
  // Ne pas animer si l'utilisateur prefere les mouvements reduits
  if (prefersReducedMotion) {
    document.querySelectorAll('[data-section]').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observer toutes les sections et les cartes
  document.querySelectorAll(
    '[data-section], .education__card, .experience__card, .skills__card, ' +
    '.future__card, .commitments__card, .travel__country, .about__quality-card, ' +
    '.contact__info-card'
  ).forEach(el => observer.observe(el));
}

/* ==========================================================================
   7. NAVIGATION ACTIVE STATE
   ========================================================================== */

function initActiveNavState() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === '#' + id);
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: `-${NAVBAR_OFFSET}px 0px -40% 0px`
  });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   8. NAVBAR AU SCROLL (fond transparent -> solid)
   ========================================================================== */

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 16);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Etat initial au chargement
  handleScroll();
}

/* ==========================================================================
   9. SELECTEUR DE LANGUE
   ========================================================================== */

function initLanguageSelector() {
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && translations[lang]) {
        setLanguage(lang);
      }
    });
  });
}

/* ==========================================================================
   10. ANNEE DYNAMIQUE FOOTER
   ========================================================================== */

function initDynamicYear() {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   11. INITIALISATION AU CHARGEMENT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Charger la langue sauvegardee et appliquer toutes les traductions
  loadSavedLanguage();

  // Initialiser toutes les fonctionnalites
  initMobileMenu();
  initSmoothScroll();
  initNavbarScroll();
  initActiveNavState();
  initLanguageSelector();
  initDynamicYear();

  // Lancer les animations au scroll
  initScrollAnimations();
});
