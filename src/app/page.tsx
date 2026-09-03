import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Replace this with your actual Stripe Payment Link
  const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/5kQ14o3jXaLbeWsedQbo400";

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            SaaS開発を最速でスタートさせる<br className="hidden md:block" />
            <span className="text-primary">モダンUIボイラープレート</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Next.js (App Router) と Tailwind CSS で構築された、商用利用可能な美しいダッシュボードテンプレート。フロントエンドのUI実装にかかる数十時間を即座にカットします。
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href={STRIPE_PAYMENT_LINK}
              className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-primary/30"
            >
              今すぐ購入する
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">含まれる機能・コンポーネント</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Next.js 14 (App Router) 完全対応",
            "Tailwind CSS による美しいスタイリング",
            "レスポンシブ対応のサイドバー＆ヘッダー",
            "Rechartsによるリッチなグラフ描画 (3種類)",
            "グラスモーフィズムを取り入れたモダンデザイン",
            "外部画像非依存 (Lucide Reactアイコンで完結)",
            "クリーンなコードベース（バックエンド非依存）",
            "商用利用OK・改変自由",
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
              <p className="text-slate-700 font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">圧倒的な時間短縮を、この価格で。</h2>
          <p className="text-slate-400 mb-12">
            デザインの調整やコンポーネントの分割に悩む必要はもうありません。ダウンロードしてすぐにあなたのAPIと繋ぎ込むことができます。
          </p>
          
          <div className="bg-white text-slate-900 rounded-3xl p-10 max-w-md mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">買い切りライセンス</h3>
            <div className="text-5xl font-extrabold mb-6 flex justify-center items-end gap-1">
              ¥5,000<span className="text-lg font-normal text-slate-500 mb-1">/ 買い切り</span>
            </div>
            
            <Link 
              href={STRIPE_PAYMENT_LINK}
              className="block w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-colors text-lg mb-4"
            >
              テンプレートを購入する
            </Link>
            <p className="text-sm text-slate-500">
              ※クリックするとStripeの安全な決済ページに移動します。<br/>
              決済完了後、すぐにZIPファイルがダウンロードできます。
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-slate-200 text-center text-slate-500 text-sm">
        <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-4">
          <a href="https://azorb-site.vercel.app/terms" className="hover:text-primary transition-colors">利用規約</a>
          <a href="https://azorb-site.vercel.app/privacy" className="hover:text-primary transition-colors">プライバシーポリシー</a>
          <a href="https://azorb-site.vercel.app/legal" className="hover:text-primary transition-colors">特定商取引法に基づく表記</a>
          <a href="https://azorb-site.vercel.app/#faq" className="hover:text-primary transition-colors">よくある質問 (FAQ)</a>
          <a href="mailto:info@azorb.co" className="hover:text-primary transition-colors">お問い合わせ</a>
        </div>
        <p>© 2026 Azorb. All rights reserved.</p>
      </footer>
    </div>
  );
}
