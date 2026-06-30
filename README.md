# Flux Monitor — Marketing / Demo сайт (flux.mn)

Энэ бол **зөвхөн marketing landing хуудас**. Backend, бүтээгдэхүүний код, нэвтрэх, өгөгдөл
**АГУУЛААГҮЙ**. Vercel дээр static-аар байрлана. Production апп (uboil.flux.mn) -д огт хамаарахгүй.

## Бүтэц
```
marketing-demo/
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

## Тусдаа repo руу гаргах (Шат 1)
Энэ хавтсыг `Temuujinhub/FLUX.mn-demo` repo-гийн **үндэс** болгож түлхэнэ:
```bash
# marketing-demo доторх агуулгыг шинэ repo-д
cd marketing-demo
git init && git add . && git commit -m "init: flux.mn marketing site"
git branch -M main
git remote add origin git@github.com:Temuujinhub/FLUX.mn-demo.git
git push -u origin main
```
> Шинэ repo үүсгэх / push хийх нь GitHub эрх шаардана (таны хийх алхам).

## Vercel deploy (Шат 2)
1. https://vercel.com/temuujinhubs-projects → **Add New → Project** → `FLUX.mn-demo` repo-г импортло.
2. Framework: **Next.js** (auto). Root: `/` (repo үндэс). Build: `next build` (vercel.json-д бий).
3. Deploy → `flux-mn-demo.vercel.app` гарч ирнэ.

> Энэ сайт нь **зөвхөн танилцуулга** — нэвтрэх / dashboard АГУУЛААГҮЙ (backend шаардахгүй static).
> Бүх товч `#contact` (Демо авах / Холбоо барих) руу чиглэнэ. Бүтэн ажиллах demo нь тусдаа
> `demo.flux.mn` (droplet) дээр байрлана.

## flux.mn домэйныг Vercel руу заах (Шат 2)
Vercel төсөл → **Settings → Domains → Add `flux.mn`** (болон `www.flux.mn`). Vercel заавар өгнө:
- `flux.mn` (apex): A record → `76.76.21.21` (эсвэл Vercel-ийн өгсөн IP), эсвэл ALIAS/ANAME.
- `www.flux.mn`: CNAME → `cname.vercel-dns.com`.
- DNS-ээ зохион байгуулдаг газраа (домэйн бүртгэлийн / Cloudflare) эдгээрийг тавина.

> ⚠️ **Анхаар:** `flux.mn` DNS-ийг Vercel руу шилжүүлэхээс **өмнө** одоогийн `157.230.40.98`
> droplet дээрх marketing-ийг зогсоох шаардлагагүй — DNS шилжсэний дараа тэр droplet-ийг
> **staging болгон дахин ашиглана** (Шат 3, RUNBOOK-д).

## Зураг оптимизаци (сонголт)
`public/1300.jpg` ~2.5MB. Хүсвэл webp болгож багасгаж болно (Vercel автоматаар хувиргаж дамжуулдаг).
