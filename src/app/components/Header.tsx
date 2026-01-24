import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'ホーム', href: '/' },
    { label: '技一覧', href: '/techniques' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="relative">
      {/* メインヘッダー */}
      <div className="bg-[#172542] text-[#EFE6D5] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* ロゴ */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-xl sm:text-2xl font-serif tracking-wide hover:text-[#A82222] transition-colors cursor-pointer">
                  千代田神杖会-番町場所
                </h1>
              </Link>
            </div>

            {/* デスクトップナビゲーション */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`hover:text-[#A82222] transition-colors font-medium ${
                    isActive(item.href) ? 'text-[#A82222]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* ハンバーガーメニュー（モバイル） */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-[#2a3a5f] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニューを開く"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* 瓦屋根の軒先デザイン - SVGパターン */}
        <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden translate-y-full">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8 Q 10 0, 20 8 T 40 8 T 60 8 T 80 8 T 100 8 T 120 8 T 140 8 T 160 8 T 180 8 T 200 8 T 220 8 T 240 8 T 260 8 T 280 8 T 300 8 T 320 8 T 340 8 T 360 8 T 380 8 T 400 8 T 420 8 T 440 8 T 460 8 T 480 8 T 500 8 T 520 8 T 540 8 T 560 8 T 580 8 T 600 8 T 620 8 T 640 8 T 660 8 T 680 8 T 700 8 T 720 8 T 740 8 T 760 8 T 780 8 T 800 8 T 820 8 T 840 8 T 860 8 T 880 8 T 900 8 T 920 8 T 940 8 T 960 8 T 980 8 T 1000 8 T 1020 8 T 1040 8 T 1060 8 T 1080 8 T 1100 8 T 1120 8 T 1140 8 T 1160 8 T 1180 8 T 1200 8 L 1200 16 L 0 16 Z"
              fill="#172542"
            />
          </svg>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#172542] text-[#EFE6D5] border-t border-[#2a3a5f]">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg hover:text-[#A82222] transition-colors ${
                    isActive(item.href) ? 'text-[#A82222] font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}