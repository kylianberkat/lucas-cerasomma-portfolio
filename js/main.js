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
      about: 'À propos',
      education: 'Formation',
      experience: 'Parcours',
      skills: 'Compétences',
      future: 'Futur',
      commitments: 'Engagements',
      travel: 'Voyages',
      contact: 'Contact',
      wikipedia: 'Wikipedia',
      downloadCV: 'Télécharger mon CV'
    },
    hero: {
      title: 'Lucas Cerasomma Ribeiro',
      subtitle: 'Bachelor Management International • Finance, coordination et management interculturel',
      quote: 'Un profil fiable, dynamique et orienté terrain.',
      description: 'Étudiant à l\'ESSCA, je construis un parcours entre gestion opérationnelle, management interculturel et organisation d\'activités. Je recherche une alternance en marketing international et/ou management.',
      cta1: 'Me découvrir',
      cta2: 'Télécharger mon CV',
      cta3: 'Ma page Wikipedia',
      miniCards: [
        { title: 'Basé à Septèmes-les-Vallons', value: 'Étudiant ESSCA' },
        { title: 'Focus', value: 'Marketing international & management' }
      ],
      keywords: ['Commerce', 'Management', 'Digital']
    },
    about: {
      title: 'À propos',
      content: 'Je suis un étudiant relationnel, rigoureux et adaptable. J\'aime le travail en équipe et les environnements où il faut organiser, coordonner et avancer concrètement.',
      note: 'Je recherche une alternance à partir de septembre 2026 en marketing international et/ou management, pour renforcer mes compétences et construire un parcours professionnel solide.',
      qualities: [
        { title: 'Écoute active', icon: 'users' },
        { title: 'Adaptabilité', icon: 'refresh' },
        { title: 'Rigueur', icon: 'target' },
        { title: 'Esprit d\'équipe', icon: 'heart' },
        { title: 'Ponctualité', icon: 'zap' },
        { title: 'Sens des responsabilités', icon: 'search' }
      ]
    },
    education: {
      title: 'Formation',
      items: [
        {
          period: '2024-2027',
          degree: 'Bachelor Management International',
          school: 'ESSCA',
          description: 'Management, marketing, gestion de projet et travail en équipe multiculturel.',
          status: 'En cours'
        },
        {
          period: '2024',
          degree: 'Baccalauréat général',
          school: 'Lycée Saint-Louis Sainte-Marie — Gignac-la-Nerthe',
          description: 'Spécialités : LLCE, mathématiques et SES.',
          status: 'Obtenu'
        },
        {
          period: '2023',
          degree: 'BAFA',
          school: 'Brevet d\'aptitude aux fonctions d\'animateur',
          description: 'Encadrement de mineurs, sécurité, animation et dynamique de groupe.',
          status: 'Obtenu'
        }
      ]
    },
    experience: {
      title: 'Parcours & expériences',
      items: [
        {
          period: 'Juil.-août 2025',
          duration: '2 mois',
          role: 'Téléconseiller CRC',
          company: 'Groupe ETIC',
          location: 'Marseille',
          description: 'Traitement des demandes par messagerie, appels prospects et respect des procédures qualité.'
        },
        {
          period: 'Été 2024',
          duration: '2 mois',
          role: 'Animateur en centre de loisirs',
          company: 'Mairie de Septèmes-les-Vallons',
          location: 'Septèmes-les-Vallons',
          description: 'Planification d\'activités éducatives et sportives, animation de groupes et respect du cadre pédagogique.'
        },
        {
          period: 'Été 2023',
          duration: '2 mois',
          role: 'Animateur (10-12 ans)',
          company: 'Planet Jeunes - Luynes',
          location: 'Luynes',
          description: 'Encadrement d\'enfants, création d\'activités collectives et gestion des situations imprévues avec sang-froid.'
        },
        {
          period: '2024',
          duration: '8 semaines',
          role: 'Stagiaire opérationnel',
          company: 'Mon Club Football',
          location: 'Bouc-Bel-Air',
          description: 'Gestion des factures, réservations, appels entrants, disponibilités des terrains, stocks et caisse.'
        },
        {
          period: '2023-2024',
          duration: '1 an',
          role: 'Achat-revente en ligne',
          company: 'Activité personnelle — Vinted',
          location: 'À distance',
          description: 'Sourcing produits, négociation, suivi des ventes, optimisation de marge et logistique d\'expédition.'
        }
      ]
    },
    skills: {
      title: 'Compétences',
      professional: 'Compétences professionnelles',
      personal: 'Aptitudes personnelles',
      languages: 'Langues',
      proSkills: [
        'Management opérationnel & coordination',
        'Gestion de planning',
        'Suivi administratif & facturation',
        'Gestion de stock et caisse',
        'Coordination terrain',
        'Canva & communication digitale'
      ],
      softSkills: ['Esprit d\'équipe', 'Adaptabilité', 'Rigueur', 'Sens du relationnel', 'Patience', 'Ponctualité'],
      langs: [
        { lang: 'Français', level: 'Langue maternelle' },
        { lang: 'Anglais', level: 'Intermédiaire (B2)' },
        { lang: 'Espagnol', level: 'Intermédiaire (A2)' }
      ]
    },
    future: {
      title: 'Futur, projets & ambitions',
      intro: 'Je recherche une alternance à partir de septembre 2026 en marketing international et/ou management, pour apprendre sur le terrain tout en consolidant mes acquis.',
      cards: [
        {
          title: 'Études visées',
          description: 'Finaliser mon Bachelor puis poursuivre en Master orienté marketing international, management ou stratégie.'
        },
        {
          title: 'Ce que je veux développer',
          description: 'Renforcer la gestion d\'activité, l\'organisation, le reporting et la coordination de projets.'
        },
        {
          title: 'Projet professionnel',
          description: 'Évoluer vers un poste où management d\'équipe et de projet, stratégie commerciale et responsabilités se conjuguent.'
        }
      ]
    },
    commitments: {
      title: 'Engagements',
      subtitle: 'Des engagements qui reflètent mes valeurs et ma régularité',
      items: [
        {
          title: 'Les Chats de Marie-Hélène',
          description: 'Soutien à des actions en faveur de la protection animale.'
        },
        {
          title: 'Don du sang régulier',
          description: 'Donateur régulier à la Maison du sang de Marseille.'
        },
        {
          title: 'Médecins sans frontières',
          description: 'Soutien à une cause humanitaire en tant que donateur.'
        }
      ]
    },
    travel: {
      title: 'Voyages & ouverture',
      subtitle: 'Des voyages qui renforcent ma curiosité, mon adaptation et mon ouverture.',
      countries: [
        { name: 'Espagne', code: 'ES' },
        { name: 'Japon', code: 'JP' },
        { name: 'République tchèque', code: 'CZ' },
        { name: 'Suisse', code: 'CH' },
        { name: 'Portugal', code: 'PT' },
        { name: 'Italie', code: 'IT' }
      ]
    },
    contact: {
      title: 'Me retrouver',
      subtitle: 'Disponible pour échanger sur mon parcours, une alternance en marketing international et/ou management, ou toute opportunité à partir de septembre 2026.',
      location: 'Septèmes-les-Vallons (13240)',
      email: 'M\'envoyer un e-mail',
      linkedin: 'Voir mon LinkedIn',
      downloadCV: 'Télécharger mon CV'
    },
    footer: {
      description: 'Portfolio étudiant',
      rights: 'Tous droits réservés'
    },
    wiki: {
      back: 'Retour au portfolio',
      title: 'Lucas Cerasomma Ribeiro',
      subtitle: 'Notice biographique inspirée d\'une page encyclopédique',
      intro: 'est un étudiant français basé à Septèmes-les-Vallons. Son parcours combine management opérationnel, gestion de projet et coordination terrain.',
      tocTitle: 'Sommaire',
      toc: { identity: 'Identité', education: 'Formation', experience: 'Parcours', skills: 'Compétences', commitments: 'Engagements', interests: 'Ouverture' },
      infobox: { status: 'Étudiant', field: 'Marketing international, management', location: 'Septèmes-les-Vallons, France', languages: 'Français, anglais, espagnol' },
      sections: {
        identity: { title: 'Identité', content: 'Étudiant à l\'ESSCA, Lucas Cerasomma Ribeiro développe un profil professionnel axé sur le management et le marketing international.' },
        education: { title: 'Formation', content: 'Il suit un Bachelor en Management International après son baccalauréat ; il est titulaire du BAFA.' },
        experience: { title: 'Parcours', content: 'Ses expériences couvrent l\'accueil client, l\'animation, la gestion opérationnelle et la coordination quotidienne.' },
        skills: { title: 'Compétences', content: 'Il mobilise des compétences en organisation, suivi administratif, communication et travail d\'équipe.' },
        commitments: { title: 'Engagements', content: 'Il s\'implique dans des actions associatives et solidaires, notamment via des dons réguliers.' },
        interests: { title: 'Ouverture internationale', content: 'Ses voyages nourrissent son adaptation et sa capacité à évoluer dans des contextes variés.' }
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
      subtitle: 'International Management Bachelor • Finance, coordination and intercultural management',
      quote: 'A reliable, dynamic profile focused on hands-on work.',
      description: 'ESSCA student building a coherent path between operational management, intercultural management and project delivery. Seeking a work-study role in international marketing and/or management.',
      cta1: 'Discover',
      cta2: 'Download CV',
      cta3: 'My Wikipedia page',
      miniCards: [
        { title: 'Based in Septèmes-les-Vallons', value: 'ESSCA student' },
        { title: 'Focus', value: 'International marketing & management' }
      ],
      keywords: ['Business', 'Management', 'Digital']
    },
    about: {
      title: 'About',
      content: 'I am a people-oriented, disciplined and adaptable student. I enjoy teamwork and hands-on environments where organization and reliability matter.',
      note: 'I am looking for a work-study position from September 2026 in international marketing and/or management, to strengthen my skills and build a solid career path.',
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
        { period: '2024-2027', degree: 'International Management Bachelor', school: 'ESSCA', description: 'Management, marketing, project work and multicultural teamwork.', status: 'In progress' },
        { period: '2024', degree: 'General baccalaureate', school: 'Lycée Saint-Louis Sainte-Marie — Gignac-la-Nerthe', description: 'Specialisms: LLCE (languages & literature), mathematics, economics (SES).', status: 'Completed' },
        { period: '2023', degree: 'BAFA (youth work certificate)', school: 'French youth leadership qualification', description: 'Supervising minors, safety, group dynamics and facilitation.', status: 'Completed' }
      ]
    },
    experience: {
      title: 'Journey & experience',
      items: [
        { period: 'Jul.-Aug. 2025', duration: '2 months', role: 'CRC call center advisor', company: 'Groupe ETIC', location: 'Marseille', description: 'Handled requests via messaging and outbound calls while following quality procedures.' },
        { period: 'Summer 2024', duration: '2 months', role: 'Leisure centre facilitator', company: 'Municipality of Septèmes-les-Vallons', location: 'Septèmes-les-Vallons', description: 'Planned educational and sports activities and supervised groups within a pedagogical framework.' },
        { period: 'Summer 2023', duration: '2 months', role: 'Activity facilitator (ages 10–12)', company: 'Planet Jeunes — Luynes', location: 'Luynes', description: 'Supervised children, designed group activities and managed unexpected situations calmly.' },
        { period: '2024', duration: '8 weeks', role: 'Operations intern', company: 'Mon Club Football', location: 'Bouc-Bel-Air', description: 'Invoices, bookings, incoming calls, pitch availability, stock and cash desk.' },
        { period: '2023–2024', duration: '1 year', role: 'Online resale', company: 'Personal project — Vinted', location: 'Remote', description: 'Sourcing, negotiation, sales follow-up, margin and shipping logistics.' }
      ]
    },
    skills: {
      title: 'Skills',
      professional: 'Professional skills',
      personal: 'Personal strengths',
      languages: 'Languages',
      proSkills: ['Operational management & coordination', 'Scheduling', 'Administrative follow-up & invoicing', 'Stock and cash management', 'Field coordination', 'Canva & digital communication'],
      softSkills: ['Team spirit', 'Adaptability', 'Discipline', 'People skills', 'Patience', 'Punctuality'],
      langs: [
        { lang: 'French', level: 'Native' },
        { lang: 'English', level: 'Intermediate (B2)' },
        { lang: 'Spanish', level: 'Intermediate (A2)' }
      ]
    },
    future: {
      title: 'Future, projects & ambitions',
      intro: 'I am looking for a work-study role from September 2026 in international marketing and/or management, combining learning on the job with academic goals.',
      cards: [
        { title: 'Academic goals', description: 'Finish my Bachelor and pursue a Master focused on international marketing, management or strategy.' },
        { title: 'Skills to build', description: 'Strengthen activity management, organization, reporting and project coordination.' },
        { title: 'Career goal', description: 'Grow toward roles where team and project management, commercial strategy and responsibility come together.' }
      ]
    },
    commitments: {
      title: 'Commitments',
      subtitle: 'Commitments that reflect consistency and values',
      items: [
        { title: 'Les Chats de Marie-Hélène', description: 'Support for local animal welfare initiatives.' },
        { title: 'Regular blood donor', description: 'Regular donor at the Marseille blood centre.' },
        { title: 'Doctors Without Borders', description: 'Supporter and donor to humanitarian work.' }
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
      subtitle: 'Happy to discuss my path, a work-study role in international marketing and/or management, or any opportunity from September 2026.',
      location: 'Septèmes-les-Vallons (13240)',
      email: 'Email me',
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
      subtitle: 'Biography inspired by an encyclopedia-style page',
      intro: 'is a French student based in Septèmes-les-Vallons, building experience in operational management, projects and coordination.',
      tocTitle: 'Contents',
      toc: { identity: 'Identity', education: 'Education', experience: 'Journey', skills: 'Skills', commitments: 'Commitments', interests: 'Openness' },
      infobox: { status: 'Student', field: 'International marketing, management', location: 'Septèmes-les-Vallons, France', languages: 'French, English, Spanish' },
      sections: {
        identity: { title: 'Identity', content: 'ESSCA student developing a profile oriented toward management and international marketing.' },
        education: { title: 'Education', content: 'International Management Bachelor after the baccalaureate; holds the BAFA youth-work qualification.' },
        experience: { title: 'Journey', content: 'Roles spanning customer-facing work, youth activities, operational support and day-to-day coordination.' },
        skills: { title: 'Skills', content: 'Organization, administrative follow-up, communication and teamwork.' },
        commitments: { title: 'Commitments', content: 'Involvement in solidarity and community initiatives, including regular giving.' },
        interests: { title: 'International openness', content: 'Travel strengthens adaptability and ability to work in varied contexts.' }
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      education: 'Formación',
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
      subtitle: 'Bachelor en Management Internacional • Finanzas, coordinación y management intercultural',
      quote: 'Un perfil fiable, dinámico y orientado al terreno.',
      description: 'Estudiante en ESSCA: construyo un recorrido entre gestión operativa, management intercultural y organización de actividades. Busco una alternancia en marketing internacional y/o management.',
      cta1: 'Descubrir',
      cta2: 'Descargar CV',
      cta3: 'Mi página Wikipedia',
      miniCards: [
        { title: 'Basado en Septèmes-les-Vallons', value: 'Estudiante ESSCA' },
        { title: 'Enfoque', value: 'Marketing internacional y management' }
      ],
      keywords: ['Comercio', 'Management', 'Digital']
    },
    about: {
      title: 'Sobre mí',
      content: 'Soy un estudiante cercano, riguroso y adaptable. Me gusta el trabajo en equipo y los entornos donde hay que organizar, coordinar y avanzar concretamente.',
      note: 'Busco una alternancia a partir de septiembre de 2026 en marketing internacional y/o management, para reforzar mis competencias y construir un recorrido sólido.',
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
      title: 'Formación',
      items: [
        { period: '2024-2027', degree: 'Bachelor en Management Internacional', school: 'ESSCA', description: 'Management, marketing, gestión de proyectos y trabajo en equipo multicultural.', status: 'En curso' },
        { period: '2024', degree: 'Bachillerato general', school: 'Lycée Saint-Louis Sainte-Marie — Gignac-la-Nerthe', description: 'Especialidades: LLCE, matemáticas y SES.', status: 'Obtenido' },
        { period: '2023', degree: 'BAFA', school: 'Brevet d\'aptitude aux fonctions d\'animateur (Francia)', description: 'Accompanamiento de menores, seguridad, dinámica de grupo y animación.', status: 'Obtenido' }
      ]
    },
    experience: {
      title: 'Recorrido y experiencia',
      items: [
        { period: 'Jul.-ago. 2025', duration: '2 meses', role: 'Teleoperador CRC', company: 'Groupe ETIC', location: 'Marsella', description: 'Tratamiento de solicitudes por mensajería, llamadas a prospectos y cumplimiento de procedimientos de calidad.' },
        { period: 'Verano 2024', duration: '2 meses', role: 'Animador en centro de ocio', company: 'Ayuntamiento de Septèmes-les-Vallons', location: 'Septèmes-les-Vallons', description: 'Planificación de actividades educativas y deportivas y supervisión de grupos.' },
        { period: 'Verano 2023', duration: '2 meses', role: 'Animador (10-12 años)', company: 'Planet Jeunes — Luynes', location: 'Luynes', description: 'Acompañamiento de niños, dinámicas de grupo e imprevistos.' },
        { period: '2024', duration: '8 semanas', role: 'Practicante operativo', company: 'Mon Club Football', location: 'Bouc-Bel-Air', description: 'Facturas, reservas, llamadas, disponibilidad de campos, stock y caja.' },
        { period: '2023-2024', duration: '1 año', role: 'Compra-venta online', company: 'Proyecto personal — Vinted', location: 'A distancia', description: 'Sourcing, negociación, seguimiento de ventas, margen y logística.' }
      ]
    },
    skills: {
      title: 'Competencias',
      professional: 'Competencias profesionales',
      personal: 'Aptitudes personales',
      languages: 'Idiomas',
      proSkills: ['Management operativo y coordinación', 'Gestión de horarios', 'Seguimiento administrativo y facturación', 'Gestión de stock y caja', 'Coordinación operativa', 'Canva y comunicación digital'],
      softSkills: ['Trabajo en equipo', 'Adaptabilidad', 'Rigor', 'Relación interpersonal', 'Paciencia', 'Puntualidad'],
      langs: [
        { lang: 'Francés', level: 'Lengua materna' },
        { lang: 'Inglés', level: 'Intermedio (B2)' },
        { lang: 'Español', level: 'Intermedio (A2)' }
      ]
    },
    future: {
      title: 'Futuro, proyectos y ambiciones',
      intro: 'Busco una alternancia a partir de septiembre de 2026 en marketing internacional y/o management, para seguir aprendiendo en el terreno.',
      cards: [
        { title: 'Estudios', description: 'Terminar el Bachelor y cursar un Máster orientado a marketing internacional o management.' },
        { title: 'Competencias a desarrollar', description: 'Reforzar gestión de actividad, organización, reporting y coordinación de proyectos.' },
        { title: 'Objetivo profesional', description: 'Evolucionar hacia puestos donde el management de equipo y proyecto, la estrategia comercial y las responsabilidades se unan.' }
      ]
    },
    commitments: {
      title: 'Compromisos',
      subtitle: 'Compromisos que reflejan constancia y valores',
      items: [
        { title: 'Les Chats de Marie-Hélène', description: 'Apoyo a iniciativas de protección animal.' },
        { title: 'Donante regular de sangre', description: 'Donaciones regulares en la Maison du sang de Marsella.' },
        { title: 'Médicos sin fronteras', description: 'Apoyo humanitario como donante.' }
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
      subtitle: 'Disponible para hablar de mi perfil, una alternancia en marketing internacional y/o management, u otras oportunidades desde septiembre de 2026.',
      location: 'Septèmes-les-Vallons (13240)',
      email: 'Enviarme un correo',
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
      subtitle: 'Biografía inspirada en una página enciclopédica',
      intro: 'es un estudiante francés con base en Septèmes-les-Vallons; su perfil combina gestión operativa, proyectos y coordinación.',
      tocTitle: 'Contenido',
      toc: { identity: 'Identidad', education: 'Formación', experience: 'Recorrido', skills: 'Competencias', commitments: 'Compromisos', interests: 'Apertura' },
      infobox: { status: 'Estudiante', field: 'Marketing internacional, management', location: 'Septèmes-les-Vallons, Francia', languages: 'Francés, inglés, español' },
      sections: {
        identity: { title: 'Identidad', content: 'Estudiante de ESSCA orientado al management y al marketing internacional.' },
        education: { title: 'Formación', content: 'Bachelor en Management Internacional tras el bachillerato; titular del BAFA.' },
        experience: { title: 'Recorrido', content: 'Experiencia en acogida al público, animación, apoyo operativo y coordinación.' },
        skills: { title: 'Competencias', content: 'Organización, seguimiento administrativo, comunicación y trabajo en equipo.' },
        commitments: { title: 'Compromisos', content: 'Compromiso con iniciativas solidarias y asociativas, incluidas donaciones regulares.' },
        interests: { title: 'Apertura internacional', content: 'Los viajes refuerzan la adaptación y la capacidad de trabajar en contextos variados.' }
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
   6. IMAGES VOYAGES (chargement paresseux)
   ========================================================================== */

function initLazyTravelBackgrounds() {
  const cards = document.querySelectorAll('.travel__country[data-bg]');
  if (!cards.length) return;

  const loadBg = (el) => {
    const url = el.getAttribute('data-bg');
    if (!url) return;
    const img = new Image();
    img.onload = () => {
      el.style.backgroundImage = `url('${url}')`;
      el.classList.add('travel__country--bg-loaded');
    };
    img.onerror = () => {
      el.classList.add('travel__country--bg-error');
    };
    img.src = url;
  };

  if (typeof IntersectionObserver === 'undefined') {
    cards.forEach(loadBg);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadBg(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '180px 0px', threshold: 0.01 }
  );

  cards.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   7. ANIMATIONS AU SCROLL (IntersectionObserver)
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
   8. NAVIGATION ACTIVE STATE
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
   9. NAVBAR AU SCROLL (fond transparent -> solid)
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
   10. SELECTEUR DE LANGUE
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
   11. ANNEE DYNAMIQUE FOOTER
   ========================================================================== */

function initDynamicYear() {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   12. INITIALISATION AU CHARGEMENT
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

  initLazyTravelBackgrounds();

  // Lancer les animations au scroll
  initScrollAnimations();
});
