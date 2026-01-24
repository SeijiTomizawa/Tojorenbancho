import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1731530338283-eb0d9371e463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2RvJTIwamFwYW5lc2UlMjBtYXJ0aWFsJTIwYXJ0cyUyMHN0YWZmfGVufDF8fHx8MTc2OTI1ODgxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="杖道の稽古風景"
          className="w-full h-full object-cover"
        />
        {/* ダークオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        {/* キャッチコピー */}
        <div className="mb-8 sm:mb-12">
          <div className="mb-4 sm:mb-6">
            {/* 縦書き風のデザイン */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#EFE6D5] tracking-widest mb-2">
              静動一如
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-[#A82222]"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-[#EFE6D5] font-light tracking-wide max-w-2xl leading-relaxed">
            心を静め、杖を操る。<br />
            伝統の技を現代に継承する。
          </p>
        </div>

        {/* CTAボタン */}
        <a
          href="#schedule"
          className="inline-flex items-center gap-2 bg-[#A82222] hover:bg-[#8a1b1b] text-[#EFE6D5] px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group"
        >
          <span className="text-base sm:text-lg">今月の稽古日程</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* 下部のグラデーション */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#EFE6D5] to-transparent"></div>
    </section>
  );
}