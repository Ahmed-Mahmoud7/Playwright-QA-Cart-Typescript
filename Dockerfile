FROM  mcr.microsoft.com/playwright:v1.47.1-noble


RUN mkdir /app
WORKDIR /app
COPY . /app/

RUN npm install --force
RUN npm install --save-dev @playwright/test
RUN npx playwright install
RUN apt-get update && apt-get install -y ca-certificates
