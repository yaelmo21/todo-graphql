export const AppConfig = () => ({
  enviroment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  firebase: {
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    database_url: process.env.FIREBASE_DATABASE_URL,
  },
});
