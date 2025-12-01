import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured shopping platform with cart, checkout, and admin dashboard functionality.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    image: '', // Placeholder
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaborative task manager with drag-and-drop kanban boards.',
    tags: ['React', 'Firebase', 'Redux', 'DnD'],
    image: '', // Placeholder
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful localized weather application using OpenWeatherMap API and geolocation.',
    tags: ['TypeScript', 'API Integration', 'Chart.js'],
    image: '', // Placeholder
    demoUrl: '#',
    repoUrl: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
        <p className="text-muted-foreground text-center max-w-[600px]">
          Here are some of the recent projects I've worked on. Each represents a unique challenge and solution.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-muted w-full relative group">
              {/* Box for image placeholder */}
               <div className="w-full h-full flex items-center justify-center bg-secondary text-secondary-foreground/50">
                  <span className="text-4xl">🖼️</span>
               </div>
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 w-full pt-4">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

