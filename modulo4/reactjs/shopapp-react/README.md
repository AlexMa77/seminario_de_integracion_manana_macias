# ShopApp React — Módulo 1

Proyecto base con arquitectura hexagonal (Ports & Adapters).

## Stack
- **Bundler**: Vite 6 + @vitejs/plugin-react
- **Lenguaje**: TypeScript 5 con alias `@/`
- **Estilos**: Tailwind CSS v4 + variables CSS + shadcn/ui
- **Routing**: React Router v6
- **Estado**: Zustand
- **Validación**: Zod + react-hook-form
- **HTTP**: Axios

## Estructura

```
src/
├── domain/            ← entidades, enums, excepciones, ports, servicios puros
├── application/       ← use-cases, DTOs
├── infrastructure/    ← config, http, storage, adapters, factories
└── presentation/      ← theme, utils, store, pages, components, router
```

## Comandos

```bash
# Instalar dependencias
npm install

# Levantar en desarrollo
npm run dev

# Verificar TypeScript
npx tsc --noEmit

# Inicializar shadcn/ui (si no se hizo)
npx shadcn@latest init

# Instalar componentes shadcn
npx shadcn@latest add button input label card badge
npx shadcn@latest add form select textarea
npx shadcn@latest add dialog alert-dialog
npx shadcn@latest add table
npx shadcn@latest add dropdown-menu
npx shadcn@latest add toast
npx shadcn@latest add skeleton
npx shadcn@latest add avatar
npx shadcn@latest add separator
```

## Variables de entorno

Crea un archivo `.env` en la raíz:
```
VITE_API_BASE_URL=http://localhost:8000/api
```

## Regla de dependencias (Hexagonal)

```
presentation   →  application  →  domain   ✅
infrastructure →  domain                    ✅
domain         →  nada                      ✅
application    →  infrastructure            ❌  (inyección vía factories)
presentation   →  infrastructure            ❌  (solo a través de use-cases)
```
