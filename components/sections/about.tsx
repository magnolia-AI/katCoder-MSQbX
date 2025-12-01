import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24 bg-muted/50">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I have been working as a developer for over 5 years, specializing in modern web technologies. 
            My journey began with a curiosity for how things work on the internet, which quickly turned into a passion for coding.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            When I'm not coding, you can find me hiking, reading about space exploration, or experimenting with new cooking recipes.
            I believe in continuous learning and staying updated with the latest industry trends.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 bg-muted">
             {/* Placeholder for user image */}
             <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-6xl">👋</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

