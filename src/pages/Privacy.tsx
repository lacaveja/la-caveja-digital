import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

export default function Privacy() {
  const { language } = useLanguage();

  const content = {
    it: {
      title: 'Privacy Policy',
      intro: 'Piadineria La Caveja rispetta la privacy dei suoi visitatori e si impegna a proteggere le informazioni personali in conformità con la legislazione svizzera sulla protezione dei dati.',
      sections: [
        {
          title: '1. Raccolta Dati',
          content: 'Raccogliamo solo i dati necessari per fornire i nostri servizi. Questo può includere informazioni di contatto quando ci contatti tramite i canali disponibili sul sito.',
        },
        {
          title: '2. Utilizzo dei Cookie',
          content: 'Il nostro sito utilizza cookie per migliorare l\'esperienza dell\'utente. I cookie sono piccoli file di testo memorizzati sul tuo dispositivo. Puoi gestire le preferenze dei cookie attraverso le impostazioni del tuo browser.',
        },
        {
          title: '3. Google Analytics',
          content: 'Utilizziamo Google Analytics per analizzare l\'utilizzo del sito web. Google Analytics raccoglie informazioni anonime per aiutarci a comprendere come i visitatori utilizzano il nostro sito.',
        },
        {
          title: '4. Condivisione dei Dati',
          content: 'Non vendiamo, scambiamo o trasmettiamo a terzi le tue informazioni personali, salvo quanto richiesto dalla legge o necessario per fornire i servizi richiesti.',
        },
        {
          title: '5. Sicurezza',
          content: 'Implementiamo misure di sicurezza appropriate per proteggere le tue informazioni personali da accessi non autorizzati, alterazioni o divulgazioni.',
        },
        {
          title: '6. I Tuoi Diritti',
          content: 'In conformità con la legge svizzera sulla protezione dei dati, hai il diritto di accedere, correggere o eliminare i tuoi dati personali. Per esercitare questi diritti, contattaci a luganolacaveja@gmail.com.',
        },
        {
          title: '7. Contatti',
          content: 'Per domande sulla nostra privacy policy, contattaci:\nPiadineria La Caveja\nViale Carlo Cattaneo 15, 6900 Lugano\nEmail: luganolacaveja@gmail.com\nTelefono: +41 79 765 13 81',
        },
      ],
      lastUpdated: 'Ultimo aggiornamento: Gennaio 2025',
    },
    en: {
      title: 'Privacy Policy',
      intro: 'Piadineria La Caveja respects the privacy of its visitors and is committed to protecting personal information in accordance with Swiss data protection legislation.',
      sections: [
        {
          title: '1. Data Collection',
          content: 'We only collect data necessary to provide our services. This may include contact information when you contact us through the channels available on the site.',
        },
        {
          title: '2. Use of Cookies',
          content: 'Our site uses cookies to improve user experience. Cookies are small text files stored on your device. You can manage cookie preferences through your browser settings.',
        },
        {
          title: '3. Google Analytics',
          content: 'We use Google Analytics to analyze website usage. Google Analytics collects anonymous information to help us understand how visitors use our site.',
        },
        {
          title: '4. Data Sharing',
          content: 'We do not sell, trade, or transfer your personal information to third parties, except as required by law or necessary to provide requested services.',
        },
        {
          title: '5. Security',
          content: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.',
        },
        {
          title: '6. Your Rights',
          content: 'In accordance with Swiss data protection law, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at luganolacaveja@gmail.com.',
        },
        {
          title: '7. Contact',
          content: 'For questions about our privacy policy, contact us:\nPiadineria La Caveja\nViale Carlo Cattaneo 15, 6900 Lugano\nEmail: luganolacaveja@gmail.com\nPhone: +41 79 765 13 81',
        },
      ],
      lastUpdated: 'Last updated: January 2025',
    },
    de: {
      title: 'Datenschutz',
      intro: 'Piadineria La Caveja respektiert die Privatsphäre seiner Besucher und verpflichtet sich, persönliche Informationen gemäß dem Schweizer Datenschutzgesetz zu schützen.',
      sections: [
        {
          title: '1. Datenerfassung',
          content: 'Wir erfassen nur die Daten, die für die Bereitstellung unserer Dienstleistungen erforderlich sind. Dies kann Kontaktinformationen umfassen, wenn Sie uns über die auf der Website verfügbaren Kanäle kontaktieren.',
        },
        {
          title: '2. Verwendung von Cookies',
          content: 'Unsere Website verwendet Cookies, um die Benutzererfahrung zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Sie können Cookie-Einstellungen über Ihre Browser-Einstellungen verwalten.',
        },
        {
          title: '3. Google Analytics',
          content: 'Wir verwenden Google Analytics zur Analyse der Website-Nutzung. Google Analytics sammelt anonyme Informationen, um uns zu helfen zu verstehen, wie Besucher unsere Website nutzen.',
        },
        {
          title: '4. Datenweitergabe',
          content: 'Wir verkaufen, tauschen oder übertragen Ihre persönlichen Informationen nicht an Dritte, außer wenn gesetzlich vorgeschrieben oder zur Bereitstellung angeforderter Dienstleistungen erforderlich.',
        },
        {
          title: '5. Sicherheit',
          content: 'Wir implementieren geeignete Sicherheitsmaßnahmen zum Schutz Ihrer persönlichen Informationen vor unbefugtem Zugriff, Änderung oder Offenlegung.',
        },
        {
          title: '6. Ihre Rechte',
          content: 'Gemäß dem Schweizer Datenschutzgesetz haben Sie das Recht, auf Ihre persönlichen Daten zuzugreifen, sie zu korrigieren oder zu löschen. Um diese Rechte auszuüben, kontaktieren Sie uns unter luganolacaveja@gmail.com.',
        },
        {
          title: '7. Kontakt',
          content: 'Bei Fragen zu unserer Datenschutzrichtlinie kontaktieren Sie uns:\nPiadineria La Caveja\nViale Carlo Cattaneo 15, 6900 Lugano\nE-Mail: luganolacaveja@gmail.com\nTelefon: +41 79 765 13 81',
        },
      ],
      lastUpdated: 'Letzte Aktualisierung: Januar 2025',
    },
    fr: {
      title: 'Politique de Confidentialité',
      intro: 'Piadineria La Caveja respecte la vie privée de ses visiteurs et s\'engage à protéger les informations personnelles conformément à la législation suisse sur la protection des données.',
      sections: [
        {
          title: '1. Collecte de Données',
          content: 'Nous collectons uniquement les données nécessaires pour fournir nos services. Cela peut inclure des informations de contact lorsque vous nous contactez via les canaux disponibles sur le site.',
        },
        {
          title: '2. Utilisation des Cookies',
          content: 'Notre site utilise des cookies pour améliorer l\'expérience utilisateur. Les cookies sont de petits fichiers texte stockés sur votre appareil. Vous pouvez gérer les préférences de cookies via les paramètres de votre navigateur.',
        },
        {
          title: '3. Google Analytics',
          content: 'Nous utilisons Google Analytics pour analyser l\'utilisation du site web. Google Analytics collecte des informations anonymes pour nous aider à comprendre comment les visiteurs utilisent notre site.',
        },
        {
          title: '4. Partage des Données',
          content: 'Nous ne vendons, n\'échangeons ni ne transférons vos informations personnelles à des tiers, sauf si requis par la loi ou nécessaire pour fournir les services demandés.',
        },
        {
          title: '5. Sécurité',
          content: 'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès, modification ou divulgation non autorisés.',
        },
        {
          title: '6. Vos Droits',
          content: 'Conformément à la loi suisse sur la protection des données, vous avez le droit d\'accéder, de corriger ou de supprimer vos données personnelles. Pour exercer ces droits, contactez-nous à luganolacaveja@gmail.com.',
        },
        {
          title: '7. Contact',
          content: 'Pour des questions sur notre politique de confidentialité, contactez-nous:\nPiadineria La Caveja\nViale Carlo Cattaneo 15, 6900 Lugano\nEmail: luganolacaveja@gmail.com\nTéléphone: +41 79 765 13 81',
        },
      ],
      lastUpdated: 'Dernière mise à jour: Janvier 2025',
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          {currentContent.title}
        </h1>

        <Card className="max-w-3xl mx-auto p-8 md:p-12">
          <p className="text-lg mb-8 text-muted-foreground">{currentContent.intro}</p>

          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                <p className="text-muted-foreground whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-12 pt-8 border-t border-border">
            {currentContent.lastUpdated}
          </p>
        </Card>
      </div>
    </div>
  );
}
