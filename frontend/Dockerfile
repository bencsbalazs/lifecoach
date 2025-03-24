FROM node:20.10.0 as builder
WORKDIR /workspace/frontend
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.23.1-alpine
COPY --from=builder /workspace/frontend/dist /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
