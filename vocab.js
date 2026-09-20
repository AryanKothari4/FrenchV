const vocabLists = {
    'lesRelations': {
            name: "Les Relations et Les Sentiments",
            categories: {
                les_relations: [
                    { french: "une âme sœur", english: "soul mate" },
                    { french: "une amitié", english: "friendship" },
                    { french: "des commérages", english: "gossip" },
                    { french: "un esprit", english: "spirit" },
                    { french: "un mariage", english: "marriage ; wedding" },
                    { french: "un rendez-vous", english: "date" },
                    { french: "une responsabilité", english: "responsibility" },
                    { french: "compter sur", english: "to rely on" },
                    { french: "draguer", english: "to flirt ; to try to \"pick up\"" },
                    { french: "s'engager (envers quelqu'un)", english: "to commit (to someone)" },
                    { french: "faire confiance (à quelqu'un)", english: "to trust (someone)" },
                    { french: "mentir", english: "to lie" },
                    { french: "mériter", english: "to deserve ; to be worth" },
                    { french: "partager", english: "to share" },
                    { french: "poser un lapin (à quelqu'un)", english: "to stand (someone) up" },
                    { french: "quitter quelqu'un", english: "to leave someone" },
                    { french: "rompre", english: "to break up" },
                    { french: "sortir avec", english: "to go out with" },
                    { french: "fidèle", english: "faithful" },
                    { french: "infidèle", english: "unfaithful" }
                ],
                les_sentiments: [
                    { french: "agacer", english: "to annoy (ag)" },
                    { french: "énerver", english: "to annoy (é)" },
                    { french: "aimer", english: "to love ; to like" },
                    { french: "avoir honte", english: "to be ashamed of ; embarrassed" },
                    { french: "en avoir marre (de)", english: "to be fed up (with)" },
                    { french: "s'entendre bien (avec)", english: "to get along well (with)" },
                    { french: "gêner", english: "to bother ; embarrass" },
                    { french: "se mettre en colère contre", english: "to get angry with" },
                    { french: "ressentir", english: "to feel" },
                    { french: "rêver de", english: "to dream about" },
                    { french: "tomber amoureux (de)", english: "to fall in love (with) (m)" }, // Added (de) / (with) back here
                    { french: "tomber amoureuse (de)", english: "to fall in love (with) (f)" }, // Added (de) / (with) back here
                    { french: "accablé(e)", english: "overwhelmed (m/f)" },
                    { french: "anxieux", english: "anxious (m)" },
                    { french: "anxieuse", english: "anxious (f)" },
                    { french: "contrarié(e)", english: "upset (m/f)" },
                    { french: "déprimé(e)", english: "depressed (m/f)" },
                    { french: "enthousiaste", english: "enthusiastic ; excited" },
                    { french: "fâché(e)", english: "angry ; mad (m/f)" },
                    { french: "inquiet", english: "worried (m)" },
                    { french: "inquiète", english: "worried (f)" },
                    { french: "jaloux", english: "jealous (m)" },
                    { french: "jalouse", english: "jealous (f)" },
                    { french: "passager", english: "fleeting (m)" },
                    { french: "passagère", english: "fleeting (f)" }
                ],
                l_etat_civil: [
                    { french: "divorcer", english: "to get a divorce" },
                    { french: "se fiancer", english: "to get engaged" },
                    { french: "se marier avec", english: "to marry" },
                    { french: "vivre en union libre", english: "to live together (as a couple)" },
                    { french: "célibataire", english: "single" },
                    { french: "veuf", english: "widower / widowed (m)" },
                    { french: "veuve", english: "widow / widowed (f)" }
                ],
                les_traits_de_caractere: [
                    { french: "avoir confiance en soi", english: "to be confident" },
                    { french: "charmant(e)", english: "charming (m/f)" },
                    { french: "économe", english: "thrifty" },
                    { french: "franc(he)", english: "frank (m/f)" },
                    { french: "génial(e)", english: "great ; terrific (m/f)" },
                    { french: "honnête", english: "honest" },
                    { french: "malhonnête", english: "dishonest" },
                    { french: "idéaliste", english: "idealistic" },
                    { french: "inoubliable", english: "unforgettable" },
                    { french: "mûr", english: "mature" },
                    { french: "peu mûr", english: "immature" },
                    { french: "affectueux", english: "affectionate (m)" }, // Fixed consistency here
                    { french: "affectueuse", english: "affectionate (f)" }, // Fixed consistency here
                    { french: "orgueilleux", english: "proud (m)" }, // Fixed consistency here
                    { french: "orgueilleuse", english: "proud (f)" }, // Fixed consistency here
                    { french: "prudent(e)", english: "careful (m/f)" },
                    { french: "séduisant(e)", english: "attractive (m/f)" },
                    { french: "sensible", english: "sensitive" },
                    { french: "timide", english: "shy" },
                    { french: "tranquille", english: "calm ; quiet" }
                ]
            }
        },
        'laVille': {
        name: "La Ville",
        categories: {
            les_lieux: [
                { french: "un arrêt d'autobus", english: "a bus stop" },
                { french: "une banlieue", english: "a suburb" },
                { french: "une caserne de pompiers", english: "a fire station" },
                { french: "le centre-ville", english: "the city/town center ; downtown" },
                { french: "un cinéma", english: "a movie theater" },
                { french: "un commissariat de police", english: "a police station" },
                { french: "un édifice", english: "a building" },
                { french: "un gratte-ciel", english: "a skyscraper" },
                { french: "un hôtel de ville", english: "a city/town hall" },
                { french: "un jardin public", english: "a public garden" },
                { french: "un logement", english: "housing (m)" },
                { french: "une habitation", english: "housing (f)" },
                { french: "un musée", english: "a museum" },
                { french: "le palais de justice", english: "the courthouse" },
                { french: "une place", english: "a (town/city) square" },
                { french: "la préfecture de police", english: "the police headquarters" },
                { french: "un quartier", english: "a neighborhood" },
                { french: "une station de métro", english: "a subway station" }
            ],
            les_indications: [
                { french: "la circulation", english: "traffic" },
                { french: "les clous", english: "the crosswalk" },
                { french: "un croisement", english: "an intersection" },
                { french: "un embouteillage", english: "a traffic jam" },
                { french: "un feu (tricolore)", english: "a traffic light" },
                { french: "un panneau", english: "a road sign" },
                { french: "un panneau d'affichage", english: "a billboard" },
                { french: "un pont", english: "a bridge" },
                { french: "un rond-point", english: "a traffic circle" },
                { french: "une rue", english: "a street" },
                { french: "les transports en commun", english: "public transportation" },
                { french: "un trottoir", english: "a sidewalk" },
                { french: "une voie", english: "a lane ; a road" },
                { french: "descendre", english: "to go down ; to get off" },
                { french: "donner des indications", english: "to give directions" },
                { french: "être perdu(e)", english: "to be lost (m/f)" },
                { french: "monter", english: "to go up ; to get on" },
                { french: "se trouver", english: "to be located" }
            ],
            les_gens: [
                { french: "un agent de police", english: "a police officer" },
                { french: "un(e) citadin(e)", english: "a city/town dweller (m/f)" },
                { french: "un(e) citoyen(ne)", english: "a citizen (m/f)" },
                { french: "un(e) colocataire", english: "a roommate (m/f)" },
                { french: "un conducteur", english: "a driver (m)" },
                { french: "une conductrice", english: "a driver (f)" },
                { french: "un étranger", english: "a foreigner ; a stranger (m)" },
                { french: "une étrangère", english: "a foreigner ; a stranger (f)" },
                { french: "le maire", english: "the mayor" }
            ],
            les_activites: [
                { french: "les travaux", english: "construction" },
                { french: "l'urbanisme", english: "city/town planning" },
                { french: "la vie nocturne", english: "nightlife" },
                { french: "améliorer", english: "to improve" },
                { french: "s'amuser", english: "to have fun" },
                { french: "construire", english: "to build" },
                { french: "empêcher (de)", english: "to keep from (doing something)" },
                { french: "s'ennuyer", english: "to get bored" },
                { french: "s'entretenir (avec)", english: "to converse (with)" },
                { french: "passer (devant)", english: "to go past" },
                { french: "peupler", english: "to populate" },
                { french: "rouler (en voiture)", english: "to drive" },
                { french: "vivre", english: "to live" },
                { french: "peu peuplé(e)", english: "sparsely populated (m/f)" },
                { french: "très peuplé(e)", english: "densely populated (m/f)" }
            ],
            pour_decrire: [
                { french: "animé(e)", english: "lively (m/f)" },
                { french: "bruyant(e)", english: "noisy (m/f)" },
                { french: "inattendu(e)", english: "unexpected (m/f)" },
                { french: "plein(e)", english: "full (m/f)" },
                { french: "privé(e)", english: "private (m/f)" },
                { french: "quotidien(ne)", english: "daily (m/f)" },
                { french: "sûr(e)", english: "safe (m/f)" },
                { french: "en sécurité", english: "safe" },
                { french: "vide", english: "empty" }
            ]
        }
    }
};