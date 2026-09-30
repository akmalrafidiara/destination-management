export function CtaBanner() {
  return (
    <section className="w-full pb-20 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="bg-gradient-to-r from-primary to-primary-container rounded-3xl p-8 md:p-12 text-on-primary flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl space-y-2 text-center lg:text-left">
            <span className="text-caption uppercase text-primary-fixed tracking-widest font-bold">
              Standardisasi Pariwisata Nasional
            </span>
            <h3 className="text-headline-md text-white">Siap Mengakselerasi Digitalisasi Kawasan Anda?</h3>
            <p className="text-body-md text-primary-fixed-dim">
              Bergabung bersama lebih dari 45 destinasi pemda, cagar budaya, dan taman nasional yang telah beralih ke
              tata kelola pintar berstandar kelas dunia.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 px-6 py-3.5 bg-surface-container-lowest text-primary hover:bg-surface-container-low rounded-xl text-label-md font-semibold transition-all"
          >
            Konsultasi dengan Tim Ahli
          </a>
        </div>
      </div>
    </section>
  )
}
