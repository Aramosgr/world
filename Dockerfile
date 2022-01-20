FROM node:12.16 as build

ARG siteId
ENV REACT_APP_SITE_ID=$siteId
RUN echo "Building with REACT_APP_SITE_ID = ${REACT_APP_SITE_ID}"

ARG appName
ENV REACT_APP_NAME=$appName
RUN echo "Building with REACT_APP_NAME = ${REACT_APP_NAME}"

ARG appId
ENV REACT_APP_ID=$appId
RUN echo "Building with REACT_APP_ID = ${REACT_APP_ID}"

ARG gaTrackingCode
ENV REACT_APP_GA_TRACKING_CODE=$gaTrackingCode
RUN echo "Building with REACT_APP_GA_TRACKING_CODE = ${REACT_APP_GA_TRACKING_CODE}"

ARG gameType
ENV REACT_APP_GAME_TYPE=$gameType
RUN echo "Building with REACT_APP_GAME_TYPE = ${REACT_APP_GAME_TYPE}"

ARG brandId
RUN echo "Building with brandId = $brandId"

WORKDIR /app
COPY package.json /app
COPY .npmre /app
RUN npm install --production
COPY . /app
RUN ls src/brands/$brandId
RUN rm -rf src/theme
RUN cp -r src/brands/$brandId/ src/theme/
RUN rm -rf src/brands/
RUN npm run build
RUN find . | grep -v node_modules

FROM nginx:1.17.5
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/etc/nginx/conf.d/nginx.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf
