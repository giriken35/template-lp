'use client';

import { useState } from 'react';
import { ArrowLeft, Send, Code, Menu, X } from 'lucide-react';
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [selectedService, setSelectedService] = useState("");
  const [selectedInquiryType, setSelectedInquiryType] = useState("");
  const [selectedOs, setSelectedOs] = useState("");
  const [selectedBrowser, setSelectedBrowser] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const inputClass = "w-full bg-[#ffffff] border border-[#e2e8f0] rounded-lg px-4 py-3 text-[#0f172a] placeholder-[#64748b] focus:outline-none focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5] transition-all shadow-sm";
  const radioGroupClass = "space-y-1.5 p-1";
  const dynamicInputClass = "w-full bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg px-3 py-2 text-sm text-[#0f172a] focus:bg-[#ffffff] focus:outline-none focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5] mt-2 transition-all shadow-sm";

  return (
    <div className={`min-h-screen bg-[#f8fafc] text-[#0f172a] antialiased ${notoSansJP.className}`}>
      
      {/* 完全にコピーしたヘッダー */}
      <header className="sticky top-0 z-50 w-full border-b border-[#e2e8f0]/40 bg-[#f8fafc]/80 backdrop-blur-md">
        <div className="relative mx-auto flex h-14 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a 
            href="https://azorb-site.vercel.app/" 
            className="group flex items-center gap-2.5 rounded-xl px-2 py-1.5 -ml-2 transition-all hover:bg-white/10 active:scale-95 z-50"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-[1rem] bg-gradient-to-br from-[#4f46e5] to-[#0d9488] text-white shadow-sm">
              <Code className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold tracking-tight text-[#0f172a] sm:text-base uppercase" style={{ letterSpacing: '0.1em' }}>
              Azorb
            </span>
          </a>
          
          {/* Desktop Navigation (Centered) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium text-[#64748b]">
            <a href="https://azorb-site.vercel.app/#products" className="hover:text-[#0f172a] transition-colors font-bold tracking-wide">
              Products
            </a>
            <a href="https://azorb-site.vercel.app/#focus" className="hover:text-[#0f172a] transition-colors font-bold tracking-wide">
              Focus Areas
            </a>
          </nav>

          <div className="hidden md:flex items-center">
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex items-center justify-center p-2 -mr-2 text-[#0f172a] z-50 transition-transform active:scale-95"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 top-14 z-40 bg-[#f8fafc]/95 backdrop-blur-sm md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
              <nav className="flex flex-col items-center gap-6 p-8 text-sm font-semibold">
                <a href="https://azorb-site.vercel.app/#products" className="w-full text-center py-3 border-b border-[#e2e8f0]/50 text-[#0f172a] hover:text-[#4f46e5] transition-colors" onClick={closeMenu}>Products</a>
                <a href="https://azorb-site.vercel.app/#focus" className="w-full text-center py-3 border-b border-[#e2e8f0]/50 text-[#0f172a] hover:text-[#4f46e5] transition-colors" onClick={closeMenu}>Focus Areas</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ページコンテンツ（特商法ページと全く同じレイアウト構造） */}
      <div className="py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <a 
            href="https://azorb-site.vercel.app/"
            className="inline-flex items-center text-sm font-medium text-[#64748b] hover:text-[#0f172a] mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Azorb トップへ
          </a>

          {/* フォームカード */}
          <div className="rounded-2xl border border-[#e2e8f0] bg-[#ffffff] p-8 sm:p-12 shadow-sm">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-2">お問い合わせ</h1>
            <p className="text-[#64748b] mb-10 pb-8 border-b border-[#e2e8f0] text-sm md:text-base">
              Azorbの各種サービスについてのお問い合わせはこちらからお願いいたします。
            </p>

            <form 
              action="#" 
              method="POST" 
              onSubmit={handleSubmit}
              className="space-y-10"
            >
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0f172a]">
                  1. 会社名 <span className="text-[#94a3b8] ml-2 text-xs font-normal">【任意】（個人のお客様は空欄可）</span>
                </label>
                <input 
                  type="text" 
                  name="company" 
                  className={inputClass}
                  placeholder="株式会社Azorb"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0f172a]">
                  2. お名前（ご担当者様名） <span className="text-[#ef4444] ml-2 text-xs font-bold">【必須】</span>
                </label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  className={inputClass}
                  placeholder="山田 太郎"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0f172a]">
                  3. メールアドレス <span className="text-[#ef4444] ml-2 text-xs font-bold">【必須】</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  className={inputClass}
                  placeholder="info@azorb.co"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0f172a]">
                  4. 対象のサービス <span className="text-[#ef4444] ml-2 text-xs font-bold">【必須】</span>
                </label>
                <div className={radioGroupClass}>
                  {[
                    "住所データ自動整形ツール",
                    "SaaS向け UIボイラープレート",
                    "寿命カウントダウンタイマー",
                    "自分専用 広告なし地元ニュースサイト",
                    "万能オートキャプチャ＆AI抽出・翻訳",
                    "その他"
                  ].map((service) => (
                    <label key={service} className="flex items-center space-x-3 p-2 rounded hover:bg-[#f8fafc] transition-colors cursor-pointer">
                      <input 
                        type="radio" 
                        name="service" 
                        value={service}
                        required
                        checked={selectedService === service}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-4 h-4 text-[#4f46e5] bg-[#ffffff] border-[#e2e8f0] focus:ring-[#4f46e5]" 
                      />
                      <span className="text-[#334155]">{service}</span>
                    </label>
                  ))}
                  
                  {selectedService === "その他" && (
                    <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                      <input 
                        type="text" 
                        name="service_other" 
                        required
                        placeholder="サービス名をご記入ください"
                        className={dynamicInputClass}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0f172a]">
                  5. お問い合わせの種別 <span className="text-[#ef4444] ml-2 text-xs font-bold">【必須】</span>
                </label>
                <div className={radioGroupClass}>
                  {[
                    "不具合・エラーのご報告",
                    "ご購入・お支払いに関するご質問",
                    "導入・プロプランに関するご相談",
                    "機能の使い方についてのご質問",
                    "その他"
                  ].map((type) => (
                    <label key={type} className="flex items-center space-x-3 p-2 rounded hover:bg-[#f8fafc] transition-colors cursor-pointer">
                      <input 
                        type="radio" 
                        name="inquiry_type" 
                        value={type}
                        required
                        checked={selectedInquiryType === type}
                        onChange={(e) => setSelectedInquiryType(e.target.value)}
                        className="w-4 h-4 text-[#4f46e5] bg-[#ffffff] border-[#e2e8f0] focus:ring-[#4f46e5]" 
                      />
                      <span className="text-[#334155]">{type}</span>
                    </label>
                  ))}

                  {selectedInquiryType === "その他" && (
                    <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                      <input 
                        type="text" 
                        name="inquiry_type_other" 
                        required
                        placeholder="お問い合わせ種別をご記入ください"
                        className={dynamicInputClass}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0f172a]">
                  6. ご利用の環境 <span className="text-[#94a3b8] ml-2 text-xs font-normal">【任意】（※不具合の場合はお選びください）</span>
                </label>
                <div className={radioGroupClass}>
                  {["Windows", "Mac", "iPhone / iPad", "Android", "その他"].map((env) => (
                    <label key={env} className="flex items-center space-x-3 p-2 rounded hover:bg-[#f8fafc] transition-colors cursor-pointer">
                      <input 
                        type="radio" 
                        name="os" 
                        value={env}
                        checked={selectedOs === env}
                        onChange={(e) => setSelectedOs(e.target.value)}
                        className="w-4 h-4 text-[#4f46e5] bg-[#ffffff] border-[#e2e8f0] focus:ring-[#4f46e5]" 
                      />
                      <span className="text-[#334155]">{env}</span>
                    </label>
                  ))}

                  {selectedOs === "その他" && (
                    <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                      <input 
                        type="text" 
                        name="os_other"
                        placeholder="ご利用のOS等をご記入ください"
                        className={dynamicInputClass}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0f172a]">
                  7. ご利用のブラウザ <span className="text-[#94a3b8] ml-2 text-xs font-normal">【任意】（※不具合の場合はお選びください）</span>
                </label>
                <div className={radioGroupClass}>
                  {["Google Chrome", "Safari", "Microsoft Edge", "Firefox", "その他"].map((browser) => (
                    <label key={browser} className="flex items-center space-x-3 p-2 rounded hover:bg-[#f8fafc] transition-colors cursor-pointer">
                      <input 
                        type="radio" 
                        name="browser" 
                        value={browser}
                        checked={selectedBrowser === browser}
                        onChange={(e) => setSelectedBrowser(e.target.value)}
                        className="w-4 h-4 text-[#4f46e5] bg-[#ffffff] border-[#e2e8f0] focus:ring-[#4f46e5]" 
                      />
                      <span className="text-[#334155]">{browser}</span>
                    </label>
                  ))}

                  {selectedBrowser === "その他" && (
                    <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                      <input 
                        type="text" 
                        name="browser_other"
                        placeholder="ご利用のブラウザをご記入ください"
                        className={dynamicInputClass}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0f172a]">
                  8. ご購入時のメールアドレス <span className="text-[#94a3b8] ml-2 text-xs font-normal">【任意】（※既にツールをご購入済みの方）</span>
                </label>
                <input 
                  type="email" 
                  name="purchase_email" 
                  className={inputClass}
                  placeholder="購入時に使用したメールアドレス"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#0f172a]">
                  9. 具体的なお問い合わせ内容 <span className="text-[#ef4444] ml-2 text-xs font-bold">【必須】</span>
                </label>
                <textarea 
                  name="message" 
                  required
                  rows={6}
                  className={`${inputClass} resize-y`}
                  placeholder="【記入例】&#13;&#10;・エラーが起きたタイミング：ファイルをアップロードした瞬間&#13;&#10;・起きた現象：〇〇というエラーメッセージが出た&#13;&#10;※不具合以外の場合はご自由にご記入ください。"
                ></textarea>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "送信準備中..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      送信する
                    </>
                  )}
                </button>
                <p className="text-center text-[#64748b] text-xs mt-4">
                  ※現在、送信機能はセットアップ中です。
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
