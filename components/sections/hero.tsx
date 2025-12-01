import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] mx-auto px-4 py-24 space-y-8 text-center md:py-32">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Building Digital <br className="hidden sm:inline" />
          <span className="text-primary">Experiences</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          I'm a Full Stack Developer passionate about crafting accessible, pixel-perfect user interfaces that blend form and function.
        </p>
      </div>
      <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
        <Button asChild size="lg" className="h-11 px-8">
          <Link href="#projects">
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-11 px-8">
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  )
}

