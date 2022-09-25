module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '190.90.160.165'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'saludyes_general-database'),
      user: env('DATABASE_USERNAME', 'saludyes_admin'),
      password: env('DATABASE_PASSWORD', 'dyqhFGTknPxLE46'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
