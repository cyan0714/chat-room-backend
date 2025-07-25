FROM node:18 as build-stage

WORKDIR /app

COPY . .

RUN npx prisma generate

RUN npm run build

# production stage
FROM node:18 as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json
COPY --from=build-stage /app/node_modules /app/node_modules

WORKDIR /app

EXPOSE 3007

CMD ["node", "/app/main.js"]
