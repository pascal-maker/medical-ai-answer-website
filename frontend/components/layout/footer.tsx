import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Heart
} from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">MedicalAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Modern platform for medical entrance exam preparation with adaptive learning and detailed explanations.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://twitter.com">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://linkedin.com">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="mailto:contact@medicalai.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/practice" className="hover:text-foreground transition-colors">
                  Practice Questions
                </Link>
              </li>
              <li>
                <Link href="/exams" className="hover:text-foreground transition-colors">
                  Full Exams
                </Link>
              </li>
              <li>
                <Link href="/flash" className="hover:text-foreground transition-colors">
                  Flash Cards
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-foreground transition-colors">
                  Progress Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/help" className="hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-foreground transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 MedicalAI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for medical students
          </p>
        </div>
      </div>
    </footer>
  )
} 