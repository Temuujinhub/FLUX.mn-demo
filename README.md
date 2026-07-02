# Flux Monitor — Marketing / Demo сайт (demo.flux.mn)

Энэ бол **зөвхөн marketing landing хуудас** — flux.mn бүтээгдэхүүний танилцуулга.
Backend, бүтээгдэхүүний код, нэвтрэх, өгөгдөл **АГУУЛААГҮЙ**. Vercel дээр static-аар
байрлаж, `demo.flux.mn` домэйноор нээгдэнэ.

## Орчнуудын тусгаарлалт

| Орчин | Домэйн | Эх сурвалж |
|-------|--------|-----------|
| Marketing / landing | **demo.flux.mn** | Энэ repo (Vercel) |
| Staging апп | staging.flux.mn | `Temuujinhub/flux.mn`, `main` branch (droplet) |
| Production апп | uboil.flux.mn | `Temuujinhub/flux.mn`, production branch |

Landing хуудас нь staging / production-оос бүрэн тусдаа тул зочдын траффик,
аналитик, үнийн өгөгдөл бүтээгдэхүүний орчинтой холилдохгүй.

## Бүтэц
```
FLUX.mn-demo/
├── src/app/page.tsx      # Landing (бүх хэсэг)
├── src/app/layout.tsx
├── src/app/globals.css
├── public/1300.jpg, uboil-logo.png
├── vercel.json
└── package.json          # next + react + lucide-react (хөнгөн)
```

## Локал ажиллуулах
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
```

## Vercel deploy
1. https://vercel.com/temuujinhubs-projects → **Add New → Project** → `FLUX.mn-demo` repo-г импортло.
2. Framework: **Next.js** (auto). Root: `/` (repo үндэс). Build: `next build` (vercel.json-д бий).
3. Deploy → `flux-mn-demo.vercel.app` гарч ирнэ.

> Энэ сайт нь **зөвхөн танилцуулга** — нэвтрэх / dashboard АГУУЛААГҮЙ (backend шаардахгүй static).
> Бүх товч `#contact` (Демо авах / Холбоо барих) руу чиглэнэ.

## demo.flux.mn домэйныг Vercel руу заах
Vercel төсөл → **Settings → Domains → Add `demo.flux.mn`**. Дараа нь DNS дээрээ:
- `demo.flux.mn`: CNAME → `cname.vercel-dns.com`.

`staging.flux.mn` нь Vercel-д хамаарахгүй — тэр нь `Temuujinhub/flux.mn` repo-гийн
`main` branch deploy хийдэг droplet (157.230.40.98) руу A бичлэгээр заана.

## Зураг оптимизаци (сонголт)
`public/1300.jpg` ~2.5MB. Хүсвэл webp болгож багасгаж болно (Vercel автоматаар хувиргаж дамжуулдаг).
