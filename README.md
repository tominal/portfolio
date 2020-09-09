### Thomas's Online Portfolio
Repository containing the portfolio's source code.

***

#### **Tool(s) used**:

- Vue JS (CLI)
- Vuex
- Boostrap Vue

***

### **Installation** (Linux)

For the front end:

Change the .env settings to match your setup.

```npm i && npm run build```

Public files are stored in dist/

For the back end:

Change the .env settings to match your setup.

```composer install && chmod 777 bootstrap/cache/* -R && chmod 777 storage/* -R && cp .env.example .env && php artisan key:generate && php artisan migrate```

Public files are stored in public/
