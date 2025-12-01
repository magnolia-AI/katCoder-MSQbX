import { Badge } from '@/components/ui/badge'

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 
  'Tailwind CSS', 'PostgreSQL', 'GraphQL', 'Docker',
  'AWS', 'Git', 'Figma', 'CI/CD'
]

export function Skills() {
  return (
    <section id="skills" className="bg-muted/50 py-16 md:py-24">
       <div className="container mx-auto px-4 text-center">
         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Skills & Technologies</h2>
         <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
           {skills.map((skill) => (
             <Badge key={skill} variant="secondary" className="text-lg px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
               {skill}
             </Badge>
           ))}
         </div>
       </div>
    </section>
  )
}

