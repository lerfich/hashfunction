import swaggerJsDoc from "swagger-jsdoc";

const options = {
  encoding: 'utf-8',
  failOnErrors: false,
  format: '',
  swaggerDefinition: {},
  definition: {
      swagger: '2.0',
  },
  apis: ['./shared/routes.js'],
  servers: [{ url: 'http://localhost:3001/api', description: "My API Documentation", }],
  info: {
      title: 'API',
      version: '1.0.0',
  },
};



const config = swaggerJsDoc(options);

export default config



