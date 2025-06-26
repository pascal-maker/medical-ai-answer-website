import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Clock, 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  CheckCircle,
  Zap,
  BarChart3,
  Brain
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              🎯 Prepare for Medical Entrance Exams
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Master Your Medical
              <span className="text-primary"> Entrance Exam</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Practice with thousands of real exam questions, get detailed explanations, 
              and track your progress with our adaptive learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/practice">
                  Start Practicing
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for medical entrance exam preparation with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Real Exam Simulation</CardTitle>
                <CardDescription>
                  Practice with timed sessions that replicate the actual exam environment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-success" />
                </div>
                <CardTitle>Adaptive Learning</CardTitle>
                <CardDescription>
                  Our AI adjusts question difficulty based on your performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-info" />
                </div>
                <CardTitle>Detailed Explanations</CardTitle>
                <CardDescription>
                  Get comprehensive explanations for every question with course references
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-warning" />
                </div>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Monitor your improvement with detailed analytics and performance insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Flash Questions</CardTitle>
                <CardDescription>
                  Quick review sessions with spaced repetition for better retention
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-success" />
                </div>
                <CardTitle>Community Features</CardTitle>
                <CardDescription>
                  Discuss questions with peers and compete on leaderboards
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Practice Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Available Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Ace Your Medical Entrance Exam?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who have successfully prepared for their medical entrance exams with our platform.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link href="/signup">
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 