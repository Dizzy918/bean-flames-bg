# Bean Flames — beanflames.online

Marketing site for **Bean Flames**, a Bulgarian startup (Teenovator program) that turns spent coffee grounds into bio-pellets for heating — circular economy, zero wood.

The site is in Bulgarian and presents the concept, the product specs, the production process, current partners, and a contact/partnership form.

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR + full prerender)
- Tailwind CSS v4
- Vite 7, deployed on Cloudflare Workers

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (prerenders all routes)
npm run lint
```

## Structure

```
src/
  routes/        # one file per page: index, concept, product, process, partners, contact
  components/    # site header/footer, page hero
  lib/           # branded 500 page + SSR error capture for the worker
  server.ts      # Cloudflare Worker entry wrapping the TanStack server entry
```
