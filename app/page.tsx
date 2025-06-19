"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Brain,
  TrendingUp,
  Shield,
  MessageCircle,
  BarChart3,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Building2,
  Menu,
  X,
} from "lucide-react"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("お問い合わせありがとうございます。担当者より連絡いたします。")
    setEmail("")
    setMessage("")
    setIsSubmitting(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">WorkWell AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              機能
            </button>
            <button
              onClick={() => scrollToSection("cases")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              事例
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              仕組み
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              お問い合わせ
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Desktop CTA Button */}
          <Button className="hidden md:block bg-blue-600 hover:bg-blue-700">無料相談を予約</Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                機能
              </button>
              <button
                onClick={() => scrollToSection("cases")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                事例
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                仕組み
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors"
              >
                お問い合わせ
              </button>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">無料相談を予約</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">AI × 人間関係 × 人的資本</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            働くことが<span className="text-blue-600">青春</span>となる
            <br />
            社会を実現する
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            職場の人間関係や文化による精神的苦痛を経験し、
            <br />
            退職や自殺に追い込まれる人を一人でも減らすために。
            <br />
            AIが職場のメンタルヘルスを支援します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              onClick={() => scrollToSection("how-it-works")}
            >
              無料デモを見る
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3"
              onClick={() => scrollToSection("contact")}
            >
              資料をダウンロード
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">深刻化する職場のメンタルヘルス問題</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              日本の職場では、人間関係や労働環境を理由とした精神的な問題が深刻化しています
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-red-600">年間約2万人</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">職場問題を理由とした自殺者数（厚生労働省調査）</p>
              </CardContent>
            </Card>
            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-600">約60%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">人間関係を理由とした離職率（若年層）</p>
              </CardContent>
            </Card>
            <Card className="text-center border-yellow-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-600">約400万人</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">うつ病・不安障害の患者数（推定）</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">WorkWell AIが提供する解決策</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            AIと人間の専門知識を組み合わせ、職場の人間関係を改善し、
            <br />
            従業員一人ひとりが輝ける環境を創造します
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Brain className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI分析エンジン</h3>
              <p className="opacity-90">
                職場の人間関係やコミュニケーションパターンをAIが分析し、潜在的な問題を早期発見
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">リアルタイム支援</h3>
              <p className="opacity-90">24時間365日、従業員の相談に対応し、適切なアドバイスと支援を提供</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">予防的介入</h3>
              <p className="opacity-90">問題が深刻化する前に介入し、職場環境の改善と従業員の健康を守る</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">主な機能</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              科学的根拠に基づいた機能で、職場のメンタルヘルスを包括的にサポート
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>感情分析ダッシュボード</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  チーム全体の感情状態を可視化し、ストレスレベルや満足度をリアルタイムで把握
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <MessageCircle className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>AIカウンセラー</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  匿名で相談できるAIカウンセラーが、24時間いつでも従業員の悩みに寄り添います
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Users className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>人間関係マッピング</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">職場内の人間関係を可視化し、コミュニケーションの改善点を特定</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Shield className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>早期警告システム</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">メンタルヘルスの悪化を予測し、管理者に適切なタイミングで介入を促します</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Brain className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>パーソナライズド支援</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">個人の性格や状況に合わせたカスタマイズされたメンタルヘルス支援を提供</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle>改善効果測定</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">施策の効果を定量的に測定し、継続的な職場環境の改善をサポート</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">導入事例</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">実際にWorkWell AIを導入した企業での成果をご紹介します</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>A社（IT企業・従業員300名）</CardTitle>
                    <CardDescription>システム開発会社</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">導入前の課題</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• 長時間労働による精神的負担</li>
                      <li>• チーム間のコミュニケーション不足</li>
                      <li>• 年間離職率25%（業界平均15%）</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">導入後の成果</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 離職率が25%→8%に改善</li>
                      <li>• 従業員満足度が40%向上</li>
                      <li>• メンタルヘルス休職者が70%減少</li>
                    </ul>
                  </div>
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                    "AIが早期に問題を発見してくれるおかげで、深刻化する前に対処できるようになりました。従業員の笑顔が増えたのが何より嬉しいです。"
                    <footer className="text-sm mt-2">- 人事部長 田中様</footer>
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle>B社（製造業・従業員150名）</CardTitle>
                    <CardDescription>自動車部品製造</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">導入前の課題</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• 世代間のコミュニケーション断絶</li>
                      <li>• パワーハラスメントの潜在化</li>
                      <li>• 若手社員の早期離職</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">導入後の成果</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• ハラスメント報告件数が80%減少</li>
                      <li>• 若手社員の定着率が90%に向上</li>
                      <li>• チーム間の協力度が60%改善</li>
                    </ul>
                  </div>
                  <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">
                    "匿名で相談できる環境ができたことで、これまで見えなかった問題が浮き彫りになりました。今では職場の雰囲気が劇的に改善しています。"
                    <footer className="text-sm mt-2">- 工場長 佐藤様</footer>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">WorkWell AIの仕組み</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">3つのステップで職場のメンタルヘルスを改善します</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">データ収集・分析</h3>
                <p className="text-gray-600">
                  従業員のコミュニケーションパターンや感情状態をAIが分析し、職場の健康状態を把握
                </p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">早期発見・介入</h3>
                <p className="text-gray-600">
                  潜在的な問題を早期に発見し、適切なタイミングで管理者や専門家による介入を実施
                </p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">継続的改善</h3>
                <p className="text-gray-600">
                  効果を測定し、データに基づいて職場環境を継続的に改善していくサイクルを構築
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "導入してから職場の雰囲気が明らかに良くなりました。従業員同士のコミュニケーションが活発になり、生産性も向上しています。"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600">山田</span>
                  </div>
                  <div>
                    <p className="font-semibold">山田 太郎</p>
                    <p className="text-sm text-gray-500">C社 代表取締役</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "AIカウンセラーのおかげで、一人で悩まずに済むようになりました。匿名で相談できるので、安心して本音を話せます。"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">鈴木</span>
                  </div>
                  <div>
                    <p className="font-semibold">鈴木 花子</p>
                    <p className="text-sm text-gray-500">D社 営業部</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "データに基づいた改善提案が的確で、人事施策の効果が目に見えて分かるようになりました。投資対効果も十分です。"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-purple-600">田中</span>
                  </div>
                  <div>
                    <p className="font-semibold">田中 一郎</p>
                    <p className="text-sm text-gray-500">E社 人事部長</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">今すぐ始めませんか？</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            あなたの職場も「働くことが青春となる」環境に変えていきましょう。
            <br />
            まずは無料相談から始めてください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => scrollToSection("contact")}
            >
              無料相談を予約する
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white hover:bg-white/10 text-lg px-8 py-3 text-slate-500"
              onClick={() => scrollToSection("contact")}
            >
              資料をダウンロード
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
              <p className="text-gray-600">ご質問やご相談がございましたら、お気軽にお問い合わせください</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">お問い合わせフォーム</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ内容 *
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="ご質問やご相談内容をお書きください"
                      rows={5}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                    {isSubmitting ? "送信中..." : "送信する"}
                  </Button>
                </form>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">その他のお問い合わせ方法</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">メール</p>
                      <p className="text-gray-600">contact@workwell-ai.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">電話</p>
                      <p className="text-gray-600">03-1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">住所</p>
                      <p className="text-gray-600">東京都渋谷区〇〇 1-2-3</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">緊急時のサポート</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    もし今すぐ誰かと話したい場合は、以下の相談窓口もご利用ください：
                  </p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• いのちの電話: 0570-783-556</li>
                    <li>• こころの健康相談統一ダイヤル: 0570-064-556</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">WorkWell AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                働くことが青春となる社会を実現するため、AIで職場のメンタルヘルスを支援します。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-white transition-colors text-left"
                  >
                    感情分析
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-white transition-colors text-left"
                  >
                    AIカウンセラー
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-white transition-colors text-left"
                  >
                    早期警告システム
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-white transition-colors text-left"
                  >
                    改善効果測定
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors text-left"
                  >
                    ヘルプセンター
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors text-left"
                  >
                    導入支援
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors text-left"
                  >
                    技術サポート
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors text-left"
                  >
                    研修・セミナー
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button className="hover:text-white transition-colors text-left">会社概要</button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors text-left">プライバシーポリシー</button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors text-left">利用規約</button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors text-left"
                  >
                    お問い合わせ
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 WorkWell AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
