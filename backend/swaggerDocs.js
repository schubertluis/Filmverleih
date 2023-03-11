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
        name: "Films",
        description: "films in the database",
      },
      {
        name: "Podcasts",
        description: "podcasts in the database",
      },
      {
        name: "Songs",
        description: "songs in the database",
      }

    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/film": {
        get: {
          tags: ["Films"],
          summary: "Get all films in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          },
        },
        post: {
          tags: ["Films"],
          summary: "Add a new film",
          parameters: [
            {
              name: "film",
              in: "film",
              description: "Film to be added",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          },
        },
      },
        "/podcast":{
        get: {
          tags: ["Podcasts"],
          summary: "Get all podcasts in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          },
        },
        post: {
          tags: ["Podcasts"],
          summary: "Add a new podcast",
          parameters: [
            {
              name: "podcast",
              in: "podcast",
              description: "Podcast to be added",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          },
        },
      },
      "/song":{
        get: {
          tags: ["Songs"],
          summary: "Get all songs in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          },
        },
        post: {
          tags: ["Songs"],
          summary: "Add a new song",
          parameters: [
            {
              name: "song",
              in: "song",
              description: "Song to be added",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          },
        },
      },
      "/filmtitle": {
        get: {
          tags: ["Films"],
          summary: "Get a specific film by title",
          parameters: [
              {
                name: "title",
                in: "film",
                description: "Title of the film searched for",
                schema: {
                  $ref: "#/definitions/films",
                },
              },
            ],
            responses: {
              200: {
                description: "OK",
                schema: {
                  $ref: "#/definitions/films",
                },
              },
            },
          },
       },
       "/podcasttitle": {
        get: {
          tags: ["Podcasts"],
          summary: "Get a specific podcast by title",
          parameters: [
              {
                name: "title",
                in: "podcast",
                description: "Title of the podcast searched for",
                schema: {
                  $ref: "#/definitions/films",
                },
              },
            ],
            responses: {
              200: {
                description: "OK",
                schema: {
                  $ref: "#/definitions/films",
                },
              },
            },
          },
       },
       "/songtitle": {
        get: {
          tags: ["Songs"],
          summary: "Get a specific song by title",
          parameters: [
              {
                name: "title",
                in: "song",
                description: "Title of the song searched for",
                schema: {
                  $ref: "#/definitions/films",
                },
              },
            ],
            responses: {
              200: {
                description: "OK",
                schema: {
                  $ref: "#/definitions/films",
                },
              },
            },
          },
       },
      
      "/filmid": {
        get: {
          tags: ["Films"],
          summary: "Get a specific film by id",
          parameters: [
            {                
              name: "id",
              in: "film",
              description: "Id of the film searched for",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
                    responses: {
            200: {
              description: "OK",
              schema: {
               $ref: "#/definitions/films",
              },
            },
          },
        },
        patch:{
          tags: ["Films"],
          summary: "Patch a specific film by id",
          parameters: [
            {                
              name: "id",
              in: "film",
              description: "Id of the film wanting to patch",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
          responses: {
            202: {
              description: "Patched",
              schema: {
               $ref: "#/definitions/films",
              },
            },
           }
        },
        delete:{
          tags: ["Films"],
          summary: "Delete a specific film by id",
          parameters: [
            {                
              name: "id",
              in: "film",
              description: "Id of the film wanting to delete",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
          responses: {
            203: {
              description: "Deleted",
              schema: {
               $ref: "#/definitions/films",
              },
            },
           }
        }
      },  
      "/podcastid": {
        get: {
          tags: ["Podcasts"],
          summary: "Get a specific podcast by id",
          parameters: [
            {                
              name: "id",
              in: "podcast",
              description: "Id of the podcast searched for",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
                    responses: {
            200: {
              description: "OK",
              schema: {
               $ref: "#/definitions/films",
              },
            },
          },
        },
        patch:{
          tags: ["Podcasts"],
          summary: "Patch a specific podcast by id",
          parameters: [
            {                
              name: "id",
              in: "podcast",
              description: "Id of the podcast wanting to patch",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
          responses: {
            202: {
              description: "Patched",
              schema: {
               $ref: "#/definitions/films",
              },
            },
           }
        },
        delete:{
          tags: ["Podcasts"],
          summary: "Delete a specific podcast by id",
          parameters: [
            {                
              name: "id",
              in: "podcast",
              description: "Id of the podcast wanting to delete",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
          responses: {
            203: {
              description: "Deleted",
              schema: {
               $ref: "#/definitions/films",
              },
            },
           }
        }
      },  
      "/songid": {
        get: {
          tags: ["Songs"],
          summary: "Get a specific song by id",
          parameters: [
            {                
              name: "id",
              in: "song",
              description: "Id of the song searched for",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
                    responses: {
            200: {
              description: "OK",
              schema: {
               $ref: "#/definitions/films",
              },
            },
          },
        },
        patch:{
          tags: ["Songs"],
          summary: "Patch a specific song by id",
          parameters: [
            {                
              name: "id",
              in: "song",
              description: "Id of the song wanting to patch",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
          responses: {
            202: {
              description: "Patched",
              schema: {
               $ref: "#/definitions/films",
              },
            },
           }
        },
        delete:{
          tags: ["Songs"],
          summary: "Delete a specific song by id",
          parameters: [
            {                
              name: "id",
              in: "song",
              description: "Id of the song wanting to delete",
              schema: {
                $ref: "#/definitions/films",
              },
            },
          ],
          responses: {
            203: {
              description: "Deleted",
              schema: {
               $ref: "#/definitions/films",
              },
            },
           }
        }
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
