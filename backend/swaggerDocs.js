const swaggerDocs = {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "Example REST API Medienverleih Service",
      description: "API for media",
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    host: "localhost:4000",
    basePath: "/medien",
    tags: [
      {
        name: "Medien",
        description: "media in the database",
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/": {
        get: {
          tags: ["Medien"],
          summary: "Get all media in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Media",
              },
            },
          },
        },
        post: {
          tags: ["Medien"],
          summary: "Add a new media",
          parameters: [
            {
              name: "media",
              in: "media",
              description: "Media to be added",
              schema: {
                $ref: "#/definitions/Media",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Media",
              },
            },
          },
        },
      },
      "/{id}": {
        get: {
          tags: ["Media"],
          summary: "Get a specific media by id",
          parameters: [
            {
              name: "id",
              in: "body",
              description: "Id of the media searched for",
              schema: {
                $ref: "#/definitions/Media",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Media",
              },
            },
          },
        },
      },
      "/search": {
        get: {
          tags: ["Media"],
          summary: "Get a specific media by title",
          parameters: [
            {
              name: "title",
              in: "path",
              description: "Title of the media searched for",
              schema: {
                $ref: "#/definitions/Media",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Media",
              },
            },
          },
        },
      },
    },
    definitions: {
      Book: {
        required: ["title", "author"],
        properties: {
          title: {
            type: "string",
          },
          author: {
            type: "string",
          },
          pages: {
            type: "integer",
          },
        },
      },
    },
  };
  
  export default swaggerDocs;