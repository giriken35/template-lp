'use client'

import { ArrowRight, CheckCircle2, Code2, Zap, Layout, Monitor, ChevronDown, Rocket, Building2, Briefcase, Mail } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/5kQ14o3jXaLbeWsedQbo400";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <div className="ambient-bg" />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary mb-8 shadow-[0_0_20px_-3px_rgba(16,185,129,0.3)] backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Next.js 14 App Router 完全対応
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            SaaS開発を最速で開始する<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              モダンUIボイラープレート
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            デザイン調整やコンポーネント分割に悩む必要はもうありません。美しいダッシュボードテンプレートをダウンロードして、数十分であなたのアイデアを形にしましょう。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <a 
              href="#pricing"
              className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]"
            >
              今すぐ手に入れる
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#features"
              className="bg-surface border border-border hover:bg-card text-foreground font-bold py-4 px-8 rounded-xl flex items-center justify-center transition-all"
            >
              機能を見る
            </a>
          </div>

          {/* Dashboard Preview Image */}
          <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-border shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
            <div className="flex h-8 w-full items-center gap-1.5 bg-[#1e1e1e] px-4 border-b border-border/50">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <Image 
              src="/dashboard-preview.png" 
              alt="Dashboard Preview" 
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </header>

      {/* Target Audience / Use Cases */}
      <section id="use-cases" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">こんな方におすすめ</h2>
            <p className="text-muted-foreground">ボイラープレートを活用して、圧倒的な生産性を手に入れましょう。</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">SaaSスタートアップ</h3>
              <p className="text-muted-foreground leading-relaxed">
                MVP（最小限のプロダクト）を最速でローンチしたい起業家や開発者。UI構築の時間をビジネスロジックの開発に回せます。
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">フリーランスエンジニア</h3>
              <p className="text-muted-foreground leading-relaxed">
                受託開発のベースラインとして活用。高品質な管理画面を短納期で納品でき、クライアントの満足度と利益率を最大化します。
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">社内システム担当者</h3>
              <p className="text-muted-foreground leading-relaxed">
                モダンで使いやすい社内向け管理画面・ダッシュボードを素早く立ち上げたい方に最適。内製化の強力な武器になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Tech Stack */}
      <section id="features" className="py-24 px-6 bg-surface/30 border-y border-border/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">最新の技術スタックで<br/>妥協のない開発体験を</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                バックエンドへの依存を一切排除した純粋なフロントエンドコード。あなたの好きなBaaS（Supabase, Firebaseなど）やAPIとシームレスに結合できます。
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Layout, title: "Next.js 14 App Router", desc: "最新のルーティングパラダイムに完全対応。" },
                  { icon: Code2, title: "Tailwind CSS", desc: "ユーティリティファーストで柔軟なスタイリング。" },
                  { icon: Monitor, title: "グラスモーフィズムUI", desc: "商用レベルの洗練されたすりガラス調デザイン。" },
                  { icon: Zap, title: "Recharts & Lucide", desc: "リッチなグラフ描画と美しいアイコン群。" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-card border border-border p-2 rounded-lg text-primary h-fit">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Comparison Table */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-center">開発リソースの比較</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm font-bold text-muted-foreground border-b border-border pb-2">
                  <div>工程</div>
                  <div className="text-center">ゼロから自作</div>
                  <div className="text-center text-primary">本テンプレート</div>
                </div>
                {[
                  { name: "環境構築", self: "2時間", tmpl: "0分" },
                  { name: "レイアウト・CSS設計", self: "15時間", tmpl: "0分" },
                  { name: "コンポーネント分割", self: "10時間", tmpl: "0分" },
                  { name: "グラフ・ダッシュボード", self: "8時間", tmpl: "0分" },
                  { name: "レスポンシブ対応", self: "5時間", tmpl: "0分" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-4 text-sm border-b border-border/50 pb-3">
                    <div className="font-medium">{row.name}</div>
                    <div className="text-center text-muted-foreground">{row.self}</div>
                    <div className="text-center font-bold text-primary">{row.tmpl}</div>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-4 font-bold pt-2">
                  <div>合計時間</div>
                  <div className="text-center text-red-400">約40時間</div>
                  <div className="text-center text-primary text-lg">0時間</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">圧倒的な時間短縮を、この価格で。</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            数十時間の開発コストを数千円でスキップ。ダウンロード後、すぐにあなたのAPIと繋ぎ込むことができます。
          </p>
          
          <div className="glass-card rounded-3xl p-10 max-w-md mx-auto relative overflow-hidden border-primary/30">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-cyan-400" />
            <h3 className="text-2xl font-bold mb-2">買い切りライセンス</h3>
            <div className="text-6xl font-extrabold mb-6 flex justify-center items-end gap-1 text-foreground">
              ¥5,000<span className="text-lg font-normal text-muted-foreground mb-2">/ 買い切り</span>
            </div>
            
            <ul className="text-left space-y-3 mb-8">
              {['商用プロジェクトでの利用OK', '無制限のプロジェクト数', '完全なソースコードの提供', 'バックエンド非依存'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href={STRIPE_PAYMENT_LINK}
              className="block w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg text-lg mb-4"
            >
              テンプレートを購入する
            </a>
            <p className="text-xs text-muted-foreground">
              ※クリックするとStripeの安全な決済ページに移動します。<br/>
              決済完了後、すぐにZIPファイルがダウンロードできます。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-surface/30 border-t border-border/50 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">よくある質問</h2>
          <div className="space-y-4">
            <FaqItem 
              q="複数のプロジェクトで使い回しても良いですか？"
              a="はい、可能です。一度ご購入いただければ、ご自身の関わる複数のプロジェクト（商用・非商用問わず）で無制限にご利用いただけます。"
            />
            <FaqItem 
              q="バックエンド（DBや認証）は含まれていますか？"
              a="いいえ、本テンプレートは「フロントエンドUI」に特化しています。特定のバックエンド技術に依存していないため、SupabaseやFirebase、自社製APIなど、お好きなバックエンドと柔軟に組み合わせてお使いいただけます。"
            />
            <FaqItem 
              q="返金は可能ですか？"
              a="デジタルコンテンツという商品の性質上、購入後のキャンセルや返金はお受けしておりません。あらかじめご了承ください。"
            />
            <FaqItem 
              q="購入後、どのようにソースコードを受け取れますか？"
              a="Stripeでの決済完了後、そのままソースコード一式が入ったZIPファイルのダウンロードページ（Google Drive等）へ自動的にリダイレクトされます。"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 relative z-10 border-t border-border/50">
        <div className="max-w-2xl mx-auto glass-card rounded-3xl p-8 sm:p-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-cyan-500 text-white shadow-lg">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-muted-foreground mb-8">
            法人契約のご相談や、テンプレートに関するご不明点がございましたら、お気軽にお問い合わせください。
          </p>
          <Link 
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-card border border-border hover:border-primary/50 text-foreground font-bold py-4 px-8 rounded-xl transition-all gap-2"
          >
            お問い合わせフォームを開く
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 text-center text-muted-foreground text-sm relative z-10 bg-background">
        <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-4">
          <a href="https://azorb-site.vercel.app/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">利用規約</a>
          <a href="https://azorb-site.vercel.app/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">プライバシーポリシー</a>
          <a href="https://azorb-site.vercel.app/legal" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">特定商取引法に基づく表記</a>
          <Link href="/contact" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">お問い合わせ</Link>
        </div>
        <p>© 2026 Azorb. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FaqItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-border bg-card rounded-xl overflow-hidden transition-all duration-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-bold text-foreground hover:bg-surface/50 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`px-5 text-muted-foreground leading-relaxed overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {a}
      </div>
    </div>
  )
}

function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
