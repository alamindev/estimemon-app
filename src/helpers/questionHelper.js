export const calculate = {
    mobile:{
      andriod:{
        simple: [
                           {
            question: "Sur combien de supports votre application sera-t-elle disponible ?  (Smart phone / Tablette) ",
            options: [
              {
                text: "1 support",
                image:
                 "static/application mobile estimation coût cout.png",                  
                weight: 0
              },
              {
                text: "2 supports",
                image:
                  "static/application mobile et tablette estimation.png",     

                weight: 2200
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1850
              }
            ]
          },

              {
            question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png",

                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 750
              }
            ]
          },
              {
            question: "Dans combien de langues va être utilisée votre application ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 400
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 800
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un système login ? ",
            options: [
              {
                text: "Reseaux sociaux + Email ",
                image:
               "/static/reseau sociaux connection application site internet.png",
                weight: 800
              },
              {
                text: "Email",
                image:
                  "/static/email coût site web.png",
                weight: 400
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              }
            ]
          },
              {
            question: "Quel modèle de monétisation souhaitez vous appliquer ? ",
            options: [
              {
                text: "Application gratuite avec Publicité",
                image:
                  "/static/application gratuite estimation.png",
                weight: 200
              },
              {
                text: "Application Application payante",
                image:
                  "/static/application payante estimation cout.png",
                weight: 600
              },
              {
                text: "Achat 'in App'",
                image:
                  "/static/achat in app estimation application.png",
                weight: 800
                 },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 400
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un espace d'administration ? ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/estimer interface d'administration back office.png",
                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 750
              }
            ]
          },
              {
question: "Votre application doit etre connecter a siteweb et ou une application tier ?  ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 500
              }
            ]
          },
              {
            question: " Avez-vous besoin d'un système de géolocalisation dans votre application ? ",
            options: [
              {
               text: "Oui",
                image:"/static/Geolocalisation coût.png",

                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 250
              }
            ]
          },
              {
            question: "Votre application devra t-elle contenir un système de chat ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/chat messagerie messenger estimer cout coût.png",

                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 250
              }
            ]
          },
              {
              question: "Souhaitez vous un accompagnement et/ou une maintenance occasionnel ? ( Campagne publicitaire et analyse statistique) ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png"

,
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 0
              }
            ]
          },
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
              },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",

                weight: 0
                },
              {
                text: "Une association",
                image:
                  "/static/une association site internet estimer.png",
                weight: 0
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/app-en-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/application-existant cout.png",
                    weight: 0
              }
            ]
          },
            
              /*{
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/


        ],
        advance: [
                                  {
            question: "Sur combien de supports votre application sera-t-elle disponible ?  (Smart phone / Tablette) ",
            options: [
              {
                text: "1 support",
                image:
                 "static/application mobile estimation coût cout.png",
                weight: 0
              },
              {
                text: "2 supports",
                image:
                  "static/application mobile et tablette estimation.png",     
                weight: 3400
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 2850
              }
            ]
          },
    
                        {
            question: "Sur combien de supports votre application sera-t-elle disponible ?  (Smart phone / Tablette) ",
            options: [
              {
                text: "1 support",
                image:
                 "static/application mobile estimation coût cout.png",
                weight: 0
              },
              {
                text: "2 supports",
                image:
                  "static/application mobile et tablette estimation.png",     
                weight: 2200
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1850
              }
            ]
          },

          {
            question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png",

                weight: 450
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 300
              }
            ]
          },
                       {
            question: "Dans combien de langues va être utilisée votre application ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 1500
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un système login ? ",
            options: [
              {
                text: "Reseaux sociaux + Email ",
                image:
               "/static/reseau sociaux connection application site internet.png",
                weight: 1600
              },
              {
                text: "Email",
                image:
                  "/static/email coût site web.png",
                weight: 800
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              }
            ]
          },
              {
            question: "Quel modèle de monétisation souhaitez vous appliquer ? ",
            options: [
              {
                text: "Application gratuite avec Publicité",
                image:
                  "/static/application gratuite estimation.png",
                weight: 400
              },
              {
                 text: "Application Application payante",
                image:
                  "/static/application payante estimation cout.png",
                weight: 1200
              },
              {
                text: "Achat 'in App'",
                image:
                  "/static/achat in app estimation application.png",
                weight: 1600
                },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 800
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un espace d'administration ? ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/estimer interface d'administration back office.png",
                weight: 3000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1500
              }
            ]
          },
              {
question: "Votre application doit etre connecter a siteweb et ou une application tier ?  ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/app-connecter-site.png",


                weight: 1000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1000
              }
            ]
          },
              {
            question: " Avez-vous besoin d'un système de géolocalisation dans votre application ? ",
            options: [
              {
               text: "Oui",
                image:"/static/Geolocalisation coût.png",

                weight: 1000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 500
              }
            ]
          },
              {
            question: "Votre application devra t-elle contenir un système de chat ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/chat messagerie messenger estimer cout coût.png",

                weight: 1000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 500
              }
            ]
          },
              {
              question: "Souhaitez vous un accompagnement et/ou une maintenance occasionnel ? ( Campagne publicitaire et analyse statistique) ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png"

,
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 0
              }
            ]
          },
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },

              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/app-en-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/application-existant cout.png",
                    weight: 0
              }
            ]
          },
            
           /*   {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
       
        ],
        personalise: [
                                     {
            question: "Sur combien de supports votre application sera-t-elle disponible ?  (Smart phone / Tablette) ",
            options: [
              {
                text: "1 support",
                image:
                 "static/application mobile estimation coût cout.png",
                weight: 0
              },
              {
                text: "2 supports",
                image:
                  "static/application mobile et tablette estimation.png",     
                weight: 3400
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 2850
              }
            ]
          },

                        {
            question: "Sur combien de supports votre application sera-t-elle disponible ?  (Smart phone / Tablette) ",
            options: [
              {
                text: "1 support",
                image:
                 "static/application mobile estimation coût cout.png",
                weight: 0
              },
              {
                text: "2 supports",
                image:
                  "static/application mobile et tablette estimation.png",     
                weight: 2200
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1850
              }
            ]
          },

          {
            question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png",

                weight: 4500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 2250
              }
            ]
          },
              {
            question: "Dans combien de langues va être utilisée votre application ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 1000
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 2400
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un système login ? ",
            options: [
              {
                text: "Reseaux sociaux + Email ",
                image:
               "/static/reseau sociaux connection application site internet.png",
                weight: 2400
              },
              {
                text: "Email",
                image:
                  "/static/email coût site web.png",
                weight: 1600
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              }
            ]
          },
              {
            question: "Quel modèle de monétisation souhaitez vous appliquer ? ",
            options: [
              {
                text: "Application gratuite avec Publicité",
                image:
                  "/static/application gratuite estimation.png",
                weight: 600
              },
              {
                text: "Application Application payante",
                image:
                  "/static/application payante estimation cout.png",
                weight: 2400
              },
              {
                text: "Achat 'in App'",
                image:
                  "/static/achat in app estimation application.png",
                weight: 2400
                },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 1600
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un espace d'administration ? ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/estimer interface d'administration back office.png",
                weight: 4500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 2250
              }
            ]
          },
              {
question: "Votre application doit etre connecter a siteweb et ou une application tier ?  ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/app-connecter-site.png",
                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1500
              }
            ]
          },
              {
            question: " Avez-vous besoin d'un système de géolocalisation dans votre application ? ",
            options: [
              {
               text: "Oui",
                image:"/static/Geolocalisation coût.png",

                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 750
              }
            ]
          },
              {
            question: "Votre application devra t-elle contenir un système de chat ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/chat messagerie messenger estimer cout coût.png",

                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 750
              }
            ]
          },
              {
              question: "Souhaitez vous un accompagnement et/ou une maintenance occasionnel ? ( Campagne publicitaire et analyse statistique) ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 0
              }
            ]
          },
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
              },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/app-en-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/application-existant cout.png",
                    weight: 0
              }
            ]
          },
            
           /*   {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/


        ]

      },
      ios:{
        simple: [
                      {
            question: "Sur combien de supports votre application sera-t-elle disponible ?  (Smart phone / Tablette) ",
            options: [
              {
                text: "1 support",
                image:
                 "static/application mobile estimation coût cout.png",
                weight: 0
              },
              {
                text: "2 supports",
                image:
                  "static/application mobile et tablette estimation.png",     
                weight: 2200
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1850
              }
            ]
          },

              {
            question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png"
,
                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 750
              }
            ]
          },
              {
            question: "Dans combien de langues va être utilisée votre application ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 400
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 800
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un système login ? ",
            options: [
              {
                text: "Reseaux sociaux + Email ",
                image:
               "/static/reseau sociaux connection application site internet.png",
                weight: 800
              },
              {
                text: "Email",
                image:
                  "/static/email coût site web.png",
                weight: 400
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              }
            ]
          },
              {
            question: "Quel modèle de monétisation souhaitez vous appliquer ? ",
            options: [
              {
                text: "Application gratuite avec Publicité",
                image:
                  "/static/application gratuite estimation.png",
                weight: 200
              },
              {
                 text: "Application Application payante",
                image:
                  "/static/application payante estimation cout.png",
                weight: 600
              },
              {
                text: "Achat 'in App'",
                image:
                  "/static/achat in app estimation application.png",
                weight: 800
                  },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 400
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un espace d'administration ? ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/estimer interface d'administration back office.png",
                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 750
              }
            ]
          },
              {
question: "Votre application doit etre connecter a siteweb et ou une application tier ?  ",
            options: [
              {
               text: "Oui",
                image:
                "/static/app-connecter-site.png",


                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 500
              }
            ]
          },
              {
            question: " Avez-vous besoin d'un système de géolocalisation dans votre application ? ",
            options: [
              {
               text: "Oui",
                image:"/static/Geolocalisation coût.png",

                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 250
              }
            ]
          },
              {
            question: "Votre application devra t-elle contenir un système de chat ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/chat messagerie messenger estimer cout coût.png",

                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 250
              }
            ]
          },
              {
              question: "Souhaitez vous un accompagnement et/ou une maintenance occasionnel ? ( Campagne publicitaire et analyse statistique) ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png"

,
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 0
              }
            ]
          },
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },

              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
             text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
               
                text: "en cour d'élaboration  ",
                image:
                  "/static/app-en-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/application-existant cout.png",
                    weight: 0
              }
            ]
          },
          /*    {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },
*/

        ],
        advance: [
          {
            question: "Souhaitez vous être accompagner pour le design? (maquette, chart graphique,..)  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png",

                weight: 450
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 300
              }
            ]
          },
                       {
            question: "Dans combien de langues va être utilisée votre application ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 1500
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un système login ? ",
            options: [
              {
                text: "Reseaux sociaux + Email ",
                image:
               "/static/reseau sociaux connection application site internet.png",
                weight: 1600
              },
              {
                text: "Email",
                image:
                  "/static/email coût site web.png",
                weight: 800
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              }
            ]
          },
              {
            question: "Quel modèle de monétisation souhaitez vous appliquer ? ",
            options: [
              {
                text: "Application gratuite avec Publicité",
                image:
                  "/static/application gratuite estimation.png",
                weight: 400
              },
              {
               text: "Application Application payante",
                image:
                  "/static/application payante estimation cout.png",
                weight: 1200
              },
              {
                text: "Achat 'in App'",
                image:
                  "/static/achat in app estimation application.png",
                weight: 1600
                },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 800
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un espace d'administration ? ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/estimer interface d'administration back office.png",
                weight: 3000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1500
              }
            ]
          },
              {
question: "Votre application doit etre connecter a siteweb et ou une application tier ?  ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/app-connecter-site.png",


                weight: 1000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1000
              }
            ]
          },
              {
            question: " Avez-vous besoin d'un système de géolocalisation dans votre application ? ",
            options: [
              {
               text: "Oui",
                image:"/static/Geolocalisation coût.png",

                weight: 1000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 500
              }
            ]
          },
              {
            question: "Votre application devra t-elle contenir un système de chat ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/chat messagerie messenger estimer cout coût.png",

                weight: 1000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 500
              }
            ]
          },
              {
              question: "Souhaitez vous un accompagnement et/ou une maintenance occasionnel ? ( Campagne publicitaire et analyse statistique) ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png"

,
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 0
              }
            ]
          },
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },

              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/app-en-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/application-existant cout.png",
                    weight: 0
              }
            ]
          },
            
           /*   {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
       
        ],
        personalise: [
          {
            question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png",

                weight: 4500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 2250
              }
            ]
          },
              {
            question: "Dans combien de langues va être utilisée votre application ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 1000
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 2400
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un système login ? ",
            options: [
              {
                text: "Reseaux sociaux + Email ",
                image:
               "/static/reseau sociaux connection application site internet.png",
                weight: 2400
              },
              {
                text: "Email",
                image:
                  "/static/email coût site web.png",
                weight: 1600
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              }
            ]
          },
              {
            question: "Quel modèle de monétisation souhaitez vous appliquer ? ",
            options: [
              {
                text: "Application gratuite avec Publicité",
                image:
                  "/static/application gratuite estimation.png",
                weight: 600
              },
              {
                 text: "Application Application payante",
                image:
                  "/static/application payante estimation cout.png",
                weight: 2400
              },
              {
                text: "Achat 'in App'",
                image:
                  "/static/achat in app estimation application.png",
                weight: 2400
                 },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 1600
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un espace d'administration ? ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/estimer interface d'administration back office.png",
                weight: 4500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 2250
              }
            ]
          },
              {
question: "Votre application doit etre connecter a siteweb et ou une application tier ?  ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/app-connecter-site.png",


                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1500
              }
            ]
          },
              {
            question: " Avez-vous besoin d'un système de géolocalisation dans votre application ? ",
            options: [
              {
               text: "Oui",
                image:"/static/Geolocalisation coût.png",

                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 750
              }
            ]
          },
              {
            question: "Votre application devra t-elle contenir un système de chat ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/chat messagerie messenger estimer cout coût.png",

                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 750
              }
            ]
          },
              {
              question: "Souhaitez vous un accompagnement et/ou une maintenance occasionnel ? ( Campagne publicitaire et analyse statistique) ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png"

,
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 0
              }
            ]
          },
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },

              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/app-en-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/application-existant cout.png",
                    weight: 0
              }
            ]
          },
            
             /* {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/


        ]
      },
      andriodios:{
        simple: [
                           {
            question: "Sur combien de supports votre application sera-t-elle disponible ?  (Smart phone / Tablette) ",
            options: [
              {
                text: "1 support",
                image:
                 "static/application mobile estimation coût cout.png",
                weight: 0
              },
              {
                text: "2 supports",
                image:
                  "static/application mobile et tablette estimation.png",     
                weight: 3400
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 2850
              }
            ]
          },

              {
            question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png"
,
                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 750
              }
            ]
          },
              {
            question: "Dans combien de langues va être utilisée votre application ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 400
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 800
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un système login ? ",
            options: [
              {
                text: "Reseaux sociaux + Email ",
                image:
               "/static/reseau sociaux connection application site internet.png",
                weight: 800
              },
              {
                text: "Email",
                image:
                  "/static/email coût site web.png",
                weight: 400
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              }
            ]
          },
              {
            question: "Quel modèle de monétisation souhaitez vous appliquer ? ",
            options: [
              {
                text: "Application gratuite avec Publicité",
                image:
                  "/static/application gratuite estimation.png",
                weight: 200
              },
              {
                 text: "Application Application payante",
                image:
                  "/static/application payante estimation cout.png",
                weight: 600
              },
              {
                text: "Achat 'in App'",
                image:
                  "/static/achat in app estimation application.png",
                weight: 800
                  },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 400
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un espace d'administration ? ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/estimer interface d'administration back office.png",
                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 750
              }
            ]
          },
              {
question: "Votre application doit etre connecter a siteweb et ou une application tier ?  ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/app-connecter-site.png",


                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 500
              }
            ]
          },
              {
            question: " Avez-vous besoin d'un système de géolocalisation dans votre application ? ",
            options: [
              {
               text: "Oui",
                image:"/static/Geolocalisation coût.png",

                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 250
              }
            ]
          },
              {
            question: "Votre application devra t-elle contenir un système de chat ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/chat messagerie messenger estimer cout coût.png",

                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 250
              }
            ]
          },
              {
              question: "Souhaitez vous un accompagnement et/ou une maintenance occasionnel ? ( Campagne publicitaire et analyse statistique) ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png"

,
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 0
              }
            ]
          },
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },

              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                 text: "en cour d'élaboration  ",
                image:
                  "/static/app-en-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/application-existant cout.png",
                    weight: 0
              }
            ]
          },
            
         /*     {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/


        ],
        advance: [
          {
            question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png",

                weight: 450
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 300
              }
            ]
          },
                       {
            question: "Dans combien de langues va être utilisée votre application ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 1500
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un système login ? ",
            options: [
              {
                text: "Reseaux sociaux + Email ",
                image:
               "/static/reseau sociaux connection application site internet.png",
                weight: 1600
              },
              {
                text: "Email",
                image:
                  "/static/email coût site web.png",
                weight: 800
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              }
            ]
          },
              {
            question: "Quel modèle de monétisation souhaitez vous appliquer ? ",
            options: [
              {
                text: "Application gratuite avec Publicité",
                image:
                  "/static/application gratuite estimation.png",
                weight: 400
              },
              {
                text: "Application Application payante",
                image:
                  "/static/application payante estimation cout.png",
                weight: 1200
              },
              {
                text: "Achat 'in App'",
                image:
                  "/static/achat in app estimation application.png",
                weight: 1600
                },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 800
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un espace d'administration ? ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/estimer interface d'administration back office.png",
                weight: 3000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1500
              }
            ]
          },
              {
question: "Votre application doit etre connecter a siteweb et ou une application tier ?  ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/app-connecter-site.png",


                weight: 1000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1000
              }
            ]
          },
              {
            question: " Avez-vous besoin d'un système de géolocalisation dans votre application ? ",
            options: [
              {
               text: "Oui",
                image:"/static/Geolocalisation coût.png",

                weight: 1000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 500
              }
            ]
          },
              {
            question: "Votre application devra t-elle contenir un système de chat ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/chat messagerie messenger estimer cout coût.png",

                weight: 1000
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 500
              }
            ]
          },
              {
              question: "Souhaitez vous un accompagnement et/ou une maintenance occasionnel ? ( Campagne publicitaire et analyse statistique) ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 0
              }
            ]
          },
             {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
              },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",

                weight: 0
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                 text: "en cour d'élaboration  ",
                image:
                  "/static/app-en-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/application-existant cout.png",
                    weight: 0
              }
            ]
          },
            
          /*    {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
       
        ],
        personalise: [
          {
            question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png",

                weight: 4500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 2250
              }
            ]
          },
              {
            question: "Dans combien de langues va être utilisée votre application ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 1000
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 2400
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un système login ? ",
            options: [
              {
                text: "Reseaux sociaux + Email ",
                image:
               "/static/reseau sociaux connection application site internet.png",
                weight: 2400
              },
              {
                text: "Email",
                image:
                  "/static/email coût site web.png",
                weight: 1600
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              }
            ]
          },
              {
            question: "Quel modèle de monétisation souhaitez vous appliquer ? ",
            options: [
              {
                text: "Application gratuite avec Publicité",
                image:
                  "/static/application gratuite estimation.png",
                weight: 600
              },
              {
                text: "Application Application payante",
                image:
                  "/static/application payante estimation cout.png",
                weight: 2400
              },
              {
                text: "Achat 'in App'",
                image:
                  "/static/achat in app estimation application.png",
                weight: 2400
                 },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 1600
              }
            ]
          },
              {
            question: "Votre Appplication as t elle besoin d'un espace d'administration ? ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/estimer interface d'administration back office.png",
                weight: 4500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 2250
              }
            ]
          },
              {
question: "Votre application doit etre connecter a siteweb et ou une application tier ?  ",
            options: [
              {
               text: "Oui",
                image:
                 "/static/app-connecter-site.png",


                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 1500
              }
            ]
          },
              {
            question: " Avez-vous besoin d'un système de géolocalisation dans votre application ? ",
            options: [
              {
               text: "Oui",
                image:"/static/Geolocalisation coût.png",

                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 750
              }
            ]
          },
              {
            question: "Votre application devra t-elle contenir un système de chat ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/chat messagerie messenger estimer cout coût.png",

                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 750
              }
            ]
          },
              {
              question: "Souhaitez vous un accompagnement et/ou une maintenance occasionnel ? ( Campagne publicitaire et analyse statistique) ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png"

,
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 0
              }
            ]
          },
             {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
              },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",

                weight: 0
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                 text: "en cour d'élaboration  ",
                image:
                  "/static/app-en-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/application-existant cout.png",
                    weight: 0
              }
            ]
         /* },
            
            {
            question: "Quel est votre budget?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]*/
          }
        ],
      }

    },
    app:{
      web:{
        vitrine:{
          simple: [
            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..) ",
              options: [
                {
                 text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png",
                  weight: 650
                },
                {
                   text: "Non ",
                image:
                  "/static/non.png",
                  weight: 500
                },
                {
                  text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 600
                }
              ]
            },
             
            
              {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 250
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 500
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 1100
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 150
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 100
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 300
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 150
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 250
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 1500
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
              },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",

                weight: 0
              }
            ]
          },
           /*   {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "Avez-vous un nom de domaine et un hebergement ?",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 120
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question:  "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },

          ],
          advance: [
           {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight: 950
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 500
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 800
                }
              ]
            },
              {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 750
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 1500
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 3300
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 450
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 300
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 900
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 450
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 750
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 1500
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                 image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
             /* {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "Avez-vous un nom de domaine et un hebergement ?",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 120
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },


          ],
          personalise: [
            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight:1850
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 500
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 1400
                }
              ]
            },
                          {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 2250
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 4500
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 9900
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 1350
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 900
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/application tiers connections CRM CMS API estimation.png",
                weight: 2700
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 1350
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 2250
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 1500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 4500
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                 image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
             /* {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "avez-vous un nom de domaine et un hebergement ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 120
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing...) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
          ]
        },

        ecommerce:{
          simple: [
            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight: 1650
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 1500
                },
                {
                  text: "Autres/ Je sais pas",
                  image:
                    "/static/je sais pas.png",
                  weight: 1600
                }
              ]
            },
                                  {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 250
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 500
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 1100
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 150
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 100
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 900
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 150
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 250
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 1500
              }
            ]
          },
              {
            question: "Certains produits ou services comportent-ils des options ? ( taille, promotions, couleurs, ….) ",
            options: [
              {
                text: "oui ",
                image:
                  "/static/oui.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 400
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                 image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
            /*  {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "avez-vous un nom de domaine et un hebergement ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 120
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },


          ],
          advance: [
            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight: 1950
                },
                {
                   text: "Non ",
                image:
                  "/static/non.png",
                  weight: 1500
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 1800
                }
              ]
            },
                          {
            question: "Nombre de pages sur votre site? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 750
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 1500
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 3300
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 450
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 300
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 900
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 450
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 750
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 1500
              }
            ]
          },
              {
            question: "Certains produits ou services comportent-ils des options ? ( taille, promotions, couleurs, ….) ",
            options: [
              {
                text: "oui ",
                image:
                  "/static/oui.png",
                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 750
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
               {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                 image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
              {
            question: "Vous êtes ? ",
            options: [
             {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
              /*{
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "Avez-vous un nom de domaine et un hebergement ?",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 120
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },


          ],
          personalise: [
          {
            question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
            options: [
              {
                text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                weight: 2850
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 1500
              },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 2400
              }
            ]
          },
                        {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 750
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 1500
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 3300
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 450
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 300
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
             {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 900
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 450
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
             {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 750
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 1500
              }
            ]
          },
              {
            question: "Certains produits ou services comportent-ils des options ? ( taille, promotions, couleurs, ….) ",
            options: [
              {
                text: "oui ",
                image:
                  "/static/oui.png",
                weight: 1500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 750
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
            /*  {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "Avez-vous un nom de domaine et un hebergement ?",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 120
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },

        ]
        },
        appweb:{
          simple: [
            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight: 2150
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 2000
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 2100
                }
              ]
            },
                          {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 250
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 500
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 1100
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 150
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 100
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
             {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 900
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 150
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 250
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 1500
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
             /* {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "Avez-vous un nom de domaine et un hebergement ?",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 120
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },

          ],
          advance: [
            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight: 2450
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 2000
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 2300
                }
              ]
            },
                          {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 750
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 1500
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 3300
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 450
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 300
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
             {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 900
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 450
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 750
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 1500
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
             /* {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "avez-vous un nom de domaine et un hebergement ?  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 120
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },

          ],
          personalise: [
          {
            question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png",

                weight: 3350
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 2000
              },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 2900
              }
            ]
          },
                        {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 2250
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 4500
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 9900
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...)? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 1350
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 900
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 2700
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 1350
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 2250
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 1500
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 4500
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                 image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
            /*  {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "Avez-vous un nom de domaine et un hebergement ?",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 120
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },

        ]
        }
      },
      /*REBRUSH*/
      rebrush:{
        vitrine:{
          simple: [
            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..) ",
              options: [
                {
                  text: "Oui",
                   image:
                  "/static/maquette chart graphique design web design.png",
                  weight: 75
                },
                {
                   text: "Non ",
                image:
                  "/static/non.png",
                  weight: 0
                },
                {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 50
                }
              ]
            },
             
            
              {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 125
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 250
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 550
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 75
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 50
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
             {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 150
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 75
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 125
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 250
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 750
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
             /* {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "avez-vous un nom de domaine et un hebergement ?  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 60
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },

          ],
          advance: [
           {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight: 225
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 0
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 150
                }
              ]
            },
              {
            question: "Nombre de pages sur votre site? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 325
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 1450
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 1650
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 225
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 150
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 450
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 225
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 325
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 250
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 750
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                 image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
            /*  {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "avez-vous un nom de domaine et un hebergement ?  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 60
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },


          ],
          personalise: [
            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight:675
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 0
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 450
                }
              ]
            },
                          {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 1125
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 2250
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 4950
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 675
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 450
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 1350
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 675
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
             {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 1125
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 750
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 2250
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                 image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
            /*  {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "avez-vous un nom de domaine et un hebergement ?",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 60
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
          ]
        },

        ecommerce :{
           simple: [
            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight: 75
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 0
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 50
                }
              ]
            },
                                  {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 125
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 250
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 1100
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...)? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 75
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 50
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 150
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 75
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile  ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 125
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 250
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 750
              }
            ]
          },
              {
            question: "Certains produits ou services comportent-ils des options ? ( taille, promotions, couleurs, ….) ",
            options: [
              {
                text: "oui ",
                image:
                  "/static/oui.png",
                weight: 250
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 200
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
             /* {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "avez-vous un nom de domaine et un hebergement ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 60
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },


          ],
          advance: [
            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight: 225
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 0
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 150
                }
              ]
            },
                          {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 375
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 750
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 1650
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 225
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 150
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 450
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 225
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 375
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 250
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 750
              }
            ]
          },
              {
            question: "Certains produits ou services comportent-ils des options ? ( taille, promotions, couleurs, ….) ",
            options: [
              {
                text: "oui ",
                image:
                  "/static/oui.png",
                weight: 750
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 375
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
             /* {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "avez-vous un nom de domaine et un hebergement ?  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 60
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },


          ],
          personalise: [
          {
            question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maquette chart graphique design web design.png",
                weight: 225
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
                text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",
                weight: 150
              }
            ]
          },
                        {
            question: "Nombre de pages sur votre site? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 375
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 750
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 1650
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 225
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 150
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
             {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 450
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 225
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
             {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 375
              }
            ]
          },
              { 
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 250
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 750
              }
            ]
          },
              {
            question: "Certains produits ou services comportent-ils des options ? ( taille, promotions, couleurs, ….) ",
            options: [
              {
                text: "oui ",
                image:
                  "/static/oui.png",
                weight: 750
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 375
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                 image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
             /* {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "avez-vous un nom de domaine et un hebergement ?  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 60
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },

        ]
        },
        appweb:{
         simple: [
            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..) ",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight: 75
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 0
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 50
                }
              ]
            },
             
            
              {
            question: "Nombre de pages sur votre site? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 125
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 250
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 550
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 75
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 50
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 150
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 75
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 125
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 250
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 750
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
           /*   {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "avez-vous un nom de domaine et un hebergement ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 60
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },

          ],
          advance: [
                         {
            question: "Sur combien de supports votre application sera-t-elle disponible ?  (Smart phone / Tablette) ",
            options: [
              {
                text: "1 support",
                image:
                 "static/application mobile estimation coût cout.png",
                weight: 0
              },
              {
                text: "2 supports",
                image:
                  "static/application mobile et tablette estimation.png",     
                weight: 1100
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 925
              }
            ]
          },

           {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight: 225
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 0
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 150
                }
              ]
            },
              {
            question: "Nombre de pages sur votre site ? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 375
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 750
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 1650
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 225
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 150
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM, emailing,.. ) ? ",
            options: [
             {
                text: "Oui",
                image:
                  "/static/site-connecter-api.png",
                weight: 450
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 225
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 375
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 250
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 750
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                 image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
            /*  {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "avez-vous un nom de domaine et un hebergement ?  ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 60
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },


          ],
          personalise: [
                          {
            question: "Sur combien de supports votre application sera-t-elle disponible ?  (Smart phone / Tablette) ",
            options: [
              {
                text: "1 support",
                image:
                 "static/application mobile estimation coût cout.png",
                weight: 0
              },
              {
                text: "2 supports",
                image:
                  "static/application mobile et tablette estimation.png",     
                weight: 1100
              },
              {
               text: "Autres/ Je sais pas ",
                image:
                  "/static/je sais pas.png",    
                weight: 925
              }
            ]
          },

            {
              question: "Souhaitez vous être accompagner pour le design ? (maquette, chart graphique,..)",
              options: [
                {
                  text: "Oui",
                  image:
                    "/static/maquette chart graphique design web design.png",
                  weight:675
                },
                {
                  text: "Non ",
                image:
                  "/static/non.png",
                  weight: 0
                },
                {
                  text: "Je sais pas ",
                image:
                  "/static/je sais pas.png",
                  weight: 450
                }
              ]
            },
                          {
            question: "Nombre de pages sur votre site? ",
            options: [
              {
               text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

              text: "0-5 pages",
                image:
                  "/static/Estimer nombre de pages  5.png",
                weight: 1125
              },
              {
                text: "6- 10 pages",
                image:
                  "/static/estimer pages internet 6 a 10.png",
                weight: 2250
              },
              {
               text: ">11 Pages",
               image:
               "/static/Estimer pages plus de 11.png",
                weight: 4950
              }
            ]
          },
              {
            question: "Avez-vous le contenu du site (image, video, text,...) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/refonte.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 675
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 450
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec application tier ( Logicel,CRM,.. ) ? ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/application tiers connections CRM CMS API estimation.png",
                weight: 1350
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 675
              }
            ]
          },
              {
            question: " Avez-vous besoin de connecter votre site avec une application mobile ? ",
            options: [
              {
               text: "Oui",
                image:
                  "/static/app-connecter-site.png",
                weight: 500
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 1125
              }
            ]
          },
              {
            question: "Combien de langues utilisera votre siteweb ? ",
            options: [
              {
                text: "1 langue",
                image:
                  "/static/1 langue.png",
                weight: 0
              },
              {
                text: "2 langues",
                image:
                  "/static/2 Langues estimer cout.png",
                weight: 750
              },
              {
               text: "Plusieurs langues",
                image:
                  "/static/beaucoup de langues application mobile.png",

                weight: 2250
              }
            ]
          },
              {
            question: "Dans quelle étape se trouve votre projet ? ",
            options: [
              {
                text: "C'est juste une idée",
                image:
                  "/static/C'est juste une idée.png"
,
                weight: 0
              },
              {
                text: "Ebauche déjà prêt",
                image:
                  "/static/Ebauche déjà prêt coût estimation.png"
,
                weight: 0
              },
              {
                text: "en cour d'élaboration  ",
                image:
                  "/static/en-cour-de-dev.png",
                weight: 0
                 },
              {
                text: "Déjà existant",
                image:
                  "/static/site-existant.png",
                    weight: 0
              }
            ]
          },
            
              {
            question: "Vous êtes ? ",
            options: [
              {
                text: "particulier",
                image:
                  "/static/un particulier developpement site web.png",

                weight: 0
              },
              {
                text: "Entreprise",
                image:
                  "/static/entreprise estimation.png"
,
                weight: 0
                },
              {
                text: "Apporteur d'affaire",
                image:
                  "/static/apporteur d'affaire.png",
                    weight: 0
               },
              {
                text: "Association",
                image:
                  "/static/une association site internet estimer.png",
                    weight: 0
              }
            ]
          },
             /* {
            question: "Quel est votre budget ?  ",
            options: [
              {
                text: "< à 5000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: "5000- 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              },
              {
                text: ">à 15000",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
                weight: 0
              }
            ]
          },*/
              {
            question: "Avez-vous un nom de domaine et un hebergement ?",
            options: [
              {
                text: "Oui",
                image:
                  "/static/estimer nom de domaine et hébergement coût.png",
                weight: 60
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
              {
            question: "Souhaitez vous un accompagnement et/ou une maintenance mensuelle ? (Referencement, Stratégy Marketing, Maintenance.....) ",
            options: [
              {
                text: "Oui",
                image:
                  "/static/maitenance site internet et application mobile.png",
                weight: 0
              },
              {
                text: "Non ",
                image:
                  "/static/non.png",
                weight: 0
              },
              {
               text: "Je sais pas ",
                image:
                  "/static/je sais pas.png"    ,
                weight: 0
              }
            ]
          },
          ]
        },

      }
    },
  };