export default {
  branch: "main",
  clientId: null, // Laisse vide pour le local
  token: null,    // Laisse vide pour le local
  build: {
    outputFolder: "public",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "static/img",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", isTitle: true, 
required: true },
          { type: "datetime", name: "date", label: "Date" },
          { type: "string", name: "body", label: "Contenu", isBody: true 
},
        ],
      },
    ],
  },
};
