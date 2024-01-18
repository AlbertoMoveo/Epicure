import { Express, Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../../package.json';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Epicure API Docs',
      version,
      description: 'Documentation for the Epicure API',
    },
    components: {
      schemas: {
        Chef: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'The name of the chef' },
            image: { type: 'string', description: 'URL or path to the chef image' },
            description: { type: 'string', description: 'Description of the chef' },
            restaurants: {
              type: 'array',
              items: { $ref: '#/components/schemas/Restaurant' },
              description: 'Array of restaurants associated with the chef',
            },
            isActive: { type: 'boolean', description: 'Indicates if the chef is active' },
          },
        },
        Dish: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'The name of the dish' },
            price: { type: 'number', description: 'The price of the dish' },
            ingredients: {
              type: 'array',
              items: { type: 'string' },
              description: 'Array of ingredients in the dish',
            },
            tags: {
              type: 'array',
              items: { type: 'string' },
              description: 'Array of tags associated with the dish',
            },
            restaurant: { $ref: '#/components/schemas/Restaurant', description: 'Reference to the associated restaurant' },
            isActive: { type: 'boolean', description: 'Indicates if the dish is active' },
          },
        },
        Restaurant: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'The name of the restaurant' },
            image: { type: 'string', description: 'URL or path to the restaurant image' },
            chef: { $ref: '#/components/schemas/Chef', description: 'Reference to the associated chef' },
            dishes: {
              type: 'array',
              items: { $ref: '#/components/schemas/Dish' },
              description: 'Array of dishes associated with the restaurant',
            },
            isActive: { type: 'boolean', description: 'Indicates if the restaurant is active' },
          },
        },
      },
    },
    tags: [
      {
        name: 'Restaurant',
        description: 'Operations related to restaurants',
      },
      {
        name: 'Search',
        description: 'Operations related to search',
      },
    ],
  },
  apis: ['./src/routes/api/version/endpoints/restaurant.route.ts','./src/routes/api/version/endpoints/chef.route.ts', './src/routes/api/version/endpoints/dish.route.ts', './src/routes/api/version/endpoints/search.route.ts'],
};

const specs = swaggerJsdoc(options);

export const swaggerSetup = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
