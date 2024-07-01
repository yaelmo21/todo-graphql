# Proyecto NestJS

Este es un proyecto base utilizando NestJS y GraphQl

## Configuración

### Variables de entorno

Antes de comenzar, asegúrate de crear un archivo `.env` basado en el archivo `.env.template` proporcionado. Completa las siguientes variables de entorno:

```
PORT=3000
FIREBASE_PROJECT_ID=tu_id_de_proyecto_firebase
FIREBASE_PRIVATE_KEY=clave_privada_de_firebase
FIREBASE_CLIENT_EMAIL=email_de_cliente_de_firebase
FIREBASE_DATABASE_URL=url_de_base_de_datos_firebase
```

## Instalación

Para comenzar, instala las dependencias utilizando Yarn:

```bash
yarn install
```

## Ejecución

Para ejecutar el proyecto en modo de desarrollo:

```bash
yarn start:dev
```

Para ejecutar el proyecto en modo de producción:

```bash
yarn start:prod
```

## Acceso a GraphQL Playground

Una vez que el servidor esté corriendo, puedes acceder al GraphQL Playground en:

```
http://localhost:${PORT}/graphql
```

Ejemplo
[http://localhost:3000/graphql](http://localhost:3000/graphql)

## Notas adicionales

En el GraphQL Playground se encuentra la documentación de mutaciones y queries para más información sobre la interfaz y opciones consulte el siguiente link:
[apollographql](https://www.apollographql.com/docs/apollo-server/api/plugin/landing-pages/)
