import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Banknote,
  Cpu,
  CreditCard,
  Droplet,
  Fuel,
  Gauge,
  Globe,
  Mail,
  MapPin,
  Phone,
  Radio,
  Shield,
  ShieldCheck,
  Smartphone,
  Truck,
  Users,
  Wifi,
  Zap,
} from 'lucide-react'

export default function Home() {
  return <LandingPage />
}

const FEATURES = [
  {
    icon: Cpu,
    title: 'IoT контроллер интеграц',
    desc: 'Стандарт протоколоор түгээгүүр, сав, үнийн самбар бүгдийг WebSocket-ээр бодит цагт холбоно.',
  },
  {
    icon: Fuel,
    title: 'Live түгээгүүрийн төлөв',
    desc: 'Хошуу сугалсан, түгээж байгаа, идэвхгүй, холбогдоогүй гэсэн төлвийг өнгө кодоор шууд хянана.',
  },
  {
    icon: BarChart3,
    title: 'Менежерийн KPI',
    desc: '24 цагийн чиг хандлага, шатахуун ба түгээгүүрээр задаргаа, цуцлалтын аудит — нэг харалт.',
  },
  {
    icon: Banknote,
    title: 'Excel-гүй санхүү',
    desc: 'Өдөр тутмын тооцоо, бэлэн бус, орлогын түүвэр, тооллого, тооцоо нийлсэн акт автоматаар.',
  },
  {
    icon: CreditCard,
    title: 'POS + eBarimt',
    desc: 'Лояалти / корпорат картын NFC уншуулга, Android POS app, eBarimt НӨАТ баримт нэг дор.',
  },
  {
    icon: ShieldCheck,
    title: 'Бүрэн аудит',
    desc: 'Ээлж нээх / хаах, гүйлгээ цуцлах, баланс хөдөлгөөн — бүх үйлдэлд хэн / хэзээ / шалтгаан тэмдэглэгдэнэ.',
  },
  {
    icon: Droplet,
    title: 'Тооллого ба нөөц',
    desc: 'Сав тус бүрд өндөр, хувийн жин, температурын гар тооллого. Калибраци chart автомат.',
  },
  {
    icon: Truck,
    title: 'Орлого хүлээн авах',
    desc: 'Падаан, машины дугаар, жолооч, ачигдсан-хүлээн авсан зөрүү — жолоочийн дутагдал автомат.',
  },
  {
    icon: Users,
    title: 'Олон үүрэг + олон станц',
    desc: 'Супер админ, брэнд админ, менежер, цэнэглэгч, санхүүч — үүрэг тус бүрд UI тохирсон.',
  },
]

const STATS = [
  { value: '< 5 сек', label: 'Гүйлгээ серверт ирэх дундаж саатал' },
  { value: '24/7', label: 'IoT контроллер онлайн хяналт' },
  { value: '100%', label: 'Аудит лог хадгалалт' },
  { value: '47+', label: 'Бэлэн UI хуудсууд' },
]

