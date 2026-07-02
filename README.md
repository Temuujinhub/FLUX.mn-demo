# Flux Monitor — Marketing landing сайт (flux.mn)

Энэ бол **зөвхөн marketing landing хуудас** — flux.mn бүтээгдэхүүний танилцуулга.
Backend, бүтээгдэхүүний код, нэвтрэх, өгөгдөл **АГУУЛААГҮЙ**. Vercel дээр static-аар
байрлаж, `flux.mn` домэйноор нээгдэнэ. "Демо систем" товчнууд нь
`https://demo.flux.mn/login` руу шууд үсэрнэ.

## Орчнуудын тусгаарлалт

| Орчин | Домэйн | Хост | Эх сурвалж |
|-------|--------|------|-----------|
| Marketing / landing | **flux.mn** | Vercel | Энэ repo |
| Demo апп | demo.flux.mn | DigitalOcean droplet (157.230.40.98) | `Temuujinhub/flux.mn`, `main` branch |
| Production апп | uboil.flux.mn | DigitalOcean (68.183.226.111) | `Temuujinhub/flux.mn`, production branch |

Landing нь demo / production-оос бүрэн тусдаа хост дээр байрладаг тул зочдын
траффик, аналитик, үнийн өгөгдөл бүтээгдэхүүний орчинтой холилдохгүй.
demo.flux.mn дээр landing **байхгүй** — root нь шууд `/login` руу үсэрнэ.

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
Repo нь Vercel-ийн `flux-mn-demo` төсөлтэй холбогдсон — `main` руу merge хийхэд
автоматаар deploy хийгдэнэ, PR бүрт preview URL гарна. `flux.mn` / `www.flux.mn`
домэйн Vercel дээр аль хэдийн тохируулагдсан.

> Энэ сайт нь **зөвхөн танилцуулга** — нэвтрэх / dashboard АГУУЛААГҮЙ (backend
> шаардахгүй static). Login хэрэгтэй бол demo.flux.mn (droplet) руу үсэрнэ.

## Зураг оптимизаци (сонголт)
`public/1300.jpg` ~2.5MB. Хүсвэл webp болгож багасгаж болно (Vercel автоматаар хувиргаж дамжуулдаг).
