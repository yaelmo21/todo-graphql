export const AppConfig = () => ({
  enviroment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
});