const VALUE_PROPS = [
  {
    icon: Gauge,
    title: 'ШТС-ын автоматжуулалт',
    desc:
      'Аналоги техник түвшнээс үүлэн тооцолын серверийн шийдэл хүртэл — ШТС-ын автоматжуулалтын цогц шийдэл нэг дороос.',
  },
  {
    icon: Globe,
    title: 'Бүх төрлийн forecourt тоног төхөөрөмж',
    desc:
      'Манай контроллерууд ШТС болон шатахуун агуулахын forecourt тоног төхөөрөмжийн ихэнх брэнд, үйлдвэрлэгчийг дэмжинэ.',
  },
  {
    icon: Zap,
    title: 'Судалгаа ба хөгжүүлэлт',
    desc:
      'Манай бүтээгдэхүүний хөгжүүлэлт нь оновчтой — шийдвэр гаргахаас шинэ функц хэрэгжүүлэх хүртэл богино зам.',
  },
]

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      {/* Top nav */}
      <nav className="sticky top-0 w-full bg-white/90 backdrop-blur border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Fuel className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-900 tracking-tight">Flux Monitor</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-slate-600 hover:text-slate-900 transition">Бүтээгдэхүүн</a>
              <a href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition">Боломжууд</a>
              <a href="#architecture" className="text-sm text-slate-600 hover:text-slate-900 transition">Архитектур</a>
              <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900 transition">Холбоо барих</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#contact" className="hidden sm:block text-sm font-medium text-slate-700 hover:text-slate-900">
                Холбоо барих
              </a>
              <a
                href="#contact"
                className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                Демо авах
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Copy */}
            <div className="text-center lg:text-left">
              <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">
                Шатахуун түгээх станцын автоматжуулалт
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight tracking-tight">
                ШТС-ын бүх процессыг
                <br />
                <span className="text-blue-600">нэг систем дотор</span>.
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl lg:mx-0 mx-auto">
                IoT контроллероос эхлээд серверийн шийдэл хүртэл — түгээгүүрийн жижиг
                мэдрэгчээс байгууллагын санхүүгийн тооцоо хүртэл нэг л платформ дотор.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-sm"
                >
                  Демо авах
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 text-slate-700 font-medium px-6 py-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition"
                >
                  Боломжуудыг үзэх
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  SSL хамгаалалт
                </span>
                <span className="flex items-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5 text-blue-600" />
                  Real-time
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-violet-600" />
                  Үүлэн архитектур
                </span>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative">
              <Image
                src="/1300.jpg"
                alt="Шатахуун түгээх станцын автоматжуулалт"
                width={1200}
                height={720}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About / Value props */}
      <section id="about" className="border-y border-slate-100 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-3">Бид юу хийдэг вэ</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Аналоги техник түвшнээс
              <br className="hidden sm:block" />
              үүлэн серверийн шийдэл хүртэл цогц.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {VALUE_PROPS.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="">
                  <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {STATS.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">{s.value}</p>
                <p className="text-sm text-slate-500 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-y border-slate-100 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-3">Боломжууд</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              ШТС-ийн өдөр тутмын ажилд
              <br className="hidden sm:block" />
              хэрэгтэй <span className="text-blue-600">бүх юм</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="bg-white rounded-xl p-6 border border-slate-100 hover:border-slate-200 transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 tracking-tight mb-1.5">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-3">Архитектур</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Тоног төхөөрөмжөөс
              <br className="hidden sm:block" />
              үүлэн платформ хүртэл.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <ArchitectureColumn
              title="Станцын тоноглол"
              items={[
                { icon: Gauge, label: 'Түгээгүүр' },
                { icon: Fuel, label: 'ATG / Сав' },
                { icon: BarChart3, label: 'Үнийн самбар' },
                { icon: CreditCard, label: 'POS терминал' },
                { icon: Radio, label: 'RFID уншигч' },
                { icon: Smartphone, label: 'NFC карт' },
              ]}
            />

            <div className="flex flex-col items-center order-first lg:order-none">
              <div className="relative">
                <div className="absolute -inset-3 bg-blue-500/20 rounded-2xl blur-2xl" />
                <div className="relative w-36 h-36 bg-blue-600 rounded-2xl flex flex-col items-center justify-center text-white">
                  <Cpu className="w-10 h-10 mb-2 opacity-90" />
                  <span className="font-semibold text-sm tracking-tight text-center leading-tight px-2">
                    IoT
                    <br />
                    контроллер
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-10 bg-slate-200" />
                <Wifi className="w-4 h-4 text-blue-600 animate-pulse" />
                <span className="h-px w-10 bg-slate-200" />
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">Үүлэн холболт</p>
            </div>

            <ArchitectureColumn
              title="Flux Monitor үүл"
              items={[
                { icon: Globe, label: 'Веб самбар' },
                { icon: Smartphone, label: 'Mobile app' },
                { icon: BarChart3, label: 'Аналитик' },
                { icon: Shield, label: 'Аюулгүй байдал' },
                { icon: Banknote, label: 'Санхүү' },
                { icon: Users, label: 'Олон үүрэг' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            Системээ туршихад бэлэн үү?
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8">
            14 хоногийн үнэгүй туршилт. Контроллерын тоонд тохирсон тестийн орчныг бэлдэж өгнө.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+97670000000"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              <Phone className="w-4 h-4" />
              +976 7000-0000
            </a>
            <a
              href="mailto:hello@flux.mn"
              className="inline-flex items-center justify-center gap-2 text-white border border-white/40 font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              <Mail className="w-4 h-4" />
              hello@flux.mn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Fuel className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="text-lg font-semibold text-slate-900 tracking-tight">Flux Monitor</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                ШТС-ийн алсын удирдлага, хяналтын систем. IoT контроллер, банкны POS, eBarimt
                НӨАТ, ээлжийн тооцоо — бүгд нэг дор.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Холбоосууд</h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li><a href="#about" className="hover:text-slate-900">Бүтээгдэхүүн</a></li>
                <li><a href="#features" className="hover:text-slate-900">Боломжууд</a></li>
                <li><a href="#architecture" className="hover:text-slate-900">Архитектур</a></li>
                <li><a href="#contact" className="hover:text-slate-900">Холбоо барих</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Холбоо барих</h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />Улаанбаатар, Монгол</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" />+976 7000-0000</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" />hello@flux.mn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-12 pt-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>© {new Date().getFullYear()} Flux ХХК. Бүх эрх хуулиар хамгаалагдсан.</span>
            <span>Made in Улаанбаатар</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ArchitectureColumn({
  title,
  items,
}: {
  title: string
  items: { icon: React.ComponentType<{ className?: string }>; label: string }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900 text-center mb-4 tracking-tight">{title}</h3>
      <div className="grid grid-cols-2 gap-2.5">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white border border-slate-100 hover:border-blue-200 transition"
          >
            <Icon className="w-6 h-6 text-blue-600" />
            <span className="text-xs text-slate-700 text-center">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
